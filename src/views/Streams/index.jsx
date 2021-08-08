import React, { useState } from 'react';
import mockStreams from '../../mock/streams';
import Button from '../../components/Button';
import StreamsTabs from '../../components/StreamsTabs';
import Table from '../../components/Table/Table';
import AddStream from '../../modal/AddStream';
import { streamsTableCols } from './constants';
import styles from './Streams.module.css';

const Streams = () => {
  const [showAddStream, setShowAddStream] = useState(false);
  return (
    <>
      <header className={styles.header}>
        <h1 className={styles.title}>Internship Streams</h1>
        <Button
          className={styles.addStreamButton}
          onClick={() => {
            setShowAddStream(true);
          }}
        >
          + Add Stream
        </Button>
      </header>
      <nav className={styles.nav}>
        <StreamsTabs />
      </nav>
      <div className={styles.content}>
        <Table
          columns={streamsTableCols}
          dataSource={mockStreams}
          hasPagination
        />
      </div>
      <AddStream
        visible={showAddStream}
        onClose={() => {
          setShowAddStream(false);
        }}
      />
    </>
  );
};

export default Streams;
