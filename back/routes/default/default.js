const express = require('express');
const router = express.Router();
const db = require('../../db');

router.get('/', (req, res) => {
    db.query('SELECT * FROM user LIMIT 1', (error, results, fields) => {
        if (error) {
            console.error("Erreur lors de la récupération de l'utilisateur:", error);
            res.status(500).json({ error: 'Erreur lors de la récupération de l\'utilisateur' });
        } else {
            if (results.length > 0) {
                res.json(results[0]);
            } else {
                res.status(404).json({ error: 'Aucun utilisateur trouvé' });
            }
        }
    });
});

module.exports = router;
