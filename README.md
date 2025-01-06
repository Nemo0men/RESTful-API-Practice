The server will start and listen on port 8080. You can access it by navigating to `http://localhost:8080` in your web browser.

## API Endpoints

### GET /tshirt

- **Description**: Returns a JSON object representing a t-shirt.
- **Response**:
  ```json
  {
    "tshirt": "tshirt",
    "size": "large"
  }
  ```

### Additional Endpoints (Commented Out)

The following endpoints are present in the code but are currently commented out. You can uncomment them to use these routes.

#### GET /family

- **Description**: Returns a JSON object representing a family member.
- **Response**:
  ```json
  {
    "name": "Han Lim",
    "age": 50,
    "gender": "female",
    "email": "hanlim@fake.com"
  }
  ```

#### GET /family/father

- **Description**: Returns a JSON object representing the father.
- **Response**:
  ```json
  {
    "name": "Hyung Kim",
    "age": 53,
    "gender": "male",
    "email": "hyungkim@fake.com"
  }
  ```

#### GET /family/brother

- **Description**: Returns a JSON object representing the brother.
- **Response**:
  ```json
  {
    "name": "Nathan Kim",
    "age": 17,
    "gender": "male",
    "email": "nathankim@fake.com"
  }
  ```

#### POST /family/:id

- **Description**: Accepts a JSON object in the request body and returns it with an ID.
- **Request Body**:
  ```json
  {
    "name": "string",
    "age": "number",
    "gender": "string",
    "email": "string"
  }
  ```
- **Response**:
  ```json
  {
    "id": "string",
    "name": "string",
    "age": "number",
    "gender": "string",
    "email": "string"
  }
  ```

## Notes

- Ensure that the `express` package is installed by running `npm install express`.
- The application currently does not use `express.json()` middleware, so the POST request will not parse JSON bodies unless this middleware is added.

## License

This project is licensed under the MIT License.

