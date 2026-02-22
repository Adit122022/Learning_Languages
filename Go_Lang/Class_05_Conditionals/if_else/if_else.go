// Use IF ELSE when you implement logic with many conditions
package main
	
import "fmt"

func main() {
	age := 15

	// Basic if-else structure
	if age >= 18 {
		fmt.Printf("Person is an Adult. Age: %d\n", age)
	} else if age >= 12 {
		fmt.Printf("Person is a Teenager. Age: %d\n", age)
	} else {
		fmt.Printf("Person is a Child. Age: %d\n", age)
	}

	// Go does not have a ternary operator (condition ? true : false)
	// You must use standard if-else blocks.

	// Idiomatic Go: if with a short statement
	// Useful for scoping variables to the if block
	if length := 10; length%2 == 0 {
		fmt.Println("Length is even")
	} else {
		fmt.Println("Length is odd")
	}
}
