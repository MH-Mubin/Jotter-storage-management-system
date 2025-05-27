# Jotter Storage Management System - Backend

A robust backend system for the Jotter storage management application, designed as a storage management system where users can store, manage, and preview several types of files like images, PDFs, and notes. Built with Node.js and Express.js, it integrates MongoDB for data storage and JWT for secure authentication, providing features to track storage usage and document management.

## Table of Contents

- [Features](#features)
- [Tech Stack](#tech-stack)
- [Folder Structure](#folder-structure)
- [Installation](#installation)
- [Usage](#usage)
- [API Endpoints](#api-endpoints)
- [Testing](#testing)
- [Contributing](#contributing)

## Features

- **User Authentication**: Registration, login, logout, and JWT-based authentication.
- **Profile Management**: Update profile, view details, and recover/reset passwords with email verification.
- **Static Content**: Serve About Us, Privacy Policy, and Terms and Conditions.
- **Account Settings**: Change password and delete account functionality.
- **Security**: Implements middleware for authentication and rate limiting.
- **Data Seeding**: Initial data setup for static content.

## Tech Stack

| Technology           | Version | Purpose                            |
| -------------------- | ------- | ---------------------------------- |
| Node.js              | 20.12.2 | Runtime environment                |
| Express.js           | 5.1.0   | Web framework                      |
| MongoDB              | 8.15.0  | Database                           |
| Mongoose             | 8.15.0  | MongoDB object modeling            |
| JSON Web Token (JWT) | 9.0.2   | Authentication                     |
| bcrypt               | 6.0.0   | Password hashing                   |
| nodemailer           | 7.0.3   | Email sending                      |
| helmet               | 8.1.0   | Security headers                   |
| cors                 | 2.8.5   | Cross-origin resource sharing      |
| dotenv               | 16.5.0  | Environment variable management    |
| nodemon              | 3.1.10  | Development server auto-restart    |
| VS Code              | Latest  | Integrated Development Environment |
| Postman              | Latest  | API testing tool                   |
| MongoDB Compass      | Latest  | Database management tool           |

## Folder Structure

```
backend/
├── app.js                  # Main Express app setup
├── index.js                # Entry point to start the server
├── package.json            # Project metadata and dependencies
└── src/
├── commonServices/     # Reusable logic and service functions
│   ├── staticContent/
│   │   └── staticContentServices.js
│   └── user/
│       ├── userChangePassService.js
│       ├── userCreateService.js
│       ├── userDetailsService.js
│       ├── userLoginService.js
│       ├── userResetPassService.js
│       ├── userUpdateService.js
│       ├── userVerifyEmailService.js
│       └── userVerifyOtpService.js
├── controllers/        # Handles HTTP requests & calls services
│   ├── settings/
│   │   ├── changePassController.js
│   │   ├── deleteAccountController.js
│   │   └── staticContentController.js
│   └── user/
│       ├── logOutController.js
│       └── userController.js
├── middlewares/        # Custom middlewares
│   └── authMiddleware.js
├── models/             # Mongoose schemas
│   ├── staticContent/
│   │   └── staticContentModel.js
│   └── users/
│       ├── blackListTokenModel.js
│       ├── otpModel.js
│       └── userModel.js
├── routes/             # API route definitions
│   └── api.js
├── seeder/             # Seeder scripts for initial data
│   └── staticContentSeeder.js
└── utility/            # Helper functions/utilities
├── createToken.js
└── sendEmailUtility.js
```

## Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/MH-Mubin/Jotter-storage-management-system.git
   cd backend
   ```
2. **Install dependencies:**

   ```
   npm install
   ```

3. **Set up environment variables: Create a .env file in the root directory and add the following:**

   ```
   PORT=4000
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   EMAIL_USER=your_email
   EMAIL_PASS=your_email_password
   ```

4. **Run the application:**

   ```
   npm start
   ```

## Usage

- **Start the Server**:: Run npm start to launch the backend on http://localhost:4000.
- **API Testing**: Use Postman to test endpoints (e.g., POST /registration, GET /profileDetails).
- **Database Management**: Use MongoDB Compass to manage and visualize the MongoDB database.

## API Endpoints

### User Routes:

- POST /registration: Register a new user.
- POST /login: User login.
- POST /profileUpdate: Update user profile (requires authentication).
- GET /recoverVerifyEmail/:email: Verify email for password recovery.
- GET /recoverVerifyOTP/:email/:otpCode: Verify OTP for password recovery.
- POST /resetPassword/:email/:otpCode: Reset user password.
- GET /profileDetails: Get user profile details (requires authentication).
- GET /profileDetails/:id: Get profile details by ID (requires authentication).
- GET /logout: Logout user (requires authentication).

### Settings Routes:

- GET /aboutUs: Retrieve About Us content.
- GET /privacyPolicy: Retrieve Privacy Policy content.
- GET /termsAndConditions: Retrieve Terms and Conditions content.
- POST /changePassword: Change user password (requires authentication).
- DELETE /deleteAccount: Delete user account (requires authentication).

## Testing

- **API Testing**: Use Postman to test all endpoints. Ensure proper headers (e.g., Authorization: Bearer <token>) for protected routes.
- **Current Status**: No automated tests are implemented. Update the test script in package.json and add test files as needed.

## Contributing

- Fork the repository.
- Create a new branch: git checkout -b feature-branch.
- Make your changes and commit: git commit -m "Add feature".
- Push to the branch: git push origin feature-branch.
- Submit a pull request with a clear description.
