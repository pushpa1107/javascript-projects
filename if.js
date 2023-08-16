/*let balance =10000;
var amount = prompt("Enter a amount to transfer");

if(amount<balance){
    alert("before deduction amount" + balance)
    balance = balance - amount
    alert("deducted successfully")
    alert("before deduction amount" + balance)
}
else {
    alert("your balance is :" + balance + "enter amount less than your balance")
}*/

//if else if

/*let score = prompt("Enter marks")
let grade;

if(score>=90){
    grade = "A"
}
else if(score>=80){
    grade = "B"
}
else if(score>=70){
    grade = "C"
}
else {
    grade = "D"
}
alert("your marks :" + score +"grade:" + grade)*/

//switch

let num1 = +prompt("Enter a number1");
let num2 = +prompt("Enter a number2");
let operation = prompt("Enter which operation to do (+/-/*//)");
switch(operation){
    case '+':
        alert("sum of two numbers is" + (num1+num2))
        break;
    case '-':
        alert("Differnce of two numbers is" + (num1-num2))
        break; 
    case '*':
        alert("product of two numbers is" + (num1*num2))
        break; 
    case '+':
        alert("Division of two numbers is" + (num1/num2))
        break;  
    default :
        alert("Enter valid operation")            
}
