const streams = new Array(40).fill(0).map((item, idx) => ({
  id: idx + 1,
  name: `Frontend dev Stream #${idx}`,
  startDate: new Date().toISOString(),
  endDate: new Date().toISOString(),
  interns: Math.ceil(Math.random() * 10),
  mentor: {
    id: 1,
    name: 'Bulat Murtazin',
    avatar: null,
  },
  lead: {
    id: 2,
    name: 'Igor Iliin',
    avatar: null,
  },
  status: 'Oncoming',
}));

export default streams;
