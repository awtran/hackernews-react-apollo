import React, { Component } from 'react'

class Link extends Component {

	render() {
		return (
			// renders link description + url
			<div>
				<div className="code pa2 mb2 fw9 f4" style={{color: `#5E2CA5`}}>{this.props.link.description} ({this.props.link.url})</div>
			</div>
		)
	}

	_voteForLink = async () => {
		// will implement later
	}
}

export default Link