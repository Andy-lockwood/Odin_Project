

    function add7 (num){
        return(num+7);
    }

    function multiply (num1, num2){
        return(num1 * num2);
    }

    function capitalize (string){
        if (typeof string !== 'string') return ''

        return(string.charAt(0).toUpperCase() + string.slice(1));
    }

    function lastLetter (string){
        if (typeof string !== 'string') return ''
        let s = (string.length) -1
        return(string.charAt(s));
    }



    const helloWorld = function() {
        return "Hello World"
    }

    const repeatString = function(string, num) {
        for( i =0; i < num; i++){
            console.log(string);
        }
        return "";
    }

    const reverseString = function(string) {
        let stringSplit = string.split("");
        let reverseArray = stringSplit.reverse();
        let join = reverseArray.join("");

        return join;
    }

    // Not working right, need to fix
    const removeFromArray = function(x, num) {
        let array = [1,2,3,4,5,6];
        for( i = 0; i<x.length; i++) {
            if (i === num){
                x.splice(i-1,1);
            }
        }

        return x;
    }



    const sumAll = function(num1, num2) {
        let large
        let small
        if(num1 > num2){
            large = num1;
            small = num2;
        }
        else {
            large = num2;
            small = num1;
        }
        let value = 0;
        for (i = small; i< large+1; i++){
            value = value + i;
         //   console.log(i);
        }
        return value;
    }

    const leapYears = function(num) {
        return ((num % 4 == 0) && (num % 100 != 0)) || (num % 400 == 0);
    }

    const tempConversion = function(temp) {
        let fahrenheit = temp * (9/5) + 32;
        let celcius = (temp -32) * (5/9);

        let f = fahrenheit.toFixed(1);
        let c = celcius.toFixed(1);
        console.log("That temperature in Fahrenheit is ", f, ". in Celcius it is ", c, ".");

        return ""
    }





    function add (num1, num2) {
        let addObj = {
            1: num1, 
            2: num2,
        };
       // let addition = add
     //   console.log(addObj[1]);

        return addObj[1] + addObj[2];
    }
    
    function subtract (num1, num2) {
        let addObj = {
            1: num1, 
            2: num2,
        };
        return addObj[1] - addObj[2];
    }
    
    function sum () {
        // need to do
    }
    
    function multiply () {
        // need to do
    }
    
    function power(num1, num2) {
        let base = 1;
        for (i =0; i<num2; i++){
          base = base * num1;
         //   console.log(base);
        }
        return base;
    }
    
    function factorial(num) {
        if (num == 0 || num==1){
            return 1;
        }
        let facAns = 1;
        for (i=2; i<num+1; i++){
          facAns = facAns * i
        //    console.log(facAns);
        }
        console.log("The Factorial of ", num, " is ", facAns);
        return "";
    }

    const palindromes = function(phrase) {
        // need to convert to an array, run through array to match each letter
    }

    const caesar = function(phrase, numShift) {
        // create array
        let chars = phrase.charCodeAt(0) + numShift;
        console.log("Value: ", chars);
        // Add array value to new string
        
        return " ";
    }
 


    
    console.log("Odin Project Javascript 1")
    console.log(add7(6))
    console.log(multiply(5,7))
    console.log(capitalize("fred"))
    console.log(lastLetter("Greog"))

    console.log("")
    console.log("Odin Project Javascript 2")
    console.log(helloWorld());
    console.log(repeatString("hey", 5));
    console.log(reverseString("AndrewLockwood"));
    //console.log(removeFromArray([1,2,3,45,4,4,4,5,6], 5));
    console.log(sumAll(1,4));
    console.log(leapYears(2020));
    console.log(tempConversion(0));
    
    console.log("");
    console.log("Odin Project Javascript 3");
    console.log(add(0,0));
    console.log(subtract(0,5));
    console.log(factorial(8));
    console.log(power(4,3));

    console.log(caesar("Catbath", 4));

