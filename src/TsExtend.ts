/* 
 * 来源文章: https://juejin.cn/post/7095547569777934367
 * 
 */

// 泛型
function identity <T>(value: T): T {
  return value
}

// 可选参数实现
type User = {
  name: string
  age: number
  address: string
}

type MyPartial<User> = {
  [P in keyof User]?: User[P]
}

type UserPartial = MyPartial<User>;

// 函数重载签名
function greet(person: string): string;
function greet(person: string[]): string[];

// 签名实现
function greet(person: unknown): unknown {
  if ( typeof person === 'string' ) {
    return `Hello, ${person}！`;
  } else if ( Array.isArray(person) ) {
    return person.map((name) => `Hello, ${name}！`);
  }
  throw new Error('Unable to greet');
}

let msgStr = greet('张三');
let msgArr = greet(['张三']);


// 条件类型
type T4 = Exclude<"a" | "b" | "c", "a" | "b">;
type UserExclude<T, U> = T extends U ? never : T;
type T5 = UserExclude<"1" | "2" | "3", "1" | "3">

// extends 关键字
// 1. interface 继承
type BaseUser = {
  name: string
}

interface Student extends BaseUser {
  age: number
}

const xiaoMing: Student = {
  name: 'xiaoMing',
  age: 12
}

const xiaozhang = {
  user_name: 'xiaozhang'
}

// 2. 条件约束
type isTrue = Student extends BaseUser ? boolean : never;

// 3. 泛型限制
function  getUserName<T extends BaseUser>(userInfo: T): T['name'] {
  return userInfo.name
}

const user_name = getUserName(xiaoMing);


// infer 类型推断
type T0 = string[];
type U0 = UnpackedArray<T0>;
type UnpackedArray<T> = T extends(infer U)[] ? U : T;

type FirstIfString<T> = T extends [infer S, ...unknown[]]
  ? S extends string
    ? S
    : never
  : never;