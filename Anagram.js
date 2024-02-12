const str1 = 'indiafn';
const str2 = 'dianinf';

const isAnagram = () => {
  let obj1 = {};
  let obj2 = {};
  let isAnagram = false;

  str1
    .split('')
    .map((item) => (obj1[item] ? (obj1[item] += 1) : (obj1[item] = 1)));
  str2
    .split('')
    .map((item) => (obj2[item] ? (obj2[item] += 1) : (obj2[item] = 1)));

  if (Object.keys(obj1).length === Object.keys(obj2).length) {
    Object.keys(obj1).map((item) => {
      if (obj1[item] === obj2[item]) {
        isAnagram = true;
      } else {
        console.log('Ohhoo !! Not Anagrams');
        isAnagram = false;
        return;
      }
    });
  } else console.log('Ohhoo !! Not Anagrams');

  if (isAnagram) console.log('Whoaa !! They are Anagrams');
};

isAnagram();
