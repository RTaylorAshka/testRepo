// 8
// 1846

// {yearNeptuneDiscovered: 1846, yearMarsDiscovered: 1659}

// `Your name Alejandro and you like purple`
// `Your name Melissa and you like green`
// `Your name is undefined and you like green`

// Maya
// Marisa
// Chi

// Raindrops on roses
// whiskers on kittens
// [ "Bright copper kettles", "warm woolen mittens", "Brown paper packages tied up with strings"]

// [10, 30, 20]

const obj = {
    numbers: {
      a: 1,
      b: 2
    }
  };
  
const {numbers} = obj;
const {a} = numbers;
const {b} = numbers;

//

const arr = [1, 2];
[arr[0], arr[1]] = [arr[1], arr[0]];

//

const raceResults = ([first, second, third, ...rest]) => ({first, second, third, rest});

raceResults(['Tom', 'Margaret', 'Allison', 'David', 'Pierre']);


/*
  {
    first: "Tom",
    second: "Margaret",
    third: "Allison",
    rest: ["David", "Pierre"]
  }
*/