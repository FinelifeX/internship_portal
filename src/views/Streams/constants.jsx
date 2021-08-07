/* eslint-disable import/prefer-default-export,react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { monthNumber2String } from '../../constants/monthNumber2String';
import { millis2Days } from '../../utils/dateConverters';
import { STREAMS_ROUTES_BASE } from '../../routes/streams';
import TeamMember from '../../components/TeamMember';
import StreamActionsButton from '../../components/StreamActionsButton';

export const streamsTableCols = [
  {
    key: 'name',
    dataIndex: 'name',
    title: 'Stream Name',
    render: (value, record) => (
      <Link to={`${STREAMS_ROUTES_BASE}/${record.id}`}>{value}</Link>
    ),
  },
  {
    key: 'startDate',
    dataIndex: 'startDate',
    title: 'Start Date',
    render: (value) => {
      const date = new Date(value);

      return `${date.getDate()} ${
        monthNumber2String[date.getMonth()]
      } ${date.getFullYear()}`;
    },
  },
  {
    key: 'duration',
    title: 'Duration',
    render: (value, record) =>
      millis2Days(new Date(record.endDate) - new Date(record.startDate)),
  },
  {
    key: 'interns',
    dataIndex: 'interns',
    title: 'Interns',
  },
  {
    key: 'mentor',
    dataIndex: 'mentor',
    title: 'Mentor',
    render: ({ name, avatar }) => <TeamMember name={name} avatar={avatar} />,
  },
  {
    key: 'lead',
    dataIndex: 'lead',
    title: 'Lead',
    render: ({ name, avatar }) => <TeamMember name={name} avatar={avatar} />,
  },
  {
    key: 'status',
    dataIndex: 'status',
    title: 'Status',
  },
  {
    key: 'actions',
    title: '',
    render: () => <StreamActionsButton />,
  },
];
