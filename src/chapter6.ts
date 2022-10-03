/*
 * @Author: yangrongxin
 * @Date: 2022-09-25 11:24:14
 * @LastEditors: yangrongxin
 * @LastEditTime: 2022-10-03 17:42:05
 */
// function deleteUser (user: { id?: number, name: string }): void {
//   delete user.id
// }

// interface LUser {
//   id?: number | string
//   name: string
// }

// const lUser: LUser = {
//   id: '32',
//   name: 'Xin Yang'
// }

// deleteUser(lUser) // 型变中的协变 函数类型收缩

// class Animal {}
// class Bird extends Animal {
//   chirp (): void {}
// }
// class Crow extends Bird {
//   caw (): void {}
// }

// function chirp (bird: Bird): Bird {
//   bird.chirp()
//   return bird
// }

// chirp(new Animal())
// chirp(new Bird())
// chirp(new Crow()) // 函数返回值的协变

// function clone (f: (b: Bird) => Bird): void {
//   // ...
// }

// function animalToBird (a: Animal): Bird {
//   // ...
// }

// clone(animalToBird)

// function crowToBird (c: Crow): Bird {
//   // ...
// }

// clone(crowToBird) // 函数对参数和this 做逆变

// const d = [1, { x: 2 }]
// const e = [1, { x: 2 }] as const

// console.log(d)
// console.log(e)
