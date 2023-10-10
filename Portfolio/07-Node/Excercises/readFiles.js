const fs = require('fs');

fs.readFile("file1.txt", "utf-8", (err, fd) => {
	if (err) {
		console.log("Error: "+err);
	} else {
		console.log("The file says: \n" + fd);
	}
});