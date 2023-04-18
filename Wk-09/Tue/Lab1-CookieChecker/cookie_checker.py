import requests

class CookieChecker:
    website = None
    response = None
    
    def __init__(self, website = None):
        if website == None:
            return
        else:
            self.set_website(website)
        return
            
    def set_website(self,website):
        if website[:4] == "http":
            self.website = website
        else:
            self.website = f"https://{website}"
        return

    def get_response(self):
        self.response = requests.get(self.website)
        return
    
    def check_cookie(self) -> bool:
        if self.response == None:
            self.get_response()
            
        if len(self.response.cookies) == 0:
            return False
        else:
            return True
        return # should never reach here
    
    def disp_cookie(self):
        print(self.response.headers["Set-Cookie"])
        print()
        cookie = self.response.cookies
        print(cookie._cookies)
        
if __name__ == "__main__":
    cookie_checker = CookieChecker()
    website = input("Enter a website: ")
    cookie_checker.set_website(website)
    cookie_checker.get_response()
    if cookie_checker.check_cookie():
        print("I see cookies!")
        cookie_checker.disp_cookie()
    else:
        print("No cookies here.")