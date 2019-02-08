import React, { PureComponent } from 'react'

export default class Footer extends PureComponent {
  render() {
    return (
      <div className="footer"> by <a href={this.props.href}>{this.props.author}</a></div>
    )
  }
}
