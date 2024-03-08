import './App.css';
import React from 'react';
import  { useState } from 'react';


function App() {
  return (
    <div className="App">



      <div className="container">
        <div className="form-box">

          <div className="header-form">
          </div>
          <div className="body-form">
           <form>
              <div className="input-group ">
                <input type="email" className="form-control" placeholder="enter your email address"   required />
              </div>
              <div className="input-group ">

                  <input type="password" className="form-control" placeholder="Password" required />
              </div>

              <div className='btncenteeer'>
                <button type="submit" className="btn">LOGIN</button>
              </div>
              <div className="message">
               <div><input type="checkbox" /> Remember ME</div>
                <div><a href="#">Forgot your password</a></div>
              </div>
            </form>

          </div>
        </div>
       </div>
    </div>
  );
}



export default App;