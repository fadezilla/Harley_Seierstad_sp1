
class StaffMember {
    constructor(name, surname, picture, email, status, outTime, duration, expectedReturnTime){
        this.name = name;
        this.surname = surname;
        this.picture = picture;
        this.email = email;
        this.status = status;
        this.outTime = outTime;
        this.duration = duration;
        this.expectedReturnTime = expectedReturnTime;
    }
    staffMemberIsLate(){
        code
    }
}

class DeliveryDriver{
    constructor(name, surname, vehicle, telephone, deliverAddress, returnTime){
        this.name = name;
        this.surname = surname;
        this.vehicle = vehicle;
        this.telephone = telephone;
        this.deliverAddress = deliverAddress;
        this.returnTime = returnTime;
    }
    deliveryDriverIsLate(){
        code
    }
}

var user = $.ajax ({
    url: 'https://randomuser.me/api/',
    processData: false,
    success: function(myNotes) {
        if (resp.length > 0) {
            // If returned json data is not empty
            var i = 1;
            // looping the returned data
            Object.keys(resp).map(k => {
                // creating new table row element
                var tr = $('<tr>')
                    // first column data
                tr.append('<td class="py-1 px-2 text-center">' + (i++) + '</td>')
                    // second column data
                tr.append('<td class="py-1 px-2">' + resp[k].name + '</td>')
                    // third column data
                tr.append('<td class="py-1 px-2">' + resp[k].phone + '</td>')
                    // fourth column data
                tr.append('<td class="py-1 px-2">' + resp[k].email + '</td>')
                 // Append table row item to table body
                table.find('tbody').append(tr)
            })
        } else {
            // If returned json data is empty
            var tr = $('<tr>')
            tr.append('<th class="py-1 px-2 text-center">No data to display</th>')
            table.find('tbody').append(tr)
        }
        $('#loader').addClass('d-none')
    }
})

class Employee {
    constructor(options){
        this.name = options;
        this.surname = options;
    }
    async staffUserGet() {
        const api_url = "https://randomuser.me/api/";
        const response = await fetch(api_url);
    
        const data = await response.json();
        console.log(data.results);
    
        const user = data.results[0];
        let image = user.picture.thumbnail;
        let name = user.name.first;
        let surName = user.name.last;
        let mail = user.email;
        
    document.getElementById("name").innerHTML = name;
    document.getElementById("surName").innerHTML = surName;
    document.getElementById("email").innerHTML = mail;

    let img = document.createElement("img");
    let img_div = document.getElementById("picture");
    img.src = image;
    img_div.append(img);
    }

}

const harry = new Employee()
harry.staffUserGet()
const jonas = new Employee()
jonas.staffUserGet()

<table id="yolo" class="table table-hover">
        <thead>
          <tr id="tableHeader">
            <td >Picture</td>
            <td >Name</td>
            <td >Surname</td>
            <td >Email Address</td>
            <td >Status</td>
            <td >Out Time</td>
            <td >Duration</td>
            <td >Expected Return Time</td>
          </tr>
        </thead>
          <tr>
            <td><span id="picture"></span></td>
            <td><span id="name"></span></td>
            <td><span id="surName"></span></td>
            <td><span id="email"></span></td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
          </tr>
          <tr>
            <td><span id="picture"></span></td>
            <td><span id="name"></span></td>
            <td><span id="surName"></span></td>
            <td><span id="email"></span></td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
          </tr>
          <tr>
            <td><span id="picture"></span></td>
            <td><span id="name"></span></td>
            <td><span id="surName"></span></td>
            <td><span id="email"></span></td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
            <td>Otto</td>
          </tr>
        </thead>
      </table>


      async function loadIntoTable(url, table) {
        const tableHead = table.querySelector("thead");
        const tableBOdy = table.querySelector("tbody");
        const response = await fetch(url);
        const data = await response.json();
    
        tableHead.innerHTML = "<tr></tr>";
        tableBOdy.innerHTML = "";
    
        for (const dataText of data) {
            const headerElement = document.createElement("th");
    
            headerElement.textContent = dataText;
            tableHead.querySelector("tr").appendChild(headerElement);
        }
        for (const cellText of row) {
            const cellElement = document.createElement("td");

            cellElement.textContent = cellText
            rowElement.appendChild(cellElement);
            }    
            tableBOdy.appendChild(rowElement);
}
    
    loadIntoTable("https://randomuser.me/api/?inc=name,email", document.querySelector("table"));





    data.results.forEach(person => {

        p = `<div class="well">
        
        <img src"${person.picture.thumbnail}">
        <span>${person.name.first}</span>
        <span>${person.name.last}</span>
        <span>${person.email}</span>
        </div>
        `;

        $("#results").append(p);
    })





    $(document).ready(function () {
        var url = "https://randomuser.me/api/?results=5&inc=name,email,picture&noinfo";
        var p = ""
        fetchInformation(url);
    
        function fetchInformation(url){
            fetch(url)
            .then((response) => (response.json()))
            .then(function(data){
                var table = $('#table-list')
                if (resp.length > 0) {
                    // If returned json data is not empty
                    var i = 1;
                    // looping the returned data
                    Object.keys(data).map(k => {
                        // creating new table row element
                        var tr = $('<tr>')
                            // first column data
                        tr.append('<td class="py-1 px-2 text-center">' + data[k].picture.thumbnail + '</td>')
                            // second column data
                        tr.append('<td class="py-1 px-2">' + data[k].name.first + '</td>')
                            // third column data
                        tr.append('<td class="py-1 px-2">' + data[k].name.last + '</td>')
                            // fourth column data
                        tr.append('<td class="py-1 px-2">' + data[k].email + '</td>')
                         // Append table row item to table body
                        table.find('tbody').append(tr)
                    })
                } else {
                    // If returned json data is empty
                    var tr = $('<tr>')
                    tr.append('<th class="py-1 px-2 text-center">No data to display</th>')
                    table.find('tbody').append(tr)
                }
                $('#loader').addClass('d-none')
            })
        }
    });
    
    fetch("https://randomuser.me/api/?results=5&inc=name,email,picture&noinfo")
    .then(function(response){
        return response.json();
    })
    
    .then(function(products){
        let placeholder = document.querySelector("#data-output");
        let out = "";
        for (let product of products){
            out += `
                <tr>
                    <td> <img src"${product.picture.thumbnail}"> </td>
                    <td> ${product.name.first}</td>
                    <td> ${product.name.last}</td>
                    <td> ${product.email}</td>
                </tr>
            `;
        }
    
        placeholder.innerHTML = out;
    })



    

var user = $.ajax ({
    url: 'https://randomuser.me/api/?results=5&inc=name,email,picture&noinfo',
    processData: false,
    success: function(resp) {
        var table = $('#table-list')
        if (user.length > 0) {
            // If returned json data is not empty
            var i = 1;
            // looping the returned data
            Object.keys(user).map(k => {
                // creating new table row element
                var tr = $('<tr>')
                    // first column data
                tr.append('<td class="py-1 px-2 text-center">' + user[k].picture.thumbnail + '</td>')
                    // second column data
                tr.append('<td class="py-1 px-2">' + user[k].name.first + '</td>')
                    // third column data
                tr.append('<td class="py-1 px-2">' + user[k].name.last + '</td>')
                    // fourth column data
                tr.append('<td class="py-1 px-2">' + user[k].email + '</td>')
                 // Append table row item to table body
                table.find('tbody').append(tr)
            })
        } else {
            // If returned json data is empty
            var tr = $('<tr>')
            tr.append('<th class="py-1 px-2 text-center">No data to display</th>')
            table.find('tbody').append(tr)
        }
        $('#loader').addClass('d-none')
    }
})

function GetRandomProfiles()
    {
        $.getJSON( "https://randomuser.me/api/", function( randomusers ) {
            var user = randomusers.results[0];
            // document.getElementById("picturegenerator").innerHTML = "";

            var img = document.createElement('IMG');
            img.setAttribute('src', user.picture.large);
            document.getElementById("table").appendChild(img);

            var detail = document.createElement('div');
            detail.innerHTML = "";

            var prenom = document.createElement('div');
            prenom.setAttribute('id', 'prenom');
            prenom.innerHTML = user.name.first;
            detail.innerHTML += prenom.outerHTML;

            var adresse = document.createElement('div');
            adresse.setAttribute('id', 'adresse');
            adresse.innerHTML = user.location.street +" "+ user.location.city + " " + user.location.state;
            detail.innerHTML += adresse.outerHTML;

            var email = document.createElement('div');
            email.setAttribute('id', 'email');
            email.innerHTML = user.email;
            detail.innerHTML += email.outerHTML;

            document.getElementById("div1").appendChild(detail);
            } ); 
    }
    GetRandomProfiles()




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
        return;
    }
    if($("#tableBody > tr:nth-child(2) > td:nth-child(5)").text() == "Out" && new Date > new Date(currentDate.getTime() + (duration2 * 60 * 1000))){
        console.log("nr 2, person is late!")
        return;
    }
    if($("#tableBody > tr:nth-child(3) > td:nth-child(5)").text() == "Out" && new Date > new Date(currentDate.getTime() + (duration3 * 60 * 1000))){
        console.log("nr 3, person is late!")
        return;
    }
    if($("#tableBody > tr:nth-child(4) > td:nth-child(5)").text() == "Out" && new Date > new Date(currentDate.getTime() + (duration4 * 60 * 1000))){
        console.log("nr 4, person is late!")
        return;
    }
    if($("#tableBody > tr:nth-child(5) > td:nth-child(5)").text() == "Out" && new Date > new Date(currentDate.getTime() + (duration5 * 60 * 1000))){
        alert("nr 5, person is late!")
        return;
    }
}

function staffMemberIsLate2(){
    if($("#tableBody > tr:nth-child(1) > td:nth-child(5)").text() === "Out"){
        var staff1OutTime = duration * 60000
        myTimeOut = setTimeout(alertFunc1, staff1OutTime)
        setTimeout(($("#tableBody > tr:nth-child(1) > td:nth-child(5)").empty().append(late)), staff1OutTime)
    } else {
        clearTimeout(myTimeOut)
    }
    if($("#tableBody > tr:nth-child(2) > td:nth-child(5)").text() === "Out"){
        var staff2OutTime = duration2 * 60000
        myTimeOut2 = setTimeout(alertFunc2, staff2OutTime)  
        setTimeout(($("#tableBody > tr:nth-child(2) > td:nth-child(5)").empty().append(late)), staff2OutTime)
    } else {
        clearTimeout(myTimeOut2)
    }
    if($("#tableBody > tr:nth-child(3) > td:nth-child(5)").text() === "Out"){
        var staff3OutTime = duration3 * 60000
        myTimeOut3 = setTimeout(alertFunc3, (staff3OutTime) + 1000)
        setTimeout(($("#tableBody > tr:nth-child(3) > td:nth-child(5)").empty().append(late)), staff3OutTime)
    } else {
        clearTimeout(myTimeOut3)
    }
    if($("#tableBody > tr:nth-child(4) > td:nth-child(5)").text() === "Out"){
        var staff4OutTime = duration4 * 60000
        myTimeOut4 = setTimeout(alertFunc4, (staff4OutTime) + 1000)
        setTimeout(($("#tableBody > tr:nth-child(4) > td:nth-child(5)").empty().append(late)), staff4OutTime)
    } else {
        clearTimeout(myTimeOut4)
    }
    if($("#tableBody > tr:nth-child(5) > td:nth-child(5)").text() === "Out"){
        var staff5OutTime = duration5 * 60000
        myTimeOut5 = setTimeout(alertFunc5, (staff5OutTime) + 1000)
        setTimeout(($("#tableBody > tr:nth-child(5) > td:nth-child(5)").empty().append(late)), staff5OutTime)
    } else {
        clearTimeout(myTimeOut5)
    }
}

var late = "Late"
function alertMessage1() {
    $("#tableBody > tr:nth-child(1) > td:nth-child(5)").empty().append(late);
    console.log("Staff 1, you are late")
    
    
}
function alertMessage2() {
    $("#tableBody > tr:nth-child(2) > td:nth-child(5)").empty().append(late);
    console.log("Staff 2, you are late")
}
function alertMessage3() {
    $("#tableBody > tr:nth-child(3) > td:nth-child(5)").empty().append(late);
    console.log("Staff 3, you are late")
    
}
function alertMessage4() {
    $("#tableBody > tr:nth-child(4) > td:nth-child(5)").empty().append(late);
    console.log("Staff 4, you are late")
    
}
function alertMessage5() {
    $("#tableBody > tr:nth-child(5) > td:nth-child(5)").empty().append(late);
    console.log("Staff 5, you are late")
    
}
// set timeOut on the end time for each of the 5 rows, then after that set time pling a toast that the employee is late
function staffMember1(){
    setTimeout(alertMessage1, duration1 * 60000)
}
function staffMember2(){
    setTimeout(alertMessage2, duration2 * 60000)
}
function staffMember3(){
    setTimeout(alertMessage3, duration3 * 60000)
}
function staffMember4(){
    setTimeout(alertMessage4, duration4 * 60000)
}
function staffMember5(){
    setTimeout(alertMessage5, duration5 * 60000)
}
function staffMemberIsLate2() {
    if($("#tableBody > tr:nth-child(1) > td:nth-child(5)").text() === "Out") {
        staffMember1()
        staffMemberIsLate2()
    }
    if($("#tableBody > tr:nth-child(2) > td:nth-child(5)").text() === "Out") {
        staffMember2()
        staffMemberIsLate2()
    }
    if($("#tableBody > tr:nth-child(3) > td:nth-child(5)").text() === "Out") {
        staffMember3()
        staffMemberIsLate2()
    }
    if($("#tableBody > tr:nth-child(4) > td:nth-child(5)").text() ==="Out") {
        staffMember4()
        staffMemberIsLate2()
    }
    if($("#tableBody > tr:nth-child(5) > td:nth-child(5)").text() === "Out") {
        staffMember5()
        staffMemberIsLate2()
    } 
} 
staffMemberIsLate2()


function staffMemberIsLate() {
    if($("#tableBody > tr:nth-child(1) > td:nth-child(5)").text() == "Out" && new Date > new Date(currentDate.getTime() + (duration1 * 60 * 1000))){
        console.log("nr 1, person is late!")
        clearTimeout(myTimeOut1)
    }
    if($("#tableBody > tr:nth-child(2) > td:nth-child(5)").text() == "Out" && new Date > new Date(currentDate.getTime() + (duration2 * 60 * 1000))){
        console.log("nr 2, person is late!")
        clearTimeout(myTimeOut2)
    }
    if($("#tableBody > tr:nth-child(3) > td:nth-child(5)").text() == "Out" && new Date > new Date(currentDate.getTime() + (duration3 * 60 * 1000))){
        console.log("nr 3, person is late!")
        clearTimeout(myTimeOut3)
    }
    if($("#tableBody > tr:nth-child(4) > td:nth-child(5)").text() == "Out" && new Date > new Date(currentDate.getTime() + (duration4 * 60 * 1000))){
        console.log("nr 4, person is late!")
        clearTimeout(myTimeOut4)
    }
    if($("#tableBody > tr:nth-child(5) > td:nth-child(5)").text() == "Out" && new Date > new Date(currentDate.getTime() + (duration5 * 60 * 1000))){
        console.log("nr 5, person is late!")
        clearTimeout(myTimeOut5)
    }
    if($("#tableBody > tr:nth-child(1) > td:nth-child(5)").text() == "Out" && new Date() < new Date(currentDate.getTime() + (duration1 * 60 * 1000))){
        console.log("nr 1, person is out!")
        var myTimeOut1 = setTimeout(alert1, duration1 * 60000)
        
    }
    if($("#tableBody > tr:nth-child(2) > td:nth-child(5)").text() == "Out" && new Date() < new Date(currentDate.getTime() + (duration2 * 60 * 1000))){
        console.log("nr 2, person is out!")
        var myTimeOut2 = setTimeout(alert2, duration2 * 60000)
        
    }
    if($("#tableBody > tr:nth-child(3) > td:nth-child(5)").text() == "Out" && new Date() < new Date(currentDate.getTime() + (duration3 * 60 * 1000))){
        console.log("nr 3, person is out!")
        var myTimeOut3 = setTimeout(alert3, duration3 * 60000)
        
    }
    if($("#tableBody > tr:nth-child(4) > td:nth-child(5)").text() == "Out" && new Date() < new Date(currentDate.getTime() + (duration4 * 60 * 1000))){
        console.log("nr 4, person is out!")
        var myTimeOut4 = setTimeout(alert4, duration4 * 60000)
        
    }
    if($("#tableBody > tr:nth-child(5) > td:nth-child(5)").text() == "Out" && new Date() < new Date(currentDate.getTime() + (duration5 * 60 * 1000))){
        console.log("nr 5, person is out!")
        var myTimeOut5 = setTimeout(alert5, duration5 * 60000)
    }
}

function staffMemberIsLate2() {
    if($("#tableBody > tr:nth-child(1) > td:nth-child(5)").text() === "Out") {
        timeout1 = setTimeout(function(){
            $("#tableBody > tr:nth-child(1) > td:nth-child(5)").empty().append(late);
            console.log("Staff 1, you are late")
               }, duration1 * 60000);
    } else if($("#tableBody > tr:nth-child(1) > td:nth-child(5)").text() === "Late"){
        clearTimeout(timeout1)
    }
    if($("#tableBody > tr:nth-child(2) > td:nth-child(5)").text() === "Out") {
        timeout2 = setTimeout(function(){
            $("#tableBody > tr:nth-child(2) > td:nth-child(5)").empty().append(late);
            console.log("Staff 2, you are late")
               }, duration2 * 60000);
    }  else if($("#tableBody > tr:nth-child(2) > td:nth-child(5)").text() === "Late"){
        clearTimeout(timeout2)
    }
    if($("#tableBody > tr:nth-child(3) > td:nth-child(5)").text() === "Out") {
        timeout3 = setTimeout(function(){
            $("#tableBody > tr:nth-child(3) > td:nth-child(5)").empty().append(late);
            console.log("Staff 3, you are late")
               }, duration3 * 60000);
    } else if($("#tableBody > tr:nth-child(3) > td:nth-child(5)").text() === "Late"){
        clearTimeout(timeout3)
    }
    if($("#tableBody > tr:nth-child(4) > td:nth-child(5)").text() ==="Out") {
        timeout4 = setTimeout(function(){
            $("#tableBody > tr:nth-child(4) > td:nth-child(5)").empty().append(late);
            console.log("Staff 4, you are late")
               }, duration4 * 60000); 
    } else if($("#tableBody > tr:nth-child(4) > td:nth-child(5)").text() === "Late"){
        clearTimeout(timeout4)
    }
    if($("#tableBody > tr:nth-child(5) > td:nth-child(5)").text() === "Out") {
        timeout5 = setTimeout(function(){
            $("#tableBody > tr:nth-child(5) > td:nth-child(5)").empty().append(late);
            console.log("Staff 5, you are late")
               }, duration5 * 60000);
    }  else if($("#tableBody > tr:nth-child(5) > td:nth-child(5)").text() === "Late"){
        clearTimeout(timeout5)
    }
} 
let cell = "";
let table = document.getElementById("table")
let tr = table.rows[1]
cell = tr.cells[4].innerText 
 setTimeout(function(){
 
   }, 3000);
function wierd() {
    cell.addEventListener("change", function(){
    if(cell != ""){
        console.log(cell)
    } if(cell = "") {
        console.log("no")
        }
 }) 
}
setTimeout(wierd, 4000)

$()


console.log($("#tableBody > tr:nth-child(2) > td:nth-child(3)").innerText)