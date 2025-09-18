# 🌸 Personal Portfolio

This is my personal portfolio, where I showcase the projects I’ve built, the skills I’m passionate about, and how to get in touch. It’s a fully responsive web app built with React, Node.js, and AWS, featuring a playful, interactive front end and a dependable backend that effortlessly handles messages and other server-side tasks.

## 🌱 The Features

* **Interactive Landing Page:** A friendly typing animation welcomes every visitor.  
* **Skills Carousel:** Browse my technical skills with a smooth, animated carousel.  
* **Project Showcase:** Check out some of my favorite projects with descriptions and links.  
* **Functional Contact Form:** Send me a message directly through a ready-to-use contact form.  
* **Responsive Design:** Works seamlessly on phones, tablets, and desktops. 

## 🛠️ The Tools I Used

### Frontend

* **React:** Organizes the UI into clean, reusable components.  
* **React-Bootstrap:** Makes layouts responsive and easy to manage.  
* **React-Multi-Carousel:** Powers the smooth skills carousel. 

### Backend

* **Node.js & Express:** Handles server-side functionality, including the contact form.  
* **Nodemailer:** Sends emails reliably.  
* **Google APIs (OAuth2):** Ensures emails are sent securely through Gmail.  
* **Serverless-http:** Makes the backend serverless and easy to deploy.

## 🚀 Getting Started

### Prerequisites

* Node.js installed
* A code editor (like VS Code)

### Steps

1.  **Clone the repository:**
    ```bash
    git clone <your_repository_url>
    cd <your_project_folder>
    ```

2.  **Install dependencies:**

    Navigate into the project folder and give your project everything it needs to run.

    * For the frontend I used:
        ```bash
        cd client
        npm install bootstrap react-scripts react-dom react-multi-carousel
        ```

    * For the backend I used:
        ```bash
        cd server
        npm install cors dotenv express googleapis nodemailer serverless-http
        ```

3.  **Configure environment variables:**

    The backend needs a secret `.env` file to handle things securely. Create a file named `.env` inside the `server` directory with these variables:

    ```ini
    EMAIL_USER=your-email@gmail.com
    CLIENT_ID=your_client_id
    CLIENT_SECRET=your_client_secret
    REFRESH_TOKEN=your_refresh_token
    ```

    *Note: You'll need to set up a Google OAuth2 project to get these values.*

4.  **Run the application:**

    * To start the backend server, run this command from the `server` directory:
        ```bash
        node server.js
        ```

    * To get the frontend up and running, open a new terminal tab, run this command from the `client` directory:
        ```bash
        npm start
        ```

    You should be good to go! The application will be waiting for you at `http://localhost:3000`.

## 💌 Connect With Me

* **LinkedIn:** [LinkedIn](https://www.linkedin.com/in/erika-cole-398a37189)
* **Website:** [Portfolio](http://ecole-portfolio-2025.s3-website.us-east-2.amazonaws.com)

## 🖋️ License

This project is licensed under the MIT License—see the `LICENSE.md` file for details.
