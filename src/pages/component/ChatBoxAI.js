import React, { useState } from 'react';
import '../css/WeatherChatBox.css';

export default function ChatBoxAI({ condition, temp, humidity, wind, forecast }) {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');

  const handleSend = () => {
    if (!input.trim()) return;

    const userMessage = { type: 'user', text: input };
    const aiMessage = {
      type: 'ai',
      text: generateRealisticResponse(input)
    };

    setMessages(prev => [...prev, userMessage, aiMessage]);
    setInput('');
  };

  const generateRealisticResponse = (text) => {
    const lower = text.toLowerCase();

    // Handle greetings and thanks
    if (lower.includes('hey') || lower.includes('hi') || lower.includes('hello')) {
      return "Hii! 😊 How can I help you today?";
    }

    if (lower.includes('thank you') || lower.includes('thanks') || lower.includes('thank you very much')) {
      return "You're very welcome! 😊 Let me know if you need anything else!";
    }

    if (lower.includes('good morning') || lower.includes('good evening') || lower.includes('good night')) {
      return "Good to hear from you! How can I assist you today?";
    }

    // Handle "how's the weather today" or "tell me about today's weather"
    if (lower.includes('how\'s the weather today') || lower.includes('tell me about today\'s weather') || lower.includes('weather today')) {
      return `Today's weather is ${condition}. The current temperature is ${temp}°C, with a humidity level of ${humidity}%. The wind speed is ${wind} km/h, which is a light breeze.`;
    }

    // Handle rain-related queries
    if (lower.includes('rain') || lower.includes('rainy')) {
      if (condition.includes('Rain')) {
        return `Yes, it's likely to rain today. 🌧️ The forecast shows rain with a probability of rain.`;
      } else {
        return `No, it doesn't look like rain today. 🌞`;
      }
    }

    // Handle temperature-related questions
    if (lower.includes('temperature') || lower.includes('hot') || lower.includes('cold')) {
      return `The current temperature is ${temp}°C. It's a bit ${temp > 25 ? 'hot' : 'cool'} today.`;
    }

    // Handle humidity-related questions
    if (lower.includes('humidity') || lower.includes('humid')) {
      return `The current humidity is ${humidity}%. It's a bit ${humidity > 75 ? 'humid' : 'comfortable'} today.`;
    }

    // Handle wind-related questions
    if (lower.includes('wind') || lower.includes('breeze')) {
      return `The current wind speed is ${wind} km/h, which is a gentle breeze.`;
    }

    // Handle forecast-related questions
    if (lower.includes('forecast') || lower.includes('week')) {
      return `The forecast for the upcoming days is as follows: ${forecast.map(day => `${day.day}: ${day.temp}°C, ${day.rain}`).join(', ')}`;
    }

    // Handle general questions about the assistant
    if (lower.includes('who are you') || lower.includes('what can you do')) {
      return `I am your weather assistant. I can help with your weather queries and provide forecasts!`;
    }

    // Default response for unrecognized questions
    return "That's an interesting question! Let me think... 🤔";
  };

  return (
    <div className="chatbox-container">
      <div className="chatbox-header">
        <h3>Weather Chatbox <span className="version-tag">v1.0</span></h3>
      </div>
      <div className="chat-messages">
        {messages.map((msg, index) => (
          <div key={index} className={`message ${msg.type}`}>
            {msg.text}
          </div>
        ))}
      </div>
      <div className="chat-input">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Ask me anything..."
        />
        <button onClick={handleSend}>Send</button>
      </div>
    </div>
  );
}
