export interface Comic {
  "id": number,
  "digitalId": number,
  "title": string,
  "issueNumber": number,
  "variantDescription": string,
  "description": string,
  "modified": Date,
  "isbn": string,
  "upc": string,
  "diamondCode": string,
  "ean": string,
  "issn": string,
  "format": string,
  "pageCount": string,
  "textObjects": [
    {
      "type": "string",
      "language": "string",
      "text": "string"
    }
  ],
  "resourceURI": "string",
  "urls": Url[],
  "series": {
    "resourceURI": "string",
    "name": "string"
  },
  "variants": Item[],
  "collections": Collection[]
  "collectedIssues": Collection[],
  "dates": DateComic[],
  "prices": [
    {
      "type": "string",
      "price": "float"
    }
  ],
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
    "items": Item[]
  },
  "stories": {
    "available": "int",
    "returned": "int",
    "collectionURI": "string",
    "items": Item[]
  },
  "events": {
    "available": "int",
    "returned": "int",
    "collectionURI": "string",
    "items": Item[]
  }
}

export interface Collection {
  "resourceURI": string,
  "name": string
}

export interface Item {
  "resourceURI": string,
  "name": string,
  "role"?: string
}

export interface Url {
  "type": string,
  "url": string
}

export interface DateComic{
  "type": string,
  "date": Date
}
