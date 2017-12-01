const express = require('express');
const app = express();

// static function takes a path as a argument and return the current directory with the dist folder which has all the static files
app.use(express.static(_dirname + '/dist'));

app.listen(process.env.PORT || 8080);

// PathLocationStrategy is what angular uess for routing

app.get('/*', function(req, res){
    res.sendFile(path.join(_dirname + '/dist/index.html'));
});

console.log('Console is listening...');