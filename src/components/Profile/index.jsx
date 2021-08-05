import React, { useCallback, useEffect, useState } from 'react';
import classNames from 'classnames';
import avatar from '../../assets/images/avatar.png';
import styles from './Profile.module.css';
import Button from '../Button';

const userName = 'Jon Snow';

const Profile = () => {
  const [showPopup, setShowPopup] = useState(false);

  const onTriggerClick = useCallback((e) => {
    e.stopPropagation();
    setShowPopup((shown) => !shown);
  }, []);

  useEffect(() => {
    if (showPopup) {
      document.addEventListener('click', onTriggerClick);
    }

    return () => {
      document.removeEventListener('click', onTriggerClick);
    };
  }, [onTriggerClick, showPopup]);

  return (
    <div className={styles.container}>
      <Button
        className={styles.profile}
        variant="link"
        onClick={onTriggerClick}
      >
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
