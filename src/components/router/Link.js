import React, { PropTypes } from 'react'

export class Link extends React.Component {

  static contextTypes = {
    route: React.PropTypes.string,
    linkHandler: React.PropTypes.func
  }

  handleClick = (evt) => {
    evt.preventDefault();
    this.context.linkHandler(this.props.to);
  }

  render () {
    const activeClass = this.context.route == this.props.to ? 'active' : '';
    return <a href="#" className={activeClass} onClick={this.handleClick} >
            {this.props.children}
        </a>
  }
}
