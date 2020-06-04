# python interactive learning platform project

the platform will be used as follows:
<br>
the kid registers and then login with his creds <br>
once logged he can start going through the lessons <br>
in each lesson there is some simple exercices that the kid has to solve <br>
for each solved exercise the kid get points <br>
the elgibility for the certificate depends on the points <br>

## Server
<div>GET /users to get all the users </div>
<div>POST /users create user  </div>

<div> POST /users/:id change users details </div>
<div>POST  /code to send code to the interpreter</div>

## App
<div>/signup</div>
<div>/login</div>









## setup without docker: 
<ul>
<li>Nodejs</li>
<li>Mysql</li>
</ul>

Database setup
<code> CREATE DATABASE  IF NOT EXISTS `nestdb`; <br>
 USE `nestdb`; <br>
</code>
<ul>
<li>user : user</li>
<li>pword: user</li>
</ul>

#### Server Instalaltion 

```bash
$ cd /server
$ npm install
```
<div> server is running on localhost:3000 </div>


## Running the Server

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```



#### Front application instalaltion 

```bash
$ cd /application
$ npm install
```
<div> front app is running on localhost:8080 </div>

```bash
# development
$ npm run serve

# production mode
$ npm run build
```


## Run the application using docker compose

<div> front app is running on localhost:8080 </div>
<div> server is running on localhost:3000 </div>

```
cd /[project folder]
docker-comppose up

```
