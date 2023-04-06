#!/usr/bin/python3

# Create a list for the days of the week (as strings, e.g. 'Monday').
g_days = [ "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
        "Sunday",
        ]

print(g_days)

# 1. Ask the user for their least favourite day of the week. Remove that day from the list.
def leastFavDay():
    while( True ):
        response = input("What's your least fav day of the week?:\n> ")
        for day in g_days:
            if response.lower() == day.lower():
                g_days.remove(day)
                return
    return

leastFavDay()
print(g_days)
            
# 2. Ask the user to make up a new day of the week. Add that day to the end of the list.
def makeNewDay():
    while( True ):
        response = input("Come up with a new day for the week.:\n> ")
        if response != "":
            g_days.append(response)
            return
    return

makeNewDay()
print(g_days)

# 3. Ask the user how many days they would like in a week. Modify your list to only have that many days.

def askHowManyDays():
    while( True ):
        response = input("How many days would you like in a week?:\n> ")
        try:
            response = int(response)
            assert( type(response) == int)
            assert( response > 0 )
        except:
            print("Invalid input.")
            continue
        
        while( len(g_days) > response):
            g_days.pop()
        
        while( len(g_days) < response ):
            print(f"We have {len(g_days)} days of desired {response} days. Make a new day until desired amount is reached...")
            makeNewDay()
            
        return

askHowManyDays()
print(g_days)

# 4. Sort the days alphabetically. Hint: there is a Python function for this!
print("sorting the days out alphabetically...")
g_days.sort(key = lambda x: x.lower() )
print(g_days)