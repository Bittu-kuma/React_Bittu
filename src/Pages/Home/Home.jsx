import React from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
        <div className='container mt-5'>
            <div className='row'>
                <div className='col-md-12'>
                    <table className='table table-dark table-bordered'>
                        <thead>
                            <tr>
                                <th>S# No.</th>
                                <th>Project/Assignment Name</th>
                                <th>Link</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>1</td>
                                <td>Calculator</td>
                                <td>
                                    <Link to="/calculator" className='btn btn-primary'>Calculator</Link>
                                </td>
                            </tr>
                            <tr>
                                <td>2</td>
                                <td>Contact List</td>
                                <td>
                                    <Link to="/contact" className='btn btn-primary'>Contact List</Link>
                                </td>
                            </tr>
                            <tr>
                                <td>3</td>
                                <td>Gallery</td>
                                <td>
                                    <Link to="/gallery" className='btn btn-primary'>Gallery</Link>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </div>
        </div>
    </>
  )
}

export default Home