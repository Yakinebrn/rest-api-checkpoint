In this project, I created a REST API using Node.js, Express, and Mongoose.

First, I initialized a Node.js project and installed the necessary dependencies. Then, I configured environment variables using a .env file in order to store sensitive information such as the database connection string and the server port.

I created a connection between the application and a MongoDB database (using MongoDB Atlas).

I also defined a User model with fields like first name, last name, email, and password. This model was built using Mongoose Schema.

After that, I created four main routes to manipulate the users in the database:

A GET route to return all users.

A POST route to add a new user.

A PUT route to edit a user by ID.

A DELETE route to remove a user by ID.

Finally, I tested all these routes using Postman to make sure the API works correctly.
