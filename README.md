**WeatherlyAI — Your Smart Weather Companion**

### Introduction

WeatherlyAI is a modern, responsive Weather Application built with ReactJS, offering real-time weather updates, hourly and 7-day forecasts, and an AI-powered Chatbox Assistant.
It supports light/dark mode and delivers a smooth, engaging user experience.

## Features

**City Search**: Find weather for cities like London, Paris, New York, Japan.

**Weather Overview**: Displays weather icon, temperature in °C, condition (e.g., Cloudy), humidity, and wind speed.

**Hourly Forecast**: Weather updates from 6 AM to 5 PM with temperature, humidity, and weather icons.

**7-Day Forecast**: Extended daily forecasts showing temperature, rain chance, and humidity.

**Light/Dark Mode**: Instantly toggle between light and dark themes for better accessibility.

**Chatbox Weather Assistant (v1.0)**: Ask questions like "Will it rain today?" and receive smart weather-related answers.

## Project Structure

weather-app/
├── App.js
├── App.css
├── WeatherChatBox.css
├── pages/
│   ├── Home.js
│   ├── SearchBar.js
│   └── Weather.js
├── components/
│   ├── ChatBoxAi.js
│   ├── ForecastCard.js
│   └── ToggleSwitch.js
└── utils/
    └── WeatherData.js
    
## Tech Stack

**Frontend:** ReactJS

**Routing:** React Router DOM

**Styling:** Tailwind CSS, Bootstrap, Styled-Components, Custom CSS

**APIs & Data Fetching:** OpenWeatherMap API (via Axios)

**Testing:** React Testing Library, Jest DOM

**Build Tools:** Babel, React Scripts

## How It Works

**Search**: Enter a city in the search bar and get live weather details.

**Navigate**: Explore hourly and daily weather information.

**Switch Themes**: Use the toggle button to switch between dark and light modes.

**Chat Assistant**: Open the chatbox to ask about the weather. Smart replies included!

## Example Chat Responses

**User Input:** Good Morning → **Bot Response:** "Good to hear from you! How can I assist you today?"

**User Input:** Hey → **Bot Response:** "Hi! 😊 How can I help you today?"

**User Input:** Will it rain today? → **Bot Response:** "No, it doesn't look like rain today. 🌞"

**User Input:** who are you? → **Bot Response:** "I am your weather assistant. I can help with your weather queries and provide forecasts!"

**User Input:** Thank you → **Bot Response:** "You're very welcome! 😊 Let me know if you need anything else!"

### Running the Application (Metro Server)
1. **Clone the Repository:** git clone https://github.com/your-username/weatherlyai.git
cd weatherlyai
2. **Install dependencies:** npm install
3. **Start Metro and Run Project:** npm start
4. Open **http://localhost:3000** to view it in the browser.

## Screenshots
### Light Mode

### ![HOME PAGE]
![Screenshot 2025-04-26 182343](https://github.com/user-attachments/assets/3f54e787-9ea7-4e98-808a-f17986147725)

### Dark Mode

### ![HOME PAGE]
![1](https://github.com/user-attachments/assets/4f100366-dec7-413a-be4d-c8bb4354e296)

### ![WEATHER PAGE]

### Dark Mode

### LONDON
![2](https://github.com/user-attachments/assets/0ee95a41-d65d-4117-b207-4149ad710322)
![3](https://github.com/user-attachments/assets/61c4b8e6-8460-4b61-ba8a-2afa3c274898)

### PARIS
![4](https://github.com/user-attachments/assets/84731c90-d3c4-4897-85b4-613702e7d5a1)
![5](https://github.com/user-attachments/assets/0c10a9c3-cab0-4909-889f-533a74a35307)

### NEWYORK
![6](https://github.com/user-attachments/assets/9e765800-09cc-4003-bde3-8fd5d794b19f)
![7](https://github.com/user-attachments/assets/be1113c1-59e2-45fa-8dc6-ec437d8a6e74)

### JAPAN
![8](https://github.com/user-attachments/assets/30b713b2-59ca-45fd-a29f-c49e998a94b8)
![9](https://github.com/user-attachments/assets/39907904-865d-4625-b338-e65641dbc439)

### Light Mode

### LONDON
![10](https://github.com/user-attachments/assets/9a3cae2d-4778-4042-b4f3-cbe1f3e5f7e4)
![11](https://github.com/user-attachments/assets/78ad0d04-5d60-4b57-ac11-47e839d889c7)

### PARIS
![12](https://github.com/user-attachments/assets/d40af84d-63b5-4b33-8fbd-01feedf2f1b8)
![13](https://github.com/user-attachments/assets/3be47eb4-33a1-4512-bc42-8c3fd6c8d234)

### NewYork
![14](https://github.com/user-attachments/assets/d3c7f57c-66ff-4f74-8cb0-44708c1757c0)
![15](https://github.com/user-attachments/assets/55068338-1a46-4011-8b09-680e42963228)

### Japan
![16](https://github.com/user-attachments/assets/e3f90525-39fe-40b2-9736-034d6c823fa6)
![17](https://github.com/user-attachments/assets/4c947acd-4d3d-4b02-b5b3-ede07335d7e9)

## CHATBOX AI -  WEATHER ASSISTANT

## Light Mode
![20](https://github.com/user-attachments/assets/52cc0eae-4cbd-472e-aa73-8928dddb8e04)
![21](https://github.com/user-attachments/assets/06b80df8-273a-4534-acb4-f8aaaf18a7a2)

## Dark Mode
![18](https://github.com/user-attachments/assets/0677a195-dc87-4cd7-91e9-a3319685300d)
![19](https://github.com/user-attachments/assets/5c063f13-e177-4ed6-a251-ad525c49733a)
