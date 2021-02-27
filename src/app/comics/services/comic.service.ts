import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {AllComics} from '../interfaces/all-comics';

@Injectable({
  providedIn: 'root'
})
export class ComicService {

  public comics: Observable<AllComics[]>;
  private PUBLIC_KEY = environment.public_key;
  private HASH = environment.hash;
  private URL_API: string = environment.api_url

  constructor(private httpClient: HttpClient) { }

  public getAllComics(): Observable<AllComics[]>{
    return this.httpClient.get<AllComics[]>(this.URL_API+
      `comics?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`).pipe(map((data: any) => data.data.results));
  }

  public getSearchComics(search: string): Observable<AllComics[] | null>{
    return this.httpClient.get<AllComics[]>(this.URL_API+
      `comics?&ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}&titleStartsWith=${search}`).pipe(map((data: any) => data.data.results));
  }

  public getComic(id: number ): Observable<AllComics[] | null>{
    return this.httpClient.get<AllComics[]>(this.URL_API+
      `comics/${id}?&ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`).pipe(map((data: any) => data.data.results));
  }
}
