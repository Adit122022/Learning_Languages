# **Class 02 - Variables and Data Types**

> #### **\_[Go](https://go.dev/) 🚀 by [Google](https://google.com). Welcome to the **Go Lang Learning Journey\*\* repository!

## 📂 **Table of Contents**

- [Variables](#-variables)
- [Basic Data Types](#-basic-data-types)
- [Constants](#-constants)
- [Learn More](#-learn-more)

---

## 📦 **Variables**

In Go, variables are used to store values. You can declare them in a few different ways.

### 1. Explicit Declaration

You can explicitly define the type of a variable using the `var` keyword.

```go
var a int = 64
fmt.Println("Signed Integer:", a)
```

### 2. Implicit Declaration (Type Inference)

If you provide an initial value, Go can infer the type for you.

```go
var af = 64.5 // Go infers this is a float64
fmt.Println("Signed Float:", af)
```

### 3. Short Declaration (Inside Functions)

Inside a function, you can use the `:=` short assignment syntax. This is the most common way to create variables in Go.

```go
name := "Go Lang" // String
age := 10         // Int
```

---

## 🔢 **Basic Data Types**

Go has several built-in types. Here are the most common ones:

> **Note**: Go is statically typed, meaning variable types are known at compile time.

### Integers (`int`)

- **`int`**: Platform dependent (32 or 64 bit).
- **Explicit Sized**: `int8`, `int16`, `int32`, `int64`.
- **Unsigned**: `uint`, `uint8`, etc.

```go
var x int = 10
var y int64 = 50000
```

### Floating Point Numbers (`float`)

- **`float32`**: 32-bit floating-point number.
- **`float64`**: 64-bit floating-point number (Default).

```go
var pi float32 = 3.14
var g float64 = 9.80665
```

### Booleans (`bool`)

Represents a true or false value.

```go
var b bool = false
```

### Strings (`string`)

A sequence of characters.

```go
var str string = "Hello World"
```

---

## 🔒 **Constants**

Constants are variables whose values cannot be changed after they are defined.

```go
const name = "Go Lang" // This cannot be changed
// name = "Python"    // This would cause a compile error
```

You can also declare multiple constants at once:

```go
const (
    port = 8080
    host = "localhost"
)
```

---

## 📚 **Learn More**

For detailed information and the official specification, check out these resources from the Go website:

- **[A Tour of Go: Basics](https://go.dev/tour/basics/1)** - Interactive tutorial on variables and types.
- **[Go Documentation: Types](https://go.dev/ref/spec#Types)** - The official language specification on types.
