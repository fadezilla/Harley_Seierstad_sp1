url = 'https://randomuser.me/api/?results=5'
class Employee {
    constructor(name, surname) {
      this.name = name;
      this.surname = surname;
    }
  }
  
  class StaffMember extends Employee {
    constructor(name, surname, picture, email, status, outTime, duration, expectedReturnTime) {
      super(name, surname);
      this.picture = picture;
      this.email = email;
      this.status = status;
      this.outTime = outTime;
      this.duration = duration;
      this.expectedReturnTime = expectedReturnTime;
    }
  
    staffMemberIsLate(timer) {
        this.timeout = setTimeout(() => {
            let textToast = document.getElementById("toastBody")
            let toastData = `<img src="${this.picture}"/>
            <br>
            ${this.name} ${this.surname} is late!
            <br>
            ${this.name} have been out of office for longer than ${this.duration} minutes
            `
            textToast.innerHTML = toastData
            $(function () {
            $('#myToast').toast({ delay: 500000 });
            $('#myToast .close').click(function() {
            $('#myToast').toast('hide');
            });
            $('#myToast').click(function(e) {
            e.stopPropagation();
            });
            $('#myToast').toast('show');
            });
        }, timer)
    }
  }

class DeliveryDriver extends Employee {
    constructor(name, surname, vehicle, telephone, address, returnTime) {
        super(name, surname)
        this.vehicle = vehicle;
        this.telephone = telephone;
        this.address = address;
        this.returnTime = returnTime
    }
    deliveryDriverIsLate(timer){
        this.timeout = setTimeout(() => {
            let textToast = document.getElementById("toastBody2")
            let toastData = `
            delivery driver: ${this.name} ${this.surname} have not yet returned.
            <br>
            vehicle type: ${this.vehicle} 
            <br>
            telephone: ${this.telephone}
            <br>
            estimated return time: ${this.returnTime}
            <br>
            delivery address: ${this.address}
            `
            textToast.innerHTML = toastData
            $(function () {
            $('#myToast2').toast({ delay: 500000 });
            $('#myToast2 .close').click(function() {
                $('#myToast2').toast('hide');
            });
            $('#myToast2').click(function(e) {
                e.stopPropagation();
            });
            $('#myToast2').toast('show');
            });
        }, timer)
    }
  }

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

let staffMembers = [];  
function staffUserGet(){
    fetch(url)
    .then(response => response.json())
    .then(data => {
      
      data.results.forEach(result => {
        let staffMember = new StaffMember(
          result.name.first,
          result.name.last,
          result.picture.medium,
          result.email,
          '',
          '',
          '',
          '' 
        );
        staffMembers.push(staffMember);
      });
    
      let table = document.getElementById('tableBody');
      staffMembers.forEach(staffMember => {
        let row = table.insertRow();
        let pictureCell = row.insertCell();
        let nameCell = row.insertCell();
        let surnameCell = row.insertCell();
        let emailCell = row.insertCell();
        let statusCell = row.insertCell();
        let outTimeCell = row.insertCell();
        let durationCell = row.insertCell();
        let expectedReturnTimeCell = row.insertCell();
    
        pictureCell.innerHTML = `<img src="${staffMember.picture}" />`;
        nameCell.innerHTML = staffMember.name;
        surnameCell.innerHTML = staffMember.surname;
        emailCell.innerHTML = staffMember.email;
        statusCell.innerHTML = "In"
        outTimeCell.innerHTML = staffMember.outTime;
        durationCell.innerHTML = staffMember.duration;
        expectedReturnTimeCell.innerHTML = staffMember.expectedReturnTime;
      });
    });
}
staffUserGet()


$(document).on("click", "#tableBody tr", function(){
    $(this).toggleClass("active bg-primary").siblings().removeClass("active bg-primary")
})

let interval;

function staffOut(){
    let durationRegex = /^[0-9]+$/;
    let table = document.getElementById("table");
    let selectedRow = table.querySelector(" #tableBody tr.active");
    let duration = prompt("how long is the absence expected to be?");
    if(duration.match(durationRegex)){
        checkedDuration = duration + "m";
        if(duration > 60){
           checkedDuration = timeConvert(duration)
        }
        let currentTime = new Date();
        currentTime = ((currentTime.getHours() < 10)?"0":"") + currentTime.getHours() + ":" + ((currentTime.getMinutes() < 10)?"0":"") + currentTime.getMinutes();
    
        
        let addTime = addHours(duration)
        let expectedReturnTime = ((addTime.getHours() < 10)?"0":"") + addTime.getHours() + ":" + ((addTime.getMinutes() < 10)?"0":"") + addTime.getMinutes()
    
        let staffMember = staffMembers[selectedRow.rowIndex - 1];
        staffMember.expectedReturnTime = expectedReturnTime;
        staffMember.status = "Out";
        staffMember.outTime = currentTime;
        staffMember.duration = checkedDuration;
    
        let cells = selectedRow.cells;
        cells[4].innerHTML = staffMember.status;
        cells[5].innerHTML = staffMember.outTime;
        cells[6].innerHTML = staffMember.duration;
        cells[7].innerHTML = staffMember.expectedReturnTime;
        
        staffMember.staffMemberIsLate(duration*60000);
        }else {
        alert("Thats not a valid input. please enter expected absence in time. \n for example: '10:42`")
    }
}


function staffIn(){
    let table = document.getElementById("tableBody");

    let selectedRow = table.querySelector("#tableBody tr.active");

    if(selectedRow) {
        let staffMember = staffMembers[selectedRow.rowIndex - 1];
        staffMember.expectedReturnTime = ""
        staffMember.status = "In";
        staffMember.outTime = "";
        staffMember.duration = "";

        let cells = selectedRow.cells;
        cells[4].innerHTML = staffMember.status;
        cells[5].innerHTML = staffMember.outTime;
        cells[6].innerHTML = staffMember.duration;
        cells[7].innerHTML = staffMember.expectedReturnTime;

        clearTimeout(staffMember.timeout);

    } else {
        alert("no row is selected")
    }
}

function minutesToSeconds(minutes){
    return minutes * 60
}

$(document).on("click", "#deliveryTable tr", function(){
    $(this).toggleClass("active bg-primary").siblings().removeClass("active bg-primary")
})

function AddInputRow(){
    let table = document.getElementById("tableBody3");

    let newRow = table.insertRow(0);

    let cell1 = newRow.insertCell(0);
    let cell2 = newRow.insertCell(1);
    let cell3 = newRow.insertCell(2);
    let cell4 = newRow.insertCell(3);
    let cell5 = newRow.insertCell(4);
    let cell6 = newRow.insertCell(5);

    let element1 = document.createElement('select');
        
    let carOption = document.createElement("option");
    carOption.value = "Car";
    carOption.innerHTML = "Car";
    element1.appendChild(carOption);
        
    let bikeOption = document.createElement("option");
                bikeOption.value = "motorcycle";
                bikeOption.innerHTML = "Motorcycle";
                element1.appendChild(bikeOption);
        
        
        
                let element2 = document.createElement('input');
                let element3 = document.createElement('input');
                let element4 = document.createElement('input');
                let element5 = document.createElement('input');
                let element6 = document.createElement('input');
        
                element1.id="vehicleId"
                element2.id="nameId"
                element3.id="surnameId"
                element4.id="phoneId"
                element5.id="addressId"
                element6.id="returnId"
        
                element1.type="text";
                element2.type="text";
                element3.type="text";
                element4.type="number";
                element5.type="text";
                element6.type="text";
        
                cell1.appendChild(element1);
                cell2.appendChild(element2);
                cell3.appendChild(element3);
                cell4.appendChild(element4);
                cell5.appendChild(element5);
                cell6.appendChild(element6);


}
AddInputRow()
function minutesBetween(userInput) {
    let userHour = parseInt(userInput.split(":")[0]);
    let userMinute = parseInt(userInput.split(":")[1]);
    let now = new Date();
    let currentHour = now.getHours();
    let currentMinute = now.getMinutes();

    let userTotalMinutes = userHour * 60 + userMinute;
    let currentTotalMinutes = currentHour * 60 + currentMinute;
    let minutesDifference = Math.abs(userTotalMinutes - currentTotalMinutes);

    return minutesDifference;
  }
let deliveryDrivers = [];
function addDelivery(){
    let vehicle = document.getElementById("vehicleId").value;
    let name = document.getElementById("nameId").value;
    let surname = document.getElementById("surnameId").value;
    let telephone = document.getElementById("phoneId").value;
    let address = document.getElementById("addressId").value;
    let returnTime = document.getElementById("returnId").value;

    let deliveryDriver = new DeliveryDriver(name, surname,vehicle, telephone, address, returnTime);
    deliveryDrivers.push(deliveryDriver);

    let table = document.getElementById("tableBody2");
    let newRow = table.insertRow(0);
    if(vehicle === "Car"){
        newRow.insertCell(0).innerHTML = '<i class="fa-solid fa-car fa-3x"></i>'
        newRow.insertCell(1).innerHTML = deliveryDriver.name;
        newRow.insertCell(2).innerHTML = deliveryDriver.surname;
        newRow.insertCell(3).innerHTML = deliveryDriver.telephone;
        newRow.insertCell(4).innerHTML = deliveryDriver.address;
        newRow.insertCell(5).innerHTML = deliveryDriver.returnTime;
    }else{
        newRow.insertCell(0).innerHTML = '<i class="fa-solid fa-motorcycle fa-3x"></i>'
        newRow.insertCell(1).innerHTML = deliveryDriver.name;
        newRow.insertCell(2).innerHTML = deliveryDriver.surname;
        newRow.insertCell(3).innerHTML = deliveryDriver.telephone;
        newRow.insertCell(4).innerHTML = deliveryDriver.address;
        newRow.insertCell(5).innerHTML = deliveryDriver.returnTime;
    }
    let timer = minutesBetween(deliveryDriver.returnTime)
    
    deliveryDriver.deliveryDriverIsLate(timer*60000)

    deliveryDriver = deliveryDrivers[newRow.rowIndex - 1];
}
function validateDelivery(){
    let nameRegex = /^[a-zA-Z]{3,}$/;
    let phoneRegex = /^[0-9]{7,12}$/;
    let addressRegex = /^[a-zA-Z0-9\s,'-]{6,20}$/;
    let returnRegex = /^\d{2}:\d{2}$/;
    let input2 = document.getElementById("nameId").value;
    let input3 = document.getElementById("surnameId").value;
    let input4 = document.getElementById("phoneId").value;
    let input5 = document.getElementById("addressId").value;
    let input6 = document.getElementById("returnId").value;
    
    if(input2.match(nameRegex) && input3.match(nameRegex) && input4.match(phoneRegex) && input5.match(addressRegex) && input6.match(returnRegex)){
        addDelivery()
    } else {
        if(!input2.match(nameRegex)){
            alert(input2 + " is not a valid name.")
        }
        if(!input3.match(nameRegex)){
            alert(input3 + " is not a valid surname")
        }
        if(!input4.match(phoneRegex)){
            alert(input4 + " is not a valid phone number.")
        }
        if(!input5.match(addressRegex)){
            alert(input5 + " is not a valid address.")
        }
        if(!input6.match(returnRegex)){
            alert(input6 + " is not a valid return time, please enter input in this format: hh:mm")
        }
    }
}

function removeTableRow(){
    let table = document.getElementById("deliveryTable");

    let selectedRow = table.querySelector("#deliveryTable .active");
    let deliveryDriver = deliveryDrivers[selectedRow.rowIndex - 1];
    if(selectedRow) {
        clearTimeout(deliveryDriver.timeout);
        table.deleteRow(selectedRow.rowIndex);
    } else {
        alert("no row is selected")
    }
}

setInterval(digitalClock, 1000);

function digitalClock(){
    let daysArray = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    let monthsArray = ["January", "February", "March", "April", "May", "June", "july", "August", "September", "October", "November", "December" ]

    let currentTime = new Date();

    let days = daysArray[currentTime.getDay()];
    let month = monthsArray[currentTime.getMonth()];
    let year = currentTime.getFullYear();
    let hours = currentTime.getHours();
    let minutes = currentTime.getMinutes();
    let seconds = currentTime.getSeconds();

    let timeString = days + " " + month + " " + year + " " + hours.toString().padStart(2, "0") + ":" + minutes.toString().padStart(2, "0") + ":" + seconds.toString().padStart(2, "0");

    document.getElementById("clock").innerHTML = timeString;
}