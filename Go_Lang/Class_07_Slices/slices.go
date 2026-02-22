package main

import "fmt"

func main() {
	fmt.Println("=== Slices in Go ===")

	// 1. Declaration
	// Nil slice: Has no underlying array.
	var nums []int
	fmt.Printf("1. Nil Slice: %v, len: %d, cap: %d, isNil: %t\n", nums, len(nums), cap(nums), nums == nil)

	// 2. Creation with 'make'
	// make([]Type, len, cap)
	// Underlying array of size 5 is allocated. Slice views the first 3 elements.
	grades := make([]int, 3, 5)
	grades[0] = 10
	grades[1] = 20
	grades[2] = 30
	fmt.Printf("2. Make Slice: %v, len: %d, cap: %d\n", grades, len(grades), cap(grades))

	// 3. Append (Dynamic Resizing)
	// When appending, if capacity is exceeded, Go doubles the underlying array size.
	fmt.Println("\n3. Appending elements:")
	grades = append(grades, 40)
	grades = append(grades, 50)
	fmt.Printf("   After append (full cap): %v, len: %d, cap: %d\n", grades, len(grades), cap(grades))

	grades = append(grades, 60) // Triggers reallocation
	fmt.Printf("   After append (realloc):  %v, len: %d, cap: %d\n", grades, len(grades), cap(grades))

	// 4. Slicing Syntax (slice[low:high])
	// [low : high] -> Includes index 'low', excludes 'high'
	fmt.Println("\n4. Slicing:")
	fruits := []string{"Apple", "Banana", "Cherry", "Date", "Elderberry"}
	chunk := fruits[1:4] // "Banana", "Cherry", "Date"
	fmt.Printf("   Original: %v\n", fruits)
	fmt.Printf("   Chunk [1:4]: %v\n", chunk)

	// 5. Shared Underlying Array
	// Slices are references to an underlying array. Modifying a slice modifies the array!
	fmt.Println("\n5. Shared Memory:")
	chunk[0] = "BLUEBERRY"
	fmt.Printf("   Modified Chunk:   %v\n", chunk)
	fmt.Printf("   Original Fruits:  %v (See 'Banana' changed!)\n", fruits)

	// 6. Copying
	// To avoid sharing memory, use copy()
	fmt.Println("\n6. Copying:")
	src := []int{1, 2, 3}
	dst := make([]int, len(src))
	copy(dst, src)
	src[0] = 999
	fmt.Printf("   Source: %v\n", src)
	fmt.Printf("   Dest:   %v (Unchanged)\n", dst)
}
