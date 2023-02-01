// What is HTTP?
    //Stands for "Hyper Text Transfer Protocol"
    //Sets a standerd of communication between the server and the browser
// What is a URL?
    //Stands for "Uniform Resource Locator"
    //Essentially an "address" for directing the browser to a specific resourse on the web
    //Contains the protocol, hostname, port, resource and query
// What is DNS?
    // Stands for "Domain Name System"
    // Reads hortnames and retrieves the corrisponding IP address or vice versa
    // Accessed when the computer's cahe, router or ISP does not already have a reccord of the hostname's address
// What is a query string?
    // Part of the URL that holds extra information for the webpage in the form of parameters and values
// What are two HTTP verbs and how are they different?
    // GET is a request from the client for data from the setver
    // POST is a request from the client for data to be created or modified in the server
// What is an HTTP request?
    // A indicator from the client side that it is requested data or modifications from the server
// What is an HTTP response?
    // Reply from the server to a request for data, including the status of its success and the body of data that was sent
// What is an HTTP header? Give a couple examples of request and response headers you have seen.
    // Information from the server/client sent with every request/response
    // Date, Cookies, Last-Modified
// What are the processes that happen when you type “http://somesite.com/some/page.html” into a browser?


// Using curl, make a GET request to the icanhazdadjoke.com API to find all jokes involving the word “pirate”
    // curl icanhazdadjoke.com -H "path: /search?term=pirate" //help?
// Use dig to find what the IP address is for icanhazdadjoke.com
    // ;; ANSWER SECTION:
    // icanhazdadjoke.com.     0       IN      A       104.21.66.15
    // icanhazdadjoke.com.     0       IN      A       172.67.198.173
// Make a simple web page and serve it using python3 -m http.server. Visit the page in a browser.
    //python3 -m http.server



    