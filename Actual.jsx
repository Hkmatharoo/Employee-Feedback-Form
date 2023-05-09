import React, { useState } from 'react'
import "./style.css"

function Actual(props) {
    let { handleChangeName, handleChangeDept, handleChangeRat, handleSubmit, styles } = props;
    return (
        <div className='align'>
            <form>
                <h1>EMPLOYEE FEEDBACK FORM</h1>
                <label className='text'>NAME:</label><br /><br />
                <input className='text' type='text' placeholder='Enter Your Name' id='nameIp' onChange={handleChangeName}></input><br /><br />
                <label className='text'>DEPARTMENT:</label><br /><br />
                <input className='text' type='text' placeholder='Enter Your Deparment' id='deptIp' onChange={handleChangeDept}></input><br /><br />
                <label className='text'>RATING:</label><br /><br />
                <input className='text' type='text' placeholder='Rating' id='RatIp' onChange={handleChangeRat}></input><br /><br />
                <button className='text' onClick={handleSubmit}>SUBMIT</button>
            </form>
        </div>
    )
}

export default Actual