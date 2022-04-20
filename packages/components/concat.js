/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/restrict-template-expressions */
/* eslint-disable @typescript-eslint/restrict-plus-operands */
/* eslint-disable @typescript-eslint/no-unsafe-argument */
const fs = require("fs");
const path = require("path");

function findFiles(rootDir, excludes) {
    const files = [];
    function getFiles(folder) {
        const items = fs.readdirSync(folder, { withFileTypes: true });
        items.forEach((item) => {
            if (!excludes.includes(item.name)) {
                if (!item.isDirectory()) {
                    if (path.extname(item.name) === ".css") {
                        files.push(path.join(folder, item.name));
                    }
                } else {
                    getFiles(path.join(folder, item.name));
                }
            }
        });
    }
    getFiles(rootDir);
    return files;
}

function concatFiles(options) {
    if (options.src) {
        const files = findFiles(options.src, options.excludes || []);
        let data = "";
        files.forEach((file) => {
            data += fs.readFileSync(file) + "\n";
        });
        let directory = options.dest;
        if (options.dest !== "" && !fs.existsSync(directory)) {
            directory = fs.mkdirSync(options.dest, { recursive: true });
        }
        const destPath = path.join(directory, options.name);
        fs.writeFileSync(destPath, data);
    } else {
        console.log(
            "\x1b[31m%s\x1b[0m",
            "please enter in the valid format as per the readme."
        );
    }
}

export default concatFiles;
