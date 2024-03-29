# WeDeliverTECH Reception Management Dashboard
This simple web application is designed to assist receptionists in managing staff members' out-of-office logging and tracking deliveries to customers.

## Features
### Staff Management

- Clock In/Out: Receptionists can log staff members' out-of-office time and expected return time. When staff members return, their status is updated automatically.
- Late Notification: If a staff member hasn't returned by the expected time, a toast notification appears with their information.
- Real-time Clock: The current date and time are displayed at the bottom of the dashboard.

### Delivery Tracking

- Add Delivery: Receptionists can input delivery driver information, including vehicle type, name, telephone number, delivery address, and return time.
- Late Delivery Notification: If a delivery driver hasn't returned by the estimated return time, a toast notification appears with their information.

## Usage

1. ### Staff Management:

* Click on the "Out" button next to a staff member's name to log them out.
* Enter the duration of their absence and expected return time.
* Click on the "In" button when they return to update their status.

2. ### Delivery Tracking:

* Fill in the delivery driver information in the input fields.
* Click on the "Add" button to add the delivery to the table.
* If a delivery driver hasn't returned by the estimated time, a notification will appear.

## Installation
1. Clone the repository to your local machine.
2. Open the project folder in your preferred code editor.
3. Ensure you have the necessary libraries and plugins installed (Bootstrap, JavaScript/jQuery).
4. Run the web application using a local server or deploy it to your hosting platform.

## External Libraries and Plugins
- Bootstrap: Used for styling and responsive design.
- JavaScript/jQuery: Used for client-side scripting and interactivity.
- Randomuser API: Used to generate demo staff member information.