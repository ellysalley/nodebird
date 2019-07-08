const express = require('express');
const bcrypt = require('bcrypt');
const passport = require('passport');

const db = require('../models');
const router = express.Router();

router.get('/', (req, res) => {
  if (!req.user) {
    return res.status(401).send('Login required')
  }
  const user = Object.assign({}, req.user.toJSON());
  delete user.password;
  return res.json(user);
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
      return res.status(403).send('ID is already taken');
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
    return next(e);
  }
});

router.get('/:id', (req, res) => {

});
router.post('/logout', (req, res) => {
  req.logout();
  req.session.destroy();
  res.send('You have been successfully logged out!');
});

router.post('/login', (req, res, next) => {
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
      const filteredUser = Object.assign({}, user.toJSON());
      delete filteredUser.password;
      return res.json(filteredUser);
    });
  })(req, res, next);
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