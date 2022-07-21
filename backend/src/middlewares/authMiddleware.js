const jwt = require("jsonwebtoken");

class authMiddleware {
  static authorization = (req, res, next) => {
    const token = req.cookies.accessToken;
    if (!token) {
      return res.sendStatus(401);
    }
    try {
      const data = jwt.verify(token, process.env.JWT_AUTH_SECRET);
      req.usersId = data.id;
      req.usersRole = data.role;
      return next();
    } catch {
      return res.sendStatus(401);
    }
  };
}
module.exports = authMiddleware;
