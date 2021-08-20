import React from 'react';
import PT from 'prop-types';
import AvatarPlaceholder from '../AvatarPlaceholder';
import styles from './TeamMember.module.css';

const TeamMember = ({ name, avatar }) => (
  <div className={styles.container}>
    {avatar ? (
      <img className={styles.avatar} src={avatar} alt={`${name} avatar`} />
    ) : (
      <AvatarPlaceholder fullName={name} />
    )}
    <span className={styles.name}>{name}</span>
  </div>
);

TeamMember.defaultProps = {
  name: null,
  avatar: null,
};

TeamMember.propTypes = {
  name: PT.string,
  avatar: PT.string,
};

export default TeamMember;
