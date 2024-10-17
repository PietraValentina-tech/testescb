import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, Container } from '@material-ui/core';

const About: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container className="mt-8">
      <Typography variant="h2" component="h1" gutterBottom>
        {t('about.title')}
      </Typography>
      <Typography variant="body1" paragraph>
        {t('about.content')}
      </Typography>
    </Container>
  );
};

export default About;