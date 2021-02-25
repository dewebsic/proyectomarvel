export interface Character {
  "id": number;
  "name": string,
  "description": string,
  "modified": Date;
  "resourceURI": string,
  "urls": [
      {
        "type":string,
        "url": string,
      }
    ],
  "thumbnail": {
    "path": string,
    "extension": string
  },
  "comics": {
    "available": string,
    "returned": number,
    "collectionURI": number,
    "items": [
      {
        "resourceURI": number,
        "name": number
      }
    ]
  },
  "stories": {
    "available": number,
    "returned":number,
    "collectionURI": number,
    "items": [
      {
        "resourceURI": number,
        "name": number,
        "type": number
      }
    ]
  },
  "events": {
    "available": number,
    "returned": number,
    "collectionURI": number,
    "items": [
      {
        "resourceURI": number,
        "name": number
      }
    ]
  },
  "series": {
    "available": number,
    "returned": number,
    "collectionURI": number,
    "items": [
      {
        "resourceURI": number,
        "name": number
      }
    ]
  }
}

