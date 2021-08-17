# Node.js
Node.js is an JavaScript environment.
## thread model
Apache + Tomcat:
1. request
2. thread
3. release thread

## event loop
Node.js
1. have an event waiting for loop (event loop)
2. request
3. put into the list and wait for new request
4. complete request, use I/O, end request

reference: 