import React from 'react';
import update from 'immutability-helper';
import PropTypes from 'prop-types';
import TextField from '@material-ui/core/TextField';
import { withStyles } from '@material-ui/core/styles';
import { Typography } from '../../../node_modules/@material-ui/core';

class Item extends React.Component {
  state = {
    item: this.props.defaultItem,
  };

  handleChange = name => event => {
    const value = event.target.value;

    this.setState((state) =>
      update(state, {
        item: {
          [name]: { $set: value },
        },
      }),
    );
  };

  render() {
    const { classes } = this.props;
    const { item } = this.state;

    const pageTitle = item.id === 0
      ? 'Create new contact'
      : `Details of contact ${item.name} ${item.surname}`;

    return (
      <div className={classes.root}>
        <Typography variant="display1">
          {pageTitle}
        </Typography>
        <form autoComplete="off">
          <TextField
            id="name"
            label="Name"
            className={classes.textField}
            value={item.name}
            onChange={this.handleChange('name')}
            margin="normal"
          />
          <TextField
            id="surname"
            label="Surname"
            className={classes.textField}
            value={item.surname}
            onChange={this.handleChange('surname')}
            margin="normal"
          />
        </form>
      </div>
    );
  }
}

Item.propTypes = {
  classes: PropTypes.object.isRequired,
  defaultItem: PropTypes.object.isRequired,
};

const styles = (theme) => ({
  root: {
    margin: theme.margin.page,
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200,
  },
});

export default withStyles(styles)(Item);
