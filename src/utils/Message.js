const Message = {
  ASK_BUDGET: "구입금액을 입력해 주세요.\n",

  ASK_WINNING_NUMBER: "\n당첨 번호를 입력해 주세요.\n",

  ASK_BONUS_NUMBER: "\n보너스 번호를 입력해 주세요.\n",

  WINNING_STATS: "\n당첨통계\n---",

  returnHowManyLotto(count) {
    return `\n${count}개를 구매했습니다.`;
  },

  returnFifthPrizeResult(count) {
    return `3개 일치 (5,000원) - ${count}개`;
  },

  returnFourthPrizeResult(count) {
    return `4개 일치 (50,000원) - ${count}개`;
  },

  returnThirdPrizeResult(count) {
    return `5개 일치 (1,500,000원) - ${count}개`;
  },

  returnSecondPrizeResult(count) {
    return `5개 일치, 보너스 볼 일치 (30,000,000원) - ${count}개`;
  },

  returnFirstPrizeResult(count) {
    return `6개 일치 (2,000,000,000원) - ${count}개`;
  },

  returnYield(rateOfReturn) {
    return `총 수익률은 ${rateOfReturn}%입니다.`;
  },
};

module.exports = Message;
