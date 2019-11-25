编辑目录   ./app
输出目录   ./pack

安装环境   ./soft/node.exe

安装中间件    根目录下运行npm install

启动编辑模式  根目录下运行 node ./bin/mkbag start    根据提示输入想要编辑的包名，如必发   输入bf

单独快速启动：  node ./bin/mkbag dev 项目名

修改app包内任意文件,实时显示到浏览器

启动打包模式   根目录下运行 node ./bin/mkbag pack 项目名    在根目录生成pack文件夹,该文件夹为完全打包输出

如：  node ./bin/mkbag pack bf


