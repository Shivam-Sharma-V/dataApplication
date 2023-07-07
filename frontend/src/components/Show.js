import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';


/** Main function */
const Show = () => {
     /** data control state */
    const [data,setData] = useState([])
    /** data control state */

     /** Find Record */
    function findData(){
        fetch('http://localhost:8080/data').then((result)=>{
            result.json().then((resp)=>{
                console.log(resp)
                setData(resp)
            })
        })
    }

     /** find Record */

    /** Delete Record */
    function handleDelete(id){
        if(window.confirm('are you sure want to delete?')){
            fetch(`http://localhost:8080/data/${id}`,{
            method : "DELETE"
        }).then((result)=>{
            result.json((resp)=>{
                console.log(resp)
                
                
            })
            toast.success('Delete Record SuccessFully',{
                    position : "top-center"
                })
            findData();
        })
        }
        else{
          toast.error('Record Not Delete',{
            position : 'top-center'
          })
        }
    }

     /** Delete Record */

    /** Edit function to send id in localstorage */
    function handleEdit(id){
        window.localStorage.setItem('st',JSON.stringify(id))
    }
    /** Edit function to send id in localstorage */


    /** stop rerendering */
    useEffect(()=>{
        findData();
    },[])
    /** stop rerendering */
    return (
        /** design code */
        <>
        <div className='container-fluid'>
            <div className='row text-center pt-2'>
            <div className='col-sm-12'>
                <h2>Show <b className='text-danger'>Records</b></h2>
                </div>
            </div>
            <div className='row'>
                <div className='col-sm-12 p-0'>
                <div style={{"overflowX":"auto"}}>
        <table className='table text-center table-striped table-hover'>
            <thead className='bg-dark text-light '>
                <tr>
                    <th>ID</th>
                    <th>Profile</th>
                    <th>Student Name</th>
                    <th>Father Name</th>
                    <th>Mother Name</th>
                    <th>Date Of Birth</th>
                    <th>Mobile No.</th>
                    <th>Gender</th>
                    <th>E-Mail</th>
                    <th>department</th>
                    
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {
                    /** Show data in Table */
                    data.map((item,index)=>
                        <tr>
                            <td>{index+1}</td>
                            <td><img className='border w-75 rounded-5' src={`./upload/${item.image}`} alt='...' height='40px'/></td>
                            <td>{item.stName}</td>
                            <td>{item.fname}</td>
                            <td>{item.mname}</td>
                            <td>{item.date}</td>
                            <td>{item.mobile}</td>
                            <td>{item.gender}</td>
                            <td>{item.email}</td>
                            <td>{item.department}</td>
                           
                            <td>
                                <Link to='/update'> <button className='btn btn-success' onClick={()=>handleEdit(index)}>Edit</button></Link>
                            </td>
                            <td>
                              <button className='btn btn-danger' onClick={()=>handleDelete(item._id)}>Delete</button>
                            </td>
                        </tr>
                    
                
                )
                /** Show data in Table */
                }
            </tbody>
        </table>
        </div>
                </div>
            </div>
            <ToastContainer/>
        </div>
            
        </>
    );
    /** design code */
};
/** main function */


/** export page */
export default Show;