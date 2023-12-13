- Design a Url shortner service that takes in a valid URL and 
  returns a shortened URL , redirecting the user to the previously provided URL .

- Keep track of total visits/clicks on the URL 

- Routes
    - POST/URL - generates a new short URL and returns the shortened URL in the format example.com/random-id.
    
    - GET/:id  - Redirects the user to the original URL 

    - GET/URL/analytics/:id - Returns the clicks for the provided short id

