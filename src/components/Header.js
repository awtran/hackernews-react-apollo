import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { withRouter } from 'react-router'

class Header extends Component {

	render() {
		return (
			<div className="flex pa3 justify-between nowrap">
				<div className="flex flex-fixed black">
					<div className="f4 fw7 mr2 white code">Hacker News</div>
					<Link to='/' className="f4 ml1 no-underline white-70 dim code">new</Link>
					<div className="f4 ml1 white-70 code">|</div>
					<Link to='/create' className='f4 ml1 no-underline white-70 dim code'>submit</Link>
				</div>
			</div>
		)
	}
}

export default withRouter(Header)