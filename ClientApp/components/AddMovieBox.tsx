import * as React from 'react';
import Label from './Label';

class AddMovieBox extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <Label text="Add Movie:" />
         <input type="text" /> <button className="btn btn-primary">Add</button>
      </div>
    );
  }
}

export default AddMovieBox;
