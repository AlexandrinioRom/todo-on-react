import React from 'react'

class FilterTaskPanel extends React.Component {
  constructor(props) {
    super(props)
    this.state = { checkedRadio: 'All' }
  }
  onCheckedFilter = (event) => {
    switch (event.target.id) {
      case 'All':
        this.props.filter(this.props.tasks)
        this.setState({ checkedRadio: event.target.id })
        break
      case 'Active':
        const activTaksArr = this.props.tasks.filter(
          (task) => task.completed === false,
        )
        this.props.filter(activTaksArr)
        this.setState({ checkedRadio: event.target.id })
        break
      case 'Completed':
        const completedTaksArr = this.props.tasks.filter(
          (task) => task.completed === true,
        )
        this.props.filter(completedTaksArr)
        this.setState({ checkedRadio: event.target.id })
        break
      // no default
    }
  }
  render() {
    return (
      <div className="FilterTaskPanel">
        <label htmlFor="All">All</label>
        <input
          onChange={this.onCheckedFilter}
          defaultChecked
          name="filter"
          type="radio"
          id="All"
        />

        <label htmlFor="Active">Active</label>
        <input
          onChange={this.onCheckedFilter}
          name="filter"
          type="radio"
          id="Active"
        />

        <label htmlFor="Completed">Completed</label>
        <input
          onChange={this.onCheckedFilter}
          name="filter"
          type="radio"
          id="Completed"
        />
      </div>
    )
  }
}

export default FilterTaskPanel
