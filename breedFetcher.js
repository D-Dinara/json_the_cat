const request = require('request');

//Get the user input
const breed = process.argv.slice(2)[0];

//Assign the url with the dynamic breed info to a constant
const url = `https://api.thecatapi.com/v1/breeds/search?q=${breed}`;

//make a request to fetch the breed data from the API endpoint
request(url, (error, response, body) => {

  //handle errors if the request is failed
  if (error) {
    console.log('Error: ', error);
  }

  //parse the body (from string to object)
  const data = JSON.parse(body);

  //check if there is data present (the breed is found)
  if (data.length > 0) {

    //log the descrition
    console.log(data[0].description);
  } else {
    //if there is no data - the breed is not found
    console.log('The breed is not found');
  }
});