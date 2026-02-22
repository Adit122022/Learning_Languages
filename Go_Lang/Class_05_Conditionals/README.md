# Class 05: Conditionals in Go

This module covers conditional statements in Go, specifically `if-else` constructs and `switch` statements. These control structures allow your program to execute different blocks of code based on specified conditions.

## 1. If-Else Statements

Go's `if` statements are similar to other C-like languages but with a few key differences:

- Parentheses `()` around the condition are not required.
- Braces `{}` are required, even for single-line blocks.
- **Idiomatic Go**: You can execute a short statement before the condition (e.g., `if x := 10; x > 5`).

### Example: `if_else/if_else.go`

The file `if_else/if_else.go` demonstrates:

1.  **Basic Check**: Standard `if-else if-else` structure.
2.  **Short Statement**: Initializing a variable in the `if` statement itself, which scopes it to the block.

```go
// Idiomatic Go: if with a short statement
if length := 10; length%2 == 0 {
    fmt.Println("Length is even")
}
```

## 2. Switch Statements

Switch statements provide a concise way to compare a value against multiple possible values. Go's switch is flexible:

- Cases do not fall through by default (no `break` needed).
- Cases can match multiple values.
- **Type Switches**: A special syntax to check the type of an interface.

### Example: `switch/switch.go`

The file `switch/switch.go` explores different ways to use switch:

1.  **Basic Switch**: Checking an integer value (Run the file and enter a number 0-6).
2.  **Multiple Expressions**: `case time.Saturday, time.Sunday:` checks if it's the weekend.
3.  **Type Switch**: Checking the underlying type of an interface using `.(type)`.

```go
// Type switch example
whoAmI := func(i interface{}) {
    switch v := i.(type) {
    case int:
        fmt.Printf("I am an INTEGER: %v\n", v)
    // ...
    }
}
```

## How to Run

Run the files from their respective directories:

```bash
go run if_else/if_else.go
go run switch/switch.go
```
