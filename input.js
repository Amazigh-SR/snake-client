const {
  MOVE_UP_KEY,
  MOVE_DOWN_KEY,
  MOVE_LEFT_KEY,
  MOVE_RIGHT_KEY,
  MAPPING,
} = require("./constants");
let connection;

const handleUserInput = (key) => {
  //Where was this taken from? i.e. link for all special characters?
  // I need to stringify this I think  - will deal with it later
  // let instruction = MAPPING[key];
  // connection.write(instruction);

  if (key === "\u0003") {
    process.exit();
  } else if (key === MOVE_UP_KEY) {
    connection.write("Move: up");
  } else if (key === MOVE_LEFT_KEY) {
    connection.write("Move: left");
  } else if (key === MOVE_DOWN_KEY) {
    connection.write("Move: down");
  } else if (key === MOVE_RIGHT_KEY) {
    connection.write("Move: right");
  } else if (key === "c") {
    connection.write("Say: SPEED!");
  } else {
    process.stdout.write(key);
  }
};

const setupInput = function (conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding("utf8");
  stdin.resume();
  stdin.on("data", handleUserInput);
  return stdin;
};

module.exports = { setupInput };
