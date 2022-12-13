# Project name
Harley_seierstad_1p1
# Author 
Harley Seierstad

## Simple overview of use/purpose.

Purpose of this program is to have a system that tracks time of staff and shows the user if the specific staff member is late. it also 
is used to keep track of delivery drivers aswell as getting a notification if the delivery is late. 

### An in-depth paragraph about your project and overview of use.

The first part of the program is a table filled with five random dummy staff members ( can be changed to any number you want ), the user can then click
on one of the table rows with the staff member within, making that table row "active" and then the user can either click "out" or "in" button. the "out" button 
is used for when one or several staff members are out on a break, meeting or whatever reason. it will then prompt the user for how long they will be out for, and then
it will fill in the table cells with information about if they are in or out of office, when they left, how long they think they will be and it will calculate 
when the expected return time will be based on the duration from the prompt and it will fire off an toast if the staff member is late.
the "in" button simply cleares these new cells aswell as changing the status from "out" to "in" aswell as stopping any toasts that would otherwise go off.

next part of the program is a schedule delivery table, with input cells. in these cells the user can fill in, vehicle type, name, surname, telephone, address and return time of the driver they have talked to. by clicking the add button it will take the input from the schedule delivery table, check if its valid information and then create a new table row in the delivery board table, where you can see the information you just put in, and for each delivery driver you add, more rows will be added. this will also create a toast that will go off if the delivery driver have not returned by the expected return time.
By first clicking a table row with the delivery driver you wanna interact with, making it "active", the clear button will delete that row aswell as stopping the toast.

there is also a digital clock at the bottom of the page to easily have access to the time and date.

### Dependencies
bootstrap 5.2.3 or later
jquery 3.3.1 or later
popper 1.14.7 or later

### Installing
https://getbootstrap.com/docs/5.2/getting-started/download/
https://jquery.com/download/
