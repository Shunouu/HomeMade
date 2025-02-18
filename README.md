# Vue App for HomeMade

This project is a web application developed for HomeMade, a company specializing in takeout meals prepared by renowned chefs. The application aims to expand its market reach beyond local customers.

## Project Structure

- **public/index.html**: The main HTML file that serves as the entry point for the Vue application.
- **src/assets**: Directory for static assets such as images, fonts, and stylesheets.
- **src/components**: Contains reusable components:
  - **ChefCard.vue**: Displays information about a chef, including their name and specialties.
  - **DishCard.vue**: Represents a dish offered by a chef, showing details like the dish name and description.
  - **Navbar.vue**: Provides the navigation bar for the application.
  - **Footer.vue**: Displays the footer of the application with copyright information and links.
- **src/pages**: Contains the main pages of the application:
  - **HomePage.vue**: The landing page of the application.
  - **ChefsListPage.vue**: Lists all available chefs.
  - **ChefDetailPage.vue**: Displays detailed information about a selected chef.
  - **SignupPage.vue**: Allows users to create a new account.
  - **LoginPage.vue**: Allows existing users to log in.
- **src/router/index.js**: Sets up the Vue Router for navigation between different pages.
- **src/store/index.js**: Sets up Pinia for state management, handling user authentication and authorization.
- **src/App.vue**: The root component of the application.
- **src/main.js**: The entry point for the Vue application.
- **package.json**: Contains metadata about the project, including dependencies and scripts.
- **vue.config.js**: Configuration options for the Vue CLI.

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```
2. Navigate to the project directory:
   ```
   cd vue-app
   ```
3. Install the dependencies:
   ```
   npm install
   ```

## Usage

To run the application in development mode, use the following command:
```
npm run serve
```
Open your browser and navigate to `http://localhost:8080` to view the application.

## Contributing

Contributions are welcome! Please feel free to submit a pull request or open an issue for any suggestions or improvements.

## License

This project is licensed under the MIT License.