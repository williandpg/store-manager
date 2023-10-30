const httpMap = {
  SUCCESS: 200,
  CREATED: 201,
  BAD_REQUEST: 400,
  UNAUTHORIZED: 401,
  NOT_FOUND: 404,
  CONFLICT: 409,
  SERVER_ERROR: 500,
};

const httpStatus = (status) => httpMap[status] || 500;

module.exports = {
  httpStatus,
};