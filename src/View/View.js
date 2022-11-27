const { Console } = require("@woowacourse/mission-utils");

const View = {
  input(message, callback) {
    Console.readLine(message, callback);
  },

  output(output) {
    Console.print(output);
  },

  close() {
    Console.close();
  },
};

module.exports = View;
