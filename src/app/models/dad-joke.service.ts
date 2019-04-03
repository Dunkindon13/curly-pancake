import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DadJokeService {

// Adding a header for Dad Joke api
  /*const httpOptions = {
    headers: new HttpHeaders({
      'Accept':  'application/json'
    })
  };*/

  constructor(private http: HttpClient) {
  }

  getRandomDadJoke(): Observable<any> {
    return this.http.get('https://icanhazdadjoke.com'); // Need to add this.httpOptions but getting error.
  }
}
