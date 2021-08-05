import PT from 'prop-types';

export const columnItem = PT.shape({
  key: PT.string,
  title: PT.oneOfType([PT.string, PT.element]),
  dataIndex: PT.string,
  render: PT.func,
  filter: PT.func,
  sorter: PT.func,
});
