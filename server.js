var express = require('express');
var morgan = require('morgan');
var path = require('path');

var app = express();
app.use(morgan('combined'));

var articles = {
     'article-one' : {
        title:'Article-One | GeethaSelvaraj',
        heading:'Article One',
        date:'Aug 10,2017',
        content:`
                <p>
                    This is the content of first article. Introduction to server-side javascript and HTML/CSS.This is the content of first article. Introduction to server-side javascript and HTML/CSS.This is the content of first article. Introduction to server-side javascript and HTML/CSS.This is the content of first article. Introduction to server-side javascript and HTML/CSS....
                </p>
                <p>
                    This is the content of first article. Introduction to server-side javascript and HTML/CSS.This is the content of first article. Introduction to server-side javascript and HTML/CSS.This is the content of first article. Introduction to server-side javascript and HTML/CSS.This is the content of first article. Introduction to server-side javascript and HTML/CSS.
                </p>
                <p>
                    This is the content of first article. Introduction to server-side javascript and HTML/CSS.This is the content of first article. Introduction to server-side javascript and HTML/CSS.This is the content of first article. Introduction to server-side javascript and HTML/CSS.This is the content of first article. Introduction to server-side javascript and HTML/CSS.
                </p>`
    },
     'article-two' : {
        title:'Article Two | GeethaSelvaraj',
        heading:'Article Two',
        date:'Aug 11,2017',
        content:`
                <p>
                    This is the content of 2nd article. Introduction to server-side javascript and HTML/CSS.This is the content of 2nd article. Introduction to server-side javascript and HTML/CSS.This is the content of 2nd article. Introduction to server-side javascript and HTML/CSS.This is the content of 2nd article. Introduction to server-side javascript and HTML/CSS.
                </p>
                <p>
                    This is the content of 2nd article. Introduction to server-side javascript and HTML/CSS.This is the content of 2nd article. Introduction to server-side javascript and HTML/CSS.This is the content of first article. Introduction to server-side javascript and HTML/CSS.This is the content of 2nd article. Introduction to server-side javascript and HTML/CSS.
                </p>
                <p>
                    This is the content of 2nd article. Introduction to server-side javascript and HTML/CSS.This is the content of 2nd article. Introduction to server-side javascript and HTML/CSS.This is the content of first article. Introduction to server-side javascript and HTML/CSS.This is the content of 2nd article. Introduction to server-side javascript and HTML/CSS.
                </p>`
    },
     'article-three' : {
        title:'Article Three | GeethaSelvaraj',
        heading:'Article Three',
        date:'Aug 11,2017',
        content:`
                <p>
                    This is the content of 3rd article. Introduction to server-side javascript and HTML/CSS.This is the content of first article. Introduction to server-side javascript and HTML/CSS.This is the content of first article. Introduction to server-side javascript and HTML/CSS.This is the content of first article. Introduction to server-side javascript and HTML/CSS.
                </p>
                <p>
                    This is the content of 3rd article. Introduction to server-side javascript and HTML/CSS.This is the content of first article. Introduction to server-side javascript and HTML/CSS.This is the content of first article. Introduction to server-side javascript and HTML/CSS.This is the content of first article. Introduction to server-side javascript and HTML/CSS.
                </p>
                <p>
                    This is the content of 3rd article. Introduction to server-side javascript and HTML/CSS.This is the content of first article. Introduction to server-side javascript and HTML/CSS.This is the content of first article. Introduction to server-side javascript and HTML/CSS.This is the content of first article. Introduction to server-side javascript and HTML/CSS.
                </p>`
    }
};
function createTemplate (data)
{
    var title=data.title;
    var heading=data.heading;
    var date=data.date;
    var content=data.content;
    
    var htmlTemplate=`
    <html>
        <head>
            <title>
                ${title}
            </title>
            <meta name="vireport" content="width=device-width intial-scale=1" />
            <link href="/ui/style.css" rel="stylesheet" />
        </head>
        <body>
            <div class="cssdesign">
                <div>
                    <a href="/"></a>
                </div>
                
                <h3>
                    ${heading}
                </h3>
                <div>
                    ${date}
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

app.get('/', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'index.html'));
});

app.get('/:article-one', function (req, res) {
    var articleName = req.param.articleName;
  res.send(createTemplate(articles[articleName]));
});

/*app.get('/Article-two', function (req, res) {
  res.sendFile(path.join(__dirname, 'ui', 'article-two.html'));
  res.send(createTemplate(articleTwo));
});

app.get('/Article-three', function (req, res) {
  res.send(createTemplate(articleThree));
});*/

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
