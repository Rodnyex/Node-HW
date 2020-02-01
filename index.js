const axios = require('axios');

axios.get('https://omdbapi.com/?t=batman&apikey=trilogy')
   .then(res => console.log(res))
   .catch(err => console.log(err))

   //adding this just for the hell of it because i want to figure out what is going on with my commits
   