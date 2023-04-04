def prompt_positive_int(prompt: str) -> int:
    ret = int()
    while( True ):
        try:
            ret = int( input(prompt) )
            assert( type(ret) == int )
        except:
            print("Invalid input type. Ensure it is an integer")
            continue
            
        try:
            assert( ret > 0)
        except:
            print("Ensure input is 1 or greater.")
            continue
        
        break
    return ret

class CookieEater:
    def __init__(self):
        self.cookies = int()
        self.blame = str()
        self.eat_amt = int()
    
    def set_cookies(self):
        self.cookies = prompt_positive_int("How many cookies are left? ")
        return
        
    def eat_all_cookies(self, keep_asking:bool=None):
        keep_eating = True
        if keep_asking == None or keep_asking == False:
            while (self.cookies - self.eat_amt) >= 0:
                self.eat_cookies()
            if self.cookies > 0:
                self.set_eat_amt(self.cookies)
                self.eat_cookies()
        elif keep_asking == True:
            while keep_eating:
                if(self.cookies > 0):
                    self.eat_cookies()
                if(self.cookies > 0):
                    keep_eating = self.are_more_eaten()
                else:
                    keep_eating = False
        if(self.cookies > 0):
            print(f"Phew! There are still {self.cookies} cookies left.")
        return
 
    def set_eat_amt(self, amt=None):
        if( amt == None):
            self.eat_amt = prompt_positive_int("Amt of cookies to be eaten next: ")
        else:
            self.eat_amt = amt
        return
    
    def eat_cookies(self):
        try:
            assert( self.eat_amt > 0 )
        except:
            print(f"eat amount is not initialised yet in {self}")
            return
        
        if (self.cookies - self.eat_amt) >= 0:
            if( self.cookies == 1):
                print(f"There was {self.cookies} cookie left. ", end="")
            else:
                print(f"There were {self.cookies} cookies left. ", end="")
            
            print(f"But then I ate {self.eat_amt}. ", end="")
            self.cookies -= self.eat_amt
            
            if( self.cookies == 1):
                print(f"Now there is {self.cookies} cookie left.")
            else:
                print(f"Now there are {self.cookies} cookies left.")     
        else:
            print(f"Attempted to eat {self.eat_amt} cookies but there are only {self.cookies} cookies remaining.")
        
        return
    
    def are_more_eaten(self) -> bool:
        keep_asking = True
        while(keep_asking):
            response = input("Are more being eaten? ('yes or no')")
            if( "yes" in response.lower() ):
                self.set_eat_amt()
                return True
            if( "no" in response.lower() ):
                return False
            print("Invalid input. Must be 'yes' or 'no'")
        
    def blame_someone(self):
        blame = self.blame
        blame = input("Who ate all the cookies?")
        try:
            assert( type(blame) == str )
        except:
            raise Exception("Input is not a str")
        
        print(f"But then {blame} ate one")
        self.blame = blame
        return
    

if __name__ == "__main__":
    cookie_eater = CookieEater()
    cookie_eater.set_cookies()
    cookie_eater.set_eat_amt()
    cookie_eater.eat_all_cookies(True)
    if cookie_eater.cookies <= 0:
        cookie_eater.blame_someone()
    