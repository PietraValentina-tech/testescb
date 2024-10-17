import React from 'react';
import { Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { AppBar, Toolbar, Typography, Button, IconButton, Switch } from '@material-ui/core';
import { Brightness4, Brightness7, Translate } from '@material-ui/icons';

interface HeaderProps {
  toggleDarkMode: () => void;
  changeLanguage: (lng: string) => void;
}

const Header: React.FC<HeaderProps> = ({ toggleDarkMode, changeLanguage }) => {
  const { t, i18n } = useTranslation();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" style={{ flexGrow: 1 }}>
          <Link to="/" className="text-white no-underline">
            Carbon Credit Calculator
          </Link>
        </Typography>
        <Button color="inherit" component={Link} to="/">
          {t('header.home')}
        </Button>
        <Button color="inherit" component={Link} to="/about">
          {t('header.about')}
        </Button>
        <Button color="inherit" component={Link} to="/contact">
          {t('header.contact')}
        </Button>
        <Button color="inherit" component={Link} to="/articles">
          {t('header.articles')}
        </Button>
        <Button color="inherit" component={Link} to="/calculator">
          {t('header.calculator')}
        </Button>
        <IconButton color="inherit" onClick={toggleDarkMode}>
          {i18n.language === 'en' ? <Brightness4 /> : <Brightness7 />}
        </IconButton>
        <Switch
          checked={i18n.language === 'pt'}
          onChange={() => changeLanguage(i18n.language === 'en' ? 'pt' : 'en')}
          color="default"
        />
        <IconButton color="inherit" onClick={() => changeLanguage(i18n.language === 'en' ? 'pt' : 'en')}>
          <Translate />
        </IconButton>
      </Toolbar>
    </AppBar>
  );
};

export default Header;