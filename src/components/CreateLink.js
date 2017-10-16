import React, { Component } from 'react'
import { graphql, gql } from 'react-apollo'

class CreateLink extends Component {

	state = {
		description: '',
		url: ''
	}

	render() {
		return(
			<div>
				<div className="tc pa3">
					<input
						className="w-100 w-25-ns f5 fw9 link br2 ba bw1 ph3 pv2 mb2 dib code mr2" 
						style={{color: `rgb(100,100,100)`}} 
						value={this.state.description}
						onChange={(e) => this.setState({ description: e.target.value })}
						type="text"
						placeholder="Link description"
					/>
					<input 
						className="w-100 w-25-ns f5 fw9 link br2 ba bw1 ph3 pv2 mb2 dib code"
						style={{color: `rgb(100,100,100)`}} 
						value={this.state.url}
						onChange={(e) => this.setState({ url: e.target.value })}
						type="text"
						placeholder="Link URL"
					/>
				</div>
				<button 
				onClick={() => this._createLink()} 
				className="f5 fw9 link dim br2 ba bw1 ph3 pv2 mb2 dib code mb3" 
				style={{border: `2px solid #5E2CA5`, backgroundColor: `#5E2CA5`, color: `#FFFFFF`}}	
				>
					Submit
				</button>
			</div>
		)
	}

		_createLink = async () => {
		  const { description, url } = this.state
		  await this.props.createLinkMutation({
		    variables: {
		      description,
		      url
		    }
		  })
		  this.props.history.push(`/`)
		}

}

const CREATE_LINK_MUTATION = gql`
	mutation createLinkMutation($description: String!, $url: String!) {
		createLink (
			description: $description,
			url: $url,
		) {
			id
			createdAt
			url
			description
		}
	}
`

export default graphql(CREATE_LINK_MUTATION, { name: 'createLinkMutation' })(CreateLink)