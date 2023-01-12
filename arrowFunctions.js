function double(arr) {
    return arr.map((val) => val * 2);
  }
  


function squareAndFindEvens(numbers){

    const squared = numbers.map((num) => (num ** 2));
    console.log(squared);
    const even = squared.filter((num) => (num % 2 == 0));

    return even;
}

//oooooor

function squareAndFindEvens(numbers){

    return (numbers.filter((num) => (num ** 2) % 2 == 0)).map((num) => (num ** 2));
    
   
} //Wanted to see if I could get it in one line, it is much harder to read though.