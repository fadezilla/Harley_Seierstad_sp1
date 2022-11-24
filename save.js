class Employee {
    constructor(name, surname){
        this.name = name;
        this.surname = surname;
    }
    fromJson(json){
        this.name = json.name.first
        this.surname = json.name.last
    }

}
let employee1 = new Employee()
Student.fromJson()

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

const api_url = "https://randomuser.me/api/";
async function staffUserGet() {
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
staffUserGet();



