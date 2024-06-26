const fs = requires('fs');

const input = fs
  .readFileSync(filePath)
  .toString()
  .split(" ")
  .map(Number)
  .reduce((a, b) => a + b, 0);