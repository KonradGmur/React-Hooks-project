const data = [
  {
    id: 1
  },
  {
    id: 2
  },
  {
    id: 3
  },
  {
    id: 4
  }
];

export const getData = () => {
  return data;
};

export const getSingle = id => {
  return data.find(item => item.id === id);
};
