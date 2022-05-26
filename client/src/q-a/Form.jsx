import React, { useState } from 'react';
import axios from 'axios';
import { FormStyle } from './q&a-styled-components/q&aSectionContainerStyle';

export default function Form({ questionId }) {
  const [body, setBody] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [photoList, setPhotos] = useState('');
  const [isClicked, setIsClicked] = useState(false);

  const onSubmit = (event) => {

    const photos = photoList.toString().split(',');
    console.log(photos);
    axios
      .post(`/answers/${questionId.question_id}`, {
        body, name, email, photos,
      })
      .then((res) => console.log('post success'))
      .catch((err) => console.log(err));
        setIsClicked(true);
    event.preventDefault();
  };
  const handleClick = () => {
    console.log({
      body, name, email, photos,
    });
  };

  return (
    <FormStyle>
      {isClicked ? <h2>Your Answer Has Been Submitted</h2> : (
        <form onSubmit={(e) => onSubmit(e)}>
          <div>
            <textarea
              maxLength="1000"
              rows="5"
              cols="50"
              value={body}
              placeholder="Place your Answer Here"
              required
              autoComplete="off"
              onChange={(e) => setBody(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label htmlFor="name">Nickname: </label>
            <input className="form-control" id="nickName" placeholder="Example:jack453" value={name} onChange={(e) => setName(e.target.value)} />
            <div>
              <mark><em>"For privacy reasons, do not use your full name or email address” </em></mark>
            </div>
          </div>
          <div className="form-group">
            <label>Email address: </label>
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
          <div>
          <label>Add Photo Urls: </label>
          <textarea
              rows="5"
              cols="50"
              className="form-control"
              id="photo"
              value={photoList}
              placeholder="Add up to 3 photo Urls , separeted by comma"
              onChange={(e) => setPhotos(e.target.value)}
            />
          </div>
          <div className="form-group">
            <button className="form-control btn btn-primary" type="submit">
              Submit
            </button>
          </div>
        </form>
      )}

    </FormStyle>

  );
}
