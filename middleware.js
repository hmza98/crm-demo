module.exports = (req, res, next) => {
  res.header('Content-Range', 'employee 0-10/10')
  res.header('x-total-count', '10')
  next()
}