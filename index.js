const tutorials = [
  'what does the this keyword mean?',
  'What is the Constructor OO pattern?',
  'implementing Blockchain Web API',
  'The Test Driven Development Workflow',
  'What is NaN and how Can we Check for it',
  'What is the difference between stopPropagation and preventDefault?',
  'Immutable State and Pure Functions',
  'what is the difference between == and ===?',
  'what is the difference between event capturing and bubbling?',
  'what is JSONP?'
];


function titleCased() {
  // write function, create empty array to store names
  let titleCasedTutorials = [];

  // iterate over each tutorial name in array, i = index
  // i++ increments by 1 in each iteration until reaches length of array
  for (let i = 0; i < tutorials.length; i++) {
    // split tutorial name into array of words, can access individual words
    let words = tutorials[i].split(' ');

    // capitalize first letter of each word, grab with titleCaseWords
    let titleCaseWords = words.map(word => word.charAt(0).toUpperCase() + word.slice(1));

    // join individual words together to form title case tutorial name
    let titleCaseTutorialName = titleCaseWords.join(' ');

    // store titleCaseTutorialName in new array
    titleCasedTutorials.push(titleCaseTutorialName);
  }
  // return new array, titleCasedTutorials
  return titleCasedTutorials;
}