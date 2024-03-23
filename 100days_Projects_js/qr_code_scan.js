import qr from "qr-image";
import inquirer from "inquirer";
import fs from "fs";

inquirer
    .prompt([
        {
            message: "put you URL here :",
            name: "URL",
        },
    ])
    .then((answers) => {
        const url = answers.URL;
        var qr_svg = qr.image(url);
        qr_svg.pipe(fs.createWriteStream("qr_img.png"))

        fs.writeFile('URL1.txt', url, (err) => {
            if (err) throw err;
            console.log('The file has been saved!');
        });
    })
    .catch((error) => {
        console.error(error);

    });
