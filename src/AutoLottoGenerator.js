const { Random } = require("@woowacourse/mission-utils");

const AutoLotto = {
  makeRandomLottoArray(count) {
    const randomLottoArray = [];

    while (randomLottoArray.length < count) {
      randomLottoArray.push(Random.pickUniqueNumbersInRange(1, 45, 6).sort((a, b) => a - b));
    }

    return randomLottoArray;
  },
};

module.exports = AutoLotto;
