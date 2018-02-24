import React, {Component} from 'react';
import {connect} from 'react-redux';
import {setShow} from './reducer'
import './card.css';

const greetingMap = {
  Birthday: 'Happy Birthday',
  Christmas: 'Merry Christmas',
  'Valentine\'s Day': 'Happy Valentine\'s Day'
};

const imageMap = {
  Birthday: 'birthday.jpg',
  Christmas: 'santa.jpg',
  'Valentine\'s Day': 'valentine.png'
};

class Card extends Component {
  render() {
    const {
      message,
      name,
      occasion,
      showForm
    } = this.props;

    const imageUrl = 'images/' + imageMap[occasion];
    const greeting = `${greetingMap[occasion]} ${name}!`;

    return (
      <div className="card">
        <img src={imageUrl} alt="card" />
        <div className="greeting">{greeting}</div>
        <div className="message">{message}</div>
        <button onClick={showForm}>Back</button>
      </div>
    );
  }
}

// Make this a "connected" component.

const mapDispatch = dispatch => ({
  showForm() {
    dispatch(setShow('form'))
  }
});

function mapState(state) {
  const {message, name, occasion} = state;
  return {message, name, occasion};
}

export default connect(mapState, mapDispatch)(Card);
