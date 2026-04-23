#!/bin/bash

# Ask for the number of subjects
read -p "Enter total number of subjects: " n

total=0

# The sequence command {1..5} doesn't work with variables easily,
# so we use a C-style loop or the 'seq' command.
for (( i=1; i<=n; i++ )); do
    read -p "Enter marks for subject $i: " marks
    total=$((total + marks))
done

# Calculate average (Note: Bash does integer division)
average=$((total / n))

echo "--------------------------"
echo "Total Marks: $total"
echo "Average Marks: $average"

# Determine Grade
if [ $average -ge 90 ]; then
    grade="A"
elif [ $average -ge 75 ]; then
    grade="B"
elif [ $average -ge 50 ]; then
    grade="C"
else
    grade="F"
fi

echo "Student Grade: $grade"