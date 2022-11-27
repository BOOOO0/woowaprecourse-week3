const Constant = require("./Constant");

const ExceptionHandler = {
  validateBudgetRange(budget) {
    if (parseInt(budget) < 1000) throw new Error("[ERROR] 최소 천원 이상 입력해주세요");
  },

  winningNumberLength(winningNumber) {
    if (winningNumber.split(Constant.COMMA).length !== 6) throw new Error("[ERROR] 숫자를 6개 입력해주세요.");
  },

  winningNumberRedundancy(winningNumber) {
    const checkSet = new Set(winningNumber.split(Constant.COMMA));
    if ([...checkSet].length < 6) throw new Error("[ERROR] 당첨 번호를 중복없이 입력해주세요.");
  },

  bonusNumberRange(bonusNumber) {
    if (bonusNumber < 1 && bonusNumber > 45) {
      throw new Error("[ERROR] 1부터 45까지의 숫자를 입력해주세요.");
    }
  },

  bonusNumberCannotBeWinningNumber(winningNumbers, bonusNumber) {
    console.log(winningNumbers, bonusNumber);
    if (winningNumbers.includes(bonusNumber)) {
      throw new Error("[ERROR] 보너스 번호는 당첨 번호와 같을 수 없습니다.");
    }
  },

  isNotaNumber(input) {
    if (isNaN(input)) {
      throw new Error("[ERROR] 숫자를 입력해 주세요.");
    }
  },
};

module.exports = ExceptionHandler;
