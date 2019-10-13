import React from 'react';
import ReactDOM from 'react-dom';

class Welcome extends React.Component {
  render() {
    return <div>Welcome to React Beta 1</div>;
  }
}

ReactDOM.render(<Welcome />, document.getElementById('root'));
