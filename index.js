const { fetchBreedDescription } = require('./breedFetcher');
//Get the user input
const breedName = process.argv[2];
// Call the function to fetch the breed description
fetchBreedDescription(breedName, (error, desc) => {
  if (error) {
    console.log('Error fetch details:', error);
  } else {
    console.log(desc);
  }
});

