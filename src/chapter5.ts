/*
 * @Author: yangrongxin
 * @Date: 2022-09-20 21:09:27
 * @LastEditors: yangrongxin
 * @LastEditTime: 2022-09-20 21:53:07
 */

/**
 * 一、类和接口有什么区别
 * 答：1. 类型声明更为通用，右边可以是任何类型，包括类型表达式；而在接口声明中，右边必须为结构。
 * 2. 扩展接口的时候，TS将检查扩展的接口是否可赋值给被扩展的接口。
 * 3. 声明合并，同一作用域中的多个同名接口将自动合并，这个特性称为声明合并。
 */

// 二、无法实例化类
// class Test {
//   private constructor () {
//   }
// }
// const test = new Test()

// 只能在子类上实例化类
// class Test {
//   protected constructor () {
//   }

//   get (): string {
//     return '123'
//   }
// }

// class NewTest extends Test {
//   public constructor () {
//     super()
//   }
// }
// const test = new NewTest()

// 三、扩展一个接口也支持重载的方式
interface One {
  name: string
}

class Boot implements One {
  name = 'boot'
}

class BalletFlat implements One {
  name = 'BalletFlat'
}

interface Shoe {
  create: {
    (type: 'boot'): Boot
    (type: 'balletFlat'): BalletFlat
  }
}
const shoe: Shoe = {
  create (type: 'boot' | 'balletFlat') {
    if (type === 'boot') {
      return new Boot()
    } else {
      return new BalletFlat()
    }
  }
}

console.log('shoe', shoe)

// 四、将值与this绑定 保证页面不会因为调用而导致报错
interface BuildableRequest {
  data?: object
  method: 'get' | 'post'
  url: string
}

class RequestBuilder2 {
  data?: object
  method?: 'get' | 'post'
  url?: string

  setData (data: object): this & Pick<BuildableRequest, 'data'> {
    return Object.assign(this, { data })
  }

  setMethod (method: 'get' | 'post'): this & Pick<BuildableRequest, 'method'> {
    return Object.assign(this, { method })
  }

  setURL (url: string): this & Pick<BuildableRequest, 'url'> {
    return Object.assign(this, { url })
  }

  build (this: BuildableRequest): any {
    return this
  }
}

new RequestBuilder2()
  .setData({})
  .setMethod('post') // Try removing me!
  .setURL('bar') // Try removing me!
  .build()
