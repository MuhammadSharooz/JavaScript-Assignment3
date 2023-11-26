// Question # 01 
// Declare an empty array using JS literal notation to store
// student names in future.
var Name = [];
console.log(Name);

// Question # 02
// Declare an empty array using JS object notation to store
// student names in future. 
var studentName = [];
console.log(studentName)
var otherName= ["usman" , "kalid" , "sami"]
console.log(studentName.unshift(otherName));

// Question # 03
// Declare and initialize a strings array.
var stringArry= [" wajid" , "sajid" , "Usama", "wahab"]
console.log(stringArry);

// Question # 04
// Declare and initialize a Number array.
 var numberArry = [22 , 34 ,56 , 77, 36];
 console.log(numberArry);

// Question # 05
//  Declare and initialize a boolean array.
var  arr1 = ["sadiq" , 22 , true];
console.log(arr1);

// Question # 06
//  Declare and initialize a mixed array.
var mixedArry = ["Apple",{1: "Pie", 2: "Dumpling", 3: "Cider"}, "Banana", {1: "Bread", 2: "Republic"}]
console.log(mixedArry);

// Question # 07
// Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
// BS, BCOM, MS, M. Phil., PhD). Show the listed
// qualifications in your browser like:


var newArry = ["SSC" ,"HSC" , "BCS" , " BS", "BCOM" , "MS", "M.Phile", "PHD"]
console.log(newArry);

document.write("<h2>Qualifications:</h2>" + "<br>")
document.write("1) SSC "+"<br>" + " 2) HSC"+ "<br>" + "3) BCS"+ "<br>" + "4) BS "+"<br>"+ "5) BCOM "+"<br>"+ "6) MS "+"<br>" + "7) M.Phile" + "<br>" + "8) PHD" + "<br>" + "<br>"  )

// Question # 08
// Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:
var student=["Waqas" , "Majid "," Ahmad"];
var obtainedMarks = [250 , 330 , 287]
var totalMarks = [500]

console.log ("Score of Waqas is " + obtainedMarks[0] + ".percentage :" + (obtainedMarks[0] / totalMarks  )* 100 + "%" )
console.log ("Score of Majid is " + obtainedMarks[1] + ".percentage :" + (obtainedMarks[1] / totalMarks  )* 100 + "%")
console.log ("Score of Ahmad is " + obtainedMarks[2] + ".percentage :" + (obtainedMarks[2] / totalMarks  )* 100 + "%")

document.write("Score of Waqas is " + obtainedMarks[0] + ".percentage :" + (obtainedMarks[0] / totalMarks  )* 100 + "%" + "<br>" )
document.write("Score of Majid is " + obtainedMarks[1] + ".percentage :" + (obtainedMarks[1] / totalMarks  )* 100 + "%" + "<br>" )
document.write("Score of Ahmad is " + obtainedMarks[2] + ".percentage :" + (obtainedMarks[2] / totalMarks  )* 100 + "% "+ "<br>" + "<br>" )

// Question # 09
// Question # 09 (a)
var colorName = ["Brown ", "Blue ", "Black ", "Orange."]
console.log(colorName)
var newColor = prompt("what color you want to add beginning");
colorName.unshift( newColor)
console.log("The Update Arry is : " + colorName)

document.write("Arry : " + " Brown ," + " Blue," + " Black ," +  " Orange," + "<br>"   )
document.write("The Update Arry after added new color in the beginning is : " + colorName + ".<br>");

// // Question # 09 (b)
var newColor = prompt("what color you want to add End");
colorName.push( newColor)
console.log("The Update Arry is : " + colorName)
document.write("The Update Arry after added new color in the End is : " + colorName + ".<br>");

// Question # 09 (c)
colorName.unshift("White", "Purple")
console.log("The Update Arry is : " + colorName)
document.write("The Update Arry after added two new color in the beginning is : " + colorName + ".<br>");

// Question # 09 (d)
colorName.shift()
console.log("The Update Arry is : " + colorName)
document.write("The Update Arry after deleted the color in the beginning is : " + colorName + ".<br>");

// Question # 09 (e)
colorName.pop()
console.log("The Update Arry is : " + colorName)
document.write("The Update Arry after deleted the color in the End is : " + colorName + ".<br>");

// Question # 09 (f)
var newColor = prompt(" what color you want to add ");
var index = prompt("which index you want to added");
colorName.splice(index , 0 ,newColor)
console.log("The Update Arry is : " + colorName)
document.write("The Update Arry after added the new color is : " + colorName + ".<br>");

// // Question # 09 (e)
var index = prompt("which index you want to delete");
colorName.splice(0 , index )
console.log("The Update Arry is : " + colorName)
document.write("The Update Arry after deleted the index  is : " + colorName + ".<br>" + ".<br>");

// Question # 10
var studentScores = [230,330, 280, 270, 380]
console.log(studentScores)
var order = studentScores.sort()
console.log(order)

document.write("Scores of Students : " +  studentScores +  "<br>")

document.write("Ordered Scores of Students : " +  order  +  "<br>" +  "<br>")

// Question # 11

var citiesName = ["karachi", "Islamabad", "Peshawar", "Quetta" , "Lahore"]
console.log(citiesName);
var selected = citiesName.splice(3,2)
console.log(selected)

document.write("Cities List: " + citiesName +  "<br>")
document.write("Selected Cities List: " + selected +  "<br>" +  "<br>");

// Question # 12
var  arr = ["This", "is", "my", "cat"];
console.log(arr);
console.log(arr.toString())

document.write("Array :" + arr +   "<br>")
document.write("String :" + "This is my cat" +   "<br>"  +   "<br>")

// Question # 13

var devices = []
devices.push("Keybord")
devices.push("mouse")
devices.push("printer")
devices.push("monitor")

console.log(devices)

document.write("<b>Devices :</b> " + "<br>"  + devices + "<br>" +   "<br>")
document.write("Out: " +  devices[0] + "<br>" )
document.write("Out: " +  devices[1] +  "<br>")
document.write("Out: " +  devices[2] +  "<br>")
document.write("Out: " +  devices[3] +  "<br>" +  "<br>")

// Question # 14

document.write("<b>Devices :</b> " + "<br>"  + devices + "<br>" +   "<br>")
document.write("Out: " +  devices[3] + "<br>" )
document.write("Out: " +  devices[2] +  "<br>")
document.write("Out: " +  devices[1] +  "<br>")
document.write("Out: " +  devices[0] +  "<br>")