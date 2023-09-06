var buttons= document.getElementsByClassName("button");
var display = document.getElementById("display");

var operand1 =0;
var operand2 = null;
var operator = null;

for (let i = 0; i < buttons.length; i++) {
    
    buttons[i].addEventListener('click', function() {
        var value = this.getAttribute("data-value");
        if (value == "+") {
            operator ="+";
            operand1 = parseFloat(display.textContent);
            display.innerText ="";
        }else if (value == "-") {
            operator ="-";
            operand1 = parseFloat(display.textContent);
            display.innerText ="";
        }else if (value == "*") {
            operator ="*";
            operand1 = parseFloat(display.textContent);
            display.innerText ="";
        }else if (value == "/") {
            operator ="/";
            operand1 = parseFloat(display.textContent);
            display.innerText ="";
        }else if(value == "="){
            operand2 = parseFloat(display.textContent);
            var ans = eval(operand1 + operator + operand2);
            display.innerText = ans;
        }else if(value == "AC"){
            operand1 = 0;
            operand2 = null;
            display.innerText ="";
        }else{
            display.innerText +=value;
        }
    });
}