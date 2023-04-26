/*
Write a function called doubleValues which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValues([1,2,3]) // [2,4,6]
    doubleValues([5,1,2,3,10]) // [10,2,4,6,20]

*/
function doubleValues(arr){
    let doubleArr = [];
    arr.forEach (function(num){
        doubleArr.push(num * 2);
         });
    return doubleArr;
}

// Referenced code: 
// Post from OmnipotentEntity on 12/11/14: https://stackoverflow.com/questions/27416760/write-a-function-that-doubles-up-each-item-in-an-array
// Post from Mau Di Bert on 1/8/19: https://stackoverflow.com/questions/29111002/multiply-by-number-all-ellements-of-an-array-with-foreach-in-javascript
// 
/*
Write a function called onlyEvenValues which accepts an array and returns a new array with only the even values in the array passed to the function

Examples:
    onlyEvenValues([1,2,3]) // [2]
    onlyEvenValues([5,1,2,3,10]) // [2,10]

*/
function onlyEvenValues(arr){
    let filtered = arr.filter(number => number % 2===0);

    return filtered;
}

// Referenced code: 
// Post from Suren Srapyan on 8/16/18: https://stackoverflow.com/questions/51876350/filtering-even-numbers-from-an-array

/*
Write a function called showFirstAndLast which accepts an array of strings and returns a new array with only the first and last character of each string.

Examples:
    showFirstAndLast(['colt','matt', 'tim', 'test']) // ["ct", "mt", "tm", "tt"]
    showFirstAndLast(['hi', 'goodbye', 'smile']) // ['hi', 'ge', 'se']

*/
function showFirstAndLast(arr){
    let emptyArray = [];

    arr.forEach(function(item){
     emptyArray.push((item.charAt(0)) + (item.charAt(item.length-1)));
    });
    return(emptyArray);
}
// Referenced code: 
// Post from vivek_nk on 4/16/14: https://stackoverflow.com/questions/23103105/take-out-first-and-last-letter-in-every-element-in-arrayjavascript

/*
Write a function called addKeyAndValue which accepts an array of objects, a key, and a value and returns the array passed to the function with the new key and value added for each object 

Examples:
    addKeyAndValue([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'title', 'instructor') 
    
    // [{name: 'Elie', title:'instructor'}, {name: 'Tim', title:'instructor'}, {name: 'Matt', title:'instructor'}, {name: 'Colt', title:'instructor'}]

*/
function addKeyAndValue(arr,key,value){
    arr.forEach(function(item){item[key] = value;});
    return arr;
}
// Referenced code: 
// Post from Dhanajaya Kuppu on 10/3/16: https://stackoverflow.com/questions/39827087/add-key-value-pair-to-all-objects-in-array

/*
Write a function called vowelCount which accepts a string and returns an object with the keys as the vowel and the values as the number of times the vowel appears in the string. This function should be case insensitive so a lowercase letter and uppercase letter should count

Examples:
    vowelCount('Elie') // {e:2,i:1};
    vowelCount('Tim') // {i:1};
    vowelCount('Matt') // {a:1})
    vowelCount('hmmm') // {};
    vowelCount('I Am awesome and so are you') // {i: 1, a: 4, e: 3, o: 3, u: 1};
*/
function vowelCount(str){
let strArr = str.toLowerCase().split('');
var obj = {};
strArr.forEach(function(ch){
    if ('aeiou'.indexOf(ch) !== -1) {
    obj[ch] = (obj[ch] || 0 ) + 1;
}
});
return obj;
}
// Referenced code:
// Post by dting on 4/21/15: https://stackoverflow.com/questions/29763871/javascript-function-to-fill-an-object-with-the-vowels-as-the-keys-and-the-count

/*
Write a function called doubleValuesWithMap which accepts an array and returns a new array with all the values in the array passed to the function doubled

Examples:
    doubleValuesWithMap([1,2,3]) // [2,4,6]
    doubleValuesWithMap([1,-2,-3]) // [2,-4,-6]
*/

function doubleValuesWithMap(arr) {
return arr.map(function(v){
    return v * 2;
});
}
// Referenced code: 
// Post from Jaromanda X on 7/25/15: https://stackoverflow.com/questions/31644673/how-to-double-numbers-in-an-array-and-save-it-in-a-new-array
// Springboard example from map Handout - Example 3


/*
Write a function called valTimesIndex which accepts an array and returns a new array with each value multiplied by the index it is currently at in the array.

Examples:
    valTimesIndex([1,2,3]) // [0,2,6]
    valTimesIndex([1,-2,-3]) // [0,-2,-6]
*/

function valTimesIndex(arr){
   let result = arr.map((x,i) => x*i);
   return result;
}

// Referenced code: 
// Post from kevin ternet on 11/16/16: https://stackoverflow.com/questions/40641439/multiply-array-elements-by-index-position

/*
Write a function called extractKey which accepts an array of objects and some key and returns a new array with the value of that key in each object.

Examples:
    extractKey([{name: 'Elie'}, {name: 'Tim'}, {name: 'Matt'}, {name: 'Colt'}], 'name') // ['Elie', 'Tim', 'Matt', 'Colt']
*/

function extractKey(arr, key){
    return arr.map(function(o) {
        return o[key];});
    
}
// Referenced code: 
// Post from Alnitak 10/25/13: https://stackoverflow.com/questions/19590865/from-an-array-of-objects-extract-value-of-a-property-as-array
/*
Write a function called extractFullName which accepts an array of objects and returns a new array with the value of the key with a name of "first" and the value of a key with the name of  "last" in each object, concatenated together with a space. 

Examples:
    extractFullName([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia"}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele"}]) // ['Elie Schoppik', 'Tim Garcia', 'Matt Lane', 'Colt Steele']
*/

function extractFullName(arr){
   let fullName = arr.map(
    (arr) => 
    `${arr.first} ${arr.last}`
    );
    return (fullName);
}
// Referenced code: 
// Example 3: https://dev.to/pratham82/functional-programmigng-in-js-using-map-filter-and-reduce-4ogf
/*
Write a function called filterByValue which accepts an array of objects and a key and returns a new array with all the objects that contain that key.

Examples:
    filterByValue([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner') // [{first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Colt', last:"Steele", isCatOwner: true}]
*/

function filterByValue(arr, key) {
    return arr.filter(function(value){
        return value[key];
    })
}
// Referenced code: 
// Post from Alnitak 10/25/13: https://stackoverflow.com/questions/19590865/from-an-array-of-objects-extract-value-of-a-property-as-array
// Springboard example from filter Handout - Example 4
/*
Write a function called find which accepts an array and a value and returns the first element in the array that has the same value as the second parameter or undefined if the value is not found in the array.

Examples:
    find([1,2,3,4,5], 3) // 3
    find([1,2,3,4,5], 10) // undefined
*/

function find(arr, searchValue) {
    return arr.filter(function(value){
        return value === searchValue;})[0];
}
// Referenced code: 
// Post from Alnitak 10/25/13: https://stackoverflow.com/questions/19590865/from-an-array-of-objects-extract-value-of-a-property-as-array
// Post from Engr.Aftab Ufaq on 12/6/22: https://stackoverflow.com/questions/10457264/how-to-find-first-element-of-array-matching-a-boolean-condition-in-javascript
// Post from Jack on 9/17/13: https://stackoverflow.com/questions/10457264/how-to-find-first-element-of-array-matching-a-boolean-condition-in-javascript
// Springboard example from filter Handout - Example 4

/*
Write a function called findInObj which accepts an array of objects, a key, and some value to search for and returns the first found value in the array.

Examples:
    findInObj([{first: 'Elie', last:"Schoppik"}, {first: 'Tim', last:"Garcia", isCatOwner: true}, {first: 'Matt', last:"Lane"}, {first: 'Colt', last:"Steele", isCatOwner: true}], 'isCatOwner',true) // {first: 'Tim', last:"Garcia", isCatOwner: true}
*/

function findInObj(arr, key, searchValue) {
    return arr.filter(function(value){
        return value[key] === searchValue;
    })[0];
}
// Referenced code: 
// Post from Alnitak 10/25/13: https://stackoverflow.com/questions/19590865/from-an-array-of-objects-extract-value-of-a-property-as-array
// Post from Engr.Aftab Ufaq on 12/6/22: https://stackoverflow.com/questions/10457264/how-to-find-first-element-of-array-matching-a-boolean-condition-in-javascript
// Post from Jack on 9/17/13: https://stackoverflow.com/questions/10457264/how-to-find-first-element-of-array-matching-a-boolean-condition-in-javascript
// Springboard example from filter Handout - Example 4
/*
Write a function called removeVowels which accepts a string and returns a new string with all of the vowels (both uppercased and lowercased) removed. Every character in the new string should be lowercased.

Examples:
    removeVowels('Elie') // ('l')
    removeVowels('TIM') // ('tm')
    removeVowels('ZZZZZZ') // ('zzzzzz')
*/

function removeVowels(str) {
    let vowels = ['a','e','i','o','u'];
    let lowerCase =str.toLowerCase();
    return lowerCase.split('').filter(char => !vowels.includes(char)).join('');

}
// Referenced code: 
// Post from Tarreq on 7/17/21: https://stackoverflow.com/questions/68416993/removing-vowels-from-string-javascript-why-is-my-solution-not-working
// Post from ewwink on 10/2/10 (editted by Peter Mortensen on 2/18/22): https://stackoverflow.com/questions/154862/convert-javascript-string-to-be-all-lowercase

/*
Write a function called doubleOddNumbers which accepts an array and returns a new array with all of the odd numbers doubled (HINT - you can use map and filter to double and then filter the odd numbers).

Examples:
    doubleOddNumbers([1,2,3,4,5]) // [2,6,10]
    doubleOddNumbers([4,4,4,4,4]) // []
*/

function doubleOddNumbers(arr) {
    return arr.filter((value) => value % 2 !== 0).map((value) => value * 2);

}

// Referenced code: 
// Post from Piyush Rana on 10/3/2020: https://stackoverflow.com/questions/64181022/how-to-return-a-new-array-only-containing-odd-numbers