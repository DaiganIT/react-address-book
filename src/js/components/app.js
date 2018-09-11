import React from 'react';
import Book from './book';
import Address from '../models/address';
import storage from '../utils/storage';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.sections = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

    this.state = {
      items: [],
    };
  }

  componentDidMount() {
    const items = storage.getFromStorage();
    if (items.length === 0) {
      var address = new Address();
      address.name = 'Jack';
      address.surname = 'Ryan';
      items.push(address);
      storage.saveInStorage(items);
    }

    this.setState({ items: items });
  }

  render() {
    return <Book {...this.state} />;
  }
}

export default App;
