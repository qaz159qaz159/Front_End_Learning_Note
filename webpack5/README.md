# This is my Webpack learning note
名詞解釋:
1. npm:一種類似於app store的東西，創作者會將工具或插件放上去，需要使用時怎可以下載使用

概念:
1. webpack會幫我們在修改檔案的同時刷新頁面
2. 在檔名上加上[hash]的好處是我們只要修改檔案(bug或修復)，使用者能直接抓到最新檔案
3. 使用html-webpack-plugin時，他只會幫我們將[hack]的內容放入空白的html，要讓他抓到我們寫的東西則需要設定template
4. 使用mini-css-extract-plugin時，他會幫我們在dist中創建一個main.css(預設，可用filename更改)，並引入在main.[hash].bundle.js中
5. 使用source-map可以讓我們瀏覽器的source檢視時顯示源碼

使用到的功能:
1. webpack
2. css-loader
3. style-loader
4. HtmlWebpackPlugin
5. MiniCssExtractPlugin:在dist中產生(複製)獨立的css
6. babel:將比較新的語法編譯成所有瀏覽器都看得懂的語法
7. Asset Modules:防止插入gif或圖片時報錯