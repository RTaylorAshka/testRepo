function filterOutOdds(...nums) {
    return nums.filter((num) => (num % 2 === 0));
  }


function findMin(...nums){
    return Math.min(...nums);
}

function mergeObjects(obj1, obj2){
    return {...obj1, ...obj2};
}

function doubleAndReturnArgs(arr, ...arg){
    return [...arr, ...arg.map((num) => num * 2)];
}




/** remove a random element in the items array
and return a new array without that item. */

const removeRandom = (items) => {
    let remove = Math.floor(Math.random() * items.length)
    return items.filter((item) => item !== items[remove]);
    
}

/** Return a new array with every item in array1 and array2. */

const extend = (array1, array2) => ([...array1, ...array2]);

/** Return a new object with all the keys and values
from obj and a new key/value pair */

const addKeyVal = (obj, key, val) => {
    let newObj = {...obj}
    newObj[key] = val;
    return newObj;
}


/** Return a new object with a key removed. */

const removeKey = (obj, key) => {
    delete obj[key];
    return obj;
};


/** Combine two objects and return a new object. */

const combine = (obj1, obj2) => ({...obj1, ...obj2});


/** Return a new object with a modified key and value. */

const update = (obj, key, val) => {
    let newObj = {...obj}
    newObj[key] = val;
    return newObj;
}