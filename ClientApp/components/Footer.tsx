import * as React from 'react';

interface IFooterProps {
  text: string
}

class Footer extends React.Component<IFooterProps, {}> {
  render() {
    return (
      <div>
        <hr />
        {this.props.text} {(new Date()).getFullYear()}
      </div>
    );
  }
}

export default Footer;

