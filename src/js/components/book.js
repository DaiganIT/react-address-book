import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Grid from '@material-ui/core/Grid';
import { withStyles } from '@material-ui/core/styles';

function getBook(items) {
  const book = {};
  _.forEach(items, (item) => {
    const firstLetter = item.name.substr(0, 1);
    if (!book[firstLetter]) {
      book[firstLetter] = [];
    }
    book[firstLetter].push(item);
  });
  return book;
}

function Book(props) {
  const { classes, items } = props;
  const book = getBook(items);

  return (
    <React.Fragment>
      <CssBaseline />
      <AppBar position="static" color="primary">
        <Toolbar>
          <Typography variant="title" color="inherit">
            Address book
          </Typography>
        </Toolbar>
      </AppBar>
      <Grid container>
        <Grid item xs={3}>
          <List className={classes.list} subheader={<li />}>
            {_.map(_.keys(book), (section) => (
              <li key={`section-${section}`} className={classes.listSection}>
                <ul className={classes.ul}>
                  <ListSubheader>{section}</ListSubheader>
                  {_.map(book[section], (item) => (
                    <ListItem key={`item-${section}-${item.name}`}>
                      <ListItemText primary={item.name} />
                    </ListItem>
                  ))}
                </ul>
              </li>
            ))}
          </List>
        </Grid>
        <Grid item xs={9} />
      </Grid>
    </React.Fragment>
  );
}

Book.propTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.array.isRequired,
};

const styles = (theme) => ({
    list: {
      width: '100%',
      height: '100%',
      backgroundColor: theme.palette.background.paper,
      overflow: 'auto',
    },
    listSection: {
      backgroundColor: 'inherit',
    },
    ul: {
      backgroundColor: 'inherit',
      padding: 0,
    },
  });

export default withStyles(styles)(Book);
