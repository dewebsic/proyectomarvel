import {Character} from './character';

export interface AllCharacters{
  "code": number,
  "status": string,
  "results": Character[],
  "etag": string

}
