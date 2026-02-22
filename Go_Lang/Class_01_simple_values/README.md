# **Class 01 - Simple Values & Reflection**

> #### **\_[Go](https://go.dev/) 🚀 by [Google](https://google.com). Welcome to the **Go Lang Learning Journey\*\* repository!

## 📂 **Table of Contents**

- [Introduction](#-introduction)
- [Data Type Categories](#-data-type-categories)
- [Reflection](#-reflection)
- [Resources](#-resources)

---

## 🚀 **Introduction**

Go has a strong type system. Understanding the basic values and how to inspect them is crucial.

---

## 📊 **Data Type Categories**

In Go, types are generally divided into four categories:

1.  **Basic Types**: Numbers, strings, and booleans.
2.  **Aggregate Types**: Arrays and structs (values that combine other values).
3.  **Reference Types**: Pointers, slices, maps, functions, and channels (References to underlying data).
4.  **Interface Types**: Define behavior rather than data.

---

## 🪞 **Reflection**

Go provides the `reflect` package to inspect the type and value of a variable at runtime.

- **`reflect.TypeOf(v)`**: Returns the dynamic type of `v`.
- **`reflect.ValueOf(v)`**: Returns the value of `v`.

### Example

```go
import "reflect"

var x = 10
fmt.Println(reflect.TypeOf(x)) // Output: int
```

---

## 📚 **Resources**

1.  **[Go Blog: Laws of Reflection](https://go.dev/blog/laws-of-reflection)**
2.  **[Go Documentation: Reflect](https://pkg.go.dev/reflect)**
