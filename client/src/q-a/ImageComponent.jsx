/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable react/no-access-state-in-setstate */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prop-types */
/* eslint-disable jsx-a11y/img-redundant-alt */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';

export default class ImageComponent extends React.Component {
  // image component class is to control the answer images on the Q-A widget
  constructor(props) {
    super(props);
    this.state = { isOpen: false };
    this.handleShowDialog = this.handleShowDialog.bind(this);
  }

  // if the image is clicked upon , sets the isOpen state to true
  handleShowDialog = () => {
    this.setState({ isOpen: !this.state.isOpen });
  };

  render() {
    // conditionally renders a largened image if the state is set to true
    return (
      <div className="image-component">
        <img
          className="small"
          src={this.props.photo.url}
          onClick={this.handleShowDialog}
          alt="no image"
        />
        {this.state.isOpen && (
          <dialog
            className="dialog"
            open
            onClick={this.handleShowDialog}
          >
            <div className="modal-div">
              <div className="container-div">
                <img
                  className="image"
                  src={this.props.photo.url}
                  onClick={this.handleShowDialog}
                  alt="no image"
                />
              </div>
            </div>
          </dialog>
        )}
      </div>
    );
  }
}
