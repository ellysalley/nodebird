const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');

const db = require('../models');
const router = express.Router();

router.get('/', (req, res) => {

});

// signup /api/user 
router.post('/', async (req, res, next) => { 
  try {
    const exUser = await db.User.findOne({
      where: {
        userId: req.body.userId,
      },
    });
    if (exUser) {
      return res.status(403).send('already taken id');
    }
    const hashedPassword = await bcrypt.hash(req.body.password, 12);
    const newUser = await db.User.create({
      username: req.body.username,
      userId: req.body.userId,
      password: hashedPassword,
    });
    console.log(newUser);
    return res.status(200).json(newUser);
  } catch (e) {
    console.error(e);
  }
});
router.get('/:id', (req, res) => {

});
router.post('/logout', (req, res) => {

});

router.post('/login', (req, res) => {
  passport.authenticate('local', (err, user, info) => {
    if (err) {
      console.error(err);
      return next(err);
    }
    if (info) {
      return res.status(401).send(info.reason);
    }
    return req.login(user, (loginErr) => {
      if (loginErr) {
        return next(loginErr);
      }
      const filteredUser = Object.assign({}, user);
      return res.json(filteredUser);
    });
  });
});

router.get('/:id/follow', (req, res) => {

});
router.post('/:id/follow', (req, res) => {
  
});
router.delete('/:id/follow', (req, res) => {
  
});
router.delete('/:id/follower', (req, res) => {
  
})

module.exports = router;