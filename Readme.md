## Backend
Fetching data is hoocked to a nodejs backend hosted on `Glitch.com`, the code is the following:

```javascript
var express = require('express');
var router = express.Router();
var request = require('request');

router.post("/", (req, res) => {
  // https://api.imgur.com/endpoints/gallery#gallery ---> documentation
  const { section, sort, window, showViral, page} = req.body;
  
  // Route: https://api.imgur.com/3/gallery/{section}/{sort}/{window}/{page}?showViral=bool
  // 	Method: GET
  
  const url = `https://api.imgur.com/3/gallery/${section}/${sort}/${window}/${page}?showViral=${showViral}`;
  var options = {
    'method': 'GET',
    'url': url,
    'headers': {
      'Authorization': 'Client-ID ***'
    }
  };
  request(options, function (error, response) { 
    if (error) throw new Error(error);
    // console.log('success')
    res.status(200).json(response.body)
  });

})

module.exports = router;
```

The backend raw `code` and the `page` can be found here:
- [Code](https://glitch.com/edit/#!/euro-aris?path=routes%2Fimgur.js%3A29%3A24)
- [Backend](https://euro-aris.glitch.me/)

## Front end

### Installing dependencies
`yarn install` or `npm install`

### Running
`yarn start` or `npm start`

### Testing
`yarn test` or `npm test`

## Link to the live App
[my-wing](https://tchoukoualeu.github.io/my-wing/) (*Could take few minute to load, glitch.com puts unused apps to sleep*)