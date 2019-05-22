import React from 'react';

function Profile() {
    return (
<div>
    <div className="row">
                    <div className="profile">
                        <figure className="profile__shape">
                            <img src="../nat-8.jpg" alt="Profile" className="profile__img"></img>
                            <figcaption className="profile__caption">micaonthego</figcaption>
                        </figure>
                        <div className="profile__text">
                            <h3 className="heading-tertiary u-margin-bottom-small">Aspiration</h3>
                            <p>
                                "Be Happy"
                            </p>
                        </div>
                    </div>
                </div>
</div>
    )
}
export default Profile;