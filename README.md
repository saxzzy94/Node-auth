# Node-auth
A simple authentication app

# Contents

* [Global Requisites](#global-requisites)
* [Install, Configure & Run](#install-configure--run)


# Global Requisites

* node 
* tsc 
* typescript 
* mysql2
* knex
* react


# Install, Configure & Run

Below mentioned are the steps to install, configure & run in your platform/distributions.

```bash
# Clone the repo.
git clone https://github.com/saxzzy94/Node-auth.git;

# Goto the cloned project folder.
cd Node-auth;
```

```bash

# Install NPM dependencies.
npm install;

cd client
npm install

# Run the app
npm run start:dev;
```




# List of Routes

```sh
# Web Routes:

+--------+-------------------------+
  Method | URI
+--------+-------------------------+
  GET    | /
  POST   | /signup
  GET    | /signin
  GET    | /dasboard
+--------+-------------------------+

# API Routes:

+--------+-------------------------+
  Method | URI
+--------+-------------------------+
  GET    | /
  POST   | /users/login
  POST   | /users/register
  GET    | /users/load-user
  POST   | /users/upload
+--------+-------------------------+
```
