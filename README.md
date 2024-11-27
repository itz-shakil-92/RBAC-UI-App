# Role-Based Access Control (RBAC) UI

This project is an **admin dashboard for managing users, roles, and permissions** in a secure and user-friendly way. The application implements **Role-Based Access Control (RBAC)** to restrict access based on user roles and permissions.

## Features

### Authentication System
- Login/Logout functionality with session management.
- Persistent authentication using cookies.
- Protected routes ensuring only authorized users can access specific pages.

### Role-Based Access Control
- Role-based navigation visibility.
- Permission-based access control for pages and actions.
- Admin-specific controls for managing roles and permissions.

### Security Enhancements
- Routes and actions secured with authentication and permission checks.
- Input validation and error handling for robustness.
- User session management for enhanced security.

### UI/UX Enhancements
- User role display in the sidebar.
- Conditional navigation options based on roles and permissions.
- Dynamic role and permission management views.

## User Roles and Credentials
To test the application, use the following credentials:

| **Role**  | **Email**               | **Password**          |
|-----------|-------------------------|-----------------------|
| Admin     | john@vrvsecurity.com    | Any                   |
| Manager   | jane@vrvsecurity.com    | Any                   |
| User      | bob@vrvsecurity.com     | Any                   |

### Role Permissions
- **Admin**: Full access to all features.
- **Manager**: Can view and manage users.
- **User**: Can only view user information.

## Installation Instructions

### Prerequisites
- **Node.js**: Ensure you have Node.js (version 16 or above) installed.
- **Git**: Required for cloning the repository.
- **Package Manager**: Use npm or yarn.

### Steps
1. Clone the repository:
   ```bash
   git clone https://github.com/itz-shakil-92/RBAC-UI-App
   cd RBAC-UI-App

2. Install dependencies:
   ```bash
   npm install

3. Start the development server:
   ```bash    
   npm run dev

4. Open the application in your browser at:
   ```bash
   http://localhost:3000
   ```

   - port no can be different (use accordingly )

## Deploying to Netlify
- Sign in to Netlify and connect your GitHub repository.
- Select the repository and configure the build settings:
- Build Command: npm run build
Publish Directory: dist
- Click Deploy and wait for the deployment.
- Access your app at the provided Netlify URL.


## Live Demo

You can access the live version of the project here:

[Live Demo](https://your-live-link.com)

### Project Structure
- **/src**: Contains the source code, including components, pages, and utilities.
- **/public**: Static assets for the application.
- **/dist**: Generated build files for deployment (after npm run build).
### Documentation
- For detailed usage and feature explanations, refer to the inline comments in the codebase.

### Contributions
- Contributions are welcome! Please fork the repository, make changes, and submit a pull request.


## Acknowledgment

This project was developed as part of the **Frontend Developer Intern Assessment** for [VRV Security](https://vrvsecurity.com). Thank you for the opportunity to demonstrate my skills and creativity in building this Role-Based Access Control (RBAC) system.

        
