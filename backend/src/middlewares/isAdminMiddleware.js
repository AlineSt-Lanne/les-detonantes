class isAdminMiddleware {
  static isAdmin = (req, res, next) => {
    if (req.usersRole === "ROLE_ADMIN") {
      return next();
    }
    return res.sendStatus(403);
  };
}
module.exports = isAdminMiddleware;
