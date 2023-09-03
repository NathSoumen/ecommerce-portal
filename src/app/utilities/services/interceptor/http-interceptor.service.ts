import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor() { }
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    // You can modify the request here before it is sent.
    // For example, you can add headers, handle authentication, etc.
    
    // Example: Adding an authorization header
    const modifiedRequest = request.clone({
      setHeaders: {
        Authorization: `Bearer your-token-here`,
      },
    });

    // Pass the modified request to the next interceptor or HttpClient
    return next.handle(modifiedRequest);
  }
}
