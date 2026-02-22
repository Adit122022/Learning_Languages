# Class 06: Arrays in Go

Arrays in Go are a fundamental data structure that stores a **fixed-size** sequence of elements of the same type.

## Key Characteristics

1.  **Fixed Length**: The size of an array is part of its type. `[4]int` and `[5]int` are distinct, incompatible types. You cannot resize an array.
2.  **Value Type**: Arrays in Go are **values**, not references. Assigning an array to a new variable creates a full copy of the original array.
3.  **Zero Values**: When declared without initialization, all elements are set to their zero value (e.g., `0` for int, `""` for string, `false` for bool).

## 1. Declaration & Initialization

### Basic Declaration

Declares an array of 5 integers, initialized to 0.

```go
var nums [5]int
```

### Short Declaration with Values

Initialize an array with specific values.

```go
primes := [5]int{2, 3, 5, 7, 11}
```

### Compiler Counted Length (`...`)

Let the compiler calculate the length based on the number of elements provided.

```go
colors := [...]string{"Red", "Green", "Blue"} // Length is 3
```

## 2. Accessing & Modifying

Access elements using a 0-based index.

```go
nums[0] = 10       // Set first element
x := nums[1]       // Get second element
l := len(nums)     // Get length (built-in function)
```

## 3. Iteration

The `range` keyword is the most idiomatic way to iterate over arrays.

```go
// index and value
for i, v := range primes {
    fmt.Printf("Index: %d, Value: %d\n", i, v)
}

// Ignore index
for _, v := range primes {
    fmt.Println(v)
}
```

## 4. Multi-dimensional Arrays

Go supports multi-dimensional arrays, commonly used for matrices or grids.

```go
// A 2x3 integer matrix
matrix := [2][3]int{
    {1, 2, 3}, // Row 0
    {4, 5, 6}, // Row 1
}
```

## 5. Important: Value Semantics

Unlike many other languages (like Java or Python), arrays in Go are **values**.

```go
a := [3]int{1, 2, 3}
b := a        // 'b' is a complete copy of 'a'
b[0] = 100    // 'a' remains {1, 2, 3}
```

> **Note**: Because passing large arrays to functions copies the entire array, it can be inefficient. In practice, Go developers almost always use **Slices** (wrappers around arrays) for flexibility and performance. (Covered in future classes).

## How to Run

```bash
go run arrays.go
```
