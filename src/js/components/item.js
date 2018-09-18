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

  handleChange = (event) => {
    this.setState((state) =>
      update(state, {
        item: {
          [event.target.id]: { $set: event.target.value },
        },
      }),
    );
  };

  render() {
    const { classes } = this.props;
    const { item } = this.state;

    return (
      <div className={classes.root}>
        <Typography variant="display1">
          Details of contact {item.name} {item.surname}
        </Typography>
        <form autoComplete="off">
          <TextField
            id="name"
            label="Name"
            className={classes.textField}
            value={item.name}
            onChange={this.handleChange}
            margin="normal"
          />
          <TextField
            id="surname"
            label="Surname"
            className={classes.textField}
            value={item.surname}
            onChange={this.handleChange}
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
