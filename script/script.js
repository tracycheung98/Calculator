function addValue(){
    var input_a = parseInt(document.getElementById('input_a').value, 10);
    var input_b = parseInt(document.getElementById('input_b').value, 10);
    var text;
    var output = 0;
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

function subValue(){
    var input_a = parseInt(document.getElementById('input_a').value, 10);
    var input_b = parseInt(document.getElementById('input_b').value, 10);
    var text;
    var output = 0;

    if (isNaN(input_a) || isNaN(input_b)){
        text = "Please input an integer only.";
        input_a = 0;
        input_b = 0;
    } else{
        output = input_a - input_b;
        if(input_b < 0){
            text = input_a + '-(' + input_b + ")=" + output;
        }else{
            text = input_a + '-' + input_b + "=" + output;
        }
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

function triValue(){
    var input = parseFloat(document.getElementById('input_tri').value);

    if (isNaN(input)){
        text = "Please input a valid value.";
        input = 0;
    } else{
        if(document.getElementById('tri').value == "sin"){
            text = "sin(" + input+")= "+ Math.sin(input).toString();
        }else if(document.getElementById('tri').value == "cos"){
            text = "cos(" + input+")= "+ Math.cos(input).toString();
        }else if(document.getElementById('tri').value == "tan"){
            text = "tan(" + input+")= "+ Math.tan(input).toString();
        }
    }
    document.mycalculator.output.value = text;
}