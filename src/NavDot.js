import React from 'react'

function NavDot() {
    return (
        <body>
            <div class="navigation">
                <input type="checkbox" class="navigation__checkbox" id="navi-toggle"></input>

                <label for="navi-toggle" class="navigation__button">
                    <span class="navigation__icon">&nbsp;</span>
                </label>

                <div class="navigation__background">&nbsp;</div>

                <nav class="navigation__nav">
                    <ul class="navigation__list">
                        <li class="navigation__item"><a href="#" class="navigation__link">About Bullet</a></li>
                        <li class="navigation__item"><a href="#" class="navigation__link">Bullet Home</a></li>
                        <li class="navigation__item"><a href="#" class="navigation__link">Calendar View</a></li>
                        <li class="navigation__item"><a href="#" class="navigation__link">Timeline View</a></li>
                        <li class="navigation__item"><a href="#" class="navigation__link">Signout</a></li>
                    </ul>
                </nav>
            </div>
        </body>
    )
}

export default NavDot;
