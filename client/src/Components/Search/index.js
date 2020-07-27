import React, { Component } from 'react';

class Search extends Component {
    render() {
        return (
            <div className='container'>
            <div className='row'>
                <div className='col-md-12'>
                    <form className='row'>
                        <div class='col-12 col-sm pr-sm-0'>
                            <input className='form-control' onChange={this.handleOnChange} type='text' id='bookInput' placeholder='Search here' />
                        </div>
                        <div className='col-12 col-sm-auto pl-sm-0'>
                            <button type='submit' className='btn btn-primary' onClick={this.handleOnClick}>Search</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
        )
    }
}

export default Search;
