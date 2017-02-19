import React, { PropTypes } from 'react';

const getCurrentPath = () => {
  const path = document.location.pathname;
  return path.substring(path.lastIndexOf('/'));
}

export class Router extends React.Component {

  state = {
    route: getCurrentPath()
  }

  handleClick = (route) => {
    this.setState({ route: route });
    history.pushState(null, '', route);
  }

  static childContextTypes = {
    route: React.PropTypes.string,
    linkHandler: React.PropTypes.func
  }

  getChildContext(){
    return {
      route: this.state.route,
      linkHandler: this.handleClick
    }
  }

  componentDidMount() {
    window.onpopstate = () => {
      this.setState({route: getCurrentPath()});
    }
  }

  render () {
    return <div>
              {this.props.children}
           </div>
  }
}
