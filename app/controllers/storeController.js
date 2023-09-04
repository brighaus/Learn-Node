exports.homePage = (req, res) => {
  res.render('index', {
    title: 'welcome home!',
  });
};
