import React from 'react';
import _ from 'lodash';
import memoize from 'memoize-one';
import { MuiThemeProvider } from '@material-ui/core/styles';
import Book from './book';
import Address from '../models/address';
import storage from '../utils/storage';
import theme from '../utils/theme';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      items: [],
      selectedItem: new Address(),
    };
  }

  componentDidMount() {
    const items = storage.getFromStorage();
    if (items.length === 0) {
      var address = new Address();
      address.id = 1;
      address.name = 'Jack';
      address.surname = 'Ryan';
      items.push(address);
      storage.saveInStorage(items);
    }

    this.setState({ items: items });
  }

  selectByName = memoize((id, items) =>
    _.find(items, (item) => item.id === id),
  );

  onItemClick = (id) => {
    const item = this.selectByName(id, this.state.items);
    this.setState({ selectedItem: item });
  };

  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <Book {...this.state} onItemClick={this.onItemClick} />
      </MuiThemeProvider>
    );
  }
}

export default App;
