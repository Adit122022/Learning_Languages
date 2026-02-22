# 🗺️ Go Concepts & Topics Roadmap

This document provides a comprehensive list of Go (Golang) concepts, organized from beginner to advanced levels. Use this as a checklist for your learning journey!

## 1. 🐣 Fundamentals

- [✅] **Program Structure**
  - Packages (`package main`)
  - Imports (`import "fmt"`)
  - The `main` function
- [✅] **Variables & Constants**
  - `var` declaration
  - Short declaration (`:=`)
  - `const` usage
  - Type inference
- [✅] **Data Types**
  - **Basic**: `int`, `float64`, `bool`, `string`
  - **Complex**: `complex64`, `complex128`
  - **Zero Values**
- [✅] **Operators**
  - Arithmetic (`+`, `-`, `*`, `/`, `%`)
  - Comparison (`==`, `!=`, `>`, `<`)
  - Logical (`&&`, `||`, `!`)
- [ ] **Input/Output**
  - Printing (`fmt.Println`, `fmt.Printf`)
  - Formatting verbs (`%v`, `%T`, `%d`, `%s`)

## 2. 🔄 Control Flow

- [✅] **Conditionals**
  - `if`, `else if`, `else`
  - `if` with initialization
- [✅] **Loops**
  - `for` loop (standard C-style)
  - `for` as a while loop
  - `for` with `range`
  - `break` and `continue`
- [ ] **Switch Statements**
  - Standard `switch`
  - `switch` with no condition
  - `fallthrough` keyword

## 3. 📦 Data Structures (Collections)

- [ ] **Arrays**
  - Fixed length
  - Declaration and initialization
- [ ] **Slices**
  - Dynamic length
  - `make()` function
  - `append()` function
  - Slicing syntax (`arr[1:4]`)
  - `len()` and `cap()`
- [ ] **Maps**
  - Key-value pairs
  - `make(map[type]type)`
  - `delete()` function
  - Checking for existence (`val, ok := map[key]`)
- [ ] **Structs**
  - Defining custom types
  - Struct fields
  - Embedded structs (Composition)
  - Anonymous structs

## 4. 🛠️ Functions

- [ ] **Basics**
  - Parameters and return values
  - Named return values
- [ ] **Advanced**
  - Variadic functions (`...type`)
  - Anonymous functions (Lambdas)
  - Closures
  - Recursion
- [ ] **Defer, Panic, Recover**
  - `defer` keyword
  - Handling panics with `recover()`

## 5. 📍 Pointers & Memory

- [ ] **Pointers**
  - Address-of operator (`&`)
  - Dereference operator (`*`)
  - Pointer mechanics (Pass by value vs reference)
  - `nil` pointers
- [ ] **Memory**
  - Stack vs Heap
  - `new()` function

## 6. 🧩 Methods & Interfaces (OOP in Go)

- [ ] **Methods**
  - Value receivers vs Pointer receivers
- [ ] **Interfaces**
  - Defining interfaces
  - Implementing interfaces (Implicit)
  - Empty interface (`interface{}`)
  - Type assertions (`val.(type)`)
  - Type switches

## 7. ⚡ Concurrency

- [ ] **Goroutines**
  - `go` keyword
  - Lightweight threads
- [ ] **Channels**
  - Unbuffered vs Buffered channels
  - `chan` keyword
  - Sending `<-` and receiving `<-`
  - Closing channels
- [ ] **Synchronization**
  - `sync.WaitGroup`
  - `sync.Mutex` and `sync.RWMutex`
  - `select` statement

## 8. ⚠️ Error Handling

- [ ] **The Error Type**
  - `error` interface
  - Returning errors
- [ ] **Custom Errors**
  - `errors.New()`
  - `fmt.Errorf()`
- [ ] **Error Wrapping** (Go 1.13+)
  - `errors.Is()`, `errors.As()`
  - `Unwrap()`

## 9. 🧰 Standard Library & Tools

- [ ] **Packages**
  - `fmt` (Formatting)
  - `os` (Operating System interaction)
  - `io` & `bufio` (Input/Output)
  - `net/http` (Web servers/clients)
  - `encoding/json` (JSON parsing)
  - `time` (Time handling)
  - `sort` (Sorting slices)
- [ ] **Tooling**
  - `go mod` (Modules & Dependencies)
  - `go fmt` (Formatting code)
  - `go test` (Testing)
  - `go vet` (Static analysis)

## 10. 🧪 Advanced Topics

- [ ] **Generics** (Go 1.18+)
- [ ] **Reflection** (`reflect` package)
- [ ] **Unsafe** (`unsafe` package)
- [ ] **Context** (`context` package)
- [ ] **Testing & Benchmarking**
  - Unit tests (`_test.go`)
  - Table-driven tests
  - Benchmarks

---

_Checked items represent meaningful progress! Keep going!_ 🚀
