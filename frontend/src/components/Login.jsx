import React, { Fragment, useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  function DashboardLogin() {
    let data = {email, password };
    console.log(data)
    fetch("http://localhost:8080/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    }).then((Response)=>{
      if(Response.status===200){
        console.log('okk')
        navigate('/')
      }
    })
   
  }
  

  return (
    <>
      <section class="vh-70" style={{ backgroundColor: "#034453" }}>
        <div class="container py-4 h-70">
          <div class="row d-flex justify-content-center align-items-center h-50">
            <div class="col col-xl-10">
              <div class="card" style={{ borderRadius: "1rem" }}>
                <div class="row g-0">
                  <div class="col-md-6 col-lg-5 d-none d-md-block">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/img1.webp"
                      alt="login form"
                      class="img-fluid"
                      style={{ borderRadius: "1rem 0 0 1rem" }}
                    />
                  </div>
                  <div class="col-md-6 col-lg-7 d-flex align-items-center">
                    <div class="card-body  p-lg-5 text-black">
                      <div class="d-flex align-items-center mb-1 pb-1">
                        <i
                          class="fas fa-cubes fa-2x me-3 h1"
                          style={{ color: "#ff6219" }}
                        >
                          Admin
                        </i>
                        <span class="h1 fw-bold mb-0">Login</span>
                      </div>

                      <h5
                        class="fw-normal mb-3 pb-3"
                        style={{ letterSpacing: "1px" }}
                      >
                        Sign into your account
                      </h5>
                      
                        <div class="form-outline mb-3">
                          <label class="form-label" for="form2Example17">
                            Email address
                          </label>
                          <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Enter your Email..."
                            id="form2Example17"
                            class="form-control fs-6 form-control-lg"
                          />
                        </div>

                        <div class="form-outline mb-4">
                          <label class="form-label" for="form2Example27">
                            Password
                          </label>
                          <input
                            type="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            id="form2Example27"
                            placeholder="Enter your password..."
                            class="form-control fs-6 form-control-lg"
                          />
                        </div>

                        <div class="pt-1 mb-4 text-center">
                          <button
                            class="btn btn-dark btn-lg btn-block w-50"
                            onClick={DashboardLogin}
                          >
                            Login
                          </button>
                        </div>
                    

                      <p class="mb-5 pb-lg-2" style={{ color: "#393f81" }}>
                        Don't have an account?{" "}
                        <a href="#!" style={{ color: "#393f81" }}>
                          Register here
                        </a>
                      </p>
                      <a href="#!" class="small text-muted">
                        Terms of use.
                      </a>
                      <a href="#!" class="small text-muted">
                        Privacy policy
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Login;
