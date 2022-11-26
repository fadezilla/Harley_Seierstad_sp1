const userUrl = "https://randomuser.me/api/?results=1"
class Employee {
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }
}

class StaffMember extends Employee {
    constructor(name, surname, picture, email, status, outTime, duration, expectedReturnTime){
        super(name,surname);
        this.picture = picture;
        this.email = email;
        this.status = status;
        this.outTime = outTime;
        this.duration = duration;
        this.expectedReturnTime = expectedReturnTime;
    }
    StaffUserGet = () => {
        fetch(userUrl)
        .then((data) => data.json())
        .then((data) => fillTable(data));
    }
}

class deliveryDriver extends Employee{
    constructor(name, surname, vehicle, telephone, deliverAddress, returnTime){
        super(name, surname);
        this.vehicle = vehicle;
        this.telephone = telephone;
        this.deliverAddress = deliverAddress;
        this.returnTime = returnTime;
    }
    deliveryDriverIsLate(){
        
    }
}


const fillTable = (data) => {
     data.results.map((data) => {
        const tableFill = `
        <tr>
            <td> <img src="${data.picture.medium}"</td>
            <td> ${data.name.first}</td>
            <td> ${data.name.last}</td>
            <td> ${data.email}</td>
            <td> </td>
            <td> </td>
            <td> </td>
            <td> </td>
        </tr>
        `;

    document.getElementById("tableBody").innerHTML += tableFill;
     });
    
    };

firstTableFill = new StaffMember()
firstTableFill.StaffUserGet()
secondTableFill = new StaffMember()
secondTableFill.StaffUserGet()
thirdTableFill = new StaffMember()
thirdTableFill.StaffUserGet()
fourthTableFill = new StaffMember()
fourthTableFill.StaffUserGet()
fifthTableFill = new StaffMember()
fifthTableFill.StaffUserGet()



$(document).on("click", "#tableBody tr", function(){
    $(this).toggleClass("active bg-success").siblings().removeClass("active bg-success")
})
function addHours(numOfMinutes, date = new Date()) {
        date.setTime(date.getTime() + numOfMinutes * 60 * 1000);
  
        return date;
    }


function timeConvert(min) {
    if (min <= 60){
        return min + "m";
       } else {
        return Math.floor(min/60) + "h " + min%60 + "m"
      }
    }


    function staffOut(){
    if($('#tableBody > tr').hasClass('active') === false){
        alert("please select a row first")
       } else{
        duration = (prompt("How long is the absence expected to be?"));
       }
       if(duration > 60){
        var durationConverted = timeConvert(duration);
       }

    var regex = /^[0-9]+$/;
    var status = "Out"
    var time = new Date();
    outTime = ((time.getHours() < 10)?"0":"") + time.getHours() + ":" + ((time.getMinutes() < 10)?"0":"") + time.getMinutes();
    var addedTime = addHours(duration);
    expectedReturnTime = ((addedTime.getHours() < 10)?"0":"") + addedTime.getHours() + ":" + ((addedTime.getMinutes() < 10)?"0":"") + addedTime.getMinutes()
    var durationConverted = timeConvert(duration)
   if($('#tableBody > tr:nth-child(1)').hasClass('active') === true){
    if(duration.match(regex)) {
        $("#tableBody > tr:nth-child(1) > td:nth-child(5)").empty().append(status);
        $("#tableBody > tr:nth-child(1) > td:nth-child(6)").append(outTime);
        $("#tableBody > tr:nth-child(1) > td:nth-child(7)").append(durationConverted);
        $("#tableBody > tr:nth-child(1) > td:nth-child(8)").append(expectedReturnTime);
        duration1 = duration
        } else {
            alert("invalid input, try again.")
        }
   }
   if($('#tableBody > tr:nth-child(2)').hasClass('active') === true){
    if(duration.match(regex)) {
        $("#tableBody > tr:nth-child(2) > td:nth-child(5)").empty().append(status);
        $("#tableBody > tr:nth-child(2) > td:nth-child(6)").append(outTime);
        $("#tableBody > tr:nth-child(2) > td:nth-child(7)").append(durationConverted);
        $("#tableBody > tr:nth-child(2) > td:nth-child(8)").append(expectedReturnTime);
        duration2 = duration
        } else {
            alert("invalid input, try again.")
        }
   }
   if($('#tableBody > tr:nth-child(3)').hasClass('active') === true){
    if(duration.match(regex)) {
        $("#tableBody > tr:nth-child(3) > td:nth-child(5)").empty().append(status);
        $("#tableBody > tr:nth-child(3) > td:nth-child(6)").append(outTime);
        $("#tableBody > tr:nth-child(3) > td:nth-child(7)").append(durationConverted);
        $("#tableBody > tr:nth-child(3) > td:nth-child(8)").append(expectedReturnTime);
        duration3 = duration
        } else {
            alert("invalid input, try again.")
        }
   }
   if($('#tableBody > tr:nth-child(4)').hasClass('active') === true){
    if(duration.match(regex)) {
        $("#tableBody > tr:nth-child(4) > td:nth-child(5)").empty().append(status);
        $("#tableBody > tr:nth-child(4) > td:nth-child(6)").append(outTime);
        $("#tableBody > tr:nth-child(4) > td:nth-child(7)").append(durationConverted);
        $("#tableBody > tr:nth-child(4) > td:nth-child(8)").append(expectedReturnTime);
        duration4 = duration
        } else {
            alert("invalid input, try again.")
        }
   }
   if($('#tableBody > tr:nth-child(5)').hasClass('active') === true){
    if(duration.match(regex)) {
        $("#tableBody > tr:nth-child(5) > td:nth-child(5)").append(status);
        $("#tableBody > tr:nth-child(5) > td:nth-child(6)").append(outTime);
        $("#tableBody > tr:nth-child(5) > td:nth-child(7)").append(durationConverted);
        $("#tableBody > tr:nth-child(5) > td:nth-child(8)").append(expectedReturnTime);
        duration5 = duration
        } 
   }
   
}

function staffIn(){
    var status = "In"
    if($('#tableBody > tr:nth-child(1)').hasClass('active') === true){
        $("#tableBody > tr:nth-child(1) > td:nth-child(5)").empty().append(status);
        $("#tableBody > tr:nth-child(1) > td:nth-child(6)").empty();
        $("#tableBody > tr:nth-child(1) > td:nth-child(7)").empty();
        $("#tableBody > tr:nth-child(1) > td:nth-child(8)").empty();
    } 
    if($('#tableBody > tr:nth-child(2)').hasClass('active') === true){
        $("#tableBody > tr:nth-child(2) > td:nth-child(5)").empty().append(status);
        $("#tableBody > tr:nth-child(2) > td:nth-child(6)").empty();
        $("#tableBody > tr:nth-child(2) > td:nth-child(7)").empty();
        $("#tableBody > tr:nth-child(2) > td:nth-child(8)").empty();
    } 
    if($('#tableBody > tr:nth-child(3)').hasClass('active') === true){
        $("#tableBody > tr:nth-child(3) > td:nth-child(5)").empty().append(status);
        $("#tableBody > tr:nth-child(3) > td:nth-child(6)").empty();
        $("#tableBody > tr:nth-child(3) > td:nth-child(7)").empty();
        $("#tableBody > tr:nth-child(3) > td:nth-child(8)").empty();
    } 
    if($('#tableBody > tr:nth-child(4)').hasClass('active') === true){
        $("#tableBody > tr:nth-child(4) > td:nth-child(5)").empty().append(status);
        $("#tableBody > tr:nth-child(4) > td:nth-child(6)").empty();
        $("#tableBody > tr:nth-child(4) > td:nth-child(7)").empty();
        $("#tableBody > tr:nth-child(4) > td:nth-child(8)").empty();
    } 
    if($('#tableBody > tr:nth-child(5)').hasClass('active') === true){
        $("#tableBody > tr:nth-child(5) > td:nth-child(5)").empty().append(status);
        $("#tableBody > tr:nth-child(5) > td:nth-child(6)").empty();
        $("#tableBody > tr:nth-child(5) > td:nth-child(7)").empty();
        $("#tableBody > tr:nth-child(5) > td:nth-child(8)").empty();
    } if($('#tableBody > tr').hasClass('active') === false){
        alert("please select a row first")
       }
}


var currentDate = new Date();
const myInterval = setInterval(staffMemberIsLate, 1000);

function myStopFunction() {
    clearInterval(myInterval);
  }
rowOneDuration = $("#tableBody > tr:nth-child(1) > td:nth-child(7)").text()
rowTwoDuration = $("#tableBody > tr:nth-child(2) > td:nth-child(7)").text()
rowThreeDuration = $("#tableBody > tr:nth-child(3) > td:nth-child(7)").text()
rowFourDuration = $("#tableBody > tr:nth-child(4) > td:nth-child(7)").text()
rowFiveDuration = $("#tableBody > tr:nth-child(5) > td:nth-child(7)").text()
function staffMemberIsLate() {
    if($("#tableBody > tr:nth-child(1) > td:nth-child(5)").text() == "Out" && new Date() < new Date(currentDate.getTime() + (duration1 * 60 * 1000))){
        console.log("nr 1, person is out!")
    }
    if($("#tableBody > tr:nth-child(2) > td:nth-child(5)").text() == "Out" && new Date() < new Date(currentDate.getTime() + (duration2 * 60 * 1000))){
        console.log("nr 2, person is out!")
    }
    if($("#tableBody > tr:nth-child(3) > td:nth-child(5)").text() == "Out" && new Date() < new Date(currentDate.getTime() + (duration3 * 60 * 1000))){
        console.log("nr 3, person is out!")
    }
    if($("#tableBody > tr:nth-child(4) > td:nth-child(5)").text() == "Out" && new Date() < new Date(currentDate.getTime() + (duration4 * 60 * 1000))){
        console.log("nr 4, person is out!")
    }
    if($("#tableBody > tr:nth-child(5) > td:nth-child(5)").text() == "Out" && new Date() < new Date(currentDate.getTime() + (duration5 * 60 * 1000))){
        console.log("nr 5, person is out!")
    }
    if($("#tableBody > tr:nth-child(1) > td:nth-child(5)").text() == "Out" && new Date > new Date(currentDate.getTime() + (duration1 * 60 * 1000))){
        console.log("nr 1, person is late!")
    }
    if($("#tableBody > tr:nth-child(2) > td:nth-child(5)").text() == "Out" && new Date > new Date(currentDate.getTime() + (duration2 * 60 * 1000))){
        console.log("nr 2, person is late!")
    }
    if($("#tableBody > tr:nth-child(3) > td:nth-child(5)").text() == "Out" && new Date > new Date(currentDate.getTime() + (duration3 * 60 * 1000))){
        console.log("nr 3, person is late!")
    }
    if($("#tableBody > tr:nth-child(4) > td:nth-child(5)").text() == "Out" && new Date > new Date(currentDate.getTime() + (duration4 * 60 * 1000))){
        console.log("nr 4, person is late!")
    }
    if($("#tableBody > tr:nth-child(5) > td:nth-child(5)").text() == "Out" && new Date > new Date(currentDate.getTime() + (duration5 * 60 * 1000))){
        console.log("nr 5, person is late!")
    }
}
