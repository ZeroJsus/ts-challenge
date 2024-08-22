<!--
 * @Author: yangrongxin
 * @Date: 2022-09-18 10:16:17
 * @LastEditors: yangrongxin
 * @LastEditTime: 2024-08-22 11:29:00
-->

# 记录《typescript 编程》一书中的答案

```json
{
  "compilerOptions": {
    "noImplicitAny": true, // not allow any type
    "strictNullChecks": true, // 检查是否有未声明使用null和undefined的情况
  }
}
```

## 记录学习ts的编译设置
1. 如果当前所在目录没有tsconfig.json的配置文件，使用tsc 命令会自动展示 tsc help 的内容
2. 如果当前目录有tsconfig.json文件，执行后会按照配置文件进行编译