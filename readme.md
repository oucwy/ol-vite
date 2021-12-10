# OpenLayers + Vite

实际执行的步骤：

从 https://github.com/openlayers/ol-vite下载压缩包到本地。

建立 github.com/oucwy/ol-vite.git，并克隆到本地，生成 ol-vite 目录。

cd ol-vite

cnpm install

npm start

可显示地图。

==============原 readme===================
This example demonstrates how the `ol` package can be used with [Vite](https://vitejs.dev/).

To get started, run the following (requires Node 12+):

    npx create-ol-app my-app --template vite （这一步始终出错）

Then change into your new `my-app` directory and start a development server (available at http://localhost:3000):

    cd my-app
    npm start

To generate a build ready for production:

    npm run build

Then deploy the contents of the `dist` directory to your server. You can also run `npm run serve` to serve the results of the `dist` directory for preview.
