function addValue(){
    // get the operands value
    // parse to integer. You can use: parseInt(input, 10);
    var input_a = parseInt(document.getElementById('input_a').value, 10);
    var input_b = parseInt(document.getElementById('input_b').value, 10);
    var text;
    var output = 0;
    
    // perform operation
    // creating the text output
    // (if you want to check) print out in console
    // change the text area
    if (isNaN(input_a) || isNaN(input_b)){
        text = "Please input an integer only.";
        input_a = 0;
        input_b = 0;
    } else{
        output = input_a + input_b;
        text = input_a + "+" + input_b + "=" + output;
    }

    document.mycalculator.output.value = text;
}


function mulValue(){
    var input_a = parseInt(document.getElementById('input_a').value, 10);
    var input_b = parseInt(document.getElementById('input_b').value, 10);
    var text;
    var output = 0;

    if (isNaN(input_a) || isNaN(input_b)){
        text = "Please input an integer only.";
        input_a = 0;
        input_b = 0;
    } else{
        output = input_a * input_b;
        text = input_a + '×' + input_b + "=" + output;
    }

    document.mycalculator.output.value = text;
}

function divValue(){
    var input_a = parseInt(document.getElementById('input_a').value, 10);
    var input_b = parseInt(document.getElementById('input_b').value, 10);
    var text;
    var output = 0;

    if (isNaN(input_a) || isNaN(input_b)){
        text = "Please input an integer only.";
        input_a = 0;
        input_b = 0;
    } else{
        output = input_a / input_b;
        text = input_a + ":" + input_b + "=" + output;
    }

    document.mycalculator.output.value = text;
}
