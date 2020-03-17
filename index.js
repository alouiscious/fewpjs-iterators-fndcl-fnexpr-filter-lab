// EXAMPLE FROM LAB
// let even = arr.filter(n => {
//   return n % 2 === 0;
// });



function findMatching(drivers, name) {
  return drivers.filter(searhRslt =>  
    searhRslt.toLowerCase() === name.toLowerCase()
   // querying the array, and returns all drivers whose names begin with the provided letters.
  )
}

function fuzzyMatch(drivers,char)  {
  return drivers.filter( searchRslt => 
    searchRslt.toLowerCase().indexOf(char.toLowerCase()) === 0
  // returns all drivers whose names begin with the provided letters
  )
}

function matchName(drivers, name) {
  return drivers.filter(searchRslt =>
    searchRslt.name === name
    
  )
// return each element whose name property matches the provided string argument.  
}


