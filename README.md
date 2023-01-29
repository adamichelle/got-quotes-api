# GOT (Game of Thrones) Quotes API
Because it's the greatest series of all time and I couldn't find anything like this when I wanted to build [this](https://adamichelle.github.io/got-quote-generator/)

## Production Host
[Game of Thrones Quote API on Railway](https://got-quotes-api.up.railway.app)

## API Endpoints
### GET /quotes

Returns an array contain all quotes from various characters in the show.

```
{
    "status": "success",
    "data": [
        {
            "id": 1,
            "character": " Ned Stark",
            "quote": "\"The man who passes the sentence should swing the sword.\" "
        },
        {
            "id": 2,
            "character": " Jaime Lannister",
            "quote": "\"The things I do for love.\" "
        },
        ...
        {
            "id": 117,
            "character": " Tyrion Lannister",
            "quote": "Are you afraid? Good. You’re in the great game now. And the great game’s terrifying. The only people who aren’t afraid of failure are madmen like your father. "
        },
        {
            "id": 118,
            "character": " Brienn of Tarth",
            "quote": "The good lords are dead, and the rest are monsters. "
        }
    ]
}
```
The `status` key indicates the response from the API, `data` or `error` shows the data retrieved for successful requests and error gotten for unsiccessful ones respectively.

### Filter by one or more characters
Returns an array of quotes from a character specified if the query is succesful.

#### Sample Query 1
```
https://got-quotes-api.up.railway.app/quotes?character=Tyrion
```

#### Sample Response 1
```
{
    "status": "success",
    "data": [
        {
            "id": 3,
            "quote": "\"I have a tender spot in my heart for cripples, bastards and broken things.\" "
        },
        {
            "id": 6,
            "quote": "\"Never forget what you are. The rest of the world will not. Wear it like armour, and it can never be used to hurt you.\" "
        },
        {
            "id": 8,
            "quote": "\"The day will come when you think you are safe and happy, and your joy will turn to ashes in your mouth.\" "
        },
        {
            "id": 18,
            "quote": "\"That's what I do: I drink and I know things.\" "
        },
        {
            "id": 29,
            "quote": "\"Oh, monster? Perhaps you should speak to me more softly then. Monsters are dangerous and just now Kings are dying like flies.\" "
        },
        {
            "id": 31,
            "quote": "\"I am your son. I have always been your son.\" "
        }
    ]
}
```

#### Sample Query 2
```
https://got-quotes-api.up.railway.app/quotes?character=Tyrion,Lady%20Olenna
```

#### Sample Response 2
```
{
    "status": "success",
    "data": [
        {
            "id": 3,
            "character": " Tyrion",
            "quote": "\"I have a tender spot in my heart for cripples, bastards and broken things.\" "
        },
        {
            "id": 6,
            "character": " Tyrion",
            "quote": "\"Never forget what you are. The rest of the world will not. Wear it like armour, and it can never be used to hurt you.\" "
        },
        {
            "id": 8,
            "character": " Tyrion",
            "quote": "\"The day will come when you think you are safe and happy, and your joy will turn to ashes in your mouth.\" "
        },
        {
            "id": 18,
            "character": " Tyrion",
            "quote": "\"That's what I do: I drink and I know things.\" "
        },
        {
            "id": 29,
            "character": " Tyrion",
            "quote": "\"Oh, monster? Perhaps you should speak to me more softly then. Monsters are dangerous and just now Kings are dying like flies.\" "
        },
        {
            "id": 31,
            "character": " Tyrion",
            "quote": "\"I am your son. I have always been your son.\" "
        },
        {
            "id": 39,
            "character": " Lady Olenna",
            "quote": "\"He really was a c*nt, wasn't he?\" "
        }
    ]
}
```

#### Characters and Suggested Search Parameters
|Character | Suggested Search Query Parameter|
| --- | --- |
|Tyrion | Tyrion|
|Daenerys Targaryen | Daenerys Targaryen|
| | Daenerys|
|Jaime Lannister | Jaime Lannister|
| | Jaime |

### GET /quote
Returns an object containing a single quote.
```
{
    "status": "success",
    "data": {
        "id": 110,
        "character": " Jon Snow",
        "quote": "Some men want whores on the eve of battle, and some want gods. "
    }
}
```

### GET /quotes/:quoteId
Returns an object containing a single quote having the specified id.

#### Sample Query
https://got-quotes-api.up.railway.app/quotes/18
```
{
    "status": "success",
    "data": {
        "id": 18,
        "character": " Tyrion",
        "quote": "\"That's what I do: I drink and I know things.\" "
    }
}
```

## More Information
More information on the endpoints can be found in the [docs](https://gameofthrones-quotes-api.herokuapp.com/api/v1/)
