# User Profile List React Component

This project is a React application that displays a list of user profiles fetched from a mock API endpoint. It also includes a filtering feature that allows users to filter the list based on specific criteria. Additionally, the project is set up with a basic Node.js server for local development and deployment purposes.

## Requirements

### Custom User List Component

1. The React component fetches user data from a mock API endpoint.
2. User profiles are displayed with relevant information, such as names, profile pictures, and other details.
3. Users can filter the list based on criteria like age range and location.

## Getting Started

To run this project locally and start the development server:

1. Clone this repository using the following command:

2. Navigate to the project directory:
  cd client1
3. Install dependencies for both the client and server:
   npm i

5. Return to the project root directory:
 cd ..
6. Install dependencies for the server:
npm install
7. Start the development server:
   npm start
8. Open your web browser and navigate to `http://localhost:5000` to see the user profile list.

## Filtering Users

Users can filter the user list by age range and location. Simply use the provided filter options on the page.
![image](https://github.com/aregularguy/User_API/assets/70151782/d8c43c89-0e4f-45e6-a625-446c97d523db)

## Deployment

To deploy the application, follow these steps:

1. Set up environment-specific settings for development and production in the `.env` file.

2. Create a deployment script that builds the React app and starts the server. You can use the following command:
npm run build
npm start
