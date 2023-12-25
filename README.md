- Design a Url shortner service that takes in a valid URL and 
  returns a shortened URL , redirecting the user to the previously provided URL .

- new user sign up functionality 

- Authenticate a user with username and password 

- keep track of urls visited by a particular user 

- Keep track of total visits/clicks on the URL for a particular user 

- Implemented peristent session storage for authenticating user 
 
- Implemented jwt auth also just that if you want to use that for authenticating , change the middleware , update the login.ejs file 


- Routes
    - POST/URL - generates a new short URL and returns the shortened URL in the format example.com/random-id.
    
    - GET/:id  - Redirects the user to the original URL 

    - GET/URL/analytics/:id - Returns the clicks for the provided short id


![Screenshot (52)](https://github.com/ritikgupta2002/UrlShortner/assets/99651822/614e1b42-1309-4854-8f27-caa752b36bf0)


![Screenshot (53)](https://github.com/ritikgupta2002/UrlShortner/assets/99651822/399798f1-d55c-4b8b-8b3b-6645633912a0)


![Screenshot (54)](https://github.com/ritikgupta2002/UrlShortner/assets/99651822/c955a0ca-64de-432e-91bb-c22a10d474b5)


![Screenshot (55)](https://github.com/ritikgupta2002/UrlShortner/assets/99651822/fc083b32-4a0c-4e13-861a-7e82ee226990)


![Screenshot (56)](https://github.com/ritikgupta2002/UrlShortner/assets/99651822/6aaa1987-3aa3-4342-80af-d022826faed6)
