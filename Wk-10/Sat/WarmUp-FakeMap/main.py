import random

MAX_ROWS = 5
MAX_COLS = 5

# Coords index starts at 0
class FakeMap():
    def __init__(self, rows:int , cols:int, treasure_coord: tuple):
        assert(rows > 0)
        assert(cols > 0)
        self.rows = rows
        self.cols = cols
        self.set_coord(treasure_coord)
        return
    
    def set_coord(self, coord):
        assert(coord[0] >= 0 and coord[0]<self.rows)
        assert(coord[1] >= 0 and coord[1]<self.cols)
        self.coord = coord
        return
    
    def generate_map(self):
        self.grid = []
        for x in range(self.rows):
            rows = []
            for y in range(self.cols):
                printable = "A"
                if(self.coord == (x,y) ):
                    printable = "X"
                rows.append(printable)
            self.grid.append(rows)
        return
                
    def print_map(self):
        # print(self.grid)
        for row in self.grid:
            for col in row:
                print(col, end=" ")
            print()
        return
    
    def randomise_coord(self):
        x = random.randint(0,self.rows-1)
        y = random.randint(0,self.cols-1)
        self.coord = (x,y)
        return
    
if __name__ == "__main__":
    treasure_coord = (0,3)
    map = FakeMap(MAX_ROWS, MAX_COLS, treasure_coord )
    print(treasure_coord)
    map.generate_map()
    map.print_map()
    print("random spot")
    map.randomise_coord()
    map.generate_map()
    map.print_map()