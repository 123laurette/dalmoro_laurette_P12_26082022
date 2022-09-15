[![forthebadge](https://forthebadge.com/images/badges/validated-html5.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/uses-css.svg)](https://forthebadge.com)
[![forthebadge](https://forthebadge.com/images/badges/made-with-javascript.svg)](https://forthebadge.com)




![logo sportsee](https://github.com/123laurette/dalmoro_laurette_P12_26082022/blob/master/frontend_sportsee/src/assets/logo.png)




## Presentation
SportSee project is an application for sportive people that want to follow their daily progress through analytics dashboard.

## Prerequisites
NodeJS (v16.17.0)  
NPM (8.15.0)  
Yarn (1.22.19)  
React (v18.2.0)   
React Router Dom (v6.3.0)  
Recharts (v2.1.13)  


## Installing the app
Forke and clone the repository : https://github.com/123laurette/dalmoro_laurette_P12_26082022.git

### Backend 
    Open a new terminal and run cd Backend command  
    Then run yarn devcommand the backend will open http://localhost:3000

### FrontEnd
    Open a new terminal and run cd frontend_sportsee  
    Then run the npm start command will allow you to run the application on http://localhost:3001


Getting Started with Create React App  
This project was bootstrapped with Create React App.

### To display a user's data :
- Go to the Dashboard.jsx file in the frontend_sportsee/src/pages folder  
- Uncomment the dataUser you want to use (fetchMock or fetchApi)  
- Follow the instuctions below

## NOTA : 4 users have been created
    fetchMock = id 22 and 28
    fetckApi = id 12 and 18


### Author
laurette DAL MORO

### Possible endpoints

This project includes four endpoints that you will be able to use:

- `http://localhost:3000/user/${userId}` - retrieves information from a user. This first endpoint includes the user id, user information (first name, last name and age), the current day's score (todayScore) and key data (calorie, macronutrient, etc.).
- `http://localhost:3000/user/${userId}/activity` - retrieves a user's activity day by day with kilograms and calories.
- `http://localhost:3000/user/${userId}/average-sessions` - retrieves the average sessions of a user per day. The week starts on Monday.
- `http://localhost:3000/user/${userId}/performance` - retrieves a user's performance (energy, endurance, etc.).

### Examples of queries

- `http://localhost:3000/user/12/performance` - Retrieves the performance of the user with id 12
- `http://localhost:3000/user/18` - Retrieves user 18's main information.
