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
    };
    staffMemberIsLate(){

    };
}

class deliveryDriver extends Employee{
    constructor(name, surname, vehicle, telephone, deliverAddress, returnTime){
        super(name, surname);
        this.vehicle = vehicle;
        this.telephone = telephone;
        this.deliverAddress = deliverAddress;
        this.returnTime = returnTime;
    }
    deliverDriverIsLate(){

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


    function staffOut(){
    if($('#tableBody > tr').hasClass('active') === false){
        alert("please select a row first")
       } else{
        var duration = (prompt("How long is the absence expected to be?"));
       } 

    var status = "Out"
    var time = new Date();
    var outTime = ((time.getHours() < 10)?"0":"") + time.getHours() + ":" + ((time.getMinutes() < 10)?"0":"") + time.getMinutes();
    var addedTime = addHours(duration);
    var expectedReturnTime = ((addedTime.getHours() < 10)?"0":"") + addedTime.getHours() + ":" + ((addedTime.getMinutes() < 10)?"0":"") + addedTime.getMinutes()
   if($('#tableBody > tr:nth-child(1)').hasClass('active') === true){
    if(!isNaN(duration)) {
        $("#tableBody > tr:nth-child(1) > td:nth-child(5)").empty().append(status);
        $("#tableBody > tr:nth-child(1) > td:nth-child(6)").append(outTime);
        $("#tableBody > tr:nth-child(1) > td:nth-child(7)").append(duration + ":" + "00");
        $("#tableBody > tr:nth-child(1) > td:nth-child(8)").append(expectedReturnTime);
        } else {
            alert("invalid input, try again.")
        }
   }
   if($('#tableBody > tr:nth-child(2)').hasClass('active') === true){
    if(!isNaN(duration)) {
        $("#tableBody > tr:nth-child(2) > td:nth-child(5)").empty().append(status);
        $("#tableBody > tr:nth-child(2) > td:nth-child(6)").append(outTime);
        $("#tableBody > tr:nth-child(2) > td:nth-child(7)").append(duration + ":" + "00");
        $("#tableBody > tr:nth-child(2) > td:nth-child(8)").append(expectedReturnTime);
        } else {
            alert("invalid input, try again.")
        }
   }
   if($('#tableBody > tr:nth-child(3)').hasClass('active') === true){
    if(!isNaN(duration)) {
        $("#tableBody > tr:nth-child(3) > td:nth-child(5)").empty().append(status);
        $("#tableBody > tr:nth-child(3) > td:nth-child(6)").append(outTime);
        $("#tableBody > tr:nth-child(3) > td:nth-child(7)").append(duration + ":" + "00");
        $("#tableBody > tr:nth-child(3) > td:nth-child(8)").append(expectedReturnTime);
        } else {
            alert("invalid input, try again.")
        }
   }
   if($('#tableBody > tr:nth-child(4)').hasClass('active') === true){
    if(!isNaN(duration)) {
        $("#tableBody > tr:nth-child(4) > td:nth-child(5)").empty().append(status);
        $("#tableBody > tr:nth-child(4) > td:nth-child(6)").append(outTime);
        $("#tableBody > tr:nth-child(4) > td:nth-child(7)").append(duration + ":" + "00");
        $("#tableBody > tr:nth-child(4) > td:nth-child(8)").append(expectedReturnTime);
        } else {
            alert("invalid input, try again.")
        }
   }
   if($('#tableBody > tr:nth-child(5)').hasClass('active') === true){
    if(!isNaN(duration)) {
        $("#tableBody > tr:nth-child(5) > td:nth-child(5)").append(status);
        $("#tableBody > tr:nth-child(5) > td:nth-child(6)").append(outTime);
        $("#tableBody > tr:nth-child(5) > td:nth-child(7)").append(duration + ":" + "00");
        $("#tableBody > tr:nth-child(5) > td:nth-child(8)").append(expectedReturnTime);
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


