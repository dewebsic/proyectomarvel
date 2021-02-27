import {Creator} from './creator';

export interface AllCreators {
  "code": number,
  "status": "string",
  "data": {
    "results": Creator[]
  }
}
