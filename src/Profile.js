import React from 'react';
import './Profile.css';


function Profile(props) {
    console.log("props in profile", props)
     const { currentUser } = props
   if(currentUser) { 
       console.log("I'm in the if")
       return (    
<div>
    <div className="row">
                    <div className="profile">
                        <figure className="profile__shape">
                            <img src={props.currentUser.photo} alt="Profile" className="profile__img"></img>
                            <figcaption className="profile__caption">{props.currentUser.username}</figcaption>
                        </figure>
                        <div className="profile__text">
                            <h3 className="heading-tertiary u-margin-bottom-small">Aspiration</h3>
                            <h4>
                              "{props.currentUser.aspiration}"
                            </h4>
                        </div>
                    </div>
                </div>
</div>
    )
} else {
    return <div>Loading</div>
}
}
export default Profile;