class ErrorHandler {
  message: string;
  status: number;
  generatedAt: number;

  constructor(message: string, status: number) {
    this.message = message;
    this.status = status;
    this.generatedAt = Date.now();
  }

  static badRequest(message: string = "Bad request!") {
    return new ErrorHandler(message, 400);
  }

  static notFound(message: string = "Not found!") {
    return new ErrorHandler(message, 404);
  }

  static unAuthorised(message: string = "Un authorised!") {
    return new ErrorHandler(message, 401);
  }
}

export default ErrorHandler;
