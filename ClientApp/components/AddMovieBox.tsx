import * as React from "react"
import Label from "./Label"

export interface Props {
  handleAddMovie: (title: string) => void
}

export interface State {
  title: string
}

class AddMovieBox extends React.Component<Props, State> {
  state = {
    title: ""
  }

  handletitleChange = (e: any) => {
    this.setState({ title: e.target.value })
  }

  handleAddMovie = () => {
    this.props.handleAddMovie(this.state.title)
  }

  handleKeyDown = (e: any) => {
    if (e.keyCode === 13) this.handleAddMovie()
  }

  render() {
    return (
      <div>
        <Label text="Add Movie:" />
        <input
          type="text"
          value={this.state.title}
          onChange={this.handletitleChange}
          onKeyDown={this.handleKeyDown}
        />{" "}
        <button className="btn btn-primary" onClick={this.handleAddMovie}>
          Add
        </button>
      </div>
    )
  }
}

export default AddMovieBox
