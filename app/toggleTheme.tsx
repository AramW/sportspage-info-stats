'use client';

import { useState } from 'react';

export default function ToggleTheme() {
  const [darkTheme, setDarkTheme] = useState(false);
  return (
    <button
      onClick={() => {
        document.body.classList.toggle('dark');
        setDarkTheme(!darkTheme);
      }}
      id="dark-mode-toggle"
    >
      {darkTheme ? 'light Mode' : 'Dark Mode'}
    </button>
  );
}
