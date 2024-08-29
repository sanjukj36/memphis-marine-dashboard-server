# Memphis Marine Dashboard Server

This project is the backend server for the Memphis Marine Dashboard application, built with Node.js and Express.

## Running the Application Locally

Follow these steps to set up and run the server on your local machine:

### Installation

1. **Clone the repository:**


   git clone https://github.com/sanjukj36/memphis-marine-dashboard-server.git
   cd memphis-marine-dashboard-server


2. **Install dependencies:**

   Use the following command to install all required dependencies:

   - If you're using npm:

     npm install bcryptjs cors dotenv express jsonwebtoken mongodb mongoose validator

   - If you're using yarn:

     yarn add bcryptjs cors dotenv express jsonwebtoken mongodb mongoose validator

   This command installs all the dependencies listed under the `"dependencies"` section of your `package.json` file.

### Setting Up Environment Variables

1. Create a `.env` file in the root directory:

2. Add the following environment variables to the `.env` file:

   CONNECTION_STRING=your-mongodb-connection-string
   JWT_SECRET=your-secret-key
   PORT=5000

   Replace `your-mongodb-connection-string` with your actual MongoDB connection string and `your-secret-key` with your JWT secret.

### Running the Development Server

To start the server with live reloading:

1. If you're using npm, first install `nodemon` globally:

   npm install -g nodemon
   

   Then, start the server:


   nodemon index.js

2. If you're using yarn, add `nodemon` as a development dependency:

   yarn add nodemon --dev

   Modify your `package.json` to include a `dev` script:


   "scripts": {
     "start": "node index.js",
     "dev": "nodemon index.js"
   }

   Start the server with:

   yarn dev


The server will run on [http://localhost:5000](http://localhost:5000) by default.

