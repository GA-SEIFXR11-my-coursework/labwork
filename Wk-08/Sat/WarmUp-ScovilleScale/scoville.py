from collections import OrderedDict

# This MUST be sorted descending
Pepper_Heat_Lowerbounds = OrderedDict({ 
    "Pepper spray"          : 1.5 * 1000 * 1000,
    "Ghost pepper"          : 750 * 1000,
    "Red savina habanero"   : 350 * 1000,
    "Habanero chili"        : 100 * 1000,
    "Bird's eye chili"      :  50 * 1000,
    "Cayenne pepper"        :  25 * 1000,
    "Serrano pepper"        :  10 * 1000,
    "Jalapeño pepper"       : 2500,
    "Anaheim pepper"        : 1000,
    "Banana pepper"         :  100,
    "Bell pepper"           :    0,
})

def prompt_for_int(prompt: str) -> int:
    ret: int
    while True:
        response = input(prompt)
        try:
            ret = int(response)
            return ret
        except:
            print("Invalid input, must be int")
            continue
    return ret # should never reach here
        
def scoville_app(scoville_score:int = None) -> str:
    if scoville_score == None:
        scoville_score = prompt_for_int("Enter a Scoville score: ")
    for pepper, heat in Pepper_Heat_Lowerbounds.items():
        lowest_match = pepper
        if heat < scoville_score:
            break
    output = (f"That's as spicy as a {lowest_match}!")
    print(output)
    return output

if __name__ == "__main__":
    scoville_app()