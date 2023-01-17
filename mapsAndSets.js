//Set(4) {1, 2, 3, 4}
//'ref'
//Map(2) {Array(3) => true, Array(3) => false}

const hasDuplicate = (array) => new Set(array).size !== array.length;



const vowelCount = (string) => {

    let vowels = "aeiou";
    let vowelMap = new Map();
    let array = Array.from(string.toLowerCase());


    array.forEach((char) => {

        if(vowels.includes(char)){

            if(!vowelMap.has(char)){
                vowelMap.set(char, 1);
            } else {
                vowelMap.set(char, vowelMap.get(char) + 1);
            }

        }
    })

    return vowelMap;


}