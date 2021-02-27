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

  private PUBLIC_KEY = environment.public_key;
  private HASH = environment.hash;
  private URL_API: string = environment.api_url

  constructor(private httpClient: HttpClient) { }

  public getAllCharacters(): Observable<AllCharacters[]>{
    return this.httpClient.get<AllCharacters[]>(this.URL_API+
      `characters?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`).pipe(map((data: any) => data.data.results));
  }

  public getSearchCharacters(search: string): Observable<AllCharacters[] | null>{
   return this.httpClient.get<AllCharacters[]>(this.URL_API+
      `characters?&ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}&nameStartsWith=${search}`).pipe(map((data: any) => data.data.results));
  }

  public getCharacter(id: number ): Observable<AllCharacters[] | null>{
    return this.httpClient.get<AllCharacters[]>(this.URL_API+
    `characters/${id}?&ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`).pipe(map((data: any) => data.data.results));
  }
}
