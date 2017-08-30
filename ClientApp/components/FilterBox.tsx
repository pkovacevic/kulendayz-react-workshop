import * as React from 'react';

class FilterBox extends React.Component<{}, {}> {
  render() {
    return (
      <div className="row">
        <div className='col-md-12'>
          <h4>
            Filter:
          </h4>
          <input className="form-control" type="text" /> </div>
      </div>
    );
  }
}

export default FilterBox;
