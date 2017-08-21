var express = require('express');
var morgan = require('morgan');
var path = require('path');
var Pool = require('pg').Pool;
var crypto = require('crypto');

var config = {
    user:'prasannageetha',
    database:'prasannageetha',
    host:'db.imad.hasura-app.io',
    port:'5432',
    password:process.env.DB_PASSWORD
};

var app = express();
app.use(morgan('combined'));
/*var articles = {
     'article-one'   : {
    title: 'Article-One | GeethaSelvaraj',
    heading: 'Article One',
    date: "Aug 4 2017",
    content: `
            <p>
                    This is The Content For My First Article. Alrighty ? I'mma Copy This A Bunch Of Times So Don't Go Reading Everything Again And Again Till You Go Crazy. Wait, Have You Already Gone Crazy ? Uh . . . Huh I Don't Think So Righty ? Then . . . Bye Bye ! *Wave*  . . . . . . . . . 
            </p>
            
            <p>
                    This is The Content For My First Article. Alrighty ? I'mma Copy This A Bunch Of Times So Don't Go Reading Everything Again And Again Till You Go Crazy. Wait, Have You Already Gone Crazy ? Uh . . . Huh I Don't Think So Righty ? Then . . . Bye Bye ! *Wave*  . . . . . . . . . 
            </p>
            
            <p>
                    This is The Content For My First Article. Alrighty ? I'mma Copy This A Bunch Of Times So Don't Go Reading Everything Again And Again Till You Go Crazy. Wait, Have You Already Gone Crazy ? Uh . . . Huh I Don't Think So Righty ? Then . . . Bye Bye ! *Wave*  . . . . . . . . . 
            </p>`
                        },
     
     'article-two'   : {
    title: 'Article-Two | GeethaSelvaraj',
    heading: 'Article Two',
    date: "Aug 6 2017",
    content: `
            <p>
                    This is The Content For My Second Article. Alrighty ? I'mma Copy This A Bunch Of Times So Don't Go Reading Everything Again And Again Till You Go Crazy. Wait, Have You Already Gone Crazy ? Uh . . . Huh I Don't Think So Righty ? Then . . . Bye Bye ! *Wave*  . . . . . . . . . 
            </p>
            
            <p>
                    This is The Content For My Second Article. Alrighty ? I'mma Copy This A Bunch Of Times So Don't Go Reading Everything Again And Again Till You Go Crazy. Wait, Have You Already Gone Crazy ? Uh . . . Huh I Don't Think So Righty ? Then . . . Bye Bye ! *Wave*  . . . . . . . . . 
            </p>
            
            <p>
                    This is The Content For My Second Article. Alrighty ? I'mma Copy This A Bunch Of Times So Don't Go Reading Everything Again And Again Till You Go Crazy. Wait, Have You Already Gone Crazy ? Uh . . . Huh I Don't Think So Righty ? Then . . . Bye Bye ! *Wave*  . . . . . . . . . 
            </p>`
                        },
     
     'article-three' : {
    title: 'Article-There | GeethaSelvaraj',
    heading: 'Article Three',
    date: "Aug 6 2017",
    content: `
            <p>
                    This is The Content For My Third Article. Alrighty ? I'mma Copy This A Bunch Of Times So Don't Go Reading Everything Again And Again Till You Go Crazy. Wait, Have You Already Gone Crazy ? Uh . . . Huh I Don't Think So Righty ? Then . . . Bye Bye ! *Wave*  . . . . . . . . . 
            </p>
            
            <p>
                    This is The Content For My Third Article. Alrighty ? I'mma Copy This A Bunch Of Times So Don't Go Reading Everything Again And Again Till You Go Crazy. Wait, Have You Already Gone Crazy ? Uh . . . Huh I Don't Think So Righty ? Then . . . Bye Bye ! *Wave*  . . . . . . . . . 
            </p>
            
            <p>
                    This is The Content For My Third Article. Alrighty ? I'mma Copy This A Bunch Of Times So Don't Go Reading Everything Again And Again Till You Go Crazy. Wait, Have You Already Gone Crazy ? Uh . . . Huh I Don't Think So Righty ? Then . . . Bye Bye ! *Wave*  . . . . . . . . . 
            </p>`
         
                        },
};*/

function createTemplate (data) {

    var title = data.title;
    var date = data.date;
    var heading = data.heading;
    var content = data.content;
    var htmlTemplate = `

<!DOCTYPE html>
<html>
    <head>
        <title>
            ${title}
        </title>
        <meta name="viewport" consent="width=device-width, initial-scale=1" />
        <!--Above Line Is Used For Adjusting Width Of Screen According To Display-->
        <link href="/ui/style.css" rel="stylesheet" />
    </head>
    
    
    <body>
        <div class="container">
            <div>
                <a href='/'>Home</a>
            </div>
            <hr/>
            <h3>
                ${heading}
            </h3>
            <div>
                ${date.toDateString()}
            </div>
            <div>
               ${content}
            </div>
        </div>
    </body>

</html>
                        `;
    return htmlTemplate;


}

app.get('/favicon.ico', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'favicon.ico'));
});

function hash(input,salt){
    // How  to we create hash?
    var hashed = crypto.pbkdf2Sync(input, salt, 100000, 512, 'sha512');
    //console.log(hashed.toString('hex'));  // '3745e48...aa39b34'
    return ["pbkdf2","10000",salt,hashed.toString('hex')].join("$");
    
}

app.get('/hash/:input', function (req, res) {
  var hashedString = hash(req.params.input, 'this-is-some-random-string');
  res.send(hashedString);
});

app.get('/create-user', function (req, res) {
    var salt = crypto.getRandomBytes(128).toString('hex');
    var dpString = hash(password,salt);
    pool.Query('insert into "user" (username,passoword) values ($1,$2)',[username.dpString],function(err,result){
        if(err){
            res.status(500).send(err.toString());
        }else {
            res.send(JSON.stringify(result.rows));
        }
    });
});

var pool = new Pool(config);
//alert("link :"+ user +database + host + port + password);
app.get('/test-dp', function (req, res) {
    //Make a select request
    //Return a response with the results
    pool.query('select * from test', function(err,result){
        
        if(err){
            res.status(500).send(err.toString());
        }else {
            res.send(JSON.stringify(result.rows));
        }
    });
});

var counter = 0;
app.get('/counter', function (req, res) {
      counter = counter + 1;
      res.send(counter.toString());
});

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

var names = [];
//app.get('/submit-name/:name', function(req,res){
app.get('/submit-name', function(req,res){
    var name = req.params.name;
    names.push(name);
    res.send(JSON.stringify(names));
});

app.get('/articles/:articleName', function (req, res) {
    //articleName == article-one
    //articles[articleName] == {} content object for article
    var articleName = req.params.articleName;
    //pool.query("select * from article where title='"+req.params.articleName +"'", function(err,result) {
    pool.query("select * from article where title=$1",[req.params.articleName], function(err,result) {
    if(err)
    {
         res.status(500).send(err.toString());
    }
    else 
    { 
        if(result.rows.length === 0)
        {
            res.status(404).send('Article not found');
        } 
        else 
        {
            var articleData = result.rows[0];
            res.send(createTemplate(articleData));
        }
    }
});
});

app.get('/ui/main.js', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'main.js'));
});

app.get('/ui/style.css', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'style.css'));
});

app.get('/ui/madi.png', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'madi.png'));
});

// Do not change port, otherwise your app won't run on IMAD servers
// Use 8080 only for local development if you already have apache running on 80

var port = 80;
app.listen(port, function () {
  console.log(`IMAD course app listening on port ${port}!`);
});
