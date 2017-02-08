const common = require('./common');

exports.play = (state) => {
  const groupedCards = common.groupCards(state.hand);

  if (state.lastPlayedSet.length === 0) {
    return groupedCards[Object.keys(groupedCards)[0]];
  }

  for (const value in groupedCards) {
    if (
      groupedCards[value].length === state.lastPlayedSet.length &&
      common.isValueHigher(value, state.lastPlayedSet[0].value)
    ) {
      return groupedCards[value];
    }
  }

  return [];
};
