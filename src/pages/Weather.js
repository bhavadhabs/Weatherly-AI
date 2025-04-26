import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import ToggleSwitch from './component/ToggleSwitch';
import ChatBoxAI from './component/ChatBoxAI'
import '../App.css';

const weatherData = {
  London: {
    condition: 'Cloudy ☁️',
    temp: 15,
    humidity: 80,
    wind: 10,
    icon: '☁️',
    forecast: [
      {
        day: 'Mon',
        temp: 15,
        rain: '20%',
        humidity: 78,
        icon: '☁️',
        hourly: [
          { time: '6am', temp: 13, humidity: 80 },
          { time: '7am', temp: 14, humidity: 79 },
          { time: '8am', temp: 16, humidity: 77 },
          { time: '9am', temp: 17, humidity: 76 },
          { time: '10am', temp: 18, humidity: 75 },
          { time: '11am', temp: 19, humidity: 74 },
          { time: '12pm', temp: 21, humidity: 73 },
          { time: '1pm', temp: 22, humidity: 72 },
          { time: '2pm', temp: 23, humidity: 70 },
          { time: '3pm', temp: 23, humidity: 68 },
          { time: '4pm', temp: 22, humidity: 69 },
          { time: '5pm', temp: 21, humidity: 71 },
        ],
      },
      {
        day: 'Tue',
        temp: 17,
        rain: '10%',
        humidity: 72,
        icon: '🌤️',
        hourly: [
          { time: '6am', temp: 16, humidity: 74 },
          { time: '7am', temp: 17, humidity: 72 },
          { time: '8am', temp: 18, humidity: 71 },
          { time: '9am', temp: 19, humidity: 70 },
          { time: '10am', temp: 21, humidity: 69 },
          { time: '11am', temp: 22, humidity: 68 },
          { time: '12pm', temp: 23, humidity: 67 },
          { time: '1pm', temp: 24, humidity: 66 },
          { time: '2pm', temp: 25, humidity: 65 },
          { time: '3pm', temp: 24, humidity: 64 },
          { time: '4pm', temp: 23, humidity: 63 },
          { time: '5pm', temp: 22, humidity: 62 },
        ],
      },
      {
        day: 'Wed',
        temp: 16,
        rain: '30%',
        humidity: 80,
        icon: '🌧️',
        hourly: [
          { time: '6am', temp: 14, humidity: 83 },
          { time: '7am', temp: 15, humidity: 84 },
          { time: '8am', temp: 16, humidity: 85 },
          { time: '9am', temp: 17, humidity: 86 },
          { time: '10am', temp: 18, humidity: 87 },
          { time: '11am', temp: 19, humidity: 88 },
          { time: '12pm', temp: 20, humidity: 89 },
          { time: '1pm', temp: 21, humidity: 88 },
          { time: '2pm', temp: 21, humidity: 87 },
          { time: '3pm', temp: 20, humidity: 86 },
          { time: '4pm', temp: 19, humidity: 85 },
          { time: '5pm', temp: 18, humidity: 84 },
        ],
      },
      {
        day: 'Thu',
        temp: 14,
        rain: '25%',
        humidity: 75,
        icon: '☁️',
        hourly: [
          { time: '6am', temp: 12, humidity: 78 },
          { time: '7am', temp: 13, humidity: 79 },
          { time: '8am', temp: 14, humidity: 80 },
          { time: '9am', temp: 15, humidity: 81 },
          { time: '10am', temp: 16, humidity: 82 },
          { time: '11am', temp: 17, humidity: 83 },
          { time: '12pm', temp: 18, humidity: 84 },
          { time: '1pm', temp: 19, humidity: 85 },
          { time: '2pm', temp: 20, humidity: 86 },
          { time: '3pm', temp: 21, humidity: 87 },
          { time: '4pm', temp: 20, humidity: 88 },
          { time: '5pm', temp: 19, humidity: 89 },
        ],
      },
      {
        day: 'Fri',
        temp: 13,
        rain: '15%',
        humidity: 70,
        icon: '🌥️',
        hourly: [
          { time: '6am', temp: 11, humidity: 72 },
          { time: '7am', temp: 12, humidity: 73 },
          { time: '8am', temp: 13, humidity: 74 },
          { time: '9am', temp: 14, humidity: 75 },
          { time: '10am', temp: 15, humidity: 76 },
          { time: '11am', temp: 16, humidity: 77 },
          { time: '12pm', temp: 17, humidity: 78 },
          { time: '1pm', temp: 18, humidity: 79 },
          { time: '2pm', temp: 19, humidity: 80 },
          { time: '3pm', temp: 18, humidity: 81 },
          { time: '4pm', temp: 17, humidity: 82 },
          { time: '5pm', temp: 16, humidity: 83 },
        ],
      },
      {
        day: 'Sat',
        temp: 12,
        rain: '10%',
        humidity: 65,
        icon: '🌤️',
        hourly: [
          { time: '6am', temp: 10, humidity: 66 },
          { time: '7am', temp: 11, humidity: 67 },
          { time: '8am', temp: 12, humidity: 68 },
          { time: '9am', temp: 13, humidity: 69 },
          { time: '10am', temp: 14, humidity: 70 },
          { time: '11am', temp: 15, humidity: 71 },
          { time: '12pm', temp: 16, humidity: 72 },
          { time: '1pm', temp: 17, humidity: 71 },
          { time: '2pm', temp: 18, humidity: 70 },
          { time: '3pm', temp: 19, humidity: 69 },
          { time: '4pm', temp: 18, humidity: 68 },
          { time: '5pm', temp: 17, humidity: 67 },
        ],
      },
      {
        day: 'Sun',
        temp: 16,
        rain: '5%',
        humidity: 60,
        icon: '☀️',
        hourly: [
          { time: '6am', temp: 14, humidity: 62 },
          { time: '7am', temp: 15, humidity: 63 },
          { time: '8am', temp: 16, humidity: 64 },
          { time: '9am', temp: 17, humidity: 65 },
          { time: '10am', temp: 18, humidity: 66 },
          { time: '11am', temp: 19, humidity: 67 },
          { time: '12pm', temp: 20, humidity: 68 },
          { time: '1pm', temp: 21, humidity: 67 },
          { time: '2pm', temp: 22, humidity: 66 },
          { time: '3pm', temp: 23, humidity: 65 },
          { time: '4pm', temp: 22, humidity: 64 },
          { time: '5pm', temp: 21, humidity: 63 },
        ],
      },
    ],
  },
  NewYork: {
    condition: 'Sunny ☀️',
    temp: 30,
    humidity: 60,
    wind: 15,
    icon: '☀️',
    forecast: [
      {
        day: 'Mon',
        temp: 30,
        rain: '0%',
        humidity: 60,
        icon: '☀️',
        hourly: [
          { time: '6am', temp: 24, humidity: 65, rain: '0%' },
          { time: '7am', temp: 26, humidity: 64, rain: '0%' },
          { time: '8am', temp: 28, humidity: 62, rain: '0%' },
          { time: '9am', temp: 29, humidity: 60, rain: '0%' },
          { time: '10am', temp: 30, humidity: 58, rain: '0%' },
          { time: '11am', temp: 31, humidity: 57, rain: '0%' },
          { time: '12pm', temp: 32, humidity: 56, rain: '0%' },
          { time: '1pm', temp: 33, humidity: 55, rain: '0%' },
          { time: '2pm', temp: 34, humidity: 54, rain: '0%' },
          { time: '3pm', temp: 33, humidity: 53, rain: '0%' },
          { time: '4pm', temp: 32, humidity: 52, rain: '0%' },
          { time: '5pm', temp: 31, humidity: 51, rain: '0%' },
        ],
      },
      {
        day: 'Tue',
        temp: 29,
        rain: '5%',
        humidity: 61,
        icon: '☀️',
        hourly: [
          { time: '6am', temp: 23, humidity: 66, rain: '0%' },
          { time: '7am', temp: 25, humidity: 65, rain: '0%' },
          { time: '8am', temp: 27, humidity: 63, rain: '5%' },
          { time: '9am', temp: 28, humidity: 61, rain: '5%' },
          { time: '10am', temp: 29, humidity: 59, rain: '5%' },
          { time: '11am', temp: 30, humidity: 58, rain: '5%' },
          { time: '12pm', temp: 31, humidity: 57, rain: '5%' },
          { time: '1pm', temp: 32, humidity: 56, rain: '5%' },
          { time: '2pm', temp: 33, humidity: 55, rain: '5%' },
          { time: '3pm', temp: 32, humidity: 54, rain: '5%' },
          { time: '4pm', temp: 31, humidity: 53, rain: '5%' },
          { time: '5pm', temp: 30, humidity: 52, rain: '0%' },
        ],
      },
      {
        day: 'Wed',
        temp: 28,
        rain: '0%',
        humidity: 62,
        icon: '☀️',
        hourly: [
          { time: '6am', temp: 22, humidity: 67, rain: '0%' },
          { time: '7am', temp: 24, humidity: 66, rain: '0%' },
          { time: '8am', temp: 26, humidity: 64, rain: '0%' },
          { time: '9am', temp: 27, humidity: 62, rain: '0%' },
          { time: '10am', temp: 28, humidity: 60, rain: '0%' },
          { time: '11am', temp: 29, humidity: 59, rain: '0%' },
          { time: '12pm', temp: 30, humidity: 58, rain: '0%' },
          { time: '1pm', temp: 31, humidity: 57, rain: '0%' },
          { time: '2pm', temp: 32, humidity: 56, rain: '0%' },
          { time: '3pm', temp: 31, humidity: 55, rain: '0%' },
          { time: '4pm', temp: 30, humidity: 54, rain: '0%' },
          { time: '5pm', temp: 29, humidity: 53, rain: '0%' },
        ],
      },
      {
        day: 'Thu',
        temp: 27,
        rain: '10%',
        humidity: 63,
        icon: '🌤️',
        hourly: [
          { time: '6am', temp: 21, humidity: 68, rain: '5%' },
          { time: '7am', temp: 23, humidity: 67, rain: '5%' },
          { time: '8am', temp: 25, humidity: 65, rain: '5%' },
          { time: '9am', temp: 26, humidity: 63, rain: '10%' },
          { time: '10am', temp: 27, humidity: 61, rain: '10%' },
          { time: '11am', temp: 28, humidity: 60, rain: '10%' },
          { time: '12pm', temp: 29, humidity: 59, rain: '10%' },
          { time: '1pm', temp: 30, humidity: 58, rain: '10%' },
          { time: '2pm', temp: 31, humidity: 57, rain: '10%' },
          { time: '3pm', temp: 30, humidity: 56, rain: '5%' },
          { time: '4pm', temp: 29, humidity: 55, rain: '5%' },
          { time: '5pm', temp: 28, humidity: 54, rain: '5%' },
        ],
      },
      {
        day: 'Fri',
        temp: 26,
        rain: '15%',
        humidity: 64,
        icon: '🌤️',
        hourly: [
          { time: '6am', temp: 20, humidity: 69, rain: '5%' },
          { time: '7am', temp: 22, humidity: 68, rain: '5%' },
          { time: '8am', temp: 24, humidity: 66, rain: '10%' },
          { time: '9am', temp: 25, humidity: 64, rain: '10%' },
          { time: '10am', temp: 26, humidity: 63, rain: '10%' },
          { time: '11am', temp: 27, humidity: 62, rain: '15%' },
          { time: '12pm', temp: 28, humidity: 61, rain: '15%' },
          { time: '1pm', temp: 29, humidity: 60, rain: '15%' },
          { time: '2pm', temp: 30, humidity: 59, rain: '10%' },
          { time: '3pm', temp: 29, humidity: 58, rain: '10%' },
          { time: '4pm', temp: 28, humidity: 57, rain: '5%' },
          { time: '5pm', temp: 27, humidity: 56, rain: '5%' },
        ],
      },
      {
        day: 'Sat',
        temp: 25,
        rain: '20%',
        humidity: 65,
        icon: '🌥️',
        hourly: [
          { time: '6am', temp: 19, humidity: 70, rain: '10%' },
          { time: '7am', temp: 21, humidity: 69, rain: '10%' },
          { time: '8am', temp: 23, humidity: 67, rain: '15%' },
          { time: '9am', temp: 24, humidity: 65, rain: '15%' },
          { time: '10am', temp: 25, humidity: 64, rain: '20%' },
          { time: '11am', temp: 26, humidity: 63, rain: '20%' },
          { time: '12pm', temp: 27, humidity: 62, rain: '20%' },
          { time: '1pm', temp: 28, humidity: 61, rain: '15%' },
          { time: '2pm', temp: 29, humidity: 60, rain: '15%' },
          { time: '3pm', temp: 28, humidity: 59, rain: '10%' },
          { time: '4pm', temp: 27, humidity: 58, rain: '10%' },
          { time: '5pm', temp: 26, humidity: 57, rain: '5%' },
        ],
      },
      {
        day: 'Sun',
        temp: 24,
        rain: '30%',
        humidity: 68,
        icon: '🌧️',
        hourly: [
          { time: '6am', temp: 18, humidity: 72, rain: '10%' },
          { time: '7am', temp: 20, humidity: 71, rain: '15%' },
          { time: '8am', temp: 22, humidity: 70, rain: '20%' },
          { time: '9am', temp: 23, humidity: 69, rain: '25%' },
          { time: '10am', temp: 24, humidity: 68, rain: '30%' },
          { time: '11am', temp: 25, humidity: 67, rain: '35%' },
          { time: '12pm', temp: 26, humidity: 66, rain: '30%' },
          { time: '1pm', temp: 27, humidity: 65, rain: '25%' },
          { time: '2pm', temp: 28, humidity: 64, rain: '20%' },
          { time: '3pm', temp: 27, humidity: 63, rain: '15%' },
          { time: '4pm', temp: 26, humidity: 62, rain: '10%' },
          { time: '5pm', temp: 25, humidity: 61, rain: '10%' },
        ],
      },
    ],
  },
  Paris: {
    condition: 'Rainy 🌧️',
    temp: 30,
    humidity: 60,
    wind: 15,
    icon: '🌧️',
    forecast: [
      {
        day: 'Mon',
        temp: 30,
        rain: '40%',
        humidity: 60,
        icon: '🌧️',
        hourly: [
          { time: '6am', temp: 24, humidity: 65, rain: '10%' },
          { time: '7am', temp: 26, humidity: 64, rain: '15%' },
          { time: '8am', temp: 28, humidity: 62, rain: '20%' },
          { time: '9am', temp: 29, humidity: 60, rain: '30%' },
          { time: '10am', temp: 30, humidity: 58, rain: '40%' },
          { time: '11am', temp: 31, humidity: 57, rain: '35%' },
          { time: '12pm', temp: 32, humidity: 56, rain: '50%' },
          { time: '1pm', temp: 33, humidity: 55, rain: '45%' },
          { time: '2pm', temp: 34, humidity: 54, rain: '40%' },
          { time: '3pm', temp: 33, humidity: 53, rain: '35%' },
          { time: '4pm', temp: 32, humidity: 52, rain: '30%' },
          { time: '5pm', temp: 31, humidity: 51, rain: '25%' },
        ],
      },
      {
        day: 'Tue',
        temp: 29,
        rain: '55%',
        humidity: 61,
        icon: '🌧️',
        hourly: [
          { time: '6am', temp: 23, humidity: 66, rain: '20%' },
          { time: '7am', temp: 25, humidity: 65, rain: '25%' },
          { time: '8am', temp: 27, humidity: 63, rain: '35%' },
          { time: '9am', temp: 28, humidity: 61, rain: '50%' },
          { time: '10am', temp: 29, humidity: 59, rain: '60%' },
          { time: '11am', temp: 30, humidity: 58, rain: '55%' },
          { time: '12pm', temp: 31, humidity: 57, rain: '50%' },
          { time: '1pm', temp: 32, humidity: 56, rain: '60%' },
          { time: '2pm', temp: 33, humidity: 55, rain: '65%' },
          { time: '3pm', temp: 32, humidity: 54, rain: '60%' },
          { time: '4pm', temp: 31, humidity: 53, rain: '55%' },
          { time: '5pm', temp: 30, humidity: 52, rain: '45%' },
        ],
      },
      {
        day: 'Wed',
        temp: 28,
        rain: '20%',
        humidity: 62,
        icon: '🌧️',
        hourly: [
          { time: '6am', temp: 22, humidity: 67, rain: '5%' },
          { time: '7am', temp: 24, humidity: 66, rain: '10%' },
          { time: '8am', temp: 26, humidity: 64, rain: '15%' },
          { time: '9am', temp: 27, humidity: 62, rain: '20%' },
          { time: '10am', temp: 28, humidity: 60, rain: '25%' },
          { time: '11am', temp: 29, humidity: 59, rain: '30%' },
          { time: '12pm', temp: 30, humidity: 58, rain: '25%' },
          { time: '1pm', temp: 31, humidity: 57, rain: '20%' },
          { time: '2pm', temp: 32, humidity: 56, rain: '15%' },
          { time: '3pm', temp: 31, humidity: 55, rain: '10%' },
          { time: '4pm', temp: 30, humidity: 54, rain: '5%' },
          { time: '5pm', temp: 29, humidity: 53, rain: '0%' },
        ],
      },
      {
        day: 'Thu',
        temp: 27,
        rain: '35%',
        humidity: 63,
        icon: '🌧️',
        hourly: [
          { time: '6am', temp: 21, humidity: 68, rain: '15%' },
          { time: '7am', temp: 23, humidity: 67, rain: '20%' },
          { time: '8am', temp: 25, humidity: 65, rain: '30%' },
          { time: '9am', temp: 26, humidity: 63, rain: '40%' },
          { time: '10am', temp: 27, humidity: 61, rain: '45%' },
          { time: '11am', temp: 28, humidity: 60, rain: '40%' },
          { time: '12pm', temp: 29, humidity: 59, rain: '35%' },
          { time: '1pm', temp: 30, humidity: 58, rain: '30%' },
          { time: '2pm', temp: 31, humidity: 57, rain: '25%' },
          { time: '3pm', temp: 30, humidity: 56, rain: '20%' },
          { time: '4pm', temp: 29, humidity: 55, rain: '15%' },
          { time: '5pm', temp: 28, humidity: 54, rain: '10%' },
        ],
      },
      {
        day: 'Fri',
        temp: 26,
        rain: '60%',
        humidity: 64,
        icon: '🌧️',
        hourly: [
          { time: '6am', temp: 20, humidity: 69, rain: '25%' },
          { time: '7am', temp: 22, humidity: 68, rain: '30%' },
          { time: '8am', temp: 24, humidity: 66, rain: '45%' },
          { time: '9am', temp: 25, humidity: 64, rain: '60%' },
          { time: '10am', temp: 26, humidity: 63, rain: '70%' },
          { time: '11am', temp: 27, humidity: 62, rain: '65%' },
          { time: '12pm', temp: 28, humidity: 61, rain: '60%' },
          { time: '1pm', temp: 29, humidity: 60, rain: '55%' },
          { time: '2pm', temp: 30, humidity: 59, rain: '50%' },
          { time: '3pm', temp: 29, humidity: 58, rain: '45%' },
          { time: '4pm', temp: 28, humidity: 57, rain: '40%' },
          { time: '5pm', temp: 27, humidity: 56, rain: '35%' },
        ],
      },
      {
        day: 'Sat',
        temp: 25,
        rain: '70%',
        humidity: 65,
        icon: '🌧️',
        hourly: [
          { time: '6am', temp: 19, humidity: 70, rain: '30%' },
          { time: '7am', temp: 21, humidity: 69, rain: '35%' },
          { time: '8am', temp: 23, humidity: 67, rain: '50%' },
          { time: '9am', temp: 24, humidity: 65, rain: '65%' },
          { time: '10am', temp: 25, humidity: 64, rain: '75%' },
          { time: '11am', temp: 26, humidity: 63, rain: '70%' },
          { time: '12pm', temp: 27, humidity: 62, rain: '65%' },
          { time: '1pm', temp: 28, humidity: 61, rain: '60%' },
          { time: '2pm', temp: 29, humidity: 60, rain: '55%' },
          { time: '3pm', temp: 28, humidity: 59, rain: '50%' },
          { time: '4pm', temp: 27, humidity: 58, rain: '45%' },
          { time: '5pm', temp: 26, humidity: 57, rain: '40%' },
        ],
      },
      {
        day: 'Sun',
        temp: 24,
        rain: '50%',
        humidity: 68,
        icon: '🌧️',
        hourly: [
          { time: '6am', temp: 18, humidity: 72, rain: '15%' },
          { time: '7am', temp: 20, humidity: 71, rain: '20%' },
          { time: '8am', temp: 22, humidity: 70, rain: '30%' },
          { time: '9am', temp: 23, humidity: 69, rain: '40%' },
          { time: '10am', temp: 24, humidity: 68, rain: '50%' },
          { time: '11am', temp: 25, humidity: 67, rain: '55%' },
          { time: '12pm', temp: 26, humidity: 66, rain: '60%' },
          { time: '1pm', temp: 27, humidity: 65, rain: '50%' },
          { time: '2pm', temp: 28, humidity: 64, rain: '40%' },
          { time: '3pm', temp: 27, humidity: 63, rain: '30%' },
          { time: '4pm', temp: 26, humidity: 62, rain: '20%' },
          { time: '5pm', temp: 25, humidity: 61, rain: '15%' },
        ],
      },
    ],
  },
  Japan: {
    condition: 'Snowy ❄️',
    temp: 30,
    humidity: 60,
    wind: 15,
    icon: '❄️',
    forecast: [
      {
        day: 'Mon',
        temp: 30,
        rain: '0%',
        snow: '2 inches',
        humidity: 60,
        icon: '❄️',
        hourly: [
          { time: '6am', temp: 24, humidity: 65, snow: '1 inch' },
          { time: '7am', temp: 26, humidity: 64, snow: '1 inch' },
          { time: '8am', temp: 28, humidity: 62, snow: '1 inch' },
          { time: '9am', temp: 29, humidity: 60, snow: '1 inch' },
          { time: '10am', temp: 30, humidity: 58, snow: '1.5 inches' },
          { time: '11am', temp: 31, humidity: 57, snow: '1.5 inches' },
          { time: '12pm', temp: 32, humidity: 56, snow: '2 inches' },
          { time: '1pm', temp: 33, humidity: 55, snow: '2 inches' },
          { time: '2pm', temp: 34, humidity: 54, snow: '2 inches' },
          { time: '3pm', temp: 33, humidity: 53, snow: '2 inches' },
          { time: '4pm', temp: 32, humidity: 52, snow: '1.5 inches' },
          { time: '5pm', temp: 31, humidity: 51, snow: '1 inch' },
        ],
      },
      {
        day: 'Tue',
        temp: 29,
        rain: '5%',
        snow: '1.5 inches',
        humidity: 61,
        icon: '❄️',
        hourly: [
          { time: '6am', temp: 23, humidity: 66, snow: '0.5 inch' },
          { time: '7am', temp: 25, humidity: 65, snow: '0.5 inch' },
          { time: '8am', temp: 27, humidity: 63, snow: '0.5 inch' },
          { time: '9am', temp: 28, humidity: 61, snow: '1 inch' },
          { time: '10am', temp: 29, humidity: 59, snow: '1 inch' },
          { time: '11am', temp: 30, humidity: 58, snow: '1.5 inches' },
          { time: '12pm', temp: 31, humidity: 57, snow: '1.5 inches' },
          { time: '1pm', temp: 32, humidity: 56, snow: '1.5 inches' },
          { time: '2pm', temp: 33, humidity: 55, snow: '2 inches' },
          { time: '3pm', temp: 32, humidity: 54, snow: '2 inches' },
          { time: '4pm', temp: 31, humidity: 53, snow: '1.5 inches' },
          { time: '5pm', temp: 30, humidity: 52, snow: '1 inch' },
        ],
      },
      {
        day: 'Wed',
        temp: 28,
        rain: '0%',
        snow: '1 inch',
        humidity: 62,
        icon: '❄️',
        hourly: [
          { time: '6am', temp: 22, humidity: 67, snow: '0.5 inch' },
          { time: '7am', temp: 24, humidity: 66, snow: '0.5 inch' },
          { time: '8am', temp: 26, humidity: 64, snow: '0.5 inch' },
          { time: '9am', temp: 27, humidity: 62, snow: '1 inch' },
          { time: '10am', temp: 28, humidity: 60, snow: '1 inch' },
          { time: '11am', temp: 29, humidity: 59, snow: '1 inch' },
          { time: '12pm', temp: 30, humidity: 58, snow: '1 inch' },
          { time: '1pm', temp: 31, humidity: 57, snow: '1 inch' },
          { time: '2pm', temp: 32, humidity: 56, snow: '1 inch' },
          { time: '3pm', temp: 31, humidity: 55, snow: '1 inch' },
          { time: '4pm', temp: 30, humidity: 54, snow: '0.5 inch' },
          { time: '5pm', temp: 29, humidity: 53, snow: '0.5 inch' },
        ],
      },
      {
        day: 'Thu',
        temp: 27,
        rain: '10%',
        snow: '1 inch',
        humidity: 63,
        icon: '❄️',
        hourly: [
          { time: '6am', temp: 21, humidity: 68, snow: '0.5 inch' },
          { time: '7am', temp: 23, humidity: 67, snow: '0.5 inch' },
          { time: '8am', temp: 25, humidity: 65, snow: '0.5 inch' },
          { time: '9am', temp: 26, humidity: 63, snow: '0.5 inch' },
          { time: '10am', temp: 27, humidity: 61, snow: '1 inch' },
          { time: '11am', temp: 28, humidity: 60, snow: '1 inch' },
          { time: '12pm', temp: 29, humidity: 59, snow: '1 inch' },
          { time: '1pm', temp: 30, humidity: 58, snow: '1 inch' },
          { time: '2pm', temp: 31, humidity: 57, snow: '1 inch' },
          { time: '3pm', temp: 30, humidity: 56, snow: '0.5 inch' },
          { time: '4pm', temp: 29, humidity: 55, snow: '0.5 inch' },
          { time: '5pm', temp: 28, humidity: 54, snow: '0.5 inch' },
        ],
      },
      {
        day: 'Fri',
        temp: 26,
        rain: '15%',
        snow: '1 inch',
        humidity: 64,
        icon: '❄️',
        hourly: [
          { time: '6am', temp: 20, humidity: 69, snow: '0.5 inch' },
          { time: '7am', temp: 22, humidity: 68, snow: '0.5 inch' },
          { time: '8am', temp: 24, humidity: 66, snow: '0.5 inch' },
          { time: '9am', temp: 25, humidity: 64, snow: '0.5 inch' },
          { time: '10am', temp: 26, humidity: 63, snow: '1 inch' },
          { time: '11am', temp: 27, humidity: 62, snow: '1 inch' },
          { time: '12pm', temp: 28, humidity: 61, snow: '1 inch' },
          { time: '1pm', temp: 29, humidity: 60, snow: '1 inch' },
          { time: '2pm', temp: 30, humidity: 59, snow: '1 inch' },
          { time: '3pm', temp: 29, humidity: 58, snow: '0.5 inch' },
          { time: '4pm', temp: 28, humidity: 57, snow: '0.5 inch' },
          { time: '5pm', temp: 27, humidity: 56, snow: '0.5 inch' },
        ],
      },
      {
        day: 'Sat',
        temp: 25,
        rain: '20%',
        snow: '0.5 inch',
        humidity: 65,
        icon: '❄️',
        hourly: [
          { time: '6am', temp: 19, humidity: 70, snow: '0.5 inch' },
          { time: '7am', temp: 21, humidity: 69, snow: '0.5 inch' },
          { time: '8am', temp: 23, humidity: 67, snow: '0.5 inch' },
          { time: '9am', temp: 24, humidity: 65, snow: '0.5 inch' },
          { time: '10am', temp: 25, humidity: 64, snow: '0.5 inch' },
          { time: '11am', temp: 26, humidity: 63, snow: '0.5 inch' },
          { time: '12pm', temp: 27, humidity: 62, snow: '0.5 inch' },
          { time: '1pm', temp: 28, humidity: 61, snow: '0.5 inch' },
          { time: '2pm', temp: 29, humidity: 60, snow: '0.5 inch' },
          { time: '3pm', temp: 28, humidity: 59, snow: '0.5 inch' },
          { time: '4pm', temp: 27, humidity: 58, snow: '0.5 inch' },
          { time: '5pm', temp: 26, humidity: 57, snow: '0.5 inch' },
        ],
      },
      {
        day: 'Sun',
        temp: 24,
        rain: '30%',
        snow: '0.5 inch',
        humidity: 68,
        icon: '❄️',
        hourly: [
          { time: '6am', temp: 18, humidity: 72, snow: '0.5 inch' },
          { time: '7am', temp: 20, humidity: 71, snow: '0.5 inch' },
          { time: '8am', temp: 22, humidity: 70, snow: '0.5 inch' },
          { time: '9am', temp: 23, humidity: 69, snow: '0.5 inch' },
          { time: '10am', temp: 24, humidity: 68, snow: '0.5 inch' },
          { time: '11am', temp: 25, humidity: 67, snow: '0.5 inch' },
          { time: '12pm', temp: 26, humidity: 66, snow: '0.5 inch' },
          { time: '1pm', temp: 27, humidity: 65, snow: '0.5 inch' },
          { time: '2pm', temp: 28, humidity: 64, snow: '0.5 inch' },
          { time: '3pm', temp: 27, humidity: 63, snow: '0.5 inch' },
          { time: '4pm', temp: 26, humidity: 62, snow: '0.5 inch' },
          { time: '5pm', temp: 25, humidity: 61, snow: '0.5 inch' },
        ],
      },
    ],
  },
};

function Weather({ darkMode, setDarkMode }) {
  const { city } = useParams();
  const [isChatOpen, setIsChatOpen] = useState(false);

  const cityWeather = weatherData[city] || null;

  // Extract hourly and daily forecast data from the weather data
  const hourlyData = weatherData[city]?.forecast[0]?.hourly || [];
  const dailyData = weatherData[city]?.forecast || [];

  // Function to toggle chatbox visibility
  const toggleChatBox = () => {
    setIsChatOpen((prev) => !prev);
  };

  // Map weather conditions to emojis
  const weatherIcons = {
    clear: '☀️',
    cloudy: '☁️',
    rainy: '🌧️',
    thunderstorm: '⚡',
    snow: '❄️',
    fog: '🌫️',
    partlyCloudy: '🌤️',
  };

  const getWeatherIcon = (condition) => {
    if (condition.includes('clear')) return weatherIcons.clear;
    if (condition.includes('cloud')) return weatherIcons.cloudy;
    if (condition.includes('rain')) return weatherIcons.rainy;
    if (condition.includes('thunderstorm')) return weatherIcons.thunderstorm;
    if (condition.includes('snow')) return weatherIcons.snow;
    if (condition.includes('fog')) return weatherIcons.fog;
    return weatherIcons.partlyCloudy; // Default
  };

  const currentIcon = getWeatherIcon(weatherData[city]?.condition);

  return (
    <div className={`weather-page ${darkMode ? 'dark' : 'light'}`}>
      <div className="top-bar">
        <h2 className="app-title">{city} Weather</h2>
        <ToggleSwitch darkMode={darkMode} setDarkMode={setDarkMode} />
      </div>

      <div className="weather-info">
        <div className="main-weather-card">
          {/* Display weather emoji */}
          <h1>{currentIcon}</h1>
          <h1>{Math.round(weatherData[city]?.temp)}°C</h1>
          <p>{weatherData[city]?.condition}</p>
          <p>Humidity: {weatherData[city]?.humidity}% | Wind: {weatherData[city]?.wind} km/h</p>
        </div>
      </div>

      {/* Hourly Forecast Section */}
      <h3>Hourly Forecast</h3>
      <div className="forecast-container">
        {hourlyData.map((hour, idx) => (
          <div key={idx} className="hourly-card">
            <p>{hour.time}</p>
            <p>{hour.temp}°C</p>
            <p>Humidity: {hour.humidity}%</p>
            <p>{getWeatherIcon('cloudy')}</p>
          </div>
        ))}
      </div>

      {/* 7-Day Forecast Section */}
      <h3>7-Day Forecast</h3>
      <div className="forecast-container">
        {dailyData.length > 0 && (
          <>
            {/* First show "Today" */}
            <div className="daily-card">
              <h4>Today</h4>
              <h3>{getWeatherIcon(dailyData[0].icon)}</h3>
              <p>Temp: {dailyData[0].temp}°C</p>
              <p>Rain: {dailyData[0].rain}</p>
              <p>Humidity: {dailyData[0].humidity}%</p>
            </div>

            {/* Then show Monday to Sunday */}
            {dailyData.slice(1).map((day, idx) => (
              <div key={idx} className="daily-card">
                <h4>{day.day}</h4>
                <h3>{getWeatherIcon(day.icon)}</h3>
                <p>Temp: {day.temp}°C</p>
                <p>Rain: {day.rain}</p>
                <p>Humidity: {day.humidity}%</p>
              </div>
            ))}
          </>
        )}
      </div>

      {/* Open/Close Chat Button */}
      <button onClick={toggleChatBox} className="open-chat-btn">
        {isChatOpen ? 'Close Chat' : 'Open Chat'}
      </button>

      {/* ChatBox */}
      {isChatOpen && (
        <ChatBoxAI
          condition={cityWeather?.condition}
          temp={cityWeather?.temp}
          humidity={cityWeather?.humidity}
          wind={cityWeather?.wind}
          forecast={cityWeather?.forecast}
        />
      )}
    </div>
  );
}

export default Weather;
