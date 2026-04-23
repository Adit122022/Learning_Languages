#!/bin/bash

# Define a list of days
days=("Monday" "Tuesday" "Wednesday" "Thursday" "Friday" "Saturday" "Sunday")

echo "Days of the week:"
for day in "${days[@]}"; do
    echo "- $day"
done
