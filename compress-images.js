const compress_images = require("compress-images")
const INPUT = "src/img/**/*.{jpg,JPG,jpeg,JPEG,png,svg,gif}";


const supported_input_folder = ["public/images"]


supported_input_folder.forEach(dir => {
    compress_images(`${dir}/**`, `${dir}/tiny/`, { compress_force: false, statistic: true, autoupdate: true }, false,
        { jpg: { engine: "mozjpeg", command: ["-quality", "60"] } },
        { png: { engine: "pngquant", command: ["--quality=20-50", "-o"] } },
        { svg: { engine: "svgo", command: "--multipass" } },
        { gif: { engine: "gifsicle", command: ["--colors", "64", "--use-col=web"] } },
        function (error, completed, statistic) {
            console.log("-------------");
            console.log(error);
            console.log(completed);
            console.log(statistic);
            console.log("-------------");
        }
    );
});
