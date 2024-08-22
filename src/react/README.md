<!--
 * @Description: insert description
 * @Author: yangrongxin
 * @Date: 2024-08-22 11:23:25
 * @LastEditors: yangrongxin
 * @LastEditTime: 2024-08-22 14:15:18
-->
## 文件说明
tsc --jsx react-jsx test.tsx => 得到 test.react-jsx.js
tsc --jsx react test.tsx => 得到 test.react.js
tsc --jsx preserve react/test.tsx => test.preserve.jsx

tsc --jsx preserve index.ts => index.js

自己编译tsconfig.json 可以通过这个文件指定哪些文件按照什么样的规则进行编译