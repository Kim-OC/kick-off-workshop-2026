# Exercise 1 Sample Project — Bug Calculator

A simple Python calculator with an intentional bug.

```python
# calculator.py

def add(a, b):
    return a + b

def subtract(a, b):
    return a - b

def multiply(a, b):
    return a * b

def divide(a, b):
    # BUG: no zero-division check
    return a / b

def average(numbers):
    # BUG: integer division instead of float
    return sum(numbers) // len(numbers)

def main():
    print("Simple Calculator")
    print("1. Add")
    print("2. Subtract")
    print("3. Multiply")
    print("4. Divide")
    print("5. Average")

    choice = input("Enter choice (1-5): ")

    if choice == "5":
        nums = input("Enter numbers separated by space: ")
        numbers = [int(n) for n in nums.split()]
        result = average(numbers)
        print(f"Average: {result}")
    else:
        a = float(input("Enter first number: "))
        b = float(input("Enter second number: "))

        if choice == "1":
            print(f"Result: {add(a, b)}")
        elif choice == "2":
            print(f"Result: {subtract(a, b)}")
        elif choice == "3":
            print(f"Result: {multiply(a, b)}")
        elif choice == "4":
            print(f"Result: {divide(a, b)}")
        else:
            print("Invalid choice")

if __name__ == "__main__":
    main()
```

## Known Issues (for facilitator eyes only)

1. **Critical:** `divide()` has no zero-division guard — crashes on `divide(1, 0)`
2. **Bug:** `average()` uses `//` (floor division) — `average([1, 2])` returns `1` instead of `1.5`
3. **Missing:** No input validation — `int("abc")` crashes
4. **Style:** Mixed use of `float` and `int` for numbers
