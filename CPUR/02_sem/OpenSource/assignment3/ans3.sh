#!/bin/bash


read -p "Enter name of file :" file
if [ ! -f "$file" ]; then
    echo "Error: $file does not exist."
    exit 1
fi

echo "Duplicate lines in $file:"
sort "$file" | uniq -d
