const values = [
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '10',
  'J',
  'Q',
  'K',
  'A',
  '2',
];

exports.groupCards = (cards) => {
  const groups = {};

  for (const card of cards) {
    if (!groups[card.value]) {
      groups[card.value] = [];
    }

    groups[card.value].push(card);
  }

  return groups;
};

exports.isValueHigher = (value1, value2) => {
  return values.indexOf(value1) > values.indexOf(value2);
};
