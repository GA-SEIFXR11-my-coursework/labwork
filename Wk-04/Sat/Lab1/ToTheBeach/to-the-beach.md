# To the beach!

Write a program that, given a minimum temperature and a maximum rainfall forecast, output a list of day you can go to the beach.

Your code needs to store the following forecast information:

- Monday: the temperature is 20 and there is 12mm of rain
- Tuesday: the temperature is 25 and there is 6mm of rain
- Wednesday: the temperature is 27 and there is 24mm of rain
- Thursday: the temperature is 32 and there is 65mm of rain
- Friday: the temperature is 18 and there is 2mm of rain
- Saturday: the temperature is 26 and there is 0mm of rain
- Sunday: the temperature is 27 and there is 14mm of rain

Think carefully about how do you want to represent this information in your code. Do you want to store it in an array? In an object? What structure will help you find the information when you need it?

## Part 1:

Write a function that takes a minimum temperature, and returns which days are warm enough (greater than or equal to that temperature) to go to the beach:

Examples:
```
warmEnough(24)
// Should return ['Tuesday', 'Wednesday', 'Thursday', 'Saturday', 'Sunday']
```

```
warmEnough(27)
// Should return ['Wednesday', 'Thursday', 'Sunday']
```

```
warmEnough(34)
// Should return []
```

## Part 2:

In order to go to the beach, it also shouldn't be raining too much. Write another function to find the days that are both warm enough and dry enough.

Examples: 
```
warmAndDryEnough(24, 8)
// The only days that are at least 24 degrees and no more than 8mm of rain are Tuesday and Saturday
// Should return ["Tuesday", "Saturday"]
```

```
warmAndDryEnough(24, 0)
// Should return ["Saturday"]
```