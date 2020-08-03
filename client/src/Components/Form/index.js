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


{/* <div class="input-group mb-3">
<input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2">
<div class="input-group-append">
<button class="btn btn-outline-secondary" type="button">Button</button>
</div>
</div> */}


// export function Input(props) {
//   return (

//       <input className='form-control d-flex' {...props} />

//   );
// }

// export function FormBtn(props) {
//   return (
//     <button {...props} className='btn btn-success searchBtn flex-fill float-right'>
//       {props.children}
//     </button>
//   );
// }



    // function handleFormSubmit(event) {
    //     console.log(event.target);
    //     event.preventDefault();
    //     if (formObject.title && formObject.author) {
    //       API.saveBook({
    //         title: formObject.title,
    //         author: formObject.author,
    //         synopsis: formObject.synopsis
    //       })
    //         .then(res => loadBooks())
    //         .catch(err => console.log(err));
    //     }
    //   };

//     <div className='container'>
//     <div className='row'>
//         <div className='col-md-12'>
//             <form className='row'>
//                 <div class='col-12 col-sm pr-sm-0'>
//                     <input className='form-control' type='text' id='bookInput' placeholder='Search here' />
//                 </div>
//                 <div className='col-12 col-sm-auto pl-sm-0'>
//                     <button type='submit' className='btn btn-primary'>Search</button>
//                 </div>
//             </form>
//         </div>
//     </div>
// </div>
