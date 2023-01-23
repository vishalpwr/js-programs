// Searching Challenge
// Have the function SearchingChallenge(str) take the str parameter being passed and find the longest substring that contains k unique characters,
// where k will be the first character from the string.
// The substring will start from the second position in the string because the first character will be the integer k.
// For example: if str is "2aabbacbaa" there are several substrings that all contain 2 unique characters, namely: ["aabba", "ac", "cb", "ba"],
// but your program should return "aabba" because it is the longest substring.
// If there are multiple longest substrings, then return the first substring encountered with the longest length. k will range from 1 to 6.
// Once your function is working, take the final output string and concatenate it with your ChallengeToken, and then replace every third character with an X.

// Your ChallengeToken: iqxwr6d713

// Examples
// Input: "3aabacbebebe"
// Output: cbebebe
// Final Output: cbXbeXeiXxwX6dX13

// Input: "2aabbcbbbadef"
// Output: bbcbbb
// Final Output: bbXbbXiqXwrXd7X3

// ----------------------------------------------------------------------------------------------------------

const unique = (str) => {
  const a = Array.from(str);
  const set = new Set(a)
  return [...set]
}

function SearchingChallenge(str) { 
  const str1 = 'iqxwr6d713';
  const k = +str[0];
  const s = str.slice(1)
  const ar = [];
  for (let i=0;i<s.length;i++) {
    let sub = ''
    for (let j=i;j<s.length;j++) {
      if (!!s[j]) {
        sub=sub+s[j]
        const len = unique(sub).length;
        if (k === len) {
          ar.push(sub)
        }
      }
    }
  }

  const max1 = ar.reduce((a,b) => a.length > b.length ? a : b);
  const newStr = max1+str1;
  let output = '', count = 0;
  
  const strAr = newStr.split('')
  strAr.forEach((e, i) => {
    count++;
    if (count==3) {
      e='X';
      count=0;
    }
    output=output+e
  })
  return output;
}

// function call
console.log(SearchingChallenge('3aabacbebebe'));
