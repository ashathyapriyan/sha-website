import {
  ArgumentsHost,
  Catch,
  ExceptionFilter,
  HttpException,
  HttpStatus,
} from '@nestjs/common';
import { Request, Response } from 'express';

@Catch()
export class HttpExceptionFilter implements ExceptionFilter {
  catch(exception: unknown, host: ArgumentsHost) {
    const ctx = host.switchToHttp();
    const response = ctx.getResponse<Response>();
    const request = ctx.getRequest<Request>();

    const status =
      exception instanceof HttpException
        ? exception.getStatus()
        : HttpStatus.INTERNAL_SERVER_ERROR;

    const message =
      exception instanceof HttpException
        ? exception.message
        : 'Something went wrong';

    // API routes get JSON, page routes get the 404/error view.
    if (request.path.startsWith('/api')) {
      response.status(status).json({
        statusCode: status,
        message,
        path: request.url,
      });
      return;
    }

    if (status === HttpStatus.NOT_FOUND) {
      response.status(status).render('404', {
        title: 'Not Found',
        description: 'Page not found',
        path: request.url,
      });
      return;
    }

    response.status(status).render('404', {
      title: 'Error',
      description: message,
      path: request.url,
      errorMessage: message,
    });
  }
}
