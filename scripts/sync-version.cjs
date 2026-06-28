const fs = require("fs");
const path = require("path");

const rawTag = process.argv[2];
if (!rawTag) {
  console.error("Please provide a tag argument");
  process.exit(1);
}
const version = rawTag.startsWith("v") ? rawTag.slice(1) : rawTag;
console.log(`Updating version to ${version}`);

const filesToUpdate = [
  {
    path: path.join(__dirname, "../src-tauri/tauri.conf.json"),
    regex: /"version":\s*".*"/,
    replacement: `"version": "${version}"`,
  },
  {
    path: path.join(__dirname, "../src-tauri/Cargo.toml"),
    regex: /^(version = ".*")$/m,
    replacement: `version = "${version}"`,
  },
];

filesToUpdate.forEach((file) => {
  if (fs.existsSync(file.path)) {
    let content = fs.readFileSync(file.path, "utf8");
    const newContent = content.replace(file.regex, file.replacement);
    if (content !== newContent) {
      fs.writeFileSync(file.path, newContent, "utf8");
      console.log(`Updated ${file.path} to version ${version}`);
    } else {
      console.log(`${file.path} is already at version ${version}`);
    }
  } else {
    console.warn(`File not found: ${file.path}`);
  }
});
