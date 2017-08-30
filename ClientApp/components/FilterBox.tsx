import * as React from 'react';
import Label from './Label';

class FilterBox extends React.Component<{}, {}> {
  render() {
    return (
      <div className="row">
        <div className='col-md-12'>
          <Label text="Filter:"></Label>
          <input className="form-control" type="text" /> </div>
      </div>
    );
  }
}

export default FilterBox;
