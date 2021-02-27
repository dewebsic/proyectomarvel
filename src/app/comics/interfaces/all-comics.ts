import {Comic} from './comic';

export interface AllComics {
  "code": number,
  "status": string,
  "data": {
    "results": Comic[]
  },
  "etag": "string"

}
