const port = 5000,
      express = require('express'),
      path = require('path')
      app = express();

// Listen on port 5000
app.listen(port, () => {
  console.log(`Server is running on port 5000
Visit http://localhost:5000`);
});//

/*
app.get('/css/site.css', (req, res) => {
    res.sendFile(path.join(__dirname + '/css/site.css')); 
});

app.get('/js/default.js', (req, res) =>{
    res.sendFile(path.join(__dirname + '/js/default.js')); 
});
*/
app.get("/", (req, res) => {
  res.sendFile("index.html", {root: __dirname});
});

app.get('/index.html', (req, res) => {
    res.redirect('/');
});

app.get("/posts", (req, res) => {
	console.log("Getting posts...");
  //res.sendFile(path.join(__dirname + '/posts.json'));
  res.json([
    { name: "William", location: "Abu Dhabi" },
    { name: "Chris", location: "Vegas" }
  ]);
});
