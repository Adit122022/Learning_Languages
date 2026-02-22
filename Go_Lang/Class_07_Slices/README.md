# Class 07: Slices in Go

Slices are the powerful, dynamic, and most commonly used alternative to arrays in Go. While arrays have a fixed size, slices are **dynamic** and flexible.

## Key Concepts

A slice is a "window" or a view into an underlying array. It consists of three parts:

1.  **Pointer**: Points to the start of the slice in the underlying array.
2.  **Length (`len`)**: The number of elements in the slice.
3.  **Capacity (`cap`)**: The number of elements in the underlying array, starting from the slice's pointer.

## 1. Declaration & Creation

### Nil Slice

Declared but not initialized. Has no underlying array.

```go
var nums []int // len=0, cap=0, nums == nil
```

### Using `make()`

Allocates an underlying array and returns a slice pointing to it.

```go
// make([]Type, len, cap)
scores := make([]int, 5, 10)
// Creates a slice of length 5, with room for 10 total elements.
```

### Slice Literal

Creates an array and a slice that views it.

```go
days := []string{"Mon", "Tue", "Wed"}
```

## 2. Dynamic Resizing (`append`)

You can add elements to a slice using the built-in `append` function.

- If the underlying array has capacity, `append` simply adds the element.
- If capacity is exceeded, Go **allocates a new, larger array**, copies the old data, and adds the new element.

```go
nums := []int{1, 2}
nums = append(nums, 3) // len=3, cap=4 (doubled capacity)
```

## 3. Slicing Syntax

You can create a new slice from an existing array or slice using the `[low : high]` operator.

- **low**: Start index (inclusive).
- **high**: End index (exclusive).

```go
arr := [5]int{10, 20, 30, 40, 50}
slice := arr[1:3] // Views elements {20, 30}
```

## 4. Important: Shared Memory

Since a slice is just a view, **modifying a slice modifies the underlying array**. This affects all other slices viewing the same part of that array.

```go
origin := []int{1, 2, 3}
ref := origin[:]
ref[0] = 999
// 'origin' is now {999, 2, 3}
```

## 5. Copying

To create an independent copy of a slice (so modifications don't affect the original), use the `copy()` function.

```go
src := []int{1, 2}
dst := make([]int, len(src))
copy(dst, src) // 'dst' is now a separate copy
```

## How to Run

```bash
go run slices.go
```
