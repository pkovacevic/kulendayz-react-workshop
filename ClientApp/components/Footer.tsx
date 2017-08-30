import * as React from 'react';

class Footer extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <hr/>
        Kulendayz {(new Date()).getFullYear()}
      </div>
    );
  }
}

export default Footer;

