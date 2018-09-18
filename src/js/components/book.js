import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import memoize from 'memoize-one';
import CssBaseline from '@material-ui/core/CssBaseline';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Names from './names';
import Item from './item';

const getBook = memoize((items) => {
  const book = {};
  _.forEach(items, (item) => {
    const firstLetter = item.name.substr(0, 1);
    if (!book[firstLetter]) {
      book[firstLetter] = [];
    }
    book[firstLetter].push(item);
  });
  return book;
});

function Book(props) {
  const { items, onItemClick, selectedItem } = props;
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
          <Names book={book} onItemClick={onItemClick} />
        </Grid>
        <Grid item xs={9}>
          <Item defaultItem={selectedItem} key={selectedItem.id} />
        </Grid>
      </Grid>
    </React.Fragment>
  );
}

Book.propTypes = {
  items: PropTypes.array.isRequired,
  selectedItem: PropTypes.object.isRequired,
  onItemClick: PropTypes.func.isRequired,
};

export default Book;
