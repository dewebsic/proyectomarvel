import {Item} from '../../shared/interfaces/item';
import {Url} from '../../shared/interfaces/url';

export interface Comic {
  "id": number,
  "digitalId": number,
  "title": string,
  "issueNumber": number,
  "variantDescription": string,
  "description": string,
  "modified": Date,
  "resourceURI": "string",
  "urls": UrlComic[],
  "series": {
    "resourceURI": "string",
    "name": "string"
  },
  "variants": Item[],
  "collections": Collection[]
  "collectedIssues": Collection[],
  "dates": DateComic[],
  "thumbnail": {
    "path": "string",
    "extension": "string"
  },
  "images": [
    {
      "path": "string",
      "extension": "string"
    }
  ],
  "characters": {
    "available": "int",
    "returned": "int",
    "collectionURI": "string",
    "items": ItemComic[]
  },
  "stories": {
    "available": "int",
    "returned": "int",
    "collectionURI": "string",
    "items": ItemComic[]
  },
  "events": {
    "available": "int",
    "returned": "int",
    "collectionURI": "string",
    "items": ItemComic[]
  }
}

export interface Collection {
  "resourceURI": string,
  "name": string
}

export interface ItemComic extends Item{
  "role"?: string
}

export interface UrlComic extends Url{}

export interface DateComic{
  "type": string,
  "date": Date
}
