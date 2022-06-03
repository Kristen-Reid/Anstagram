import React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import LogoutButton from '../auth/LogoutButton';
import logout from '../../store/session';
import { ReactComponent as ProfilePic } from '../../svgImg/profile-pic.svg'



const ProfileButton = () => {
    const dispatch = useDispatch();
    const history = useHistory();


    const user = useSelector(state => state.session.user);
    const [showMenu, setShowMenu] = useState(false);

    const openMenu = () => {
        if (showMenu) return;
        setShowMenu(true);
    };

    useEffect(() => {
        if (!showMenu) return;

        const closeMenu = () => {
            setShowMenu(false);
        };

        document.addEventListener('click', closeMenu);

        return () => document.removeEventListener('click', closeMenu);
    }, [showMenu]);


    return (
        <div className='profileContainer'>
            <div className='profileBtn'>
                <a onClick={openMenu} className='openMenu'>
                    <img
                            className='post-profile-img2'
                                src={user?.image_url}
                        />
                </a>
            </div>
            {showMenu && (
                <div className='dropdownContainer'>
                    <div className='dropdownContent'>
                        <div>
                            <button className='profile-page-btn' onClick={() => history.push(`/users/${user?.id}`)}>Profile Page</button>
                        </div>
                        <div className='logout-btn-container'>
                            <LogoutButton />
                        </div>

                    </div>
                </div>
            )}
        </div>
    )
}


export default ProfileButton;
