import React from 'react';

class DancingQueen extends React.Component {
  render() {
    return (
      <div>
        <h1>Dancing Queen</h1>
        <hr/>
        <p>
          you become a dancing queen.
        </p>
        <p className="buttons">
          <button
            onClick={this.props.onBackClick}>
            Back
          </button>
          <button
            onClick={this.props.onCheatClick}>
            You cheat ...
          </button>
          <button
            onClick={this.props.onMarryQuentinClick}>
            You get married
          </button>
          <button
            onClick={this.props.onTeacherClick}>
            Become a Teacher
          </button>
        </p>
      </div>
    );
  }
}

export default DancingQueen;
