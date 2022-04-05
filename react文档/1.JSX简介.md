<!--
 * @Author: zhangwu
 * @Date: 2022-03-31 11:50:49
 * @LastEditors: zhangwu
 * @LastEditTime: 2022-04-02 10:52:13
 * @Description: 请填写简介
-->
## `JSX`简介

  ```
    const element = <h1>Hello, world!</h1>;
  ```

以上书法形式就是`JSX`的语法，看起来即像`js`又像`html`，它可以很好的描述UI应该呈现出它应有交互的本质形式。JSX可能会诗人联想到模板语言，但它具有JS的全部功能。
JSX可以S生成React元素。

### 为什么使用JSX语言

`React`认为渲染逻辑本质上与其他`UI`逻辑内在耦合，比如，在UI中需要绑定处理事件、在某些时刻状态发生变化时需要通知到UI，以及需要在UI中展示准备好的数据。
React不强制要求使用`JSX`，但是大多数人发现，在`JS`代码中将`JSX`和`UI`放在一起时，会在视觉上有辅助作用，他还可以使`React`显示更多有用的错误和警告信息。

### 在`JSX`中嵌入表达式

在`JSX`语法中，我们可以在一对大括号中使用任何有效的`js`表达式(三元运算符，变量，执行函数)。

### `JSX`也是一个表达式

也就是说我们可以在`if`语句和`for`循环的代码块中使用`JSX`，将JSX赋值给变量。把`JSX`当作变量传入，以及丛函数中返回`JSX`。

```
function getGreeting(user) {
  if (user) {
    return <h1>Hello, {formatName(user)}!</h1>;
  }
  return <h1>Hello, Stranger.</h1>;
}
```

### `JSX`中指定属性

我们可以同过引号或者双引号来直接将属性指定为字符串字面量，

```
const element = <a href="https://www.reactjs.org"> link </a>;
```

也可以使用大括号变量的形式，在属性值中插入一个`JS`表达式

```
const element = <img src={user.avatarUrl}></img>;
```

因为`JSX`语法上更接近`JS`而不是`HTML`，所以`React Dom`的hi哦用小驼峰命名来定义属性的名称
例如，`JSX`里的`class`变成了`className`，而`tabindex`则变成了`tabIndex`。

### `JSX`可以指定子元素（即将`JSX`赋值给一个变量,然后在使用）

```
const element = <img src={user.avatarUrl} />;
const element = (
  <div>
    <h1>Hello!</h1>
    <h2>Good to see you here.</h2>
  </div>
);
```

### `JSX`防止注入攻击

我们可以安全地在`JSX`中插入用户输入的内容：

```
const title = response.potentiallyMaliciousInput;
// 直接使用是安全的：
const element = <h1>{title}</h1>;
```

`React DOM`在渲染所有输入内容之前默认会进行转义，他可以确保在我们的应用中，永远不会注入那些并非自己明确编写的内容。所有的内容在渲染之前都被转成了字符串。这样可以有效地防止`xss(sross-sut-scripting,跨站脚本攻击)`。

### `JSX`表示对象

Babel会把`JSX`转译成一个名为 `React.creatElement()`函数调用。
以下两种实例代码完全等效:

```
const element = (
  <h1 className="greeting">
    Hello, world!
  </h1>
);
```

```
const element = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello, world!'
);
```

 `React.creatElement()`会预先进行一些检查，帮助我们编写无措代码，但实际上他创建了一个这样的对象

 ```
 const element = {
   type:'h1',
   props:{
     className:'greeting',
     children:'Hello,world!'
   }
 }
```
这些对象被称为:"React 元素"。他们描述了我们在屏幕上看到的内容。React通过读取对象，使用他们来构建`DOM`以及保持随时更新。