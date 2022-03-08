import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux'
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';

const ContactList = () => {
    const contacts = useSelector(state => state);
    const dispatch = useDispatch();
    const deleteContact = (id)=>
    {
        dispatch({type:"DELETE_CONTACT",payload:id});
        toast.success("Contact deleted Successfully!");
    }
    return (
        <>
            <div className='container'>
                <div className='row'>
                    <div className='col-md-12 mt-5'>
                        <div className='card p-3'>
                            <div className='d-flex flex-row-reverse'>
                                <Link to="/add-contact" type="button" class="btn btn-primary">Add Contact</Link>
                            </div>
                            <table className='table table-bordered mt-2'>
                                <thead className='bg-dark text-white'>
                                    <tr>
                                        <th>#</th>
                                        <th>Name</th>
                                        <th>Number</th>
                                        <th>Action</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {contacts.map((item, index) => <>
                                        <tr key={index}>
                                            <td>{index + 1}</td>
                                            <td>{item.name}</td>
                                            <td>{item.number}</td>
                                            <td>
                                                <Link to={`/edit/${item.id}`} type="button" class="btn btn-primary">Edit</Link>
                                                <button
                                                 className='btn btn-danger ms-3' 
                                                 onClick={()=> deleteContact(item.id)}
                                                 
                                                 >Delete</button>
                                            </td>

                                        </tr>
                                    </>)
                                    }
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ContactList;