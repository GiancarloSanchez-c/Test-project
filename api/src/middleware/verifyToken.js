const jwt = require('jsonwebtoken');
const { SECRET } = require('../config');

const verifyToken = async (req, res, next) => {
  const token = await req.headers['x-access-token'];
  if (!token) return res.status(401).send({
    auth: false, message: 'No token provided.'
  });
  const decoded = jwt.verify(token,SECRET);
  req.userId = decoded.id;
  next();
}
module.exports = verifyToken; 