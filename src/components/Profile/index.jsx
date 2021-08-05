import React, { useState } from 'react';
import classNames from 'classnames';
import avatar from '../../assets/images/avatar.png';
import styles from './Profile.module.css';
import Button from '../Button';

const userName = 'Jon Snow';

const Profile = () => {
  const [showPopup, setShowPopup] = useState(false);
  const handleClick = () => {
    setShowPopup((shown) => !shown);
  };

  return (
    <div className={styles.container}>
      <Button className={styles.profile} variant="link" onClick={handleClick}>
        <>
          <img className={styles.avatar} src={avatar} alt="Avatar" />
          <span className={styles.userName}>{userName}</span>
        </>
      </Button>
      {showPopup && (
        <div className={styles.profileMenu}>
          <ul className={styles.profileMenuItems}>
            <li className={styles.profileMenuItem}>
              <Button className={styles.profileMenuButton} variant="link">
                View Profile
              </Button>
            </li>
            <li className={styles.profileMenuItem}>
              <Button
                className={classNames(
                  styles.profileMenuButton,
                  styles.profileMenuButtonDelete,
                )}
                variant="link"
              >
                Logout
              </Button>
            </li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default Profile;
