const compress_images = require("compress-images")

// Compress, create placeholder with low quality
compress_images(`public/images/**`, `public/images/compressed/`, { compress_force: false, statistic: true, autoupdate: true }, false,
    { jpg: { engine: "mozjpeg", command: ["-quality", "0"] } }, //https://github.com/mozilla/mozjpeg/blob/master/usage.txt
    { png: { engine: "pngquant", command: ["--quality=0-10", "-o"] } },
    { svg: { engine: "svgo", command: "--multipass" } },
    { gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } },
    function (error, completed, statistic) {
        console.log("------Create Minified Placeholder for loading placeholder -------");
        console.log(error);
        console.log(completed);
        console.log(statistic);
        console.log("-------------");
    }
);
