//Import
const express = require("express");
const app = express();
const path = require("path");
const port = 8080;
const data = require("./database/user.json");


//Middleware
const logger = (req, res, next) => {
  console.log(`${req.method} ${req.url}`)
  next()
};
const bodyParser = require('body-parser');
const { Router } = require("express");

//Static files
app.use(express.static("public"));
app.use("./css", express.static(__dirname + "public/css"));
app.use("./image", express.static(__dirname + "public/image"));
app.use("./js", express.static(__dirname + "public/js"));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(logger);

//Set views
app.set("views", "./views");
app.set("view engine", "ejs")

//Page EJS
app.get('', (req, res) => {
    res.render('home')
})
app.get('/gameSuit', (req, res) => {
    res.render('game')
})
app.get('/login', (req, res) => {
    res.render('login')
})
app.post('/login', (req, res) => {
  let request = req.body;
  let userData = data;
  for (let i = 0; i < userData.length; i++) {
    const element = userData[i];
    if ((request.username === element.username) && (request.password === element.password)) {
      res.status(200);
      // res.json(userData);
      res.redirect("/gameSuit");
    } else {
      res.status(401);
      res.send("You're not authenticated.")
    }
  }
});
app.get('/register', (req, res) => {
  res.render('register')
})
app.post('/register', (req, res) => {
  try {
    userData.push({
      name: req.body.name,
      email: req.body.email,
      password: req.body.password
    })
    res.redirect('/login')
  } catch {
    res.redirect('/register')
  }
  console.log(data)
})

//Error handler
app.use((err, req, res, next) => {
    res.status(500).json({
      status: "fail",
      errors: err.message,
    });
  });
  
  app.use((req, res, next) => {
    res.status(404).json({
      status: "fail",
      errors: "Page doesn't exist. Please double-check your URL.",
    });
  });

// Listen on port 8080
app.listen(port, () => {
    console.log(`Server aktif. Alamat http://localhost:${port}`)
});