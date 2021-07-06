const hello = ({ name, phone, address, age }) => {
  const data = {
    name,
    age,
    address,
    phone
  };
  const res = [
    { name: 'Eren' },
    { name: 'Eren' },
    { name: 'Eren' },
    { name: 'Eren' },
    { name: 'Eren' },
    { name: 'Eren' },
    { name: 'Eren' },
    { name: 'Eren' },
    { name: 'Eren' },
    { name: 'Eren' }
  ];
  return [res, data, 'HELLLLLL'];
};

export default hello;
