export interface Character {
  "id": number;
  "name": string,
  "description": string,
  "modified": Date;
  "resourceURI": string,
  "urls": Url[],
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

export interface ItemCharacter{

  "resourceURI": string,
  "name": string,
  "type"? : string
}

export interface Url{
  "type":string,
  "url": string,
}

