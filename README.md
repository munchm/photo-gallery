# munchm Photo Gallery

> Project description

## Related Projects

  - https://github.com/munchm/photo-gallery
  - https://github.com/munchm/reviews
  - https://github.com/munchm/Calendar-reservation
  - https://github.com/munchm/people-also-viewed

## Table of Contents

1. [Usage](#Usage)
2. [Requirements](#requirements)
3. [Development](#development)
4. [API](#api)

## Usage

> Some usage instructions

## Requirements

An `nvmrc` file is included if using [nvm](https://github.com/creationix/nvm).

- Node 6.13.0
- etc

## Development

## API


### Get photos for a restaurant
  * GET `/api/restaurants/:id/photos`

**Path Parameters:**
  * `id` restaurant id

**Success Status Code:** `200`

**Returns:** JSON


```json
  [
    {
      "id": "INTEGER",
      "created_at": "DATE",
      "users_id": "INTEGER",
      "restaurant_id":  "INTEGER",
      "photo":   "STRING",
      "comment":  "STRING",
      "rating":   "INTEGER"
    },
    ...
  ]
```

### Add photo
  * POST `/api/restaurants/:id/photos`
  
**Path Parameters:**
  * `id` restaurant id

**Success Status Code:** `201`

**Request Body**: Expects JSON with the following keys.

```json
    {
      "users_id": "INTEGER",
      "restaurant_id":  "INTEGER",
      "photo":   "STRING",
      ["caption":  "STRING"]
    },
```


### Update photo caption
  * PATCH `/api/restaurants/:id/photos/:id`

**Path Parameters:**
  * first `id` restaurant id
  * second `id` photo id

**Success Status Code:** `204`

**Request Body**: Expects JSON with the following keys

```json
    {
      "caption": "STRING"
    }
```

### Update photo rating
  * PATCH `/api/restaurants/:id/photoRatings/:id`

**Path Parameters:**
  * first `id` restaurant id
  * second `id` photo id

**Success Status Code:** `204`

**Request Body**: Expects JSON with the following keys

```json
    {
      "user_id": "INTEGER",
      "helpful": "BOOLEAN"
    }
```

### Delete photo
  * DELETE `/api/restaurants/:id/photos/:id`

**Path Parameters:**
  * first `id` restaurant id
  * second `id` photo id

**Success Status Code:** `204`


### Installing Dependencies

From within the root directory:

```sh
npm install -g webpack
npm install
```

