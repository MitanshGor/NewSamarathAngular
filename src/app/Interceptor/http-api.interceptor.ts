import { Observable } from 'rxjs';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';
import { Injectable } from '@angular/core';



export class HttpApiInterceptor implements HttpInterceptor {


  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {


    req = req.clone({
      headers: req.headers
      .set('Access-Control-Allow-Origin', '*')
      .set('Access-Control-Allow-Credentials', 'true')
      .set('Access-Control-Allow-Methods', 'GET, HEAD, POST, PUT, DELETE, CONNECT, OPTIONS, TRACE, PATCH')
      .set('Access-Control-Max-Age', '3600')
      .set('Access-Control-Allow-Headers', '*')

  });



    return next.handle(req);
  }
}
