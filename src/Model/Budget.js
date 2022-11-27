const { THOUSAND } = require("../utils/Constant");

class Budget {
  constructor(count) {
    this.count = count;
    this.budget = 0;
  }

  divideBudget(budget) {
    this.count = Math.floor(parseInt(budget) / THOUSAND);
  }

  returnCount() {
    return this.count;
  }
}

module.exports = Budget;
