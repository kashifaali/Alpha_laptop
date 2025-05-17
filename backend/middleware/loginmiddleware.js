export const isLoggedin = (req, res, next) => {
  if (!req.isAuthenticated()) {
    return res.status(401).json({ message: "Please login first" });
  }
  next();
};
