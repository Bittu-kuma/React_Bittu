import React, { useEffect,useState } from 'react';
import { useSelector, useDispatch  } from 'react-redux';
import { Link, useParams,useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const EditContact = () => {
    // state define
    const [name, setName] = useState("");
    const [number, setNumber] = useState("");

    // catch url id
    const { id } = useParams();
    const contacts = useSelector(state => state);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const currentContact = contacts.find(contacts => contacts.id === parseInt(id));

    useEffect(() => {
        if (currentContact) {
            setName(currentContact.name);
            setNumber(currentContact.number);
        }
    }, [currentContact])

    // edit data and submit here
    const handleSubmit = (e)=>
    {
        e.preventDefault();
        
        const checkNumber = contacts.find(contacts=>contacts.id !== parseFloat(id) && contacts.number == number && number);
        
        if(!name || !number)
        {
            return toast.warning("Please fill in all Fields")
        }

        if(checkNumber)
        {
            return toast.error("This Number already Exist");
        }

        const data = {
            id:parseInt(id),
            name,
            number
        }
        dispatch({type:"UPDATE_CONTACT",payload:data})
        toast.success("Contact Number Updated Successfully!");
        navigate('/contact');
    }
    return (
        <>
            <div className='container'>
                {currentContact ? (<>
                    <div className='row'>
                        <h1 className='display-3 text-center my-4'>Edit Contact</h1>
                        <div className='col-md-6 shadow mx-auto p-5'>
                            <form onSubmit={ handleSubmit}>
                                <div className='form-group mt-2'>
                                    <input
                                        type="text"
                                        placeholder="Name"
                                        class="form-control"
                                        value={name}
                                        onChange={e => setName(e.target.value)}
                                    />
                                </div>

                                <div className='form-group mt-2'>
                                    <input
                                        type="number"
                                        placeholder="Phone"
                                        class="form-control"
                                        value={number}
                                        onChange={e => setNumber(e.target.value)}
                                    />
                                </div>
                                <div className='form-group mt-2 d-grid'>
                                    <input type="submit" class="form-control" value="Add" class="btn btn-primary" />
                                </div>
                            </form>
                        </div>
                    </div>
                </>)
                    : (
                        <h1 className='display-3 my-5 text-center'>Contact With id {id} not exist</h1>
                    )

                }

            </div>
        </>
    )
}

export default EditContact