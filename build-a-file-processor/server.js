// Starter file — add your code here
const fs = require("fs");
const crypto = require("crypto");
fs.writeFileSync('assets/output.txt', 'Hello, freeCodeCamp!')
fs.appendFileSync('assets/output.txt', '\nHello, Duc!')

const exists = fs.existsSync("assets/output.txt");
console.log(exists)

const entries = fs.readdirSync("assets");
console.log(entries);

const buf = Buffer.alloc(8, 0xff);
console.log(buf);

const decoded = Buffer.from("ZnJlZUNvZGVDYW1w", "base64").toString("utf8");
console.log(decoded);

const hash = crypto.createHash("sha256").update("freeCodeCamp!").digest("hex");
console.log(hash);

const random = crypto.randomBytes(16).toString("hex");
console.log(random); // e.g. 4f3a9c1b8e2d7a05

const id = crypto.randomUUID();
console.log(id);

const os = require("os");
// console.log(os.platform());
// console.log(os.arch());
// console.log(os.hostname());
// console.log(os.totalmem());
// console.log(os.freemem());
// console.log(os.uptime());
// console.log(os.cpus().length);

const path = require('path');
const fullPath = path.join(__dirname, "assets", "poem.txt");
// console.log(fullPath);

// console.log(path.basename(fullPath));
// console.log(path.dirname(fullPath));
// console.log(path.extname(fullPath));

console.log(path.join('assets', '..', 'server.js'));
console.log(path.resolve("assets", "..", "server.js"));

const parts = path.parse("/home/user/assets/poem.txt");
console.log(parts);

console.log(process.version);
console.log(process.platform);
console.log(process.env.NODE_ENV);

console.log(process.argv); // [ '/path/to/node', '/path/to/server.js', 'hello', 'world' ]
console.log(process.argv[1]); // 'hello'

process.stdout.write("Hello from stdout\n");
process.stderr.write("Hello from stderr\n");


const readable = fs.createReadStream("assets/poem.txt");
const writable = fs.createWriteStream("assets/stream-output.txt");
readable.pipe(writable);