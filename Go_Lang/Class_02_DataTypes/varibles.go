package main

import "fmt"

func main() {

	// --- 1. explicit Declaration ---
	// Declaring a variable with a specific type using 'var' keyword
	var a int = 64
	fmt.Println("Signed Integer :", a)

	// --- 2. Type Inference ---
	// Go infers the type based on the value
	var af = 64.5 // inferred as float64
	fmt.Println("Signed Float   :", af)

	// --- 3. Booleans ---
	var b bool = false
	fmt.Println("Boolean value  :", b)

	// --- 4. Strings ---
	var str string = "Hello World"
	fmt.Println("String value   :", str)

	// --- 5. Short Declaration (Inside functions only) ---
	// Using ':=' syntax, no 'var' keyword needed
	country := "India"
	fmt.Println("Country        :", country)

	// --- 6. Constants ---
	// Constants cannot be changed once declared
	const name = "Go Lang" // Typed constant
	
	// const group
	const (
		port = 8080
		host = "localhost"
	)

	fmt.Println("\n--- Constants ---")
	fmt.Println("Constant Name  :", name)
	fmt.Printf("Constant port %d and host is %s\n", port, host)
}
