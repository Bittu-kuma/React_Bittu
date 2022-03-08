import React, { useState } from 'react'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AddContact = () => {
    const [name,setName] = useState("");
    const [number, setNumber] = useState("");
    const contacts = useSelector(state=>state);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    // console.log(contacts)

    const handleSubmit = (e)=>
    {
        e.preventDefault();
        
        const checkNumber = contacts.find(contacts=>contacts.number == number && number);
        
        if(!name || !number)
        {
            return toast.warning("Please fill in all Fields")
        }

        if(checkNumber)
        {
            return toast.error("This Number already Exist");
        }

        const data = {
            id:contacts[contacts.length - 1].id + 1,
            name,
            number
        }
        dispatch({type:"ADD_CONTACT",payload:data})
        toast.success("Contact Number Added Successfully!");
        navigate('/contact');
    }
  return (
    <>
        <div className='container'>
            <div className='row'>
                <h1 className='display-3 text-center my-4'>Add Contact</h1>
                <div className='col-md-6 shadow mx-auto p-5'>
                    <form onSubmit={handleSubmit}>
                        <div className='form-group mt-2'>
                            <input 
                            type="text" 
                            placeholder="Name"
                            class="form-control" 
                            value={name} 
                            onChange={e=>setName(e.target.value)} />
                        </div>
            
                        <div className='form-group mt-2'>
                            <input 
                            type="number" 
                            placeholder="Phone" 
                            class="form-control"
                            value={number} 
                            onChange={e=>setNumber(e.target.value)}
                            />
                        </div>
                        <div className='form-group mt-2 d-grid'>
                            <input type="submit" class="form-control" value="Add"  class="btn btn-primary" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    </>
  )
}

export default AddContact