# Sac State CSC 131 Project - REST API Routes Break Down

All the routes use the root url https://ludus-db-dot-csc131.appspot.com/.

## Nominations

In our team's database, a document can be categorized as a nomination. A nomination document is composed of four fields: category, entity, winner, and year. Each field has a specific data type. Below defines each field's category in key map form.

```json
{
  "category": string,
  "entity": string,
  "winner": boolean,
  "year": number
}
```

### GET `/nominations/`

The nominations route, defined by using `/nominations/` right after the root url, provides a collection of resources. The structure of the data is in the form of a key mapped to an array of key map objects. The data structure will look like the example below.

```json
{
  "nominationList": []
}
```

Each index of the array has the key map structure of the following.

```json
{
  "nominationId": String,
  "info": {
    "category": string,
    "entity": string,
    "winner": boolean,
    "year": number
  }
}
```

Using the `/nominations/` route in a GET request will provide a `200` if successful and all nominations in the database.

### GET `/nominations/{ document ID }`

By using the `/nominations/` route with a singe prameter you can get a singlton document. The prameter must be the document name anything else will provide a `404` and an error messege in json. The error looks like the example below.

```json
{
  "message": "Document dose not exsist"
}
```

### POST `/nominations/`

By using the `/nomination/` route you can also add documents to the database. Before you make a POST command, you do need to pass data over. The data has to be in JSON in the format below.

```json
{
  "category": string,
  "entity": string,
  "winner": boolean,
  "year": number
}
```

These four fields: category, entity, winner, and year are required. Giving less than these four will give a `404` error while providing more won't since we are only looking for those four fields. On a successful call you vill recive a `200` and the json data below.

```json
{
  "message": "nomination added",
  "info": {
    "category": string,
    "entity": string,
    "winner": boolean,
    "year": number
  }
}
```

### DELETE `/nominations/`

### DELETE `/nominations/{ document ID }`

## Nominations given category

### GET, POST, DELETE `/nominations/category/`

### GET `/nominations/category/{ category Field }`

## Nominations given entity

### GET, POST, DELETE `/nominations/entity/`

### GET `/nominations/entity/{ entity Field }`

## Nominations given winner

### GET, POST, DELETE `/nominations/winner/`

### GET `/nominations/winner/{ winner Field }`

## Nominations given year

### GET, POST, DELETE `/nominations/year/`

### GET `/nominations/year/{ year Field }`
