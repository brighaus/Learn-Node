exports.noobMiddleware = (req, res, next) => {
  req.extraFn = (arg) => {
    console.log(`N00b mWareFn called with ${arg}`);
  };
  next();
}
exports.homePage = (req, res) => {
  if (req.extraFn) {
    req.extraFn(req.query.name);
  }
  res.render('index');
};
