import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { getQuoteItem } from "Redux/actions";

import 'Assets/sass/app.scss';
import Footer from './Footer';

import { author } from "Constants/defaultValues";

class App extends Component {

	setColor = (color) => {
		document.getElementsByTagName("body")[0].style = `color: ${color}; background-color: ${color};`;
		Array.from(document.querySelectorAll('.button')).map((button,index) => {
			button.style.backgroundColor=color;
			return index;
 		})
	}
	randomQuote = () => {
		var item = {};
		item.setColor = this.setColor;
		this.props.getQuoteItem();
	}
	componentDidMount = () => {
	  this.props.getQuoteItem();
	}
	render() {
		const { quoteItem } = this.props;
		return (
			<Fragment>
				{ quoteItem && this.setColor(quoteItem.color) }
				<div className="quote-box">
					<div className="quote-text">
						<i className="fa fa-quote-left"/>
						<span id="text">
						{ quoteItem && quoteItem.quote }
						</span>
					</div>
					<div className="quote-author"> - <span id="author"> { quoteItem && quoteItem.author} </span>
					</div>
					<div className="buttons">
						<a className="button" href={`https://twitter.com/intent/tweet?hashtags=quotes&related=freecodecamp&text="${ quoteItem && quoteItem.quote }" ${ quoteItem && quoteItem.author }`} id="tweet-quote" title="Tweet this quote!" rel="noopener noreferrer"  target="_blank">
						<i className="fa fa-twitter"></i>
						</a>
						<a className="button" href={`https://www.facebook.com/sharer/sharer.php?quote=${ quoteItem && quoteItem.quote } - ${ quoteItem && quoteItem.author }&u=${window.location.href}&display=popup&ref=plugin&src=quote`} id="facebook-quote" title="Post this quote on facebook!" rel="noopener noreferrer"  target="_blank">
						<i className="fa fa-facebook"></i>
						</a>
						<button className="button" onClick={ () => this.randomQuote() } id="new-quote">New quote</button>
					</div>
				</div>
				<Footer href={author.githup} author={author.name}/>
			</Fragment>
		);
	}
}

const mapStateToProps = ({ quote }) => {
	const { quoteItem } = quote;
	return { quoteItem };
};

export default connect(mapStateToProps,{ getQuoteItem })(App);

