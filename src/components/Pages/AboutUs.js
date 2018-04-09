import React, { Component } from 'react';


class AboutUs extends Component {
    render() {
        return (
            <div className="container-fluid">
                <br/>
                <h1>About Me</h1>
                <br/>
                <div className="AboutMe">
                <p>
                I am from India . I completed my Bachelor's degree from Mumbai University in the 2014 and since then I was working as a full stack developer at a five year old startup called as ComMedia Solutions Pvt. Ltd.In total I have around 3 years of industrial experience and have worked on around 10 projects out of which for one project, I have recevied award for Best Product of the Year .
                </p>
                <p>
                <ul>
                    <li> Programming : </li>
                    <li> Playing Soccer :   <a href="https://www.fcbarcelona.com/">Click Here To Know Which Club I support</a> </li>
                    <li> Listening Music :</li>
                    <li> Photography  :    <a href="https://www.facebook.com/pg/kherodkar.ameya/photos/?ref=page_internal">Click Here To Know More</a></li>
                    <li> Travelling : </li>
                </ul>
            </p>
                </div>
            </div>
        );
    }
}

export default AboutUs;
