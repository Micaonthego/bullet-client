import React from 'react';
import './Profile.css';


function Profile(props) {
    console.log("props in profile", props)
     const { currentUser } = props
   if(currentUser) { 
       console.log("I'm in the if")
       return (    
<div>
                    <div className="profile">
                   <div className="profile__text">
                        <h3>PROFILE</h3>
                        </div>
                        <figure className="profile__shape">
                            <img src={props.currentUser.photo} alt="Profile" className="profile__img"></img>
                            <figcaption className="profile__caption">{props.currentUser.username}</figcaption>
                        </figure>
                        <div className="profile__text">
                            <h3>Aspiration</h3>
                            <h6>
                              "{props.currentUser.aspiration}"
                            </h6>
                        </div>
                    </div>
                </div>
    )
} else {
    return <div>Loading</div>
}
}
export default Profile;