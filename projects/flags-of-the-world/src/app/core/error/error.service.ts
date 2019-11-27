import { Injectable, ErrorHandler } from "@angular/core";
import { HttpErrorResponse } from "@angular/common/http";

// https://pusher.com/tutorials/error-handling-angular-part-1
@Injectable()
export class ErrorService implements ErrorHandler {
  handleError(error: any): void {
    console.log(error);
    if (error instanceof HttpErrorResponse) {
      console.error(
        `Backend returned code ${error.status}, ` +
          `body was: ${error.error}, ` +
          `message was: ${error.message}`
      );
    } else {
      console.error(`an error occurred: ${error}`);
    }
  }
}

export const ErrorProvider = { provide: ErrorHandler, useClass: ErrorService };
