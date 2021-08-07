import React, { useCallback, useState } from 'react';
import Button from '../Button';
import ContextMenu from '../ContextMenu';
import styles from './StreamActionsButton.module.css';

const menuOptions = [
  { key: 'details', title: 'Open Stream details' },
  { key: 'studyPlan', title: 'Open Study plan' },
  { key: 'pause', title: 'Pause Stream' },
  { key: 'delete', title: 'Delete Stream', className: styles.delete },
];

const StreamActionsButton = () => {
  const [showMenu, setShowMenu] = useState(false);

  const onTriggerClick = useCallback(() => {
    setShowMenu((shown) => !shown);
  }, []);

  return (
    <div className={styles.container}>
      <Button
        variant="link"
        className={styles.trigger}
        onClick={onTriggerClick}
      >
        &#8942;
      </Button>
      <ContextMenu
        visible={showMenu}
        options={menuOptions}
        onClose={onTriggerClick}
        className={styles.menu}
      />
    </div>
  );
};

export default StreamActionsButton;
