class ErrorHandler {
  message: string;
  status: number;
  generatedAt: Date;

  constructor(message: string, status: number) {
    this.message = message;
    this.status = status;
    this.generatedAt = new Date(Date.now());
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

  static serverError(message: string = "Internal server error!") {
    return new ErrorHandler(message, 500);
  }

  static forbidden(message: string = "Forbidden!") {
    return new ErrorHandler(message, 403);
  }

  static unProcessebleEntity(message: string = "Unprocesseble entity") {
    return new ErrorHandler(message, 422);
  }
}

export default ErrorHandler;
