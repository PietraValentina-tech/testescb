import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, Container, Button } from '@material-ui/core';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container className="mt-8">
      <Typography variant="h2" component="h1" gutterBottom>
        {t('home.title')}
      </Typography>
      <Typography variant="body1" paragraph>
        {t('home.intro')}
      </Typography>
      <Button
        component={Link}
        to="/calculator"
        variant="contained"
        color="primary"
        size="large"
      >
        {t('header.calculator')}
      </Button>
    </Container>
  );
};

export default Home;