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


// export function SearchResults({ children }) {
//     return <div className={'container searchResults'}>{ children }</div>;
// }

// Exporting the Container, Row, and Col components from this file

// This Container component allows us to use a bootstrap container without worrying about class names

  
  // This Col component lets us size bootstrap columns with less syntax
  // e.g. <Col size="md-12"> instead of <div className="col-md-12">
  // export function Col({ size, children }) {
  //   return (
  //     <div
  //       className={size
  //         .split(" ")
  //         .map(size => "col-" + size)
  //         .join(" ")}
  //     >
  //       {children}
  //     </div>
  //   );
  // }

  export function Col({ children }) {
    return (
      <div className={'col '}>{children}</div>
    );
  }


