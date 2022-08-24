/**
 * @param {string} contents
 * @returns
 */
module.exports.readVersion = function (contents) {
  const lines = contents.split("\n");
  const lineIndex =
    lines.findIndex((line) => line.match(/^name\s?=\s?["']typino["']$/)) + 1;
  const quotedVersion = lines[lineIndex].split(/\s?=\s?/)[1];
  return quotedVersion.substring(1, quotedVersion.length - 1);
};

module.exports.writeVersion = function (contents, version) {
  const lines = contents.split("\n");
  const lineIndex = // Line under `name = "typino"`
    lines.findIndex((line) => line.match(/^name\s?=\s?["']typino["']$/)) + 1;
  lines[lineIndex] = `version = "${version}"`;
  return lines.join("\n");
};
