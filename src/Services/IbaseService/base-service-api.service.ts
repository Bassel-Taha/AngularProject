import {Injectable} from '@angular/core';
import {HttpClient, HttpErrorResponse, HttpHeaders} from "@angular/common/http";
import {catchError, Observable, throwError} from "rxjs";
import {ResponseDTO} from "../../Model/response-dto";

@Injectable({
  providedIn: 'root'
})
export class BaseServiceAPIService {

  private APIURL = 'http://localhost:3000/'
  private httpOptions!: any

  constructor(private _httpClient: HttpClient) {
    this.httpOptions ={
      headers: new HttpHeaders({
        'Content-Type': 'application/json'
      })
    }
  }

  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    // Return an observable with a user-facing error message.
    return throwError(() => new Error('Something bad happened; please try again later.'));
  }


  GetAll(URL: string): Observable<ResponseDTO> {
    return this._httpClient.get
    <ResponseDTO>(`${this.APIURL}${URL}`)
      .pipe(catchError((err, caught) => {
        this.handleError(err);
        return throwError(err)
      }))
  }

  GetByID(URL: string, id: number | string): Observable<ResponseDTO> {
    return this._httpClient.get
    <ResponseDTO>(`${this.APIURL}${URL}/${id}`)
      .pipe(catchError((err, caught) => {
        this.handleError(err);
        return throwError(err)
      }))
  }

  PostObject(URL: string, obj: any) : Observable<ResponseDTO> {
    return this._httpClient.post <ResponseDTO>(`${this.APIURL}${URL}`, JSON.stringify(obj),{headers : new HttpHeaders({'Content-Type' : 'applicatio/json'})} )
      .pipe(catchError((err, caught) => {
        return this.handleError(err);

      }))
  }
}
