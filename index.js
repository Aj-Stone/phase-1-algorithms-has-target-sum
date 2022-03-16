function hasTargetSum(array, target) {

  for (let i=0; i < array.length; i++){
    for (let j= i+1; j < array.length; j++){
      if (array[j] + array[i] === target){
        return array[j] + array[i] === target
      }
    }
  }
}

/* 
  Write the Big O time complexity of your function here
*/

/* 
  Add your pseudocode here
  - takes in array and target 
  - itterates through the array
  - checks to see if any 2 numbers from the array add up to the target value 
*/

/*
  Add written explanation of your solution here
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", hasTargetSum([3, 8, 12, 4, 11, 7], 10));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", hasTargetSum([22, 19, 4, 6, 30], 25));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", hasTargetSum([1, 2, 5], 4));

  console.log('')

  console.log('Expecting: true');
  console.log('=>', hasTargetSum([1,2,12,24],25))

  console.log('')

  console.log('Expected: false')
  console.log('=>', hasTargetSum([4], 4))
}

module.exports = hasTargetSum;
