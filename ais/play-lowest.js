const common = require('./common');

exports.play = (state) => {
  const groupedCards = common.groupCards(state.hand);

  if (state.lastPlayedSet.length === 0) {
    const values = Object.keys(groupedCards);
    let lowestValue = values[0];

    for (const value of values) {
      if (common.isValueHigher(lowestValue, value)) {
        lowestValue = value;
      }
    }

    return groupedCards[lowestValue];
  }

  let lowestGroup = [];
  for (const value in groupedCards) {
    if (
      groupedCards[value].length === state.lastPlayedSet.length &&
      common.isValueHigher(value, state.lastPlayedSet[0].value) &&
      (lowestGroup.length === 0 || common.isValueHigher(lowestGroup[0].value, value))
    ) {
      lowestGroup = groupedCards[value];
    }
  }

  return lowestGroup;
};
