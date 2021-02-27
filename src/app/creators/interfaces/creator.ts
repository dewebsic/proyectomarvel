export interface Creator {
  "id": number,
  "firstName":  string,
  "middleName":  string,
  "lastName":  string,
  "suffix":  string,
  "fullName":  string,
  "modified": Date,
  "resourceURI": string,
  "urls": Url[],
  "thumbnail": {
    "path": string,
    "extension": string
  },
  "series": {
    "available": number,
    "returned": number,
    "collectionURI": string,
    "items": Item[]
  },
  "stories": {
    "available": number,
    "returned": number,
    "collectionURI": string,
    "items": Item[]
  },
  "comics": {
    "available": number,
    "returned": number,
    "collectionURI": string,
    "items": Item[]
  },
  "events": {
    "available": number,
    "returned": number,
    "collectionURI": string,
    "items": Item[]
  }

}

export interface Item {
  "resourceURI": string,
  "name": string,
  "type"?: string
}

export interface Url{
  "type": string,
  "url": string
}
