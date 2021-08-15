/* eslint-disable import/prefer-default-export,react/prop-types */
import React from 'react';
import { Link } from 'react-router-dom';
import { monthNumber2String } from '../../constants/monthNumber2String';
import StreamStatus from '../../constants/streamStatus';
import { STREAMS_ROUTES_BASE } from '../../routes/streams';
import { millis2Days } from '../../utils/dateConverters';
import TeamMember from '../../components/TeamMember';
import StreamActionsButton from '../../components/StreamActionsButton';

export const streamsTableCols = (streams) => [
  {
    key: 'name',
    dataIndex: 'name',
    title: 'Stream Name',
    width: 290,
    render: (value, record) => (
      <Link to={`${STREAMS_ROUTES_BASE}/${record.id}`}>{value}</Link>
    ),
  },
  {
    key: 'startDate',
    dataIndex: 'startDate',
    title: 'Start Date',
    width: 120,
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
    width: 120,
    render: (value, record) =>
      millis2Days(new Date(record.endDate) - new Date(record.startDate)),
  },
  {
    key: 'interns',
    dataIndex: 'interns',
    title: 'Interns',
    width: 100,
  },
  {
    key: 'mentor',
    dataIndex: 'mentor',
    title: 'Mentor',
    width: 200,
    filters: (() => {
      const mentors = streams.map((record) => record.mentor);
      const mentorIds = mentors.map((mentor) => mentor.id);
      const uniqueMentorIds = Array.from(new Set(mentorIds));

      return uniqueMentorIds.map((id) =>
        mentors.find((mentor) => mentor.id === id),
      );
    })(),
    onFilter: (filterValue, record) => filterValue.includes(record.mentor.id),
    render: ({ name, avatar }) => <TeamMember name={name} avatar={avatar} />,
  },
  {
    key: 'lead',
    dataIndex: 'lead',
    title: 'Lead',
    width: 200,
    filters: (() => {
      const leads = streams.map((record) => record.lead);
      const leadIds = leads.map((lead) => lead.id);
      const uniqueLeadIds = Array.from(new Set(leadIds));

      return uniqueLeadIds.map((id) =>
        leads.find((mentor) => mentor.id === id),
      );
    })(),
    onFilter: (filterValue, record) => filterValue.includes(record.lead.id),
    render: ({ name, avatar }) => <TeamMember name={name} avatar={avatar} />,
  },
  {
    key: 'status',
    dataIndex: 'status',
    title: 'Status',
    width: 120,
    filters: Object.keys(StreamStatus).map((key) => StreamStatus[key]),
    onFilter: (filterValue, record) => filterValue.includes(record.status),
  },
  {
    key: 'actions',
    title: '',
    width: 54,
    render: () => <StreamActionsButton />,
  },
];
