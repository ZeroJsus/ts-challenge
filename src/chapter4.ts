/*
 * @Author: yangrongxin
 * @Date: 2022-09-18 10:17:31
 * @LastEditors: yangrongxin
 * @LastEditTime: 2022-09-18 11:49:07
 */

/**
 * 4. 更新call函数 让它只支持第二个参数为字符串的函数。如果传入除此之外的函数，在编译时报错
 * 原函数
 * function call<T extends unknown[], R> (
 *   f: (...args: T) => R,
 *   ...args: T
 * ): R {
 *   return f(...args)
 * }
 */

function fill (length: number, value: string): string[] {
  return Array.from({ length }, () => value)
}

function call<T extends [unknown, string, ...unknown[]], R> (
  f: (...args: T) => R,
  ...args: T
): R {
  return f(...args)
}

console.log('call', call(fill, 10, 'a'))

// 测试用例
// const a = call(fill, 10, 'a')
// const b = call(fill, 10)
// const c = call(fill, 10, 'a', 'z')

/**
 * 5. 实现一个类型安全的小型断言库is
 * // 字符串与字符串比较
 * // 布尔值与布尔值比较
 * // 数字与数字比较
 * // 比较两个不同类型的值 应该抛出编译时错误
 * // （有难度）可以传入任意个参数
 */

function is<T> (value: T, ...compareValue: [T, ...T[]]): boolean {
  return compareValue.every(_ => _ === value)
}

// 测试用例
// is('string', 'otherString')
// is(true, false)
// is(42, 42)
// is(10, 'foo')
// is([1], [1, 2], [1, 2, 3])

console.log('is', is('a', 'abc'))
