import React from 'react';
import './style.css';

export function FormGroup(props) {
  return(
          <div className='input-group'>{props.children}</div>
  );
}

export function FormInput(props) {
  return (
<input className='form-control' {...props} />
  );
}

export function SearchBtn(props) {
    return(
  <div className="input-group-append">
      <button {...props} className='btn btn-outline-secondary'>
      {props.children}
    </button>
    </div>
    )
}
