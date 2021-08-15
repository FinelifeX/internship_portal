import PT from 'prop-types';

// eslint-disable-next-line import/prefer-default-export
export const columnItem = PT.shape({
  key: PT.string,
  title: PT.node,
  dataIndex: PT.string,
  width: PT.oneOfType([PT.string, PT.number]),
  render: PT.func,
  filters: PT.arrayOf(
    PT.oneOfType([
      PT.shape({
        id: PT.oneOfType([PT.string, PT.number]),
        name: PT.string,
      }),
      PT.string,
    ]),
  ),
  onFilter: PT.func,
  sorter: PT.func,
});
