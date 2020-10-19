import React from 'react';
import './LoginPage.css';
import mobile from '../images/mobile.png';
import first from '../images/1.jpg'
import second from '../images/2.jpg'
import third from '../images/3.jpg'
import fourth from '../images/4.jpg'
import fifth from '../images/5.jpg'
import logo from '../images/instagram.PNG'
import {Link} from 'react-router-dom'



function LoginPage() {
const img = [first , 
            second, 
            third, 
            fourth, 
            fifth]


    

    return (
        <div className="main">
            <div className="subMain">
                <div className="left">
                    <div className="mobileComponent">
                     <img src={mobile} alt="mobile" className="mobileImg"/>
                      <div className="fadein">
                        <img src={first} alt="mobile" id="f1" className="insideMobileImg" />
                        <img src={second} alt="mobile" id="f2" className="insideMobileImg" />
                        <img src={third} alt="mobile" id="f3" className="insideMobileImg" />
                        <img src={fourth} alt="mobile" id="f4" className="insideMobileImg" />
                        <img src={fifth} alt="mobile" id="f5" className="insideMobileImg" />
                    </div>
                    </div>
                </div>
                

            <div className="right">

            <div className="loginForm">
                     <div className="logo">
                        <img src={logo} alt="Logo" />
                     </div>
                    <div className="inputBoxes">
                    
                        <input type="text" id="text" placeholder="Phone number, username, or email" />
                        <input type="password" id="text" placeholder="Password"/>
                    </div>
                   
                    <div className="btnDiv">
                       <Link to="/account"><button type="submit" className="btn btn-primary">Login</button></Link> 
                    </div>
                    <div className="hrDiv"><hr className="hr"/> OR <hr className="hr" /></div>
                    <div className="loginFB">
                       <p className="loginText"> Log in with Facebook</p>
                       <p className="forgotText">Forgot Password?</p>
                    </div>
                </div>
                <div className="signUp">
                   <div className="signUpTexts"> <p className="sign">Don't have an account? &nbsp;<p className="signUpLink"> Sign up</p></p></div>
                </div>
                <div>
                    <p className="getApp">Get the app.</p>
                    <div className="icon">
                        <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_ios_english-en.png/180ae7a0bcf7.png" alt="apple" className="iconImg" />
                        <img src="https://www.instagram.com/static/images/appstore-install-badges/badge_android_english-en.png/e9cd846dc748.png" alt="google" className="iconImg" />
                    </div>
                </div>
                

            </div>
            </div>
            <div className="container1">
                <div className="row1">
                    <div className="bottomLinks">
                    <p className="linkText ">ABOUT</p>
                    <p className="linkText ">HELP</p>
                    <p className="linkText ">PRESS</p>
                    <p className="linkText ">API</p>
                    <p className="linkText ">JOBS</p>
                    <p className="linkText ">PRIVACY</p>
                    <p className="linkText ">TERMS</p>
                    <p className="linkText ">LOCATIONS</p>
                    <p className="linkText ">TOP ACCOUNTS</p>
                    <p className="linkText ">HASHTAGS</p>
                    <p className="linkText " >LANGUAGE</p>


                    </div>
                </div>
                <div>
                    <p className="copyRight">© 2020 INSTAGRAM FROM FACEBOOK</p>
                </div>
            </div>
        </div>
        
    )
}
export default LoginPage;