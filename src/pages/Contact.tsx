import React from 'react';
import { useTranslation } from 'react-i18next';
import { Typography, Container, TextField, Button, Grid } from '@material-ui/core';
import { useForm, Controller } from 'react-hook-form';

interface ContactForm {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const { t } = useTranslation();
  const { control, handleSubmit } = useForm<ContactForm>();

  const onSubmit = (data: ContactForm) => {
    console.log(data);
    // Here you would typically send the form data to a server
  };

  return (
    <Container className="mt-8">
      <Typography variant="h2" component="h1" gutterBottom>
        {t('contact.title')}
      </Typography>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Controller
              name="name"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label={t('contact.form.name')}
                  fullWidth
                  required
                />
              )}
            />
          </Grid>
          <Grid item xs={12} sm={6}>
            <Controller
              name="email"
              control={control}
              defaultValue=""
              rules={{ required: true, pattern: /^\S+@\S+$/i }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label={t('contact.form.email')}
                  fullWidth
                  required
                  type="email"
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Controller
              name="message"
              control={control}
              defaultValue=""
              rules={{ required: true }}
              render={({ field }) => (
                <TextField
                  {...field}
                  label={t('contact.form.message')}
                  fullWidth
                  required
                  multiline
                  rows={4}
                />
              )}
            />
          </Grid>
          <Grid item xs={12}>
            <Button type="submit" variant="contained" color="primary">
              {t('contact.form.submit')}
            </Button>
          </Grid>
        </Grid>
      </form>
      <Typography variant="h4" component="h2" gutterBottom className="mt-8">
        {t('contact.team.title')}
      </Typography>
      <Grid container spacing={3}>
        {t('contact.team.members', { returnObjects: true }).map((member: any, index: number) => (
          <Grid item xs={12} sm={6} key={index}>
            <Typography variant="h6">{member.name}</Typography>
            <Typography variant="body1">{member.role}</Typography>
            <Typography variant="body2">{member.email}</Typography>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default Contact;