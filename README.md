# ![Firebase logo][]

### Cloud Functions

Cloud Functions for Firebase is a serverless framework that lets you automatically run backend code in response to events triggered by Firebase features and HTTPS requests. Your JavaScript or TypeScript code is stored in Google's cloud and runs in a managed environment.

[Flutter project]

### First Cloud Function

Run backend code in response to onCreate superheroe in the Realtime Database, changing Huld to Hulk

### Second Cloud Function

Run backend code in response when you create a new superheroe -> urladdHeroe?name=Venom&points=1000&available=true

### Third Cloud Function

Run backend code in response when you create a new superheroe -> urladdHeroe?name=Venom&points=1000&available=true transforming the data that comes from the url to string, double and bool

### Start

1.- firebase login
2.- firebase init -> TypeScript
3.- tsc file.ts -> to compile to JavaScript in local
4.- npm run-script build -> to prepare the project to Firebase compiling to javascript
5.- firebase deploy or firebase deploy --only functions (to allow you in local too)

### Update

![firebase cloudadvise][]

[firebase logo]: http://achoweb.es/wp-content/uploads/2020/06/cloudfunctions.png
[flutter project]: https://github.com/E2517/e2517Flutter
[firebase cloudadvise]: http://achoweb.es/wp-content/uploads/2020/06/googe.png
