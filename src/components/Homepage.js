import React from 'react';
import PropTypes from 'prop-types';
import {compose} from 'recompose';
import classNames from 'classnames';
import AppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';
import CameraIcon from '@material-ui/icons/PhotoCamera';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import CssBaseline from '@material-ui/core/CssBaseline';
import Grid from '@material-ui/core/Grid';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import {withStyles, withTheme} from '@material-ui/core/styles';
import logo from '../assets/logo.png'
import triangles from '../assets/triangles.svg'
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import {HelpOutline, AccountCircle} from '@material-ui/icons';
import {fade} from '@material-ui/core/styles/colorManipulator';
import ContainerFluid from "./ContainerFluid";
import IconButton from "@material-ui/core/es/IconButton/IconButton";
import Link from "@material-ui/core/es/Link/Link";
import heroBg from '../assets/hero-bg.jpg'
import Input from "@material-ui/core/es/Input/Input";
import InputLabel from "@material-ui/core/es/InputLabel/InputLabel";
import TextField from "@material-ui/core/TextField";
import Paper from "@material-ui/core/Paper";

const styles = theme => ({
  pageBackground: {
    backgroundImage: `url(${triangles})`,
  },
  appBar: {
    backgroundColor: theme.palette.common.white,
    position: 'relative',
  },
  logo: {
    height: 26,
    marginRight: 'auto'
  },
  search: {
    position: 'relative',
    borderRadius: 200,
    backgroundColor: theme.palette.secondary.main,
    // '&:hover': {
    //   backgroundColor: fade(theme.palette.companyOrange, 0.25),
    // },
    marginRight: theme.spacing.unit * 2,
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing.unit * 3,
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing.unit * 6,
    color: theme.palette.common.white,
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
    width: '100%',
  },
  inputInput: {
    color: theme.palette.common.white,
    paddingTop: theme.spacing.unit,
    paddingRight: 15,
    paddingBottom: theme.spacing.unit,
    paddingLeft: 40,
    transition: theme.transitions.create('width'),
    width: '100%',
    textTransform: 'upperCase',
    [theme.breakpoints.up('md')]: {
      width: theme.spacing.unit * 16,
    },
  },
  icon: {
    marginRight: theme.spacing.unit * 2,
  },
  logout: {
    color: theme.palette.secondary.main,
    marginLeft: 26,
    cursor: 'pointer'
  },
  heroUnit: {
    position: 'relative',
  },
  heroContent: {
    maxWidth: 760,
    padding: '80px 0 60px',
  },
  heroHeadline: {
    fontSize: 64,
    fontFamily: '"Merriweather Sans", serif',
    fontWeight: 'bold',
    lineHeight: '80px',
    marginBottom: 50
  },
  heroInputLabelText: {
    fontSize: 20,
    fontWeight: 500,
    marginBottom: theme.spacing.unit,
  },
  heroInputWrapper: {
    display: 'flex',
  },
  heroInputRoot: {
    width:'100%',
  },
  heroInputInput: {
    textIndent: theme.spacing.unit * 2,
  },
  heroBg: {
    backgroundImage: `url(${heroBg})`,
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    position: 'absolute',
    top: 0,
    bottom: 0,
    left: 0,
    right: 0,
    zIndex: -1,
  },
  heroButtons: {
    marginTop: theme.spacing.unit * 4,
  },
  layout: {
    width: 'auto',
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(1100 + theme.spacing.unit * 3 * 2)]: {
      width: 1100,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  cardGrid: {
    padding: `${theme.spacing.unit * 8}px 0`,
  },
  card: {
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
  },
  cardMedia: {
    paddingTop: '56.25%', // 16:9
  },
  cardContent: {
    flexGrow: 1,
  },
  footer: {
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing.unit * 6,
  },
});

const cards = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

function Homepage(props) {
  const {classes, theme} = props;


  console.log(props);
  return (
    <div className={classes.pageBackground}>
      <CssBaseline/>
      <AppBar position="static" className={classes.appBar}>
        <ContainerFluid maxWidth={1440}>
          <Toolbar disableGutters>
            <img src={logo} alt="Logo" className={classes.logo}/>
            <div className={classes.search}>
              <div className={classes.searchIcon}>
                <SearchIcon/>
              </div>
              <InputBase
                placeholder="Szukaj zajęć"
                classes={{
                  root: classes.inputRoot,
                  input: classes.inputInput,
                }}
              />
            </div>
            <IconButton aria-label="Help">
              <HelpOutline color={"secondary"}/>
            </IconButton>
            <IconButton aria-label="Profile">
              <AccountCircle color={"primary"} fontSize={"small"}/>
            </IconButton>
            <Link
              color={"secondary"}
              onClick={() => {
                alert("Logged out.");
              }}
              aria-label="Logout"
              className={classes.logout}
            >Wyloguj się</Link>
          </Toolbar>
        </ContainerFluid>
      </AppBar>
      <main>

        <div className={classes.heroUnit}>
          <ContainerFluid maxWidth={1440}>
            <div className={classes.heroContent}>
              <Typography
                component="h2"
                variant={"h2"}
                align="left"
                color="textPrimary"
                className={classes.heroHeadline}
              >
                Zajęcia dla dzieci <br/>
                w całej Polsce
              </Typography>
              <InputLabel>
                <Typography className={classes.heroInputLabelText}>
                  Przeszukaj zajęcia
                </Typography>
                <Paper className={classes.heroInputWrapper} elevation={1}>
                  <InputBase
                    placeholder="Wpisz miejscowość lub nazwę zajęć"
                    classes={{
                      root: classes.heroInputRoot,
                      input: classes.heroInputInput,
                    }}
                  />
                  <IconButton className={classes.heroInputIcon} aria-label="Search">
                    <SearchIcon/>
                  </IconButton>
                </Paper>
              </InputLabel>
            </div>
            <div className={classes.heroBg}/>
          </ContainerFluid>
        </div>
        {/* Hero unit */}

        {/*<div className={classNames(classes.layout, classes.cardGrid)}>*/}
          {/*/!* End hero unit *!/*/}
          {/*<Grid container spacing={40}>*/}
            {/*{cards.map(card => (*/}
              {/*<Grid item key={card} sm={6} md={4} lg={3}>*/}
                {/*<Card className={classes.card}>*/}
                  {/*<CardMedia*/}
                    {/*className={classes.cardMedia}*/}
                    {/*image="data:image/svg+xml;charset=UTF-8,%3Csvg%20width%3D%22288%22%20height%3D%22225%22%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%20288%20225%22%20preserveAspectRatio%3D%22none%22%3E%3Cdefs%3E%3Cstyle%20type%3D%22text%2Fcss%22%3E%23holder_164edaf95ee%20text%20%7B%20fill%3A%23eceeef%3Bfont-weight%3Abold%3Bfont-family%3AArial%2C%20Helvetica%2C%20Open%20Sans%2C%20sans-serif%2C%20monospace%3Bfont-size%3A14pt%20%7D%20%3C%2Fstyle%3E%3C%2Fdefs%3E%3Cg%20id%3D%22holder_164edaf95ee%22%3E%3Crect%20width%3D%22288%22%20height%3D%22225%22%20fill%3D%22%2355595c%22%3E%3C%2Frect%3E%3Cg%3E%3Ctext%20x%3D%2296.32500076293945%22%20y%3D%22118.8%22%3EThumbnail%3C%2Ftext%3E%3C%2Fg%3E%3C%2Fg%3E%3C%2Fsvg%3E" // eslint-disable-line max-len*/}
                    {/*title="Image title"*/}
                  {/*/>*/}
                  {/*<CardContent className={classes.cardContent}>*/}
                    {/*<Typography gutterBottom variant="h5" component="h2">*/}
                      {/*Heading*/}
                    {/*</Typography>*/}
                    {/*<Typography>*/}
                      {/*This is a media card. You can use this section to describe the content.*/}
                    {/*</Typography>*/}
                  {/*</CardContent>*/}
                  {/*<CardActions>*/}
                    {/*<Button size="small" color="primary">*/}
                      {/*View*/}
                    {/*</Button>*/}
                    {/*<Button size="small" color="primary">*/}
                      {/*Edit*/}
                    {/*</Button>*/}
                  {/*</CardActions>*/}
                {/*</Card>*/}
              {/*</Grid>*/}
            {/*))}*/}
          {/*</Grid>*/}
        {/*</div>*/}
      </main>
      {/*/!* Footer *!/*/}
      {/*<footer className={classes.footer}>*/}
        {/*<Typography variant="h6" align="center" gutterBottom>*/}
          {/*Footer*/}
        {/*</Typography>*/}
        {/*<Typography variant="subtitle1" align="center" color="textSecondary" component="p">*/}
          {/*Something here to give the footer a purpose!*/}
        {/*</Typography>*/}
      {/*</footer>*/}
      {/*/!* End footer *!/*/}
    </div>
  );
}

Homepage.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default compose(
  withTheme(),
  withStyles(styles)
)(Homepage);
