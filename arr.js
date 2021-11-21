/*
function findLongestWord(array) {
    var longestWord = "";
  
    array.forEach(function(word) {
      if(word.length == 5) {
        longestWord = word;
        
      }
      
    });
  
    return longestWord;
  }
  
  var word = findLongestWord(["The","gggggggg","brown","foxxx", "fox", "jumped", "over", "the", "lazy", "dog"]);
  console.log(word); // result is "jumped"

*/




  var friends = ["abull","hablu", "kabul", "dablu", "boltus"];

function perfectFriend(arr) {
  var lengthFiveString = arr[0];
  for (i = 0; i < arr.length; i++) {
    if (arr[i].length == 5) {
        lengthFiveString = arr[i];
      break;
    }
  }
  return lengthFiveString;
}


console.log(perfectFriend(friends));