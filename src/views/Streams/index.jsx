import React from 'react';
import mockStreams from '../../mock/streams';
import Button from '../../components/Button';
import StreamsTabs from '../../components/StreamsTabs';
import Table from '../../components/Table/Table';
import { streamsTableCols } from './constants';
import styles from './Streams.module.css';

const Streams = () => (
  <>
    <header className={styles.header}>
      <h1 className={styles.title}>Internship Streams</h1>
      <Button className={styles.addStreamButton}>+ Add Stream</Button>
    </header>
    <nav className={styles.nav}>
      <StreamsTabs />
    </nav>
    <div className={styles.content}>
      <Table columns={streamsTableCols} dataSource={mockStreams} />
    </div>
  </>
);

export default Streams;
