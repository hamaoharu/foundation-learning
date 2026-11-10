# Unit 13 教材：`this`・クラス・プロトタイプ

## 1. メソッドとは

オブジェクトのプロパティとして保存された関数を、メソッドと呼びます。

```js
const user = {
  name: "Haru",
  greet() {
    return "Hello";
  },
};

user.greet();
// "Hello"
```

## 2. メソッド内の`this`

通常のメソッド呼び出しでは、`this`から呼び出し元のオブジェクトを参照できます。

```js
const user = {
  name: "Haru",
  greet() {
    return `Hello, ${this.name}`;
  },
};

user.greet();
// "Hello, Haru"
```

この呼び出しでは、ドットの左側にある`user`が`this`になります。

```text
user.greet()
^^^^
this
```

同じメソッドを持つ別のオブジェクトでは、`this`が別のオブジェクトになります。

```js
const aki = {
  name: "Aki",
  greet: user.greet,
};

aki.greet();
// "Hello, Aki"
```

## 3. `this`は呼び出し方で決まる

通常関数の`this`は、関数を定義した場所だけではなく、どのように呼び出したかが重要です。

```js
const user = {
  name: "Haru",
  greet() {
    return this.name;
  },
};

user.greet();
// thisはuser
```

メソッドだけを変数へ取り出すと、呼び出し元のオブジェクトとのつながりが失われます。

```js
const greet = user.greet;
greet();
```

strict modeやES Modulesでは、この呼び出しの`this`は`undefined`になります。そのため`this.name`でエラーになります。

これは通常の変数のレキシカルスコープとは別の仕組みです。

```text
通常の変数 → 関数の定義場所が重要
通常関数のthis → 関数の呼び出し方が重要
```

## 4. アロー関数と`this`

アロー関数は、自分専用の`this`を作りません。定義された外側の`this`をそのまま使います。

そのため、オブジェクトのメソッドをアロー関数で書くと、通常はそのオブジェクトを`this`として参照できません。

```js
const user = {
  name: "Haru",
  greet: () => {
    return this.name;
  },
};
```

オブジェクト自身を`this`で参照したいメソッドには、基本的にメソッド構文か通常関数を使います。

```js
const user = {
  name: "Haru",
  greet() {
    return this.name;
  },
};
```

一方、メソッドの内側でコールバックを書く場合は、アロー関数が便利です。

```js
const user = {
  prefix: "Skill",
  skills: ["JS", "CSS"],
  getLabels() {
    return this.skills.map((skill) => {
      return `${this.prefix}: ${skill}`;
    });
  },
};
```

内側のアロー関数は、`getLabels`の`this`を利用します。

## 5. `call()`と`bind()`

`call()`は、通常関数を実行するときの`this`を指定できます。

```js
function greet() {
  return `Hello, ${this.name}`;
}

const user = { name: "Haru" };

greet.call(user);
// "Hello, Haru"
```

`bind()`は、`this`を固定した新しい関数を返します。

```js
const boundGreet = greet.bind(user);

boundGreet();
// "Hello, Haru"
```

## 6. クラスとインスタンス

クラスは、同じ構造や振る舞いを持つオブジェクトを作るための構文です。

```js
class User {
  constructor(name) {
    this.name = name;
  }

  greet() {
    return `Hello, ${this.name}`;
  }
}

const haru = new User("Haru");
const aki = new User("Aki");
```

`haru`と`aki`は、`User`クラスから作られた別々のインスタンスです。

```js
haru.greet(); // "Hello, Haru"
aki.greet();  // "Hello, Aki"
```

## 7. `constructor`

`new User("Haru")`を実行すると、`constructor`が呼ばれます。

```js
constructor(name) {
  this.name = name;
}
```

ここでの`this`は、これから作られるインスタンスです。

```text
new User("Haru")
       ↓
新しいオブジェクトを作る
       ↓
this.name = "Haru"
       ↓
インスタンスを返す
```

## 8. 継承と`super`

`extends`で別のクラスを継承できます。

```js
class AdminUser extends User {
  constructor(name, permissions) {
    super(name);
    this.permissions = permissions;
  }

  canManageUsers() {
    return this.permissions.includes("users:write");
  }
}
```

派生クラスの`constructor`では、`this`を使う前に`super()`を呼びます。`super(name)`は親クラスの`constructor`を実行します。

## 9. プロトタイプ

JavaScriptのクラスは、内部ではプロトタイプの仕組みを利用しています。

```js
class User {
  greet() {
    return "Hello";
  }
}
```

`greet`は各インスタンスへ別々にコピーされるのではなく、基本的に`User.prototype`で共有されます。

```js
const a = new User();
const b = new User();

a.greet === b.greet;
// true
```

インスタンスに直接ないプロパティやメソッドは、プロトタイプチェーンをたどって探されます。

```text
a
↓ なければ
User.prototype
↓ なければ
Object.prototype
↓
null
```

現段階では、クラスのメソッドはプロトタイプを通じて共有されると理解できれば十分です。

## 10. `instanceof`

`instanceof`は、オブジェクトが指定したクラスのプロトタイプチェーンにつながっているかを確認します。

```js
const user = new User("Haru");

user instanceof User;
// true

user instanceof Object;
// true
```

## 参照資料

- [MDN：this](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/this)
- [MDN：クラス](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Classes)
- [MDN：継承とプロトタイプチェーン](https://developer.mozilla.org/ja/docs/Web/JavaScript/Guide/Inheritance_and_the_prototype_chain)
- [MDN：instanceof](https://developer.mozilla.org/ja/docs/Web/JavaScript/Reference/Operators/instanceof)
