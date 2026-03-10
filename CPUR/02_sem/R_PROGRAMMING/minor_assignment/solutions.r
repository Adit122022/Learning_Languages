
#1. Concatenate a vector
vec1 <- c(1, 2, 3)
vec2 <- c(4, 5, 6)

# Concatenate them into one
combined_vector <- c(vec1, vec2)
print(combined_vector)


#2. Access the last value
my_vec <- c(10, 20, 30, 40, 50)

# tail() is an easy way, or use indexing:
last_value <- my_vec[length(my_vec)]
print(last_value)

#3. Find common elements

v1 <- c(1, 2, 3, 4, 5)
v2 <- c(3, 4, 5, 6, 7)

common <- intersect(v1, v2)
print(common)


Gemini said
Welcome to the world of R! It’s a fantastic language for data analysis because it treats data as collections (vectors) rather than just single pieces of information.

Here is the breakdown of your exercises with explanations of how the code works.

1. Concatenate a vector
In R, the c() function stands for combine. It is the most common way to create or join vectors.

R
vec1 <- c(1, 2, 3)
vec2 <- c(4, 5, 6)

# Concatenate them into one
combined_vector <- c(vec1, vec2)
print(combined_vector)
2. Access the last value
To get the last value, we find the length of the vector and use that number as the index. Note: Unlike Python, R indexing starts at 1.

R
my_vec <- c(10, 20, 30, 40, 50)

# tail() is an easy way, or use indexing:
last_value <- my_vec[length(my_vec)]
print(last_value)
3. Find common elements
We use the intersect() function to find values that appear in multiple vectors.

R
v1 <- c(1, 2, 3, 4, 5)
v2 <- c(3, 4, 5, 6, 7)

common <- intersect(v1, v2)
print(common)


# 4. Repeat "A", "B" ten times
# This repeats the pattern "A", "B" ten times
repeated_vec <- rep(c("A", "B"), times = 10)
print(repeated_vec)

# 5. Check the number of elements
# You use the length() function. It returns a single integer representing the count of items in the vector.

# 6. Filtering Stock Levels

stock <- c(50, 0, 100, -5, 20, 0, 35)

# a. Create a logical filter (returns TRUE or FALSE for each element)
filter <- stock > 0

# b. Create valid_stock using the filter
valid_stock <- stock[filter]

# c. Calculate the median
stock_median <- median(valid_stock)

print(valid_stock)
print(stock_median)

# 7. Handling Missing Data (NA)
temps <- c(22.5, 23.0, NA, 21.5, 24.0, NA, 22.0)

# a. Check which elements are missing
missing_check <- is.na(temps)
print(missing_check) # Returns TRUE where NA exists

# b. Calculate average (mean)
# We must use na.rm = TRUE to strip the NAs before calculating
avg_temp <- mean(temps, na.rm = TRUE)
print(avg_temp)