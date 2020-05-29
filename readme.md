# python interactive learning platform project

the platform will be used as follows:
<br>
the kid registers and then login with his creds <br>
once logged he can start going through the lessons <br>
in each lesson there is some simple exercices that the kid has to solve <br>
for each solved exercise the kid get points <br>
the elgibility for the certificate depends on the points <br>



## prerequisties : 
<ul>
<li>Nodejs</li>
<li>Mysql</li>
</ul>

## Database setup
craete the database : 

<code> CREATE DATABASE  IF NOT EXISTS `nestdb`; <br>
 USE `nestdb`; <br>
</code>
<ul>
<li>user : user</li>
<li>pword: user</li>
</ul>

## Server Instalaltion 

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



## Front application instalaltion 

```bash
$ cd /application
$ npm install
```
<div> front app is running on localhost:8181 </div>


## Running for development
```
npm run serve
```

## Running for production
```
npm run build
```
## Run the application using docker compose

you can also run the app with docker
```
docker-comppose up

```
