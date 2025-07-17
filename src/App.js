import React from 'react';
import { useTranslation } from 'react-i18next';
import './App.css';
import Quiz from './Quiz'; // <-- Add this import

function App() {
  const { t, i18n } = useTranslation();

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  return (
    <div className="bg-gradient-to-br from-[#232526] via-[#0f2027] to-[#2c5364] min-h-screen flex flex-col items-center justify-center p-4">
      <nav className="w-full max-w-3xl mb-4 flex justify-between items-center">
        <h1 className="text-primary font-semibold">{t('title')}</h1>
        <select
          onChange={(e) => changeLanguage(e.target.value)}
          className="border rounded-lg p-1"
          defaultValue={i18n.language}
        >
          <option value="en">English</option>
          <option value="zh">中文</option>
          <option value="ru">Русский</option>
          <option value="uz">O'zbekcha</option>
          <option value="tr">Türkçe</option> 
          <option value="de">Deutsch</option>
          <option value="ar">العربية</option> 
          <option value="fa">فارسی</option>
          <option value="pt">Português</option>
          <option value="es">Español</option>
        </select>
      </nav>
      <Quiz />
    </div>
  );
}

export default App;