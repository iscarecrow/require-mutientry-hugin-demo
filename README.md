### requireJs常用的打包方案

####1.requieJs单公有包多页面包方案
requireJs构建项目，面临的一个问题是上线过程如何进行打包。官网的demo是打单一包的问题。但实际工作中，我们经常需要面临的问题是一个base.js,多个page.js的业务。此方案如下。
- 使用rjs (见tasks/build_demo1)
- 结果base.js(1个)，page.js(多个) 
- 开发环境使用requireJs (见view/demo1_a.html)
- 生产环境使用almond（减少base包的大小）(PS:见view/demo1_a.html)

##### 打包结果如下

```
base.js
----------------
almond.js
jquery.js
base.js

main-a.js
----------------
main.js
main-a.js
page/a.js

main-b.js
----------------
main.js
main-b.js
page/b.js
```

##### 运行命令
- npm install
- gulp demo1


##### 其他打包方案
- 一个base包，一个app包（业务代码）。 如果backbone+requireJs做单页应用可以使用这种
