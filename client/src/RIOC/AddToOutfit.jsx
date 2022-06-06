import React, { useContext } from 'react';
import '../../dist/styles/styles-val.css';
import { ProductIdContext } from '../index';

function AddToOutfitCard() {
  const { addToOutfitter } = useContext(ProductIdContext);

  return (
    <div className="card" onClick={addToOutfitter}>
      <div className="addCard">
        <p className="add">+</p>
      </div>
      <h6 style={{ whiteSpace: 'normal', textAlign: 'center' }}>ADD TO OUTFIT</h6>
    </div>
  );
}

export default AddToOutfitCard;
