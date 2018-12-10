import React from 'react';
import { LinkComponent } from '../components/Link'

export default class LinksScreen extends React.Component {
  static navigationOptions = {
    title: 'Links',
  };

  render() {
    return (
      <LinkComponent/>
    );
  }
}
