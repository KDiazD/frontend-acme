import {Injectable} from '@angular/core';
import {HttpErrorResponse, HttpEvent, HttpHandler, HttpInterceptor, HttpRequest} from '@angular/common/http';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from "rxjs/operators";

@Injectable()
export class HttpErrorInterceptor implements HttpInterceptor {
   constructor() {}
   intercept(request: HttpRequest<string>, next: HttpHandler): Observable<HttpEvent<unknown>> {

            request = request.clone({
                setHeaders:  {
                    'Accept': '*/*',
                    'Access-Control-Allow-Origin': '*',
                    'Access-Control-Allow-Methods': 'POST, GET, OPTIONS, DELETE',
                    'Access-Control-Max-Age': '3600',
                    'Access-Control-Allow-Headers': 'Origin, X-Requested-With, Content-Range, Content-Disposition, Content-Type, Authorization',
                }
            });

        return next.handle(request)
            .pipe(
                // eslint-disable-next-line @typescript-eslint/no-explicit-any
                map((res: any) => {
                    return res
                }),
                catchError((error: HttpErrorResponse) => {
                    return throwError(error);
                })
            )
    }
}
