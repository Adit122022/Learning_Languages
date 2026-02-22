# **Class 04 - Loops**

> #### **\_[Go](https://go.dev/) 🚀 by [Google](https://google.com). Welcome to the **Go Lang Learning Journey\*\* repository!

## 📂 **Table of Contents**

- [Introduction](#-introduction)
- [The For Loop](#-the-for-loop)
- [Implementing While Loops](#-implementing-while-loops)
- [Infinite Loops](#-infinite-loops)
- [Range Loops](#-range-loops)

---

## 🚀 **Introduction**

In Go, there is **only one** loop construct: the `for` loop.

> ⚠️ **Important:** Go does **NOT** have a `while` loop or `do-while` loop keyword. All looping is done using `for`.

---

## 🔄 **The For Loop**

The basic `for` loop looks similar to C, Java, or JavaScript, but without parentheses `()`.

### Syntax

```go
for init; condition; post {
    // code
}
```

### Example

```go
package main

import "fmt"

func main() {
    for i := 0; i < 5; i++ {
        fmt.Println("Value of i is:", i)
    }
}
```

---

## ⏳ **Implementing While Loops**

Since Go has no `while` keyword, we use the `for` loop to achieve the same behavior. We usually refer to this as the "Single Condition Loop".

### Syntax

```go
for condition {
    // code
}
```

### Example

```go
package main

import "fmt"

func main() {
    number := 1
    for number <= 5 {
        fmt.Println(number)
        number++
    }
}
```

---

## ♾️ **Infinite Loops**

You can create an infinite loop by removing all conditions. This is equivalent to `while(true)`.

### Syntax

```go
for {
    // code
}
```

### Example

```go
package main

import "fmt"

func main() {
    for {
        fmt.Println("Looping forever...")
        break // Use break to exit
    }
}
```

---

## 🔍 **Range Loops**

Go 1.22+ introduced the ability to range over integers directly.

### Example

```go
for i := range 5 {
    fmt.Println(i) // Prints 0, 1, 2, 3, 4
}
```

---

## 📚 **Learn More**

1. **[Go Tour: For](https://go.dev/tour/flowcontrol/1)**
2. **[Go Tour: For is Go's While](https://go.dev/tour/flowcontrol/3)**
