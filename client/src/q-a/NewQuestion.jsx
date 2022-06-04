/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
/* eslint-disable camelcase */
import React, { useState } from 'react';
import axios from 'axios';
import { FormStyle } from './q&a-styled-components/q&aSectionContainerStyle';

export default function NewQuestion({ productName, handleExit, product_id }) {
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [isClicked, setIsClicked] = useState(false);
  // form on submit , makes a post request to the server , sending a filled question form
  const onSubmit = (event) => {
    event.preventDefault();
    axios
      .post('/questions', {
        body, name, email, product_id,
      })
      .then(() => console.log('post question success'))
      .catch((err) => console.log(err));
    // if the question is already submitted , this conditional render notifies the user
    // that the question was submitted.
    setIsClicked(true);
  };

  return (
    <FormStyle>
      <div className="answer-header">
        <div>
          <button type="button" onClick={handleExit} className="closeQuestion-btn"><i className="fa-solid fa-xmark cart-modal-close" /></button>
        </div>
        &nbsp; &nbsp;
        <h1> Ask Your Question</h1>
        &nbsp; &nbsp;
        <h4>
          About The [
          {' '}
          {productName.toUpperCase()}
          {' '}
          ]
        </h4>
      </div>
      <div className="whole-answer-text">
        {isClicked ? <h2>Your Question Has Been Submitted</h2> : (
          <form onSubmit={(e) => onSubmit(e)}>
            <div className="form-group body-text">
              <textarea
                maxLength="1000"
                rows="5"
                cols="50"
                value={body}
                placeholder="Place your Question Here"
                required
                autoComplete="off"
                onChange={(e) => setBody(e.target.value)}
              />
            </div>
            &nbsp; &nbsp;
            <div className="form-group">
              <span htmlFor="name">Nickname: </span>
              <input className="form-control" id="nickName" placeholder="Example:jack453" value={name} onChange={(e) => setName(e.target.value)} />
              <div>
                <mark>
                  <em>
                    "For privacy reasons,
                    do not use your full name or email address”
                    {' '}
                  </em>
                </mark>
              </div>
            </div>
            &nbsp; &nbsp;
            <div className="form-group">
              <span>Email address: </span>
              <input
                type="email"
                className="form-control"
                id="email"
                value={email}
                placeholder="name@example.com"
                onChange={(e) => setEmail(e.target.value)}
              />
              <div>
                <mark><em>“For authentication reasons, you will not be emailed”  </em></mark>
              </div>
            </div>
            &nbsp; &nbsp;
            <div className="form-group">
              <button className="form-control text-border-btn" type="submit">
                Submit
              </button>
            </div>
          </form>
        )}
      </div>
    </FormStyle>

  );
}
