function countFlavors() {
    
    var userInput = prompt('Enter a list of comma-separated froyo flavors:');
    
    var flavorsArray = userInput.split(',');

    var flavorCounts = {};
  
    for (var i = 0; i < flavorsArray.length; i++) {
      var flavor = flavorsArray[i].toLowerCase(); // Convert flavor to lowercase
      if (flavorCounts[flavor]) {
        flavorCounts[flavor]++;
      } else {
        flavorCounts[flavor] = 1;
      }
    }
    // Log the flavor counts object to the console
    console.log(flavorCounts);
  }