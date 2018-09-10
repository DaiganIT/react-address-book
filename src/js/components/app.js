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
import { withStyles } from '@material-ui/core/styles';

const styles = (theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    position: 'relative',
    overflow: 'auto',
    maxHeight: 300,
  },
  listSection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
});

class App extends React.Component {
  constructor() {
    super();

    this.sections = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    this.state = {
      items: [{ name: 'Antonio' }, { name: 'Pietro' }],
    };
  }

  getBook() {
    const book = {};
    _.forEach(this.state.items, (item) => {
      const firstLetter = item.name.substr(0, 1);
      if (!book[firstLetter]) {
        book[firstLetter] = [];
      }
      book[firstLetter].push(item);
    });
    return book;
  }

  render() {
    const { classes } = this.props;
    const book = this.getBook();

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
        <List className={classes.root} subheader={<li />}>
          {_.map(_.keys(book), (section) => 
            <li key={`section-${section}`} className={classes.listSection}>
              <ul className={classes.ul}>
                <ListSubheader>{section}</ListSubheader>
                {_.map(book[section], (item) =>
                  <ListItem key={`item-${section}-${item.name}`}>
                    <ListItemText primary={item.name} />
                  </ListItem>
                )}
              </ul>
            </li>
          )}
        </List>
      </React.Fragment>
    );
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(App);
