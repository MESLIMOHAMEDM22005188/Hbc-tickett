const fs = require('fs');
const { Client } = require('ssh2');

const sshConfig = {
  host: '176.144.130.230',
  port: 22,
  username: 'root',
  password: '3fxCRw2gYRGWWeMzgUhg'
};

const filesToUpload = [
  { localPath: 'apphbc.js', remotePath: '/var/www/html/hbcapi/apphbc.js' },
  { localPath: 'db.js', remotePath: '/var/www/html/hbcapi/db.js' },
  { localPath: 'package.json', remotePath: '/var/www/html/hbcapi/package.json' },
  { localPath: 'routes', remotePath: '/var/www/html/hbcapi/routes', isDirectory: true }
  // Ajoutez ici d'autres fichiers ou dossiers à télécharger
];

const conn = new Client();

conn.on('ready', () => {
  console.log('SSH connection established');

  conn.sftp((err, sftp) => {
    if (err) {
      console.error('Error creating SFTP:', err);
      conn.end();
      return;
    }

    console.log('SFTP session established');

    filesToUpload.forEach(({ localPath, remotePath, isDirectory }) => {
      if (isDirectory) {
        uploadDirectory(localPath, remotePath, sftp);
      } else {
        uploadFile(localPath, remotePath, sftp);
      }
    });

    // Une fois que tous les fichiers sont téléchargés, exécutons npm install
    conn.exec('cd /var/www/html/hbcapi && npm install', (err, npmInstallStream) => {
      if (err) {
        console.error('Error executing npm install:', err);
        conn.end();
        return;
      }

      npmInstallStream.on('close', (code, signal) => {
        console.log('npm install finished with code ' + code);
        
        // Après npm install, démarrer l'application avec PM2
        startAppWithPM2(conn);
      }).on('data', (data) => {
        console.log('npm install output:', data.toString());
      });
    });
  });
});

conn.on('error', (err) => {
  console.error('SSH connection error:', err);
  conn.end();
});

conn.on('end', () => {
  console.log('SSH connection ended');
});

console.log('Connecting to server...');
conn.connect(sshConfig);

function uploadFile(localPath, remotePath, sftp) {
  sftp.fastPut(localPath, remotePath, (err) => {
    if (err) {
      console.error(`Error uploading file ${localPath} to ${remotePath}:`, err);
      return;
    }
    console.log(`File ${localPath} uploaded successfully`);
  });
}

function uploadDirectory(localPath, remotePath, sftp) {
  sftp.mkdir(remotePath, (err) => {
    if (err) {
      // Masquer l'erreur de création de répertoire dans la console
      return;
    }

    console.log(`Remote directory ${remotePath} created successfully`);

    fs.readdir(localPath, (err, files) => {
      if (err) {
        console.error('Error reading local directory:', err);
        return;
      }

      files.forEach((file) => {
        const localFilePath = `${localPath}/${file}`;
        const remoteFilePath = `${remotePath}/${file}`;

        fs.stat(localFilePath, (err, stats) => {
          if (err) {
            console.error('Error getting file stats:', err);
            return;
          }

          if (stats.isDirectory()) {
            uploadDirectory(localFilePath, remoteFilePath, sftp);
          } else {
            uploadFile(localFilePath, remoteFilePath, sftp);
          }
        });
      });
    });
  });
}

function startAppWithPM2(conn) {
  conn.exec('pm2 start /var/www/html/hbcapi/apphbc.js --name apphbc', (err, pm2StartStream) => {
    if (err) {
      console.error('Error starting app with PM2:', err);
      conn.end();
      return;
    }

    pm2StartStream.on('close', (code, signal) => {
      console.log('PM2 start finished with code ' + code);
      
      // Après avoir démarré l'application avec PM2, redémarrez-la
      restartAppWithPM2(conn);
    }).on('data', (data) => {
      console.log('PM2 start output:', data.toString());
    });
  });
}

function restartAppWithPM2(conn) {
  conn.exec('pm2 restart apphbc', (err, pm2RestartStream) => {
    if (err) {
      console.error('Error restarting app with PM2:', err);
      conn.end();
      return;
    }

    pm2RestartStream.on('close', (code, signal) => {
      console.log('PM2 restart finished with code ' + code);
      conn.end();
    }).on('data', (data) => {
      console.log('PM2 restart output:', data.toString());
    });
  });
}
