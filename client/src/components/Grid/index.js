import React from 'react';
import './style.css';

export function Container({ children }) {
  return <div className={'container'}>{children}</div>
}

export function ResultsContainer({ children }) {
  return <div className={'container resultsContainer'}>{ children }</div>
}

export function Row({ children }) {
  return <div className={'d-flex flex-row'}>{children}</div>
}

export function TitleRow({ children }) {
  return <div className={'d-flex flex-column titleRow'}>{children}</div>
}

  export function Col({ children }) {
    return (
      <div className={'col '}>{children}</div>
    );
  }


