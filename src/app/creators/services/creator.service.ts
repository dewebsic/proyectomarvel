import { Injectable } from '@angular/core';
import {Observable} from 'rxjs';
import {environment} from '../../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import {AllCreators} from '../interfaces/all-creators';

@Injectable({
  providedIn: 'root'
})
export class CreatorService {

  public creators: Observable<AllCreators[]>;
  private PUBLIC_KEY = environment.public_key;
  private HASH = environment.hash;
  private URL_API: string = environment.api_url

  constructor(private httpClient: HttpClient) { }

  public getAllCreators(): Observable<AllCreators[]>{
    return this.httpClient.get<AllCreators[]>(this.URL_API+
      `creators?ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`).pipe(map((data: any) => data.data.results));
  }

  public getSearchCreators(search: string): Observable<AllCreators[] | null>{
    return this.httpClient.get<AllCreators[]>(this.URL_API+
      `creators?&ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}&nameStartsWith=${search}`).pipe(map((data: any) => data.data.results));
  }

  public getCreator(id: number ): Observable<AllCreators[] | null>{
    return this.httpClient.get<AllCreators[]>(this.URL_API+
      `creators/${id}?&ts=1&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`).pipe(map((data: any) => data.data.results));
  }
}
