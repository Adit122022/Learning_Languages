package main

import "fmt"

func main() {

	// --- 1. Standard For Loop ---
	// Similar to C/Java/JS loops
	fmt.Println("--- Standard Loop ---")
	for i := 0; i < 5; i++ {
		fmt.Printf("Iteration: %d\n", i)
	}

	// --- 2. While-Style Loop ---
	// Go doesn't have 'while'. We use 'for' with a condition.
	fmt.Println("\n--- While-Style Loop ---")
	n := 1
	for n <= 3 {
		fmt.Printf("Count: %d\n", n)
		n++
	}

	// --- 3. Infinite Loop ---
	// 'for' without any condition loops forever. Use 'break' to exit.
	fmt.Println("\n--- Infinite Loop ---")
	count := 0
	for {
		if count >= 3 {
			fmt.Println("Breaking out of infinite loop!")
			break
		}
		fmt.Println("Looping...")
		count++
	}

	// --- 4. Range Loop (Go 1.22+) ---
	// Iterating over a range of integers directly
	fmt.Println("\n--- Range Loop ---")
	for i := range 3 {
		fmt.Printf("Range index: %d\n", i)
	}
}
