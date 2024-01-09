import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <label>
        Button:
        <input type="button" value="Click me" />
      </label>
      <label>
        Checkbox:
        <input type="checkbox" />
      </label>
      <label>
        Color:
        <input type="color" />
      </label>
      <label>
        Date:
        <input type="date" />
      </label>
      <label>
        DateTime Local:
        <input type="datetime-local" />
      </label>
      <label>
        Email:
        <input type="email" />
      </label>
      <label>
        File:
        <input type="file" />
      </label>
      <label>
        Hidden:
        <input type="hidden" />
      </label>
      <label>
        Image:
        <input type="image" src="https://via.placeholder.com/20" alt="placeholder" />
      </label>
      <label>
        Month:
        <input type="month" />
      </label>
      <label>
        Number:
        <input type="number" />
      </label>
      <label>
        Password:
        <input type="password" />
      </label>
      <label>
        Radio:
        <input type="radio" />
      </label>
      <label>
        Range:
        <input type="range" />
      </label>
      <label>
        Reset:
        <input type="reset" />
      </label>
      <label>
        Search:
        <input type="search" />
      </label>
      <label>
        Submit:
        <input type="submit" />
      </label>
      <label>
        Tel:
        <input type="tel" />
      </label>
      <label>
        Text:
        <input type="text" defaultValue="Default Text" />
      </label>
      <label>
        Time:
        <input type="time" />
      </label>
      <label>
        URL:
        <input type="url" />
      </label>
      <label>
        Week:
        <input type="week" />
      </label>
      <label>
        Dropdown Menu:
        <select>
          <option value="dropdownmenu">one</option>
          <option value="dropdownmenu">two</option>
          <option value="dropdownmenu">three</option>
          
        </select>
      </label>
      <label>
        Dropdown List:
        <select>
          <option value="dropdownlist">one</option>
          <option value="dropdownlist">two</option>
          <option value="dropdownlist">three</option>
          
        </select>
      </label>
    </div>
  );
}

export default App;
