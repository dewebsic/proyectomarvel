import {Url} from '../../shared/interfaces/url';
import {Item} from '../../shared/interfaces/item';

export interface Creator {
  "id": number,
  "firstName":  string,
  "middleName":  string,
  "lastName":  string,
  "suffix":  string,
  "fullName":  string,
  "modified": Date,
  "resourceURI": string,
  "urls": UrlCreator[],
  "thumbnail": {
    "path": string,
    "extension": string
  },
  "series": {
    "available": number,
    "returned": number,
    "collectionURI": string,
    "items": ItemCreator[]
  },
  "stories": {
    "available": number,
    "returned": number,
    "collectionURI": string,
    "items": ItemCreator[]
  },
  "comics": {
    "available": number,
    "returned": number,
    "collectionURI": string,
    "items": ItemCreator[]
  },
  "events": {
    "available": number,
    "returned": number,
    "collectionURI": string,
    "items": ItemCreator[]
  }

}

export interface ItemCreator extends Item{}

export interface UrlCreator extends Url{}
