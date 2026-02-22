package main

import "fmt"

func main() {
	fmt.Println("=== Arrays in Go ===")

	// 1. Declaration & Initialization
	// Arrays have a FIXED size. The size is part of the type.
	var nums [4]int // Declares an integer array of size 4. Default value is 0 for all elements.
	fmt.Printf("1. Default (Zero) Values: %v \n", nums)

	nums[0] = 10
	nums[len(nums)-1] = 40 // Accessing the last element
	fmt.Printf("   Modified Array: %v \n", nums)

	// 2. Short Declaration
	// Initialize with specific values
	primes := [5]int{2, 3, 5, 7, 11}
	fmt.Printf("2. Initialized Array: %v \n", primes)

	// Use '...' to let the compiler count the elements
	colors := [...]string{"Red", "Green", "Blue"}
	fmt.Printf("3. Compiler Counted Array (size %d): %v \n", len(colors), colors)

	// 3. Iteration
	fmt.Println("\n4. Iteration:")
	// Using range (index and value)
	for index, value := range colors {
		fmt.Printf("   Index: %d, Value: %s\n", index, value)
	}

	// 4. Multi-dimensional Arrays
	fmt.Println("\n5. 2D Array:")
	matrix := [2][3]int{
		{1, 2, 3},
		{4, 5, 6},
	}
	fmt.Println("   Matrix:", matrix)
	fmt.Println("   Element at [1][2]:", matrix[1][2])

	// 5. Arrays are VALUE Types (Not Reference Types)
	fmt.Println("\n6. Value Semantics:")
	original := [3]int{1, 2, 3}
	copyArr := original // This creates a full COPY of the array

	copyArr[0] = 999

	fmt.Printf("   Original: %v (Unchanged)\n", original)
	fmt.Printf("   Copy:     %v (Changed)\n", copyArr)
	fmt.Println("   (Note: In many other languages, this would change the original too!)")
}
