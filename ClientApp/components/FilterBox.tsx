import * as React from "react"
import Label from "./Label"

export interface Props {
  handleFilterChange: (filter: string) => void
}

export interface State {
  filter: string
}

class FilterBox extends React.Component<Props, State> {
  state = {
    filter: ""
  }

  handleFilterChange = (e: any) => {
    let filter = e.target.value
    this.setState({ filter: filter })
    this.props.handleFilterChange(filter)
  }

  render() {
    return (
      <div className="row">
        <div className="col-md-12">
          <Label text="Filter:" />
          <input
            className="form-control"
            type="text"
            value={this.state.filter}
            onChange={this.handleFilterChange}
          />
        </div>
      </div>
    )
  }
}

export default FilterBox
