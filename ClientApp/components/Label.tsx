import * as React from 'react';

export interface LabelProps {
    text: string
}

class Label extends React.Component<LabelProps, any> {
  render() {
    return (
      <h4 style={{color: 'blue'}}>
        {this.props.text}
      </h4>
    );
  }
}

export default Label;
