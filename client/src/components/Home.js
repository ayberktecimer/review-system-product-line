import React, { Component } from 'react';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import StarIcon from '@material-ui/icons/StarBorder';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { renderAs } from "react-router-dom";

const useStyles = makeStyles(theme => ({
    '@global': {
      ul: {
        margin: 0,
        padding: 0,
      },
      li: {
        listStyle: 'none',
      },
    },
    appBar: {
      borderBottom: `1px solid ${theme.palette.divider}`,
    },
    toolbar: {
      flexWrap: 'wrap',
    },
    toolbarTitle: {
      flexGrow: 1,
    },
    link: {
      margin: theme.spacing(1, 1.5),
    },
    heroContent: {
      padding: theme.spacing(8, 0, 6),
    },
    cardHeader: {
      backgroundColor:
        theme.palette.type === 'dark' ? theme.palette.grey[700] : theme.palette.grey[200],
    },
    cardPricing: {
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'baseline',
      marginBottom: theme.spacing(2),
    },
    footer: {
      borderTop: `1px solid ${theme.palette.divider}`,
      marginTop: theme.spacing(8),
      paddingTop: theme.spacing(3),
      paddingBottom: theme.spacing(3),
      [theme.breakpoints.up('sm')]: {
        paddingTop: theme.spacing(6),
        paddingBottom: theme.spacing(6),
      },
    },
}));
  
const tiers = [
{
    title: 'Hotel Review',
    path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcS78aY9cQ2xD09zNdGL4ekYGHjLELKukyFaNRaH0wnHzCHF1U33',
    buttonText: 'Sign up for free',
    buttonVariant: 'contained',
},
{
    title: 'Restaurant Review',
    path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSEzFMbXyfPLTI_4YA2JCY71W_G-0Zfo7_ENAfnR3P4a6vMF39a',
    buttonText: 'Get started',
    buttonVariant: 'contained',
},
{
    title: 'Movie Review',
    path: 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRQk-CnIRaVuro_ji6wCxX09yhVbRfTO_IMM0EQjw24VODGE9n3',
    buttonText: 'Contact us',
    buttonVariant: 'contained',
},
];
export default function Pricing() {
    const classes = useStyles();
  
    return (
      <React.Fragment>
        <CssBaseline />
        {/* Hero unit */}
        <Container maxWidth="sm" component="main" className={classes.heroContent}>
          <Typography component="h1" variant="h2" align="center" gutterBottom>
            Review System
          </Typography>
        </Container>
        {/* End hero unit */}
        <Container maxWidth="md" component="main">
          <Grid container spacing={5} alignItems="flex-end">
            {tiers.map(tier => (
              // Enterprise card is full width at sm breakpoint
              <Grid item key={tier.title} xs={12} sm={tier.title === 'Restaurant Review' ? 12 : 6} md={5}>
                <Card>
                  <CardHeader
                    title={tier.title}
                    titleTypographyProps={{ align: 'center' }}
                    subheaderTypographyProps={{ align: 'center' }}
                    action={tier.title === 'Pro' ? <StarIcon /> : null}
                    className={classes.cardHeader}
                  />
                  <CardContent>
                    <ul>
                        <img src={tier.path} width="193" height="130"></img>
                    </ul>
                  </CardContent>
                  <CardActions>
                    
                    <Button href="/listing"  fullWidth variant={tier.buttonVariant} color="primary" >
                        {tier.buttonText}
                    </Button>
                 
                  </CardActions>
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </React.Fragment>
    );
}
