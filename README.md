# Eduford University

Eduford University is a simple web application that allows students to enroll in courses, view their course schedule, and track their academic progress. This project is built using HTML, CSS, and JavaScript for the front-end, and Node.js for the back-end.

## Features

- User authentication:  Students can sign up and log in to their accounts.
- Course enrollment:  Students can browse available courses and enroll in them.
- Course schedule:  Students can view their course schedule and upcoming assignments.
- Academic progress:  Students can track their grades and overall academic performance.

# Technology Stack

The Eduford University project utilizes the following technologies:

## Front-end
- **HTML**: Structures the web pages.
- **CSS**: Styles and layouts the web pages.
- **JavaScript**: Adds dynamic content and interactivity.
- **Bootstrap**: Ensures a responsive and mobile-friendly UI design.

## Back-end
- **Node.js**: Executes JavaScript on the server.
- **Express.js**: Manages server-side routing and middleware.

## Database
- **MongoDB**: Stores and manages application data.

## Deployment and Infrastructure
- **Git**: Manages version control.
- **GitHub**: Hosts the repository for collaborative development.
- **Heroku**: Deploys and hosts the application online.

## Testing
- **Jest**: Conducts unit testing for JavaScript code.
- **Supertest**: Tests HTTP endpoints to ensure API functionality.

## Tools
- **Visual Studio Code**: Provides a powerful code editing environment.
- **Postman**: Facilitates API testing and development.


## # Eduford University Installation and Setup Guide

This comprehensive guide outlines the step-by-step process for installing and setting up Eduford University locally on different operating systems: Windows, macOS, and Linux.

## Prerequisites

Before you begin, ensure you have the following installed on your machine:

- **Node.js** (including npm) - Download and install from [Node.js official website](https://nodejs.org/).
- **Git** - Download and install from [Git official website](https://git-scm.com/).

## Installation Steps

### Windows

1. **Clone the Repository**

   Open Command Prompt or PowerShell and run the following command to clone the repository:
   ```sh
   git clone https://github.com/juhinagpure/Eduford-university.git
   ```

2. **Navigate to the Project Directory**

   ```sh
   cd Eduford-university
   ```

3. **Install Dependencies**

   ```sh
   npm install
   ```

4. **Start the Server**

   ```sh
   npm start
   ```

5. **Open the Application in Your Browser**

   Open your browser and navigate to:
   ```sh
   http://localhost:3000
   ```

### macOS

1. **Clone the Repository**

   Open Terminal and run the following command to clone the repository:
   ```sh
   git clone https://github.com/juhinagpure/Eduford-university.git
   ```

2. **Navigate to the Project Directory**

   ```sh
   cd Eduford-university
   ```

3. **Install Dependencies**

   ```sh
   npm install
   ```

4. **Start the Server**

   ```sh
   npm start
   ```

5. **Open the Application in Your Browser**

   Open your browser and navigate to:
   ```sh
   http://localhost:3000
   ```

### Linux

1. **Clone the Repository**

   Open Terminal and run the following command to clone the repository:
   ```sh
   git clone https://github.com/juhinagpure/Eduford-university.git
   ```

2. **Navigate to the Project Directory**

   ```sh
   cd Eduford-university
   ```

3. **Install Dependencies**

   ```sh
   npm install
   ```

4. **Start the Server**

   ```sh
   npm start
   ```

5. **Open the Application in Your Browser**

   Open your browser and navigate to:
   ```sh
   http://localhost:3000
   ```

## Common Issues and Troubleshooting

1. **Node.js and npm are not recognized as internal or external commands**

   Ensure Node.js and npm are properly installed and added to your system's PATH. You can verify their installation by running:
   ```sh
   node -v
   npm -v
   ```

2. **Port 3000 is already in use**

   If you encounter an error stating that port 3000 is already in use, you can either stop the process using that port or change the port for Eduford University. To change the port, update the `start` script in `package.json`:
   ```json
   "scripts": {
     "start": "PORT=3001 node app.js"
   }
   ```

3. **Permission errors while installing dependencies**

   On macOS and Linux, you might need to use `sudo` to install dependencies:
   ```sh
   sudo npm install
   ```

## Congratulations

You have successfully installed and set up Eduford University locally on your machine. If you encounter any issues or have questions, feel free to open an issue on the [GitHub repository](https://github.com/juhinagpure/Eduford-university/issues).



## Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss proposed modifications.

![Smart saver Infographic](https://camo.githubusercontent.com/dd5e3080a7adc2ead8f86cbbd6577cee0a38439c0ebf195021ce41587b0a405f/68747470733a2f2f6d69726f2e6d656469756d2e636f6d2f6d61782f313430302f312a633459675258595161794f5657785633376f757272772e706e67)