const fs = require('fs').promises;
const path = require('path');

async function convertImages(inputPath, outputPath) {
    const items = await fs.readdir(inputPath);

    for (const item of items) {
        const itemPath = path.join(inputPath, item);
        const outputItemPath = path.join(outputPath, item);

        const isDirectory = (await fs.stat(itemPath)).isDirectory();

        if (isDirectory) {
            await convertImages(itemPath, outputItemPath);
        } else if (item.toLowerCase().endsWith('.jpg') || item.toLowerCase().endsWith('.jpeg') || item.toLowerCase().endsWith('.png')) {
            const outputFileName = path.parse(item).name + '.webp';
            const outputFilePath = path.join(outputPath, outputFileName);

            const { default: imagemin } = await import('imagemin');
            const { default: imageminWebp } = await import('imagemin-webp');

            await imagemin([itemPath], {
                destination: outputPath,
                plugins: [imageminWebp({ quality: 75 })]
            });

            console.log(`${itemPath} converted to WebP: ${outputFilePath}`);
        }
    }
}

const inputPath = path.join(__dirname, 'src/images'); // Змініть шлях до папки з вхідними зображеннями
const outputPath = path.join(__dirname, 'src/images'); // Змініть шлях до вихідної папки для зображень WebP

convertImages(inputPath, outputPath);