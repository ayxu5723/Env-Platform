# Env-Platform [![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)

## Description

  This platform application is designed to allow individuals and organizations to connect with each other to work towards bettering the environment.
  <br/> 
  With a simple, user-friendly interface, organizations can post announcements to inform individual users of events, and users can then comment on these announcements. 
  
  Check out the deployed application [here](https://boiling-basin-74246.herokuapp.com/).

## Table of Contents
1.  [Description](#description)<br/>
2.  [Usage Information](#usage)<br/>
3.  [License](#license)<br/>
4.  [Technologies Used](#technologies-used)<br/>
5.  [Future Development](#future-development)<br/>


## Usage
Users are first greeted with the homepage, with tabs leading to information about the platform. <br/>
  <br/>
  ![homepage](/assets/images/homepage.png)
  <br/><br/>
  Once logged in, users are brought straight to their dashboard. They may choose to access recent announcements and make comments, or update and delete their previous ones.
  <br/><br/>
  ![dashboard](/assets/images/dashboard.png)
  The user is able to comment on other users posts once they are logged in.



## License
This application is covered under the [MIT](https://opensource.org/licenses/MIT) license

## Technologies Used
This application was primarily built using ReactJs with a Graphql Apollo server backend, and JWT authenitcation. The styling was completed using Tailwind CSS with some components imported from Tailwind UI and Flowbite. 
<br/>
Other packages include express, heroicons, and dotenv.

## Future Development
The application is still in its early development stages and lacks the important feature of Google's distance Matrix API. Once implemented, users can add locations to their profile, enabling them to find organizations near them. 

