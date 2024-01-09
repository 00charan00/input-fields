import React from 'react';
import './App.css';

function App() {
  return (
    <div className="app">
      <div>
        <label>Button:</label>
        <input type="button" value="Click me" />
      </div>
      <div>
        <label>Checkbox:</label>
        <input type="checkbox" />
      </div>
      <div>
        <label>Color:</label>
        <input type="color" />
      </div>
      <div>
        <label>Date:</label>
        <input type="date" />
      </div>
      <div>
        <label>DateTime Local:</label>
        <input type="datetime-local" />
      </div>
      <div>
        <label>Email:</label>
        <input type="email" />
      </div>
      <div>
        <label>File:</label>
        <input type="file" />
      </div>
      <div>
        <label>Hidden:</label>
        <input type="hidden" />
      </div>
      <div>
        <label>Image:</label>
        <input type="image" src="https://via.placeholder.com/20" alt="placeholder" />
      </div>
      <div>
        <label>Month:</label>
        <input type="month" />
      </div>
      <div>
        <label>Number:</label>
        <input type="number" />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" />
      </div>
      <div>
        <label>Radio:</label>
        <input type="radio" />
      </div>
      <div>
        <label>Range:</label>
        <input type="range" />
      </div>
      <div>
        <label>Reset:</label>
        <input type="reset" />
      </div>
      <div>
        <label>Search:</label>
        <input type="search" />
      </div>
      <div>
        <label>Submit:</label>
        <input type="submit" />
      </div>
      <div>
        <label>Tel:</label>
        <input type="tel" />
      </div>
      <div>
        <label>Text:</label>
        <input type="text" defaultValue="Default Text" />
      </div>
      <div>
        <label>Time:</label>
        <input type="time" />
      </div>
      <div>
        <label>URL:</label>
        <input type="url" />
      </div>
      <div>
        <label>Week:</label>
        <input type="week" />
      </div>
      <div>
        <label>Dropdown Menu:</label>
        <select>
          <option value="dropdownmenu">Dropdown Menu</option>
        </select>
      </div>
      <div>
        <label>Dropdown List:</label>
        <select>
          <option value="dropdownlist">Dropdown List</option>
        </select>
      </div>
    </div>
  );
}

export default App;
