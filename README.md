## URL Shortener

- Controllers:

    - url.js: Handles URL shortening, redirection, and analytics.
    - user.js: Manages user signup and login logic, supporting both basic and JWT authentication.

- Middleware:

    - auth.js: Implements middleware for restricting routes to logged-in users, supporting both basic and   JWT authentication.

- Models:

    - session.js: Defines a MongoDB model for user sessions.
    - url.js: Represents URL entities with shortId, redirectUrl, clickCount, visitHistory, and createdBy fields.
    - user.js: Defines a user model with name, email, and password fields.
    
- Routes:

    - url.js: Handles URL-related routes such as shortening, redirection, and analytics.
    - user.js: Manages user-related routes including signup and login.
    - staticRouter.js: Contains basic routes like home, signup, login.

- Services:
  
    - auth.js: Provides functions for managing user sessions and JWT authentication.

- Connection:

    - connection.js: Connects to the MongoDB database.
  
Key Features

- URL Shortening:

    Generates a unique shortId for each URL and stores it in the database.
    Tracks click count and visit history for each shortened URL.
    
- User Authentication:

    Supports both basic authentication (session-based) and JWT authentication.
    Secure user signup and login functionality.

- Middleware:

    Implements middleware for restricting routes to logged-in users, supporting both basic and JWT authentication.

- Database Models:

    Uses Mongoose to define models for user sessions, URLs, and user data.

- Express Configuration:

    Sets up Express with EJS as the view engine, JSON and URL-encoded data parsing, and cookie handling.
    
- Server Initialization:

    Connects to MongoDB and starts the server on port 8004.


- How to Run

Ensure MongoDB is running locally on port 27017.
Install dependencies: npm install
Start the server: npm start
Visit http://localhost:8004 to access the URL shortener service.

Feel free to explore the provided routes, controllers, and services for a deeper understanding of the implementation.

![Screenshot (52)](https://github.com/ritikgupta2002/UrlShortner/assets/99651822/614e1b42-1309-4854-8f27-caa752b36bf0)


![Screenshot (53)](https://github.com/ritikgupta2002/UrlShortner/assets/99651822/399798f1-d55c-4b8b-8b3b-6645633912a0)


![Screenshot (54)](https://github.com/ritikgupta2002/UrlShortner/assets/99651822/c955a0ca-64de-432e-91bb-c22a10d474b5)


![Screenshot (55)](https://github.com/ritikgupta2002/UrlShortner/assets/99651822/fc083b32-4a0c-4e13-861a-7e82ee226990)


![Screenshot (56)](https://github.com/ritikgupta2002/UrlShortner/assets/99651822/6aaa1987-3aa3-4342-80af-d022826faed6)
