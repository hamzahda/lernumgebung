# python interactive learning platform project
this project is for the KinderCampus where we teach the kids different programming principles and languages.



**Table Of Contents**
- [Project description](#project-description)
- [Installation](#installation)
- [Usage](#example-usage)
- [License](#license)

## Project description:
the platform will be used as follows:
<br>
the kid registers and then login with his creds <br>
once logged he can start going through the lessons <br>
in each lesson there is some simple questions that the kid has to solve <br>
for each solved exercise the kid get points <br>
if he gets the points then he'll be eligible for a certificate <br>


*Techs:*
* nodejs
* expressjs

* nestjs
* typeorm
* vuejs
* vuex
* vue bootsrap
* mysql
* swagger


## Functional and Non Functional Requirements


## System Design

**Usage W/o Docker**

Database setup
`CREATE DATABASE  IF NOT EXISTS `nestdb`; `

 `USE `nestdb`; `
</code>
<ul>
<li>user : user</li>
<li>pword: user</li>
</ul>


In this setup you'll need to open two <br>
Download or clone the project then 
run the following cmds in the first to install the server <br>
```bash
$ cd lernumgebung/server
$ npm install
```
the flollowing scripts are available for the server:


```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```
<div> server is running on localhost:3000 </div>


and the following in the second to install the front application

```bash
$ cd lernumgebung/application
$ npm install
```

<div> front app is running on localhost:8080 </div>
the flollowing scripts are available for the server:
```bash
# development
$ npm run serve
# production mode
$ npm run build
```


## Using Docker
<div> front app is running on localhost:8080 </div>
<div> server is running on localhost:3000 </div>

```shell
cd /lernumgebung
docker-comppose up
```
