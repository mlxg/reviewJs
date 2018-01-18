回到上一层目录
cd ..
回到根目录
cd /
mkdir（新建文件夹）
mkdir css html js

mkdir -p myfirends/{html,css,js}
/*
生成的项目结构是这样的
---------myfirends
|-----css
|-----js
|-----html*/

touch（新建文件）

 touch index.html
touch index.css index.js

rm（删除）

  rm filename(删除文件)
rm -d del-folder(删除文件夹)
rm -r del-folder（删除嵌套的文件夹以及文件）

cat（查看文本文件内容）

  cat filename

mkdir css && cd css && touch index.html

执行的顺序是这样的：
新建文件夹css,然后cd进入css文件夹，最后创建一个index.html（&&即顺序执行命令）
