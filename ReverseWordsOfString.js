let str = 'Niraj Kumar Pandey';

const reverse = () => {
  console.log(
    'Reversed: ',
    str
      .split(' ')
      .map((item) => item.split('').reverse().join(''))
      .join(' ')
  );
};

reverse();
