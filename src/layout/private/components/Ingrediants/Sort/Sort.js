import React, { Component } from "react";
import './Sort.css'


class Sort extends Component {
    state = {
        sorted: false
    }

    handleToggle = () => {
        if (this.state.sorted) {
            this.props.sort("asc")
        } else {
            this.props.sort("desc")
        }
        this.setState({ sorted: !this.state.sorted })
    }

    render() {
        return (
            <div className="sort">
                <p>sort by calories</p>
                <input className="btn-sort"
                    type="button"
                    value="⇅"
                    onClick={this.handleToggle}> 
                </input>
            </div>
        )
    }
}

export default Sort