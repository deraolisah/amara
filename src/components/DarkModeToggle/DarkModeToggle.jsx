import { useState, useEffect } from 'react';
import { PiSunDim } from "react-icons/pi";
import { IoMdMoon } from "react-icons/io";

const DarkModeToggle = () => {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
  };

  return (
    <button onClick={toggleDarkMode} className="p-2 bg-gray-800 text-white dark:bg-gray-200 dark:text-black rounded">
      {darkMode ? <PiSunDim /> : <IoMdMoon />}
    </button>
  );
};

export default DarkModeToggle;
