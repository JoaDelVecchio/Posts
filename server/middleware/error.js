const errorHandler = (err, req, res, next) => {
  res
    .status(err.status ? err.status : 500)
    .json({ msg: err.message ? err.message : "Internal Server Error" });
  next();
};

export default errorHandler;
