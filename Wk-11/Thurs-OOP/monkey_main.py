from monkey import Monkey

from monkey import Monkey

adam = Monkey('Adam', 'Spider Monkey')
adam.eat('banana')
adam.eat('apple')
adam.eat('banana')
adam.introduce() # Should print: "This monkey is Adam, a Spider Monkey. Foods eaten: banana, apple, banana."

adam.digest('banana') # This will remove banana from the end of the list
adam.introduce() # Should print: "This monkey is Adam, a Spider Monkey. Foods eaten: banana, apple."

print(adam.food_count()) # Should print 3

divina = Monkey('Divina', 'Squirrel Monkey')
divina.eat('bugs')
divina.eat('papaya')
divina.introduce() # Should print: "This monkey is Divina, a Squirrel Monkey. Foods eaten: bugs, papaya."
print(divina.food_count()) # should print 2
