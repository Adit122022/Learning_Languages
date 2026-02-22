package main

import (
	"fmt"
	"reflect"
)

/*
	In Go, data types differ widely.
	1. Basic: Numbers, strings, booleans.
	2. Aggregate: Arrays, structs.
	3. Reference: Pointers, slices, maps, channels.
	4. Interface: Defines behavior.

	We can use the `reflect` package to check types at runtime.
*/

func main() {
	// 1. Integer
	var a = 882
	fmt.Println("--- Inspecting Integer ---")
	fmt.Println("Value  :", a)
	fmt.Println("Type   :", reflect.TypeOf(a))
	fmt.Println("Kind   :", reflect.ValueOf(a).Kind())

	// 2. String
	var message = "Hello World"
	fmt.Println("\n--- Inspecting String ---")
	fmt.Println("Value  :", message)
	fmt.Println("Type   :", reflect.TypeOf(message))

	// 3. Boolean
	var isActive = true
	fmt.Println("\n--- Inspecting Boolean ---")
	fmt.Println("Value  :", isActive)
	fmt.Println("Type   :", reflect.TypeOf(isActive))

	// 4. Float
	var pi = 3.14
	fmt.Println("\n--- Inspecting Float ---")
	fmt.Println("Value  :", pi)
	fmt.Println("Type   :", reflect.TypeOf(pi))
}
