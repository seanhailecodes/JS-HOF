const smallNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 0]

const nums = [ 37, 826, 209, 419, 309, 48, 738, 709,728, 607, 9, 863, 976, 588, 611, 164, 383, 261, 14, 525, 479, 169, 755, 574, 330, 736, 541, 838, 577, 957, 179, 436, 333, 206, 295, 744, 926, 799, 691, 259, 401, 104, 630, 645, 722, 607, 587, 714, 446, 356, 18, 16, 14, 5, 13, 13, 17, 5, 5, 18, 12, 5, 18, 11, 2, 2, 9, 8, 4, 5, 18, 15, 18, 0, 6, 11, 18, 14, 2, 19, -14, 5, 18, 12, 3, 12, 7, 15, 5, 3, 12, 7, 6, 10, 3, 3, 3, 18, 12, 14 ]

const panagram = ['The', 'quick','brown','fox', 'jumps', 'over', 'the', 'lazy', 'dog']

const panagrams = [ 'The','job', 'requires', 'extra', 'pluck', 'and', 'zeal', 'from', 'every', 'young', 'wage', 'earner',  'Quick', 'zephyrs', 'blow,', 'vexing', 'daft', 'Jim', 'Two', 'driven', 'jocks', 'help', 'fax', 'my', 'big', 'quiz', 'Five', 'quacking', 'zephyrs', 'jolt', 'my', 'wax', 'bed', 'The', 'five', 'boxing', 'wizards', 'jump', 'quickly', 'Pack', 'my', 'box', 'with', 'five', 'dozen', 'liquor', 'jugs', 'We', 'promptly', 'judged', 'antique', 'ivory', 'buckles', 'for', 'the', 'next', 'prize', 'Jaded', 'zombies', 'acted', 'quaintly', 'but', 'kept','driving','their','oxen','forward' ]

// 1a) for nums and smallNums determine every number > 0
function greaterThan0 (currentValue){
  return currentValue >= 0;
}
console.log(smallNums.every(greaterThan0));
console.log(nums.every(greaterThan0));

// - Filter the array for numbers less than 100
// - Filter words that have an even length

const hundred = nums.filter(function(num){
  console.log(num < 100)
})
// console.log(hundred)

const isEven = panagrams.filter(function(panagram){
   console.log(panagram.length % 2 === 0)
})

// - Find the first value divisible by 5
// - Find the first word that is longer than 6 characters

const firstFive = nums.find(function(num){
  console.log(num % 5 === 0)
})


const firstWord = panagrams.find(function(panagram){
  console.log(panagram.length > 6)
})
 console.log(firstWord)

// - Find the index of the first number that is divisible by 3
const numDivByThree = nums.findIndex(function(num){
  console.log(num % 3 === 0)
})
console.log(numDivByThree)

// - Find the index of the first word that is less than 2 characters long
const lessThanTwo = panagrams.findIndex(function(panagram){
  console.log(panagram.length > 2)
})

// ## For Each
// - console.log each value of the nums array multiplied by 3
// - console.log each word with an exclamation point at the end of it

const divByThree = nums.forEach(function(num = (num*3)){
  console.log(nums)
})

// console.log(timesThree)
// - console.log each word with an exclamation point at the end of it

const punctuate = panagrams.forEach(function(panagram){
  console.log(panagram + '!')
})

// ## Map
// - Make a new array of each number multiplied by 100
// - Make a new array of all the words in all uppercase

const multHundred = nums.map(function(num = (num*100)){
  console.log(nums)
})

// - Make a new array of all the words in all uppercase

const upperCase = panagrams.forEach(function(panagram){
  // console.log(panagram.toUpperCase)
})

// ## Reduce
// - Add all the numbers in the array together using the `reduce` method
// - Concatenate all the words using reduce
const reduction = nums.reduce(function(total,num){
  console.log(num + total)
})
console.log(reduction)

// - Concatenate all the words using reduce

const concate = panagrams.reduce(function(total,panagram){
 console.log(panagram + total)
})
console.log(concate)

// - numbers divisible by 7
const divBySeven = function(nums) {
 if(nums%7 ===0){
   console.log(nums)
 }
}
console.log(nums.some(divBySeven)) 

// - words letter `a` in them

const aLetter = function(words) {
 if (words.includes('a')) {
   console.log(words)
 } 
}
console.log(panagram.some(aLetter))


// sort 
console.log(nums.sort())

// - Sort the numbers in ascending order

const ascending = function(a, b) {
  console.log(a-b)
}
console.log(nums.sort(ascending))
// - Sort the numbers in descending order

const descendingOrder = function(a, b) {
  console.log(b-a)
}
console.log(nums.sort(descendingOrder))

// - Sort the words in ascending and descending order
const ascendingWords = function(a, b){
  return a.length - b.length
}

const descendingWords = function(a, b) {
  return b.length - a.length
}

panagrams.sort(descendingWords)
panagram.sort(descendingWords)

panagram.sort(ascendingWords)
panagrams.sort(ascendingWords)
// - Sort the words in descending order

const descending = function(a,b) {

 console.log(b.length - a.length)
}
console.log(panagram.sort(descending))




