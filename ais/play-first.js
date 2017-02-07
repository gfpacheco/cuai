const common = require('./common');

exports.play = (state) => {
  if (state.lastPlayedSet.length === 0) {
    return [state.hand[0]];
  }

  const groupedCards = common.groupCards(state.hand);
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
