import { useState } from "react";
import "./App.css";


function App() {
  const [isOpen, setIsOpen] = useState(false)
  return (
    <div className="container">
      <div className="preview">

      </div>
      <div className="footer">
        <label className="switch">
          <input
            type="checkbox"
            checked={isOpen}
            onClick={() => setIsOpen(!isOpen)}
          />
          <span className="slider"></span>
        </label>
      </div>
    </div>
  
  );
}

export default App;