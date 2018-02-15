# Expense Tracker

An simple expense tracking app built with React.

<img src="https://www.dropbox.com/s/8w12zrmfmdij9w5/Screenshot%202018-02-14%2016.31.57.png?raw=1" width="400" />

<img src="https://www.dropbox.com/s/7elwx3b0n0jyt4b/Screenshot%202018-02-14%2016.47.06.png?raw=1" width="400" />

## Commands

- `yarn dev-server`: start a dev server on port `8080` and watch for changes
- `yarn build:dev`: development build
- `yarn build:prod`: production build
- `yarn test` (or `yarn test -- --watch`): run tests
- `yart start`: start a Node server (default port `3000`)

## Technologies

- React
- Redux, Redux Thunk
- Babel
- webpack
- Node
- Sass
- Express
- Firebase
- Testing: Jest, Enzyme

## Features

- Firebase data storage
- Firebase Google Authentication

## Setup

The app is set up to expect two db's, one for testing and one for development. Create two files, `.env.test` and `.env.development` with these properties. If deploying to production, such as Heroku, also set Config Variables with these keys and fill in your values:

```
FIREBASE_API_KEY=
FIREBASE_AUTH_DOMAIN=
FIREBASE_DATABASE_URL=
FIREBASE_PROJECT_ID=
FIREBASE_STORAGE_BUCKET=
FIREBASE_MESSAGING_SENDER_ID=
```

### Data Structure

The data structure is based on `users` and child `expenses`:

```javascript
{
  "users" : {
    "wog8rgRFfoW1MTZIBVZ0RzvGguB2" : {
      "expenses" : {
        "-L3kTZttK56JrCjGx16u" : {
          "amount" : 109500,
          "createdAt" : 1516936764010,
          "description" : "Rent",
          "note" : "February"
        }
      }
    }
  }
}
```

### Rules

The rules include auth and basic data validation:

```javascript
{
  "rules": {
    ".read": false,
    ".write": false,
    "users": {
      "$user_id": {
        ".read": "$user_id === auth.uid",
        ".write": "$user_id === auth.uid",
        "expenses": {
          "$expense_id": {
            ".validate": "newData.hasChildren(['description', 'note', 'createdAt', 'amount'])",
            "description": {
              ".validate": "newData.isString() && newData.val().length > 0"

            },
            "note": {
              ".validate": "newData.isString()"
            },
            "createdAt": {
              ".validate": "newData.isNumber()"
            },
            "amount": {
              ".validate": "newData.isNumber()"
            },
            "$other": {
         			".validate": false
        		}
          }
        },
        "$other": {
          ".validate": false
        }
      }
    }
  }
}
```
