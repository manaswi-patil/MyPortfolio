<!-- # React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend using TypeScript with type-aware lint rules enabled. Check out the [TS template](https://github.com/vitejs/vite/tree/main/packages/create-vite/template-react-ts) for information on how to integrate TypeScript and [`typescript-eslint`](https://typescript-eslint.io) in your project. -->
# Contact Form with React, MongoDB & Nodemailer

This project includes a contact form built with React and Tailwind CSS on the frontend, with Node.js, Express, MongoDB Atlas for data storage, and Nodemailer for email notifications on the backend.

## Project Structure

```
project-root/
├── client/                # React frontend
│   ├── src/
│   │   ├── components/
│   │   │   └── Contact.js # Your contact form component
│   │   └── ...
│   └── ...
├── server/                # Node.js backend
│   ├── models/
│   │   └── Contact.js     # MongoDB schema
│   ├── routes/
│   │   └── contactRoutes.js # API routes
│   ├── utils/
│   │   └── emailService.js  # Nodemailer setup
│   ├── .env               # Environment variables
│   └── server.js          # Express server setup
└── README.md
```

## Setup Instructions

### 1. Backend Setup

1. Navigate to the server directory:
   ```bash
   cd server
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file with the following variables:
   ```
   PORT=5000
   MONGODB_URI=mongodb+srv://<username>:<password>@cluster0.xxxxx.mongodb.net/contactDB?retryWrites=true&w=majority
   EMAIL_USER=your-email@gmail.com
   EMAIL_PASS=your-app-password
   EMAIL_TO=recipient-email@example.com
   ```

   **Note about EMAIL_PASS:** If using Gmail, you'll need to create an App Password:
   - Go to your Google Account > Security
   - Enable 2-Step Verification if not already enabled
   - Go to App passwords, create a new one, and use that password in the .env file

4. Start the server:
   ```bash
   npm run dev
   ```

### 2. Frontend Setup

1. Navigate to the client directory:
   ```bash
   cd client
   ```

2. Install Axios if not already installed:
   ```bash
   npm install axios
   ```

3. Make sure your Contact component is updated to use the API endpoint
   
4. Start the React development server:
   ```bash
   npm start
   ```

## Features

- Responsive contact form with Tailwind CSS styling
- Form data validation
- Data storage in MongoDB Atlas
- Email notifications using Nodemailer
- Toast notifications for submission feedback

## Additional Notes

- The backend API endpoint is at `http://localhost:5000/api/contact`
- For production deployment, update CORS settings in server.js
- Consider adding rate limiting for the contact form API to prevent abuse