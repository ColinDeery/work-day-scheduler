# Work Day Scheduler

## Description

This simple workday scheduler app allows the user to view their workday in hour blocks as well as keep track of their meetings and appointments.

For busy professionals, the importance of organization and effective time management cannot be understated.

This planner application built using JavaScript enables the user to view their entire workday easily and concisely.

In addition to workday visibility, individual appointments or meetings can be logged to the scheduler by using local storage.


## Usage

Upon page load, the user will see the current date and time displayed at the top of the webpage.

The workday is presented in hour blocks from 9AM to 5PM, with hours being color coded to represent their position relative to the time of the current day.

Blocks with a grey background have already passed, the red block represents the current hour block, and blocks with a green background represent blocks in the near future.

To record an event, meeting, or appointment, simply click within the desired hour block to begin typing. Once finished, click the blue save button to the right of the hour block to log your input.

Since inputs are saved to local storage, the user's appointments will remain printed in their respective hour blocks upon page refresh.


![workday scheduler](./assets/images/Screenshot%202022-11-28%20at%2011.08.00%20AM.png)

