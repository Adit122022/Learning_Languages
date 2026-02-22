// Use SWITCH CASE when you implement logic with many conditions
package main

import (
	"fmt"
	"time"
)

func main() {
	var dayNum int
	fmt.Print("Enter the day number (0-6): ")
	fmt.Scanf("%d", &dayNum)

	// 1. Basic Switch Statement
	switch dayNum {
	case 0:
		fmt.Println("Sunday")
	case 1:
		fmt.Println("Monday")
	case 2:
		fmt.Println("Tuesday")
	case 3:
		fmt.Println("Wednesday")
	case 4:
		fmt.Println("Thursday")
	case 5:
		fmt.Println("Friday")
	case 6:
		fmt.Println("Saturday")
	default:
		fmt.Println("Invalid day number")
	}

	// 2. Switch with Multiple Expressions & Functions
	// Note: switch variable is optional here if we check conditions directly
	switch time.Now().Weekday() {
	case time.Saturday, time.Sunday:
		fmt.Println("It's the weekend!")
	default:
		fmt.Println("It's a weekday.")
	}

	// 3. Type Switch
	whoAmI := func(i interface{}) {
		switch v := i.(type) {
		case int:
			fmt.Printf("I am an INTEGER: %v\n", v)
		case string:
			fmt.Printf("I am a STRING: %q\n", v)
		case bool:
			fmt.Printf("I am a BOOLEAN: %v\n", v)
		default:
			fmt.Printf("I am of a different type: %T\n", v)
		}
	}

	whoAmI(dayNum)
	whoAmI("Hello, Go!")
	whoAmI(true)
}
