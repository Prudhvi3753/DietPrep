function bimCalculator(weight,height){
    return weight/(height*height);
}
var bmi=bmiCalculator(70,1.8);
//bmi calculator
var a=prompt("enter your name:");
var b=prompt("enter your loved one name:");
var c=Math.random();
c=c*100;
if(c<50){
    alert("Not a good pair!");
}else{
    alert("its a good pair!");
}
console.log(Math.floor(c));

function bmiCalculator (weight, height) {
    return weight/(height*height);
}

//bmi calculator
var aa=bmiCalculator(80,1.8);
if(aa<18.5){
    console.log("Your BMI is "+aa+", so you are underweight.");
}else if(aa>18.5 && aa<24.9){
    console.log("Your BMI is"+aa+", so you have a normal weight");
}else if(aa>24.9){
    console.log("Your BMI is "+aa+", so you are overweight");
}

/* leap year */
var year=prompt("enter a year:");
if((year%4==0 && year%100!=0)||(year%400==0)){
    console.log("Leap year");
}else{
    console.log("Not a leap year");
}

//random name generator
var name=["prudhvi","eswar","swamy","phani","gopi","rakesh"];
var ran=Math.floor(Math.random()*name.length);
console.log(name[ran]+" is going to buy the lunch today!");

//fibonacci
var a=0;
var b=1;
var c;
var n=prompt("Enter the number of fibonacci:");
console.log(a+" "+b);
while(n>=0){
    c=a+b;
    console.log(c);
    a=b;
    b=c;
    n--;
}