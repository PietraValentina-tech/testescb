import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, Container, Card, CardContent, CardActions, Button, Grid } from '@material-ui/core';

const articles = [
  {
    title: 'The Role of AI in Carbon Emissions Reduction',
    content: 'Artificial Intelligence is playing an increasingly important role in the fight against climate change...',
    link: '#'
  },
  {
    title: 'Understanding Carbon Credit Markets',
    content: 'Carbon credit markets are a key tool in the global effort to reduce greenhouse gas emissions...',
    link: '#'
  },
  {
    title: 'Sustainable Practices for Businesses',
    content: 'Businesses around the world are adopting sustainable practices to reduce their carbon footprint...',
    link: '#'
  }
];

const Articles: React.FC = () => {
  const { t } = useTranslation();

  return (
    <Container className="mt-8">
      <Typography variant="h2" component="h1" gutterBottom>
        {t('articles.title')}
      </Typography>
      <Grid container spacing={3}>
        {articles.map((article, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <Card>
              <CardContent>
                <Typography variant="h5" component="h2" gutterBottom>
                  {article.title}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                  {article.content}
                </Typography>
              </CardContent>
              <CardActions>
                <Button size="small" color="primary" href={article.link}>
                  {t('articles.readMore')}
                </Button>
              </CardActions>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Articles;