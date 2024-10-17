import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { ThemeProvider, createTheme } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';
import { useTranslation } from 'react-i18next';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Articles from './pages/Articles';
import Calculator from './pages/Calculator';
import './i18n';

const App: React.FC = () => {
  const [darkMode, setDarkMode] = React.useState(() => {
    const savedMode = localStorage.getItem('darkMode');
    return savedMode ? JSON.parse(savedMode) : false;
  });
  const { i18n } = useTranslation();

  const theme = React.useMemo(
    () =>
      createTheme({
        palette: {
          type: darkMode ? 'dark' : 'light',
          primary: {
            main: '#4caf50',
          },
          secondary: {
            main: '#2196f3',
          },
        },
      }),
    [darkMode]
  );

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', JSON.stringify(!darkMode));
  };

  const changeLanguage = (lng: string) => {
    i18n.changeLanguage(lng);
    localStorage.setItem('language', lng);
  };

  React.useEffect(() => {
    const savedLanguage = localStorage.getItem('language');
    if (savedLanguage) {
      i18n.changeLanguage(savedLanguage);
    }
  }, [i18n]);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <div className="flex flex-col min-h-screen">
          <Header toggleDarkMode={toggleDarkMode} changeLanguage={changeLanguage} />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/articles" element={<Articles />} />
              <Route path="/calculator" element={<Calculator />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </ThemeProvider>
  );
};

export default App;