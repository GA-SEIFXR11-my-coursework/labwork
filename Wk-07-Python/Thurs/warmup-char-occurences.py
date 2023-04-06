#!/usr/bin/python3

def char_occurences(input: str) -> dict:
    input = input.lower()
    ret = {}
    for char in input:
        if char in "qwertyuiopasdfghjklzxcvbnm":
            try:
                ret[char] += 1
            except:
                ret[char] = 1
    return ret

def count_char(input: str, char: str) -> int:
    char = char.lower()
    if len(char) != 1:
        print("parameter (char) is not a char")
        return
    occurences = char_occurences(input)
    ret: int 
    try:
        ret = int( occurences[char] )
    except:
        ret = 0
    return ret

def main():
    prompt = "Please enter a sentence: "
    response = input(prompt)
    occurences = char_occurences(response)
    if occurences == {}:
        print("no characters found in sentence")
        return
    
    print(f"Number of e's: { count_char(response, 'e') }")
    print(f"Number of t's: { count_char(response, 't') }")
    print( occurences )
    max_occurence = max( occurences.values() )
    print("most frequent:")
    for x in occurences:
        y = occurences[x]
        if y == max_occurence:
            print(f"'{x}': {y}")
    return

if __name__ == "__main__":
    main()