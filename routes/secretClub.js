const express = require('express');
const secretClubController = require('../controllers/secretClubController');
const router = express.Router();

router.get('/', secretClubController.secret_club_get);
router.post('/', secretClubController.secret_club_post);

module.exports = router;
