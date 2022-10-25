# Env-Platform [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

  This platform application is designed to allow individuals and organizations to connect with each other to work towards bettering the environment.
  <br/> 
  With a simple, user-friendly interface, organizations can post announcements to inform individual users of events, and users can then comment on these announcements. 
  <br/>
  Ideally, with a large user base, this will establish a database of organizations for anyone who wishes to contribute to helping the environment.
  
  Check out the deployed application [here](https://peaceful-dusk-77237.herokuapp.com/).

## Table of Contents
1.  [Description](#description)<br/>
2.  [Usage Information](#usage)<br/>
3.  [License](#license)<br/>
4.  [Technologies Used](#technologies-used)<br/>
5.  [Future Development](#future-development)<br/>


## Usage
Users are first greeted with the homepage, with tabs leading to information and donations options for the platform. <br/>
  <br/>
  ![homepage](/client/src/assets/images/homepage1.png)
  <br/><br/>
  Once logged in, users are brought straight to their dashboard. They may choose to access recent announcements and update and delete their previous ones.
  <br/><br/>
  ![dashboard](/client/src/assets/images/dashboard.png)
  Users, or visitors to the site can also make donations which are integrated with Stripe.




## License
This application is covered under the [MIT](https://opensource.org/licenses/MIT) license

## Technologies Used
This application was primarily built using ReactJs with a Graphql Apollo server backend, and JWT authenitcation. The styling was completed using Tailwind CSS with some components imported from Tailwind UI and Flowbite. 
<br/>
Other packages include express, heroicons, and dotenv.

## Future Development
The application is still in its early development stages and lacks the important feature of Google's distance Matrix API. Once implemented, users can add locations to their profile, enabling them to find organizations near them. The data on display tends to bleed outside of the screen when too much is called, so pagination needs to be implemented in order to keep the pages clean. 

