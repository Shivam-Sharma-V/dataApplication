import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

/** Main Function*/

const Update = () => {
  /** State Manage */
  const [stName, setStName] = useState("");
  const [fname, setFName] = useState("");
  const [mname, setMName] = useState("");
  const [date, setDate] = useState("");
  const [mobile, setMobile] = useState("");
  const [gender, setGender] = useState("");
  const [email, setEmail] = useState("");
  const [department, setDepartment] = useState("");
  const [image, setImage] = useState("");
  const [userId, setUserId] = useState("");

  /** State Manage */

  /** PreFill Records  */

  function findData() {
    let id = JSON.parse(window.localStorage.getItem("st"));
    console.log(id);
    fetch(`http://localhost:8080/data`).then((result) => {
      result.json().then((resp) => {
        setStName(resp[id].stName);
        setFName(resp[id].fname);
        setMName(resp[id].mname);
        setDate(resp[id].date);
        setMobile(resp[id].mobile);
        setGender(resp[id].gender);
        setEmail(resp[id].email);
        setDepartment(resp[id].department);
        setImage(resp[id].image);
        setUserId([resp[id]._id]);
      });
    });
  }
  /** PreFill Records  */

  /** Stop reRendering */

  useEffect(() => {
    findData();
  }, []);

  /** Stop reRendering */

  /** Update Record */

  function UpdateRecord() {
    let data = {
      stName,
      fname,
      mname,
      date,
      mobile,
      gender,
      email,
      department,
      userId,
    };
    fetch(`http://localhost:8080/data/${userId}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((result) => {
      result.json().then((resp) => {
        console.log(resp);
      });
    });
    toast.success("Update Successfully", {
      position: "top-center",
    });
  }

  /** Update Record */

  /** design code */
  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 pt-5 mt-5 pe-5">
            <img
              src="https://previews.123rf.com/images/dirkercken/dirkercken1410/dirkercken141000715/32408524-update-updating-software-now-and-here-to-the-latest-newest-version-or-new-edition.jpg"
              alt="..."
              className="img-thumbnail"
            />
          </div>


          <div className="col-sm-6 bg-light p-5 pt-3">
            <div className="row">
              <div className="col-sm-12 text-center">
                <h2>
                  Update <u className="text-danger fw-bold">Data</u>
                </h2>
              </div>
            </div>
            <lable className="fs-6 fw-bold">Student Name</lable>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Student Name"
              value={stName}
              onChange={(e) => setStName(e.target.value)}
            />
            <lable className="fs-6 fw-bold">Father Name</lable>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Father Name"
              value={fname}
              onChange={(e) => setFName(e.target.value)}
            />
            <lable className="fs-6 fw-bold">Mother Name</lable>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="Mother Name"
              value={mname}
              onChange={(e) => setMName(e.target.value)}
            />
            <lable className="fs-6 fw-bold">Date Of Birth</lable>
            <input
              type="date"
              className="form-control mb-3"
              value={date}
              onChange={(e) => setDate(e.target.value)}
            />
            <lable className="fs-6 fw-bold">Mobile No</lable>
            <input
              type="Number"
              className="form-control mb-3"
              placeholder="Mobile No."
              value={mobile}
              onChange={(e) => setMobile(e.target.value)}
            />
            <lable className="fs-6 fw-bold">Gender</lable>
            <br />
            <input
              type="radio"
              className=""
              value="Male"
              onChange={(e) => setGender(e.target.value)}
            />{" "}
            Male
            <input
              type="radio"
              className="ms-5"
              value="Female"
              onChange={(e) => setGender(e.target.value)}
            />{" "}
            Female
            <input
              type="radio"
              className="ms-5 mb-3"
              value="Other"
              onChange={(e) => setGender(e.target.value)}
            />{" "}
            Other <br />
            <lable className="fs-6 fw-bold">E-Mail</lable>
            <input
              type="text"
              className="form-control mb-3"
              placeholder="E-Mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <lable className="fs-6 fw-bold">Departmnet</lable>
            <select
              className="form-control mb-4"
              value={department}
              onChange={(e) => setDepartment(e.target.value)}
            >
              <option>--Please Select--</option>
              <option>Computer Science</option>
              <option>Information Technology</option>
              <option>Electronic Engineering</option>
            </select>
            <label className="fs-6 fw-bold">File Upload</label>
            <input
              type="file"
              onChange={(e) => setImage(e.target.files[0])}
              className="form-control mb-4"
            />
            <center>
              <Link to="/show">
                {" "}
                <button
                  className="btn btn-danger w-25 me-4"
                  onClick={UpdateRecord}
                >
                  Update
                </button>{" "}
              </Link>
            </center>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );

  /** design code */
};
/** Main Function*/

/** export page */
export default Update;

/** export page */
