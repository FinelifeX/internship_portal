import PT from 'prop-types';

// eslint-disable-next-line import/prefer-default-export
export const columnItem = PT.shape({
  key: PT.string,
  title: PT.oneOfType([PT.string, PT.element]),
  dataIndex: PT.string,
  width: PT.oneOfType([PT.string, PT.number]),
  render: PT.func,
  filter: PT.func,
  sorter: PT.func,
});
