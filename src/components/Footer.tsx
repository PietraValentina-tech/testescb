import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, Container } from '@material-ui/core';

const Footer: React.FC = () => {
  const { t } = useTranslation();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-200 py-4 mt-8">
      <Container>
        <Typography variant="body2" color="textSecondary" align="center">
          © {currentYear} Carbon Credit Calculator. {t('footer.rights')}
        </Typography>
      </Container>
    </footer>
  );
};

export default Footer;