import React, { Component } from 'react'

class BlockQuote extends Component {

	render() {
		return (
			// renders link description + url
			<div>
				<article className="pa5 code" style={{background: `#5E2CA5`, color: `#FFFFFF`}}>
		          <p className="f6 f4-ns lh-copy measure center">
		            The form of our letters, the older handwriting and inscriptions as much as
		            the cuttings in use today, reflects a convention that has slowly solidified,
		            an agreement hardened in many battles. Even after the Renaissance several
		            European countries retained broken, blackletter national scripts in opposition to roman, the obligatory type for all Latin material; yet even today, I hope, the last word about Fraktur has not been spoken.
		          </p>
		          <blockquote className="ph0 f4 f1-ns measure-narrow center">
		            <p className="fw9 lh-copy lh-title-ns">The punches of Claude Garamond, cut around 1530 in Paris, are simply unsurpassed in their clarity, readability and beauty.
		            </p>
		          </blockquote>
		          <p className="f6 f4-ns lh-copy measure center">
		            Apart from that, the roman minuscule has been our way of writing for hundreds
		            of years. What followed were merely fashionable variations, here and there even
		            deformations, of the noble basic form, but no improvement whatever. The
		            punches of Claude Garamond, cut around 1530 in Paris, are simply unsurpassed in
		            their clarity, readability and beauty. Garamond appeared on the scene at a
		            time when the occidental book, as an object, cast off its medieval
		            ponderousness and took up the form which today is still the best: the slender
		            and upright rectangular body, comprising folded sheets stitched or sewn at
		            the back, in a cover whose protruding edges protect the trimmed pages.
		          </p>
		        </article>
			</div>
		)
	}

}

export default BlockQuote