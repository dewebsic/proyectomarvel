import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {environment} from '../../../environments/environment';
import {AllCharacters} from '../interfaces/all-characters';

@Injectable({
  providedIn: 'root'
})
export class CharactersService {

  characters: Observable<AllCharacters[]>;
  private PUBLIC_KEY = environment.public_key;
  private HASH = environment.hash;
  private URL_API: string = environment.api_url

  constructor(private httpClient: HttpClient) { }

  getAllCharacters(): Observable<AllCharacters[]>{
     return this.httpClient.get<AllCharacters[]>(this.URL_API+
      `characters?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`).pipe(map((data: any) => data.data.results));
  }
}
