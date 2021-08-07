import React, { useEffect } from 'react';
import PT from 'prop-types';
import classNames from 'classnames';
import Button from '../Button';
import styles from './ContextMenu.module.css';

const ContextMenu = ({ options, className, visible, onClose }) => {
  useEffect(() => {
    if (visible) {
      document.addEventListener('click', onClose);
    }

    return () => {
      document.removeEventListener('click', onClose);
    };
  }, [onClose, visible]);

  if (!visible) return null;

  return (
    <div className={classNames(styles.menu, className)}>
      <ul className={styles.menuItems}>
        {options.map(({ key, title, action, className: optionClassName }) => (
          <li key={key} className={styles.menuItem}>
            <Button
              className={classNames(styles.menuButton, optionClassName)}
              variant="link"
              onClick={action}
            >
              {title}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

ContextMenu.defaultProps = {
  className: '',
};

ContextMenu.propTypes = {
  options: PT.arrayOf(
    PT.shape({
      key: PT.string,
      title: PT.node,
      action: PT.func,
      className: PT.string,
    }),
  ).isRequired,
  className: PT.string,
  visible: PT.bool.isRequired,
  onClose: PT.func.isRequired,
};

export default ContextMenu;
