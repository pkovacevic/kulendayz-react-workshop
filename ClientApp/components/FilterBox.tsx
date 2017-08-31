import * as React from "react"
import Label from "./Label"

export interface Props {
  filter: string
  handleFilterChange: (filter: string) => void
}

class FilterBox extends React.Component<Props, {}> {
  handleFilterChange = (e: any) => {
    let filter = e.target.value
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
            value={this.props.filter}
            onChange={this.handleFilterChange}
          />
        </div>
      </div>
    )
  }
}

export default FilterBox
