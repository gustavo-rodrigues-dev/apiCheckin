
import expressWinston from 'express-winston';
import bodyParser from 'body-parser';
module.exports = app => {
    app.set('port', 3000);
    app.set('json spaces', 4);
    app.use(bodyParser.urlencoded({ extended: false }));
    app.use(bodyParser.json());
    
        
    app.use(expressWinston.logger({
        winstonInstance:  app.logger,
        level: (req, res) => {
            let level = "debug";
            if (res.statusCode >= 400) { level = "error"; }
            return level;
          }
    }));
    
};