const compress_images = require("compress-images")


// Compress, keep quality
compress_images(`images-temp/**`, `public/images/`, { compress_force: false, statistic: true, autoupdate: true }, false,
    { jpg: { engine: "mozjpeg", command: ["-quality", "60"] } }, //https://github.com/mozilla/mozjpeg/blob/master/usage.txt
    { png: { engine: "pngquant", command: ["--quality=20-50", "-o"] } },
    { svg: { engine: "svgo", command: "--multipass" } },
    { gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } },
    function (error, completed, statistic) {
        console.log("------Compress / Optimize Img-------");
        console.log(error);
        console.log(completed);
        console.log(statistic);
        console.log("-------------");
    }
);