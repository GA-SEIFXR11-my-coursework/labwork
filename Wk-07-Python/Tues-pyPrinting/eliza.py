import re

# Rules:
#     Eliza should start off by saying "Hi there, what would you like to talk about today?"
#     If the user starts with "I am X" or "I'm X" then Eliza should answer "How long have you been X?"
#     When the user mentions the word "you" anywhere in their message, then Eliza should say "We're here to talk about you, not me."
#     If the user says something starting with "I don't X" then Eliza should answer "Why don't you X
#     If the user says "no" then Eliza should say "I think you're being a bit negative."
#     If the user enters a blank line, then then Eliza should say "Goodbye" and the program should exit.
#     If none of the above matches, Eliza should say "Please go on..."
# 
#     Add other responses or create a list of generic responses and use the random module to choose a random response.

# Example convo:
# Eliza: Hi there, what would you like to talk about today?
# You: I'm not sure
# Eliza: How long have you been not sure?
# You: Um... dunno
# Eliza: Please go on...
# You: I don't want to
# Eliza: Why don't you want to?
# You: I just don't?
# Eliza: Please go on...
# You: No
# Eliza: I think you're being a bit negative.
# You:
# Eliza: Goodbye.


class Eliza:
    _keep_conversing = True
    _eliza_prefix = "Eliza:"
    _you_prefix = "You:"
    
    def __init__(self):
        return
    
    def say_hello(self):
        print(f"{self._eliza_prefix} Hi there, what would you like to talk about today?")
        return

    def say_goodbye(self):
        print(f"{self._eliza_prefix} Goodbye")
        self._keep_conversing = False
        return
    
    def say_stop_being_negative(self):
        print(f"{self._eliza_prefix} I think you're being a bit negative.")
        return
    
    def say_please_go_on(self):
        print(f"{self._eliza_prefix} Please go on...")
        return
    
    def say_about_you(self):
        print(f"{self._eliza_prefix} We're here to talk about you, not me.")
        return
    
    def get_topic(self, checks: list[str], response: str) -> str:
        ret = ""
        for check in checks:
            if( check in response.lower() ):
                ret = response.lower().split(check)[1].lstrip()
        return ret
    
    def ask_why(self, topic:str):
        print(f"{self._eliza_prefix} Why don't you {topic}?")
        return
    
    def ask_how_long(self, topic:str):
        print(f"{self._eliza_prefix} How long have you been {topic}?")
        return
        
    def user_input(self):
        response = input(f"{self._you_prefix} ")
        topic: str
        if(response == ""):
            self.say_goodbye()
            return
        
        checks = [ "im", "i'm", "i am" ]
        topic = self.get_topic(checks, response)
        if topic != "":
            self.ask_how_long(topic)
            return
        
        checks = [ "i dont", "i don't" ]
        topic = self.get_topic(checks, response)
        if topic != "":
            self.ask_why(topic)
            return
            
        if( "you" in response.lower() ):
            self.say_about_you()
            return
        
        if( "no" in response.lower().split() ):
            self.say_stop_being_negative()
            return
        
        self.say_please_go_on()
        return
    
    def converse(self):
        self.say_hello()
        while( self._keep_conversing ):
            self.user_input()
    
if __name__ == "__main__":
    eliza = Eliza()
    eliza.converse()