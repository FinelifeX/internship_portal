import React, { useMemo } from 'react';
import PT from 'prop-types';
import styles from './AvatarPlaceholder.module.css';

const AvatarPlaceholder = ({ fullName, size }) => {
  const letters = useMemo(() => {
    if (!fullName) return null;

    return fullName
      .split(' ')
      .slice(0, 2)
      .reduce((prev, curr) => prev + curr[0], '');
  }, [fullName]);

  return (
    <div className={styles.circle} style={{ width: size, height: size }}>
      <span data-testid="text" className={styles.letters}>
        {letters}
      </span>
    </div>
  );
};

AvatarPlaceholder.defaultProps = {
  fullName: null,
  size: '22px',
};

AvatarPlaceholder.propTypes = {
  fullName: PT.string,
  size: PT.oneOfType([PT.string, PT.number]),
};

export default AvatarPlaceholder;
