const mongoose = require('mongoose');
const Store = mongoose.model('Store');

exports.homePage = (req, res) => {
  res.render('index', {
    title: 'welcome home!',
  });
};

exports.addStore = (req, res) => {
  res.render('editStore', {title: 'Add Store'});
};

exports.createStore = async (req, res) => {
  // res.json(req.body);
  const store = new Store(req.body);
  await store.save(); 
  console.log(`store: ${req.body.name} saved`);
  res.redirect('/');
};
