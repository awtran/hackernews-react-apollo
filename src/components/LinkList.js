// Must also import graphql dependency
import { graphql, gql } from 'react-apollo'
import React, { Component } from 'react'
import Link from './Link'

class LinkList extends Component {
	
	render() {
		// Step 1: 
		if (this.props.allLinksQuery && this.props.allLinksQuery.loading) {
			return <div className="code">Loading</div>
		}

		// Step 2: 
		if (this.props.allLinksQuery && this.props.allLinksQuery.error) {
			return <div className="code">Error</div>
		}

		// Step 3: 
		const linksToRender = this.props.allLinksQuery.allLinks

		// Step 4:
		return (
			<div>
				{linksToRender.map(link => (
					<Link key={link.id} link={link}/>
				))}
			</div>
		)
	}
}

// Step 1: Create constant to store query, use gql to parse GraphQL code
// Step 2: Define the query: what data are we asking for
const ALL_LINKS_QUERY = gql` 
	query AllLinksQuery {
		allLinks {
			id
			createdAt
			url
			description
		}
	}
`

// Step 3: Use the graphql container to combine LinkList component with ALL_LINKS_QUERY
export default graphql(ALL_LINKS_QUERY, { name: 'allLinksQuery' }) (LinkList)