function showNumber(){

    var array = [];

    var start = 1;
    var end = 100;

    for (var i = start; i <= end; i++) {

        if(  i%3== 0 && i%5 == 0 ){
            array.push("FizzBuzz")
        }else if ( i%5 == 0 ) {
            array.push("Buzz")
        }else if ( i%3== 0 ) {
            array.push("Fizz")
        }
        array.push(i)
    }

    console.log(array);

}

showNumber();
