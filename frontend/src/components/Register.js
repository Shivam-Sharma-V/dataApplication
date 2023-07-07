import React, { useState } from 'react';
import {ToastContainer, toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
    const [stName,setStName] = useState('');
    const [fname,setFName] = useState('');
    const [mname,setMName] = useState('');
    const [date,setDate] = useState('');
    const [mobile,setMobile] = useState('');
    const [gender,setGender] = useState('');
    const [email,setEmail] = useState('');
    const [password,setPassword] = useState('');
    const [department,setDepartment] = useState('');
    const [image,setImage] = useState('');

    // console.log(image)

    function saveData(){
        //  let data = {stName,fname,mname,date,mobile,gender,email,department,image}
        let formData = new FormData();
        formData.append('stName',stName)
        formData.append('fname',fname)
        formData.append('mname',mname)
        formData.append('date',date)
        formData.append('mobile',mobile)
        formData.append('gender',gender)
        formData.append('email',email)
        formData.append('password',password)
        formData.append('department',department)
        formData.append('image',image)
        fetch('http://localhost:8080/register',{
            method:"POST",
            body:formData
        }).then((result)=>{
            result.json().then((resp)=>{
                console.log(resp)
                setStName('')
                setFName('')
                setMName('')
                setDate('')
                setMobile('')
                setGender('')
                setEmail('')
                setPassword('')
                setDepartment('')
                setImage('')
                toast.success('Register SuccessFully',{
                    position :'top-center'
                })
            })
        }).catch((err)=>{
            console.log('error')
            
        })
    }
    function clearData(){
        setStName('')
        setFName('')
                setMName('')
                setDate('')
                setMobile('')
                setGender('')
                setEmail('')
                setPassword('')
                setDepartment('')
                toast.warn('Clear Fields',{
                    position :'top-center'
                })
    }
    return (
        <>
           <div className='container'>
            <div className='row'>
                <div className='col-sm-6 a1 bg-light p-5 pt-3'>
                    <div className='row'>
                        <div className='col-sm-12 text-center pb-3'>
                            <h2>Registration <u className='text-danger fw-bold'>Form</u></h2>
                        </div>
                    </div>
                    <form  encType='multipart/form-data'>
                    <lable className='fs-6 fw-bold'>Student Name</lable>
                    <input type="text" className='form-control mb-3' placeholder='Student Name' value={stName} onChange={(e)=>setStName(e.target.value)} />
                    <lable className='fs-6 fw-bold'>Father Name</lable>
                    <input type="text" className='form-control mb-3' placeholder='Father Name' value={fname} onChange={(e)=>setFName(e.target.value)} />
                    <lable className='fs-6 fw-bold'>Mother Name</lable>
                    <input type="text" className='form-control mb-3' placeholder='Mother Name' value={mname} onChange={(e)=>setMName(e.target.value)} />
                    <lable className='fs-6 fw-bold'>Date Of Birth</lable>
                    <input type="date" className='form-control mb-3' value={date} onChange={(e)=>setDate(e.target.value)} />
                    <lable className='fs-6 fw-bold'>Mobile No</lable>
                    <input type="Number" className='form-control mb-3' placeholder='Mobile No.' value={mobile} onChange={(e)=>setMobile(e.target.value)} />
                    <lable className='fs-6 fw-bold'>Gender</lable><br/>
                    <input type="radio" className='' value="Male" onChange={(e)=>setGender(e.target.value)} /> Male
                    <input type="radio" className='ms-5' value="Female" onChange={(e)=>setGender(e.target.value)} /> Female
                    <input type="radio" className='ms-5 mb-3' value="Other" onChange={(e)=>setGender(e.target.value)} /> Other <br/>
                    <lable className='fs-6 fw-bold'>E-Mail</lable>
                    <input type="text" className='form-control mb-3' placeholder='E-Mail' value={email} onChange={(e)=>setEmail(e.target.value)} />
                    

                    <lable className='fs-6 fw-bold'>Pasword</lable>
                    <input type="password" className='form-control mb-3' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
                    <lable className='fs-6 fw-bold'>Departmnet</lable>
                    <select className='form-control mb-3' value={department} onChange={(e)=>setDepartment(e.target.value)}>
                        <option>--Please Select--</option>
                        <option>Computer Science</option>
                        <option>Information Technology</option>
                        <option>Electronic Engineering</option>
                    </select>
                    <label className='fs-6 fw-bold'>File Upload</label>
                    <input type='file' onChange={(e)=>setImage(e.target.files[0])} className='form-control mb-4'/>
                    <button className='btn btn-success w-25 me-4' onClick={saveData}>Submit</button>
                    <input type='clear' value='clear' onClick={clearData} className='btn btn-danger w-25'/>
                    </form>
                </div>
               
                <div className='col-sm-6 pt-5 a2 mt-5'>
                    <img src='https://st2.depositphotos.com/1029756/6496/i/950/depositphotos_64964951-stock-photo-register-now-text-write-on.jpg' alt='...' className='img-thumbnail' />
                </div>
            </div>
           </div>
           <ToastContainer/> 
        </>
    );
};

export default Register;