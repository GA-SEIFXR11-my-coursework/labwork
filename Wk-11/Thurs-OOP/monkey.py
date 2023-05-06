class Monkey():
    foods_eaten: list[str] = []
    total_foods_eaten: int = 0
    
    def __init__(self, name: str, species: str):
        self.name = name
        self.species = species
        return
        
    def eat(self, food:str):
        """
        This adds 1 occurence of the specified food to the list of foods eaten
        
        Args:
            food (str): food to be added
        """
        self.foods_eaten.append(food)
        self.total_foods_eaten += 1
        return
    
    def food_count(self):
        return self.total_foods_eaten
    
    def introduce(self):
        printable = f"""
            This monkey is {self.name}, a {self.species}. 
            Foods eaten: {", ".join(self.foods_eaten)}
        """
        printable = "\n".join([ x.strip() for x in printable.split('\n')[1:-1] ]) # cleans up extra lines and spaces
        print(printable)
        return
    
    def digest(self, food: str):
        """
        This removes 1 occurence of the specified food from the list of foods eaten
        
        Args:
            food (str): food to be removed
        """
        # extra reversal steps to remove from the end instead of front
        self.foods_eaten = self.foods_eaten[::-1]
        self.foods_eaten.remove(food)
        self.foods_eaten = self.foods_eaten[::-1]
        return
    