// "Problem:
// You are given a string (STR) of length N, consisting of only the lower case English alphabet.
// Your task is to remove all the duplicate occurrences of characters in the string.

// Input:
// abcadeecfb

// Output:
// abcdef"

let str="abcadeecfb", strOne="";
let len=str.length;

let newSet=new Set()

for(let i of str)
{
    newSet.add(i)
}

for(let j of newSet)
{
    strOne=strOne + j
}

console.log(strOne);
