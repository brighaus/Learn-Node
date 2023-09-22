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
  const store = await (new Store(req.body)).save();
  req.flash('success', `Succesfully created ${store.name}. Please send money!`);
  res.redirect(`/store/${store.slug}`);
};

exports.updateStore = async (req, res) => {
  // find store
  const store = await Store.findOne({ _id: req.params.id })
  res.json(store);
  // update
  // send to store page w. success message
  // req.flash('success', `Succesfully updated ${store.name}. Please send weed!`);
  // res.redirect(`/store/${store.slug}`);
};

exports.getStores = async (req, res) =>{
  const stores = await Store.find();
  res.render('stores', {
    title: 'Stores',
    stores,
  });
}

//exports.editStore
exports.editStore = async(req, res) => {
  // find store by id
  const store = await Store.findOne({_id: req.params.id})
  // confirm user can edit
  // TODO
  // render form
  res.render('editStore', { title: `Edit ${store.name}`, store})
};

// exports.updateStore
