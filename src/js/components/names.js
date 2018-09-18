import React from 'react';
import PropTypes from 'prop-types';
import _ from 'lodash';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import { withStyles } from '@material-ui/core/styles';

function Names(props) {
  const { classes, book, onItemClick } = props;

  return (
    <List className={`${classes.list} list`} subheader={<li />}>
      {_.map(_.keys(book), (section) => (
        <li key={`section-${section}`} className="list-selection">
          <ul className="ul">
            <ListSubheader>{section}</ListSubheader>
            {_.map(book[section], (item) => (
              <ListItem
                key={`item-${section}-${item.name}`}
                className={classes.element}
              >
                <ListItemText
                  primary={`${item.name} ${item.surname}`}
                  onClick={() => onItemClick(item.id)} className={classes.element}
                />
              </ListItem>
            ))}
          </ul>
        </li>
      ))}
    </List>
  );
}

Names.propTypes = {
  classes: PropTypes.object.isRequired,
  book: PropTypes.object.isRequired,
  onItemClick: PropTypes.func.isRequired,
};

const styles = (theme) => ({
  list: {
    backgroundColor: theme.palette.background.paper,
    width: '100%',
    height: '100%',
    overflow: 'auto',
  },
  listSelection: {
    backgroundColor: 'inherit',
  },
  ul: {
    backgroundColor: 'inherit',
    padding: 0,
  },
  element: {
    transition: 'all 400ms ease-in-out',
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      color: 'white',
    },
  },
});

export default withStyles(styles)(Names);
