// Chapter-1

// Q-1
// alert("Hello World");

// Q-2
// alert("Error! Please enter a valid password.");

//Q-3
// alert("Welcome to JS Land... \n Happy Coding!");

//Q-4
// alert("Welcome to JS Land...");

// alert("Prevent this page from creating additional dialogs.");

// Q-5 
// from console
// alert("Hello... I can  run JS through my web browser's console");

// Q-6

//  Answer in html File
// alert("Hello World");

// Q-7

// answer in HTML File 
// The last condition is most suitable

// Chapter-2

// Q-1

// var username = "";

// Q-2

// var myName = "Muhammad Mughees";

// Q-3

// var message = "Hello World";
// alert(message);

// Q-4

// var username = "Muhammad Mughees";

// alert(username);

// var age = "21";

// alert(age)

// var course = "Web and Mobile Development Course";

// alert(course);

// Q-5

// var product = "PIZZA \n PIZZ \n PIZ \n PI \n P";

// alert(product);

// Q-6

// var email = "My email address is bk786@gmail.com";

// alert(email);

// Q-7

// var book = "A smarter way to learn JavaScript";
// book = "I am trying to learn from the Book A smarterway to learn Javascript";

// alert(book);

// Q-8

// document.write("Yah! I can write HTML content through Javascript");

// Q-9

// var emojy = "“▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬”";

// alert(emojy);

// Chapter-3


//  Q-1

// var age = 21;

// alert("I am" + " " + age + " " + "years old");

//  Q-2

// var N = 14;

// alert("You have visited this site" + " " + N + " " + "times");

//  Q-3
// (a)
// var birthYear = 1999;

// document.write("My Brith Year is " + birthYear);

//  (b)

// var birthYear ;
// birthYear = 1999;

// document.write("My Brith Year is " + birthYear + "<br />" + "Data type of my declared varible is number");

// Q-5

// var visitorName;
// visitorName = "Shahhzaib";
 
// var productTitle = "Sweater";

// var quantity = "4";

// document.write( visitorName + " odered" + " " + quantity +" " + productTitle + " on XYZ Clothing Store");


// Chap-4

// Q-1

// var name1="mughees";
//     name2="bilal";
//     name3="shahbaz";

// Q-2

// illigal

// var 1name="mughees";
// var +number=1;
// var .fullname="muhamamd  mughees";
// var -age="21";
// var =year="2021"

// legal

// var name1="mughees";
// var ;number=1;
// var fullName="muhamamd  mughees";
// var $age="21";
// var _year="2021";

// Q-3
// (a)
// document.write("<h1>Rules for naming JS variables</h1>" );
// (b)
// document.write("Variable names can only contain $ , _, letters and number in between or end. For example $my_1stVariable  <br />");
// (c)
// document.write("Variable must begin with a $ , _ or letters  For example $name, _name or name  <br />");

// (d)

// document.write("Variable names are case sensitive  <br />");

// (e)


// document.write("Variable name should not be JS keywords");

// Chap-5

// Q-1

// var x=3;
// var y=5;
// var z=x+y;

// document.write("Sum of" + " " + x + " " + "and" + " " + y + " " + "is" + " " +z);

// Q-2
// (a)
// var x=3;
// var y=5;
// var z=x-y;

// document.write("Subtract of" + " " + x + " " + "and" + " " + y + " " + "is" + " " +z);

// (b)
// var x=3;
// var y=5;
// var z=x*y;

// document.write("Multiply of" + " " + x + " " + "and" + " " + y + " " + "is" + " " +z);

// (c)

// var x=3;
// var y=5;
// var z=x/y;

// document.write("Division  of" + " " + x + " " + "and" + " " + y + " " + "is" + " " +z);

// (d)

// var x=5;
// var y=3;
// var z=x%y;

// document.write("modulus of" + " " + x + " " + "and" + " " + y + " " + "is" + " " +z);

// Q-3

// var number;
// document.write("“Value after variable declaration is number” <br />");

// number=5;
// document.write("“Initial value: " + " " + number +" ”" + "<br />");

// number=number+1;
// document.write("“Value after increment is" + " " + number + "”" + "<br />" );

// number=number+7;
// document.write("“Value after increment of 7 is" + " " + number + "”"  + "<br />");

// number=number-1;
// document.write("“Value after decreament is" + " " + number + "”"  + "<br />");

// number=number%3;

// document.write("“Modulus after divide is" + " " + number + "”"  + "<br />");

// Q-4

// var ticket=600;
// var quantity=5;
// var cost=ticket*quantity;

// document.write("Total cost to buy" + " " + ticket + " " + "tickets to a movie is" +" " + cost + " " + "PKR")

// Q-5

// var a=prompt("enter value");
// var b=prompt("enter multiply");

// for(i=1; i <= b; i++){
//     document.write(a + " " + "x" + " " + i + " " + "=" + " " + a*i + "<br />")
// }

// Q-6

// var c=25;

// document.write(c + " " +"<sup>0</sup>" + "C" + " " + "is" + ((c*9/5)+32) +"<sup>0</sup>" + "C" + "<br />");

// var f=70;

// document.write(f + " " +"<sup>0</sup>" + "F" + " " + "is" +(f-32)*5/9+"<sup>0</sup>" + "F");


// Q-7

// var item1Price=650;
// var item2Price=100;
// var quantity1=3;
// var quantity2=7;
// var ship=100;
// document.write("<h1>Shopping Card</h1>")
// document.write("Price of item 1 is" +" " + item1Price + "<br />");
// document.write("Quantity of item 1 is" +" " + quantity1 + "<br />");
// document.write("Price of item 2 is" +" " + item2Price + "<br />");
// document.write("Quantity of item 2 is" +" " + quantity2 + "<br />");
// document.write("Shipping Charges"+ " " + ship);
// document.write("Total cost of your order is" + " " + ((item1Price*quantity1)+(item2Price*quantity2)+ship) )

// Q-8

// var total=980;
// var obt=804;
// var perc=obt/total*100;

// document.write("Total Marks :" + " " + total + "<br />");
// document.write("Obtained Marks :" + " " + obt + "<br />");
// document.write("Percentage :" + " " + perc);

// Q-9

// var us=104.8;
// var riyal=28;
// var pak=(us*10)+(riyal*25);

// document.write("<h1>Currrency in PKR</h1>")
// document.write( "Total Currency in PKR is" + " " +pak);

// Q-10

// var numb=10;

// document.write(((numb+5)*10)/2);

// Q-11

// var curyear=2021;
// var birthyear1=1999;
// var birthyear2=1997;

// document.write("<h1>Age Calculator</h1>")
// document.write("Current year:" + " " + curyear+ "<br />");
// document.write("Birth year:" + " " + birthyear1 +" " + "or " + birthyear2+ "<br />");
// document.write("Your are either "+ (curyear-birthyear1) + " " +"or " + (curyear-birthyear2) + " " + "years old");

// Q-12

// var radius = 20;
// var circumference = (2*3.142)*radius;
// var area = 3.142* (radius*radius);

// document.write("<h1>The Geometrizer</h1>")
// document.write("Radius of a circle is " + " " + radius + "<br />");
// document.write("The circumference is " + " " + circumference + "<br />");
// document.write("The area is " + " " + area);


// Q-13

// var snack = "fryO";
// var age = 15;
// var maxAge = 65;
// var restAge = maxAge-age;
// var amountPerDay = 3;

// document.write("<h1>The lifetime supply calculator</h1>")
// document.write( "Favorite snack:"+ " " + snack+ "<br />")
// document.write( "Current age:"+ " " + age+ "<br />")
// document.write( "Estimated Maximum age:"+ " " + maxAge+ "<br />")
// document.write( "Amount of snacks per day:"+ " " + amountPerDay+ "<br />")
// document.write("“You will need " + (restAge*365)*amountPerDay + "to last you until the ripe old age of " + maxAge + "”")

// Chap-6-9

// Q-1

// var a=10;

// document.write("The value of a is " + a + "<br />"+ "<br />"+ "<br />");

// document.write("The value of ++a is " + ++a + "<br />");
// document.write("Now the value of a is " + a + "<br />"+ "<br />"+ "<br />");
// document.write("The value of a++ is " + a++ + "<br />");
// document.write("Now the value of a is " + a + "<br />"+ "<br />"+ "<br />");
// document.write("The value of --a is " + --a + "<br />");
// document.write("Now the value of a is " + a + "<br />"+ "<br />"+ "<br />");
// document.write("The value of a-- is " + a-- + "<br />");
// document.write("Now the value of a is " + a + "<br />"+ "<br />"+ "<br />");

// Q-2

// var a = 2;
// var b = 1;

//  document.write("Value Of a is" + a + "<br />");
//  document.write("Value Of b is" + b + "<br />");


// //  --a - --b + ++b  + b--;
// //  (1) - (0) + (1) + (1) = 3; 

// document.write("result is " + (--a - --b + ++b  + b--) );

// Q-3

// var userName = prompt("Enter Your Name");
// alert("Hi Sir!");

// Q-4.Not found.
// Q-5

// var a=prompt("enter value");
// var b= "";

// for(i=1; i <= 10; i++){
//     if(a === b){
//         document.write(5 + " " + "x" + " " + i + " " + "=" + " " + 5*i + "<br />")
//     }else{
//         document.write(a + " " + "x" + " " + i + " " + "=" + " " + a*i + "<br />")
//     }
// }

// Q-6

// var sub1 = prompt("Enter subject 1");
// var sub2 = prompt("Enter subject 2");
// var sub3 = prompt("Enter subject 3");

// var tMarks = 100;

// var sub1Marks = +prompt("Your marks of subject 1");
// var sub2Marks = +prompt("Your marks of subject 2");
// var sub3Marks = +prompt("Your marks of subject 3");

// var perc1 = sub1Marks / tMarks * 100;
// var perc2 = sub2Marks / tMarks * 100;
// var perc3 = sub3Marks / tMarks * 100;

// document.write("<table><tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>" + "<tr><td>" + sub1 + "</td>" + "<td>" + tMarks + "</td>" + "<td>" + sub1Marks + "</td>" + "<td>" + perc1 + "%" + "</td></tr>" + "<tr><td>" + sub2 + "</td>" + "<td>" + tMarks + "</td>" + "<td>" + sub2Marks + "</td>" + "<td>" + perc2 + "%" + "</td></tr>" + "<tr><td>" + sub3 + "</td>" + "<td>" + tMarks + "</td>" + "<td>" + sub3Marks + "</td>" + "<td>" + perc3 + "%" + "</td></tr>" + "<tr><th></th><th>" + tMarks*3 + "</th><th>" +(sub1Marks+sub2Marks+sub3Marks)+"</th><th>" + ((sub1Marks+sub2Marks+sub3Marks)/300*100)+ "</th></tr></table>");

// Chap-9-11

// Q-1

// var city=prompt("Enter city name");

// if(city === "karachi"){
//     alert("Wellcome to city of lights!")
// }

// Q-2

// var gender=prompt("Enter city name");

// if(gender === "male"){
//     alert("Good morning Sir!")
// }else if(gender === "female"){
//     alert("Good morning Ma'am!")
// }

// Q-3

// var color=prompt("enter signal color name");

// if(color === "red"){
//     alert("Must Stop");
// }else if(color === "yellow"){
//     alert("Ready to move");
// }else if(color === "green"){
//     alert("Move Now");
// }

// Q-4

// var fuel=prompt("Enter fuel in litres");

// if(fuel <.25){
//     alert("“Please refill the fuel in your car”")
// }

// Q-5
// (a)
//  var a = 4;
// if (++a === 5){
// alert("given condition for variable a is true");
// }
// Condition is true.


// (b)

// var b = 82;
// if (b++ === 83){
// alert("given condition for variable b is true");
// }
// Condition is False.

// (c)

// var c = 12;
// if (c++ === 13){
// alert("condition 1 is true");
// }
// // condition1 is false

// if (c === 13){
// alert("condition 2 is true");
// }
// // condition 2 is true

// if (++c < 14){
// alert("condition 3 is true");
// }
// // condition3 is false

// if(c === 14){
// alert("condition 4 is true");
// }
// // condition 4 is true

// (d)

// var materialCost = 20000;
// var laborCost = 2000;
// var totalCost = materialCost + laborCost;
// if (totalCost === laborCost + materialCost){
// alert("The cost equals");
// }

// Condition is true

// (e)

//  if (true){
//     alert("True");
//     }

// Condition is true

// if (false){
// alert("False");
// }
// Condition is false

// (f)

// if("car" < "cat"){
//     alert("car is smaller than cat");
//     }

// Condition is true

// Q-6

// var totalMarks = prompt("Enter your Total marks");
// var marksObtained = prompt("Enter your Obtained marks");
// var percentage = (marksObtained/totalMarks)*100;
// var grade1 = "A-one";
// var remarks1 = "Excellent";
// var grade2 = "A";
// var remarks2 = "Good";
// var grade3 = "B";
// var remarks3 = "You need to improve";
// var grade4 = "Fail";
// var remarks4 = "Sorry";

// document.write("<h1>Marks Sheet</h1>" + "<br />" + "<br />" + "<br />" );
// if(percentage > 79){
//     document.write("Total Marks"  + " "  + totalMarks  + "<br />");
//     document.write("Marks Obtained"  + " " +  marksObtained  + "<br />" );
//     document.write("Percentage" + " "  + percentage  + "<br />");
//     document.write("Grade"  + " " +  grade1  + "<br />");
//     document.write("Remarks" + " " +  remarks1  + "<br />");
// }else  if(percentage > 69){
//     document.write("Total Marks"  + " "  + totalMarks  + "<br />");
//     document.write("Marks Obtained"  + " " +  marksObtained  + "<br />" );
//     document.write("Percentage" + " "  + percentage  + "<br />");
//     document.write("Grade"  + " " +  grade2  + "<br />");
//     document.write("Remarks" + " " +  remarks2  + "<br />");
// }else if(percentage > 59){
//     document.write("Total Marks"  + " "  + totalMarks  + "<br />");
//     document.write("Marks Obtained"  + " " +  marksObtained  + "<br />" );
//     document.write("Percentage" + " "  + percentage  + "<br />");
//     document.write("Grade"  + " " +  grade3  + "<br />");
//     document.write("Remarks" + " " +  remarks3  + "<br />");
// }else if(percentage < 60){
//     document.write("Total Marks"  + " "  + totalMarks  + "<br />");
//     document.write("Marks Obtained"  + " " +  marksObtained  + "<br />" );
//     document.write("Percentage" + " "  + percentage  + "<br />");
//     document.write("Grade"  + " " +  grade4  + "<br />");
//     document.write("Remarks" + " " +  remarks4  + "<br />");
// }

// Q-7

// var secNumb=6;
// var userNumb= +prompt("Guess your number");

// if (userNumb === secNumb){
//     alert("“Bingo! Correct answer”");
// }else if(userNumb === secNumb+1){
//     alert("“Close enough to the correct answer”")
// }else{
//     alert("Try Again!")
// }


// Q-8

// var numb=prompt("Enter number");

// if(numb % 3 === 0){
//     alert("Divisible by 3");
// }

// Q-9

// var numb=+prompt("Enter you number");

// if(numb % 2  === 0){
//     alert(numb + " is Even Number");
// }else{
//     alert(numb + " is Odd Number");
// }

// Q-10

// var temp=+prompt("Enter temperature");

// if(temp > 40){
//     alert(" “It is too hot outside.”")
// }else if(temp > 30){
//     alert("“The Weather today is Normal.”")
// }else if(temp > 20){
//     alert("“Today’s Weather is cool.”")
// }else if(temp > 10){
//     alert("“OMG! Today’s weather is so Cool.”")
// }

// Q-11

// var firstNumber=+prompt("Enter first number");

// var secondNumber=+prompt("Enter second number");
// var operation=prompt("What do you want with number?");

// var answer=(firstNumber+(operation)+secondNumber);

// if(operation === '+'){
//     alert(firstNumber + secondNumber);
// }else if(operation === '-'){
//     alert(firstNumber - secondNumber);
// }else if(operation === '*'){
//     alert(firstNumber * secondNumber);
// }else if(operation === '/'){
//     alert(firstNumber / secondNumber);
// }else if(operation === '%'){
//     alert(firstNumber % secondNumber);
// }

// Chapter-12-13

// Q-1

// var input = prompt("Enter what you want");

// if ( input >="A"  && input <= "Z") {
//     alert(input + " is Uppercase");
// } else if (input >= "a" && input <= "z") {
//     alert(input + " is Lowercase");
// }else {
//     alert(input + " is a number");
// }


// Q-2

// var a=prompt("Enter first integar");
// var b=prompt("Enter second integar");

// if(a >0 && b>0 && a >b){
//     alert(a);
// }else if(a >0 && b>0 && a<b){
//     alert(b);
// }else if(a === b && a >0 && b>0){
//     alert("Both numbers are equal");
// }

// Q-3

// var number=prompt("Enter your number");
// if(number > 0)
// {
//     alert(number+" is a positive number");
// }
// else if(number < 0)
// {
//     alert(number+" is a negative number");
// }
// else
// {
//    alert(number+" is neither positive nor negative");
// }

// Q-4

// var inp=prompt("Enter a letter")


// if(inp === "a" || inp === "e" || inp === "i" || inp === "o" || inp === "u"){
//     alert("True");
// }else{
//     alert("false");
// }


// Q-5

// var password="mughees";
// var ask=prompt("Enter your password");

// if(ask === ""){
//     alert("“ Please enter your password”");
// }else if(ask === password){
//     alert("“Correct! The password you entered matches the original password”");
// }else{
//     alert("Incorrect password!");
// }

// Q-6


// var hour = +prompt("Enter hours");
// if (hour < 18) {
// alert("Good day");
// }else{
//     alert("Good evening");
// }

// Q-7

// var time=prompt("Enter time here");
   
// if(time >= 0000 && time < 1200){
//     alert("Good Morning!");
// }else if(time >= 1200 && time <1700){
//     alert("Good Afternoon");
// }else if(time >= 1700 && time <2100){
//     alert("Good Evening");
// }else if(time >= 2100 && time <2359){
//     alert("Good Night");
// }


// Chapter # 14-16

// Question 1

// var student = ["Ali" , "bilal" , "mughees"];

// Question 2

// var fruits = new Array( "apple", "orange", "mango" );

// Question 3

// var arrName = ["Ali" , "bilal" , "mughees"];

// Question 4

// var arrNumber = [ 1 , 2 , 3 , 4];

// Question 5

// var arrBoolean = [true , false];

// Question 6

// var arrMixed = [true  + "Bilal" + 1];

// Question 7

// var qualification = ["SSC" , "HSC" , "BCS" , "BCOM" , "BS", "MS" , "M.PHil" , "PhD"];

// document.write("<h1>" + "Qualifications" + "<h1/>" + "<br />");
// document.write( "1) " + qualification[0] + "<br />");
// document.write( "2) " + qualification[1] + "<br />");
// document.write( "3) " + qualification[2] + "<br />");
// document.write( "4) " + qualification[3] + "<br />");
// document.write( "5) " + qualification[4] + "<br />");
// document.write( "6) " + qualification[5] + "<br />");
// document.write( "7) " + qualification[6] + "<br />");
// document.write( "8) " + qualification[7 ] + "<br />");

// Question 8


// var arrName = ["Ali" , "bilal" , "mughees"];
// var arrScore = [380 , 450 , 230];

// var total = 500;

// document.write("<h1>" + "Score of " + arrName[0] + " is " + arrScore[0] + "." + " Percentage: " + (arrScore[0]/total)*100 + " %" + "<h1 />");
// document.write("<h1>" + "Score of " + arrName[1] + " is " + arrScore[1] + "." + " Percentage: " + (arrScore[1]/total)*100 + " %" + "<h1 />");
// document.write("<h1>" + "Score of " + arrName[2] + " is " + arrScore[2] + "." + " Percentage: " + (arrScore[2]/total)*100 + " %" + "<h1 />");

// Question 9

// var color=["red","green","yellow","brown"];
// document.write(color.join(" ") + "<br />");


// var ask1stColor=prompt("Enter color name what you want to add in beginning");

// // (a)
// color.unshift(ask1stColor);
// document.write("The color added is " + ask1stColor + "<br >");
// document.write(color.join(" " ) + "<br />");


// // (b)
// var ask2ndColor=prompt("Enter color name what you want to add in ending");
// color.push(ask2ndColor);
// document.write("The color added is " + ask1stColor + "<br >");
// document.write(color.join(" " ) + "<br />");


// (c)

// var ask3rdColor=prompt("Enter color");
// var ask4thColor=prompt("Enter color");

// color.unshift(ask3rdColor,ask4thColor);
// document.write("The color added is " + ask3rdColor + ask4thColor+ "<br >");
// document.write(color.join(" " ) + "<br />");


// (d)

// document.write("The color deleted is " + color[0] +   "<br >");
// color.shift();
// document.write(color.join(" " ) + "<br />");

// (e)


// document.write("The color deleted is " + color[3] +   "<br >");
// color.pop();
// document.write(color.join(" " ) + "<br />");


// (f)

// var askIndex=prompt("Enter index");
// var askColor=prompt("Enter Color");

// color.splice(askIndex,0,askColor);
// document.write("The color added is " +askColor+ "<br >");
// document.write(color.join(" " ) + "<br />");


// (e)

// var askIndex=prompt("Enter index");
// var askRange=prompt("Enter Range");

// color.splice(askIndex,askRange);
// document.write(color.join(" " ) + "<br />");



// Question 10

// var score =[321 , 230 , 480 , 120];

// document.write("<h1>Score:</h1>");
// document.write("Scores of Students" + " " + score.join(" ") + "<br>");

// document.write("<h1>String:</h1>");
// document.write(score.sort().join(" "));


// Question 11

// var cities =["Karachi" , "Faisalabad" , "Islamabad" , "Multan"];

// document.write("Cities List" + "<br>"  + cities + "<br>");
// document.write("Selected Cities List" + "<br>"  + cities[3] + "," + cities[1] + ",");

// Question 12

// var arr =["this" , "is" , "my" , "cat"];

// document.write("Array:" + "<br>" + " " + arr + "<br>");
// document.write("Strings:" + "<br>"   + arr.join(" "));
//  Q-13

// var arr =["keyboard" , "mouse" , "printer" , "monitor"];

// document.write("Devices:" + "<br>" + " " + arr + "<br><br><br>");
// // document.write("Out:" + "<br>" + arr[0] + "<br>" + "Out:" + "<br>" +  arr[1] +  "<br>" + "Out:" + "<br>"  + arr[2] +   "<br>" + "Out:" + "<br>"  + arr[3]);

//  document.write(arr) 
// Q-14

// var arr =["keyboard" , "mouse" , "printer" , "monitor"];

// document.write("Devices:" + "<br>" + " " + arr + "<br><br><br>");
// document.write("Out:" + "<br>" + arr[3] + "<br>" + "Out:" + "<br>" +  arr[2] +  "<br>" + "Out:" + "<br>"  + arr[1] +   "<br>" + "Out:" + "<br>"  + arr[0]);

// Q-15

// var arr = ["Apple", "Sumsung", "Motorola", "Nokia", "Sony" , "Haier"];


// document.write("<select>" + "<option>" + arr[0] + "</option>" + "<option>" + arr[1] + "</option>" + "<option>" + arr[2] + "</option>" + "<option>" + arr[3] + "</option>" + "<option>" + arr[4] + "</option>" + "<option>" + arr[5] + "</option>" + "</select>");

// Chapter-17-20

//Q-1
// var arr=[];
// arr=[[],[],[]];
// 

//Q-2

// var arr=[[0,1,2,3],[1,0,1,2],[2,1,0,1]];
// for(var i=0; i < arr.length; i++){
//                document.write(arr[i].join(" ") + "<br />");

//Q-3

// var num=[1,2,3,4,5,6,7,8,9,10];
// for(i=0 ;i < num.length; i++){
//                document.write(i + "<br />);
}

// Q-4

// var numb=prompt("Enter your number);
// var range=prompt("Enter your range");
// for(i=1; i<= range; i++){
//             document.write(numb + "x" + i + "=" +(numb*i) + "<br />");
}




















