# 🌸 Personal Portfolio

This is my personal portfolio, where I showcase the projects I’ve built, the skills I’m passionate about, and how to get in touch. It’s a fully responsive web app built with React, Node.js, and AWS, featuring a playful, interactive front end and a dependable backend that effortlessly handles messages and other server-side tasks.

## 🌱 The Features

* **Interactive Landing Page:** Say hello with a fun typing text effect that greets every visitor.
* **Skills Carousel:** Swipe through my technical skills on a smooth, animated carousel.
* **Project Showcase:** Explore some of my favorite projects, complete with descriptions and links.
* **Functional Contact Form:** Want to chat? The contact form is ready to go, sending messages directly to me.
* **Responsive Design:** Looks great and works perfectly on your phone, tablet, or desktop!

## 🛠️ The Tools I Used

### Frontend

* **React:** For a beautifully organized, component-based user interface.
* **React-Bootstrap:** To keep the layout clean and responsive without a fuss.
* **React-Multi-Carousel:** The secret behind that cool skills carousel!

### Backend

* **Node.js & Express:** The power duo that handles everything on the server side, especially that contact form.
* **Nodemailer:** My go-to for sending emails.
* **Google APIs:** The security guard, using OAuth2 to make sure emails are sent safely through Gmail.
* **Serverless-http:** What makes the backend a serverless superstar, ready for easy deployment!

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

* **LinkedIn:** <a href="https://www.linkedin.com/in/erika-cole-398a37189" target="_blank">LinkedIn</a>
* **Website:** <a href="https://www.linkedin.com/in/erika-cole-398a37189" target="_blank">Portfolio</a>

## 🖋️ License

This project is licensed under the MIT License—see the `LICENSE.md` file for details.
