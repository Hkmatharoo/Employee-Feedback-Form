import React, { useState } from 'react'
import Actual from './Actual';
import Formdata from './Formdata';

function Parent() {
    const [nameIp, setName] = useState('')
    const [deptIp, setDept] = useState('')
    const [ratIp, setRat] = useState('')
    const [myobj, setMyobj] = useState({})
    const [users, setUsers] = useState([])
    const [isSubmitted, setisSubmitted] = useState(false)



    const handleChangeName = (e) => {
        console.log('typing....');
        setName(e.target.value);
    }
    const handleChangeDept = (e) => {
        console.log('typing....');
        setDept(e.target.value);
    }
    const handleChangeRat = (e) => {
        console.log('typing....');
        setRat(e.target.value);
    }
    const handleSubmit = (e) => {
        // to prevent from refreshing the form
        e.preventDefault(); 
        let tempobj = myobj;
        tempobj = {
            name: nameIp,
            dept: deptIp,
            rat: ratIp,
        }
        console.log(tempobj);

        let tempArr = users;
        tempArr.push(tempobj);

        setUsers(() => ([
            ...tempArr
        ]))
        console.log(users);
        setisSubmitted(!isSubmitted);
    }
    const handleBack = () => {
        setisSubmitted(!isSubmitted)
    }

return (
    <div>
        {
        !isSubmitted ?
            <Actual handleChangeName={handleChangeName}  handleChangeDept={handleChangeDept}  handleChangeRat={handleChangeRat}handleSubmit={handleSubmit} />
            :
            <Formdata users={users} handleBack={handleBack} />
        }
    </div>
)
    }


export default Parent

