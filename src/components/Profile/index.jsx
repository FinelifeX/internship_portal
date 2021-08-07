import React, { useCallback, useState } from 'react';
import avatar from '../../assets/images/avatar.png';
import ContextMenu from '../ContextMenu';
import Button from '../Button';
import styles from './Profile.module.css';

const userName = 'Jon Snow';
const menuOptions = [
  {
    key: 'profile',
    title: 'View Profile',
    action: () => {
      alert('Under development!');
    },
  },
  {
    key: 'logout',
    title: 'Logout',
    action: () => {
      alert('Under development!');
    },
    className: styles.logout,
  },
];

const Profile = () => {
  const [showPopup, setShowPopup] = useState(false);

  const onTriggerClick = useCallback(() => {
    setShowPopup((shown) => !shown);
  }, []);

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
      <ContextMenu
        visible={showPopup}
        options={menuOptions}
        onClose={onTriggerClick}
      />
    </div>
  );
};

export default Profile;
