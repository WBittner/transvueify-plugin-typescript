let ts = require("typescript");

module.exports = function (compiledVueFile, filename) {
  if (!compiledVueFile.script || !compiledVueFile.script.attrs || compiledVueFile.script.attrs.lang !== "ts") {
    return compiledVueFile;
  }

  let options = ts.convertCompilerOptionsFromJson(JSON.parse(require("find-config").read("tsconfig.json", { cwd: process.cwd() }))["compilerOptions"],
    process.cwd()).options;
  console.log("Transpiling " + filename + " using " + JSON.stringify(options));
  const typeScriptOutput = ts.transpileModule(compiledVueFile.script.content, { compilerOptions: options });
  compiledVueFile.script.content = typeScriptOutput.outputText;
  return compiledVueFile;
};