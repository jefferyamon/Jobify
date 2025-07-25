import { StatusCodes } from "http-status-codes";

const ErrorHandlerMiddleware = (err, req, res, next) => {
  const statusCode = err.statusCode || StatusCodes.INTERNAL_SERVER_ERROR;
  const msg = err.message || "Something went wrong, please try again later";
  res.status(statusCode).json({ msg });
};

export default ErrorHandlerMiddleware;
