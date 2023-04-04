# Duplicate word filter

Your task is write a function that removes all duplicate words from a string, and returns a new string with only single words (the first occurrance of each word).

Examples:

```
removeDuplicates('alpha beta beta gamma gamma gamma delta alpha beta beta gamma gamma gamma delta'
// Should return 'alpha beta gamma delta'
```

```
removeDuplicates('the cat sat on the mat on the other cat')
// Should return 'the cat sat on mat other'
```

Note: This function takes a string as it's argument and returns a string, but you're probably going to need to use arrays.

**Hint:**

- Use for loop