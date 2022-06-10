const fsPromises = require("fs").promises;
const path = require("path");

let writeData = "Nice to meet you!";

const fileOps = async () => {
  try {
    const data = await fsPromises.readFile(path.join(__dirname, "files", "starter.txt"), "utf-8");
    console.log(data);

    await fsPromises.unlink(path.join(__dirname, "files", "starter.txt"));
    await fsPromises.writeFile(path.join(__dirname, "files", "promiseWrite.txt"), writeData);
    await fsPromises.appendFile(path.join(__dirname, "files", "reply.txt"), "\n\nTesting..");
    await fsPromises.rename(path.join(__dirname, "files", "reply.txt"), path.join(__dirname, "files", "newReply.txt"));
    const newData = await fsPromises.readFile(path.join(__dirname, "files", "newReply.txt"), "utf-8");
    console.log(newData);
  } catch (err) {
    console.log(err);
  }
};

fileOps();

console.log("Hello..");

/* fs.writeFile(path.join(__dirname, "files", "reply.txt"), writeData, (err) => {
  if (err) throw err;
  console.log("Write complete.");

  fs.appendFile(path.join(__dirname, "files", "reply.txt"), "\n\nTesting..", (err) => {
    if (err) throw err;
    console.log("Append complete.");

    fs.rename(path.join(__dirname, "files", "reply.txt"), path.join(__dirname, "files", "newReply.txt"), (err) => {
      if (err) throw err;
      console.log("Rename complete.");
    });
  });
});
 */
// exit on uncaught errors
process.on("uncaughtExecption", err => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1);
});
