import * as React from 'react';

class AddMovieBox extends React.Component<{}, {}> {
  render() {
    return (
      <div>
        <h4>Add movie:</h4>
         <input type="text" /> <button className="btn btn-primary">Add</button>
      </div>
    );
  }
}

export default AddMovieBox;
