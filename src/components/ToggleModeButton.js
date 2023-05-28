// components/ToggleModeButton.js
import { useClient } from 'next-swc/client';
import { useState } from 'react';

const ToggleModeButton = () => {
  const [darkMode, setDarkMode] = useState(false);
  const client = useClient();

  const handleToggleMode = () => {
    setDarkMode(!darkMode);
  };

  // Resto del código del componente

  return (
    <button onClick={handleToggleMode}>
      {darkMode ? 'Modo Claro' : 'Modo Oscuro'}
    </button>
  );
};

export default ToggleModeButton;
