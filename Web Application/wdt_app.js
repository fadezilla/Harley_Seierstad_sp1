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
function addHours(numOfHours, date = new Date()) {
        date.setTime(date.getTime() + numOfHours * 60 * 60 * 1000);
  
        return date;
    }
function staffOut(){
    let status = "out"
    let duration = (prompt("how long was the absence?"))
    let time = new Date();
    let outTime = time.getHours() + ":" + time.getMinutes() + ":" + time.getSeconds()
    let addedTime = addHours(duration)
    let test = new Date(addedTime)
    let expectedReturnTime = test.getHours() + ":" + test.getMinutes(); + ":" + test.getSeconds();

   if($('#tableBody > tr:nth-child(1)').hasClass('active') === true){
    if(!isNaN(duration)) {
        $("#tableBody > tr:nth-child(1) > td:nth-child(5)").append(status);
        $("#tableBody > tr:nth-child(1) > td:nth-child(6)").append(outTime);
        $("#tableBody > tr:nth-child(1) > td:nth-child(7)").append(duration);
        $("#tableBody > tr:nth-child(1) > td:nth-child(8)").append(expectedReturnTime);
        console.log("success!")
        } else {
            alert("invalid input, try again.")
        }
   }
   if($('#tableBody > tr:nth-child(2)').hasClass('active') === true){
    alert("second")
   }
   if($('#tableBody > tr:nth-child(3)').hasClass('active') === true){
    alert("third")
   }
   if($('#tableBody > tr:nth-child(2)').hasClass('active') === true){
    alert("fourth")
   }
   if($('#tableBody > tr:nth-child(2)').hasClass('active') === true){
    alert("fifth")
   }
   if($('#tableBody > tr').hasClass('active') === false){
    alert("please select a row")
   }
}

function staffIn(){

}


