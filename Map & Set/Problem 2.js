
// "Problem:
// You are given a string (STR) of length N, you have to print the count of all alphabet.(using maps)

// Input:
// abcadeecfb

// Output:
// a=2
// b=2
// c=2
// d=1
// e=2
// f=1"

function CharWithFreq(s)
{
  // Store all characters and
  // their frequencies in dictionary
  let d = new Map();
  console.log(d);
 
  s.split('').forEach(element => {
     
        if(d.has(element))
        {
           console.log( d.set(element, d.get(element)+1));
        }
        else
           console.log( d.set(element, 1));
  });

  console.log(d);
}   

let s="abcadeecfb";
CharWithFreq(s);
