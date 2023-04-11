def display_name():
    print("Hellow my name is Alex")

def print_each(in_list):
    for val in list:
        print(list)

def print_alt(in_list):
    for i in range(0,len(in_list),2):
        print(f"{in_list[i]} pos {i} in list")
# print_alt([0,1,2,3,4,5,6,7,8])

def range_exercise():
    # print a list of number upto 10 (excluding 10)
    print(list(range(10)))

    # print a list of numbers from 2 to 9
    print(list(range(2,10)))

    # The third value is the step value, tells the range function about the number of steps to take, default is 1
    print(list(range(2,10,3)))

def len_exercise():
    # print length of a list
    print(len([1,2,3,4,5,6]))

    # print length of a string
    print(len("How you doin?"))

    # print length of a dictionary
    print(len({"key_1": "Some value", "key_2": ["Some", "Other", "Value"]}))

# check if number is divisible by 15
def divisible_by(inval: int, divisor: int) -> bool:
    if(inval % divisor == 0):
        return True
    return False
# print(divisible_by(45,15))
# print(divisible_by(50,15))