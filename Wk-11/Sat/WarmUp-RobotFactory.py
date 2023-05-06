import time
import random

class Robot():
    name:str
    time_of_creation: time.time
    time_of_last_reset: time.time
    instruction_count:int
    
    def __init__(self):
        self.time_of_creation = time.time()
        self.instruction_count = 0
        self.reset()
        return
    
    def reset(self):
        self.regenerate_name()
        self.time_of_last_reset = time.time()
        # dont add instruction, regenerate_name() already adds one
        return
    
    def generate_name(self):
        new_name = ""
        for _ in range(2):
            new_name += random.choice([*'qwertyuiopasdfghjklzxcvbnm'.upper()])
        for _ in range(3):
            new_name += str( random.randint(0,9) )
        return new_name
    
    def regenerate_name(self):
        self.name = self.generate_name()
        self.instruction_count += 1
        return
            
    def getName(self):
        print(self.name)
        self.instruction_count += 1
        return self.name
    
    def timers(self):
        time_since_last_boot = time.time() - self.time_of_last_reset
        time_since_creation = time.time() - self.time_of_creation
        print(f"{time_since_last_boot : .0f} seconds since last boot, {time_since_creation : .0f} seconds since creation")
        return
    
    def instructionCount(self):
        self.instruction_count += 1
        print(self.instruction_count)
        return
    
if __name__ == "__main__":
    robot_1 = Robot()
    robot_1.getName()
    robot_1.getName()
    time.sleep(5)
    robot_1.timers()
    robot_1.reset()
    robot_1.getName()
    robot_1.instructionCount()
    time.sleep(5)
    robot_1.timers()