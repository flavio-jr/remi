# R E M I

Restaurant front end application

### Running the application

```bash
$ npm install
$ npm run start
```

### Setting the fake server
The application uses the [Json server](https://github.com/typicode/json-server) and stores a fake database in the `db.json` file.

To get it running you only need to run the following script:
```bash
# First, copy the example db
$ cp db.example.json db.json

# Run the server on localhost:3000
$ npm run fake-server

# Run the server on localhost:8080
$ npm run fake-server -- --port 8080
```