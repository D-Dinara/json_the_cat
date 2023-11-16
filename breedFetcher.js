const request = require('request');

const fetchBreedDescription = function(breedName, callback) {

  //Assign the url with the dynamic breed info to a constant
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  //make a request to fetch the breed data from the API endpoint
  request(url, (error, response, body) => {

    //check for request error
    if (error) {
      callback(error, null);
      return;
    }
    //if request was successful parse the body
    const data = JSON.parse(body);

    //check if there is data (the breed exists).
    //If the breed doesn't exist call the callback with null
    if (data.length === 0) {
      callback(null,null);
    } else {
      // if the breed exists fetch the description and call the callback with it
      const desc = data[0].description;
      callback(null, desc);
    }
  });
};

module.exports = { fetchBreedDescription };





