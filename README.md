# ecommerce server-side

Steps to Get Started

1. npm install
2. Add key.json
3. Add .env
4. npm run start

Routes

1. Carts

| Route         | HTTP   | Description               |
|---------------|--------|---------------------------|
| /carts/add    | POST   | add item to carts         |
| /carts/show   | GET    | show all carts            |
| /carts/remove | POST   | remove 1 item from carts  |
| /carts/clear  | DELETE | delete all items in carts |

2. Items

| Route         | HTTP   | Description               |
|---------------|--------|---------------------------|
| /items/show   | GET    | show items                |
| /items/upload | POST   | upload items              |

3. Users

| Route         | HTTP   | Description               |
|---------------|--------|---------------------------|
| /users/signin | POST   | user signin               |
| /users/signup | POST   | user signup               |


