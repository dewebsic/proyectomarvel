import {Item} from '../../shared/interfaces/item';
import {Url} from '../../shared/interfaces/url';

export interface Character {
  "id": number;
  "name": string,
  "description": string,
  "urls": UrlCharacter[],
  "thumbnail": {
    "path": string,
    "extension": string
  },
  "comics": {
    "available": number,
    "returned": number,
    "collectionURI": string,
    "items":  ItemCharacter[]
  },
  "stories": {
    "available": number,
    "returned": number,
    "collectionURI": string,
    "items": ItemCharacter[]
  },
  "events": {
    "available": number,
    "returned": number,
    "collectionURI": string,
    "items": ItemCharacter[]
  },
  "series": {
    "available": number,
    "returned": number,
    "collectionURI":string,
    "items": ItemCharacter[]
  }
}

export interface ItemCharacter extends Item{}

export interface UrlCharacter extends Url{}

