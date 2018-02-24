import React, {Component} from 'react';
import {connect} from 'react-redux';
import {
  setMessage,
  setName,
  setOccasion,
  setShow
} from './reducer';
import './form.css';

class Form extends Component {
  render() {
    const {
      handleMessage,
      handleName,
      handleOccasion,
      message,
      name,
      occasion,
      showCard
    } = this.props;

    return (
      <div className="form">
        <div className="row">
          <label>Occassion</label>
          <select onChange={handleOccasion} value={occasion}>
            <option>Birthday</option>
            <option>Christmas</option>
            <option>Valentine's Day</option>
          </select>
        </div>
        <div className="row">
          <label>Name</label>
          <input type="text" onChange={handleName} value={name} />
        </div>
        <div className="row">
          <label>Message</label>
          <textarea onChange={handleMessage} value={message} />
        </div>
        <div className="row">
          <label></label>
          <button onClick={showCard}>Show Card</button>
        </div>
      </div>
    );
  }
}

// Make this a "connected" component.

const mapDispatch = dispatch => ({
  handleMessage(event) {
    dispatch(setMessage(event));
  },
  handleName(event) {
    dispatch(setName(event));
  },
  handleOccasion(event) {
    dispatch(setOccasion(event));
  },
  showCard() {
    dispatch(setShow('card'))
  }
});

const mapState = state => {
  const {message, name, occasion} = state;
  return {message, name, occasion};
};

export default connect(mapState, mapDispatch)(Form);
