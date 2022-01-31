<h1 align="center">
    <img alt="Ask Linux" src="https://user-images.githubusercontent.com/76854209/146804257-72f99099-a6d2-4bd7-959c-581a47e4b069.png" />
    <br>
    Ask Linux
    <p align="center">Ask anything about Linux</p>
</h1>

<p align="center">
    <a href="#about">About |</a>
    <a href="#technologies">Technologies |</a>
    <a href="#features">Features |</a>
    <a href="#installation">Installation |</a>
    <a href="#usage">Usage</a>
</p>

<hr>

## About
<p>A website like Ask.fm, where is possible to make and answer questions anonymously.</p>

![1](https://user-images.githubusercontent.com/76854209/146985203-632bc859-d661-411f-a248-1df70e856e87.png)
![2](https://user-images.githubusercontent.com/76854209/146985345-c0cb7e82-1a70-4197-8fb3-3e567d67576c.png)
![3](https://user-images.githubusercontent.com/76854209/146985518-188f263d-c105-4e8a-86ea-faf8ad6e690e.png)

<hr>

## Technologies
<ul>
    <li><a href="https://www.w3schools.com" alt="HTML">HTML</a></li>
    <li><a href="https://www.w3schools.com" alt="CSS">CSS</a></li>
    <li><a href="https://getbootstrap.com" alt="Bootstrap">Bootstrap</a></li>
    <li><a href="https://www.ecma-international.org/publications-and-standards/standards/ecma-262/" alt="JavaScript">JavaScript</a></li>
    <li><a href="https://ejs.co/" alt="EJS">EJS</a></li>
    <li><a href="https://nodejs.org/" alt="Node.js">Node.js</a></li>
    <li><a href="https://www.mysql.com" alt="MySQL">MySQL</a></li>
    <li><a href="https://sequelize.org/" alt="Sequelize">Sequelize</a></li>
</ul>

<hr>

## Features

- [x] Create question title
- [x] Create question description 
- [x] Respond question  

<hr>

## Installation

> This guide assumes you already have Node.js, npm and MySQL server installed.

```bash

$ git clone https://github.com/leandrolimadeveloper/ask-linux.git 
$ cd ask-linux
$ npm i

```

### Configuring database file
Open the file 'database.js', stored in database folder, and set in the line 2, after 'root', your MySQL server password.

```bash
const connection = new Sequelize('asklinux', 'root', 'password-DB-1', { ...
```

### Creating database 

```bash
$ mysql -u -root -p 

# Insert the password of your MySQL server (if there is) and type the following commands:
> CREATE DATABASE asklinux; 
> USE asklinux;
> exit
```

<hr>

## Usage

After creating the database, type the command for executing the application:

```bash

$ npx nodemon index.js

```

<p>Access the address <code>localhost:3000</code> in any browser.</p>

<hr>

## License
<p>Distributed under the <a href="https://mit-license.org">MIT License</a>.</p>
