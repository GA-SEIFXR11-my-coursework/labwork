import random
from enum import Enum

class Token_Types(Enum):
    X = "X"
    O = "O"

class Player_Types(Enum):
    COMPUTER = "computer"
    PLAYER = "player"

class VS_Options(Enum):
    PVP = "Player vs Player"
    PVC = "Player vs Computer"
    
class Difficulty_Options(Enum):
    EASY = "easy"
    NORMAL = "normal"
    HARD = "hard"

class Game_Session_States(Enum):
    WIN = "win"
    LOSE = "computer wins"
    DRAW = "draw"
    PLAYING = "playing"
    RESET = "reset"

class Player():

    def __init__(self, name: str = None, token: Token_Types = None, player_type: Player_Types = None):
        self.name = name
        self.token = token
        self.player_type = player_type
        return

    def set_name(self, name:str):
        self.name = name
        return
    
    def set_token(self, token: Token_Types):
        self.token = token
        return
    
    def set_player_type(self, player_type: Player_Types):
        self.player_type = player_type
        return
    

class Board():
    WIN_CONDITIONS = [
        [0, 1, 2],
        [3, 4, 5],
        [6, 7, 8],
        [0, 3, 6],
        [1, 4, 7],
        [2, 5, 8],
        [0, 4, 8],
        [2, 4, 6]
    ]
    
    def __init__(self):
        # Spaces are empty grid positions
        self.grid = [' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ', ' ']
        return
    
    def isValidMove(self, index):
        index = index - 1 # convert 1-9 to 0-8
        if index < 0 or index > len(self.grid):
            return False
        if self.grid[index] == ' ':
            return True
        return False

    def placeToken(self, token, index):
        index = index - 1
        self.grid[index] = token
        return
        
    def checkWin(self, token):
        ## Check if token ('X' or 'O') has a win
        for index_list in self.WIN_CONDITIONS:
            if all([self.grid[index] == token for index in index_list]):
                # All three indexes match the given token
                return True
        return False

    def checkDraw(self):
        # Draw if there are no spaces in the grid
        return ' ' not in self.grid
    
    def display(self):
        print()
        print(' ' + ' | '.join(self.grid[0:3]))
        print(' ' + '-'*9)
        print(' ' + ' | '.join(self.grid[3:6]))
        print(' ' + '-'*9)
        print(' ' + ' | '.join(self.grid[6:9]))
        print()
        return

class TypedPrompts():
    def prompt_int(self, prompt_msg: str = "", invalid_msg: str = "", lower:int = None, upper:int = None):
        while(True):
            inval = input(prompt_msg+'\n')
            try:
                inval = int(inval)
            except:
                print(invalid_msg)
                continue
            lower_test = (lower <= inval) if (lower != None) else True
            upper_test = (inval <= upper) if (upper != None) else True
            if( lower_test and upper_test ):
                return inval
            else:
                print(invalid_msg)
                continue
        return # Should never reach here

    def prompt_string(self, prompt_msg: str = "", invalid_msg: str = "", accepted_strs:list[str] = None):
        while(True):
            inval = input(prompt_msg+'\n')
            try:
                inval = str(inval)
            except:
                print(invalid_msg)
                continue
            test = (inval in accepted_strs) if (accepted_strs != None) else True
            if( test ):
                return inval
            else:
                print(invalid_msg)
                continue
        return # Should never reach here

class TicTacToeGame():
    games_played:int
    games_won:int
    winner: Player
    game_session: Game_Session_States
    difficulty: Difficulty_Options
    
    def __init__(self):
        self.board = Board()
        self.player_1 = Player()
        self.player_2 = Player()
        self.games_played = 0
        self.games_won = 0
        self.game_session = Game_Session_States.RESET
        return
    
    def setup_game(self):
        # Game type
        prompt_msg = f"Select game type: "
        valid_inputs = []
        for opt in VS_Options:
            prompt_msg += f"\n'{opt.name}' - {opt.value}"
            valid_inputs.append(opt.name)
        vs_option = TypedPrompts().prompt_string(prompt_msg=prompt_msg, accepted_strs=valid_inputs)
        vs_option = VS_Options[vs_option]
        
        self.player_1.set_player_type(Player_Types.PLAYER)
        if vs_option is VS_Options.PVP:
            self.player_2.set_player_type(Player_Types.PLAYER)
        elif vs_option is VS_Options.PVC:
            self.player_2.set_player_type(Player_Types.COMPUTER)
        else:
            raise Exception(f"Invalid vs option {vs_option}")  
        
        # Difficulty (Computer)
        if vs_option is VS_Options.PVC:
            prompt_msg = f"Select difficulty: "
            valid_inputs = []
            for opt in Difficulty_Options:
                prompt_msg += f"\n'{opt.name}' - {opt.value}"
                valid_inputs.append(opt.name)
            difficulty = TypedPrompts().prompt_string(prompt_msg=prompt_msg, accepted_strs=valid_inputs)
            difficulty = Difficulty_Options[difficulty]
            self.difficulty = difficulty
        
        # Player names
        if vs_option is VS_Options.PVP:
            prompt_msg = f"Input player 1 name: "
            self.player_1.set_name(TypedPrompts().prompt_string(prompt_msg=prompt_msg))
            prompt_msg = f"Input player 2 name: "
            self.player_2.set_name(TypedPrompts().prompt_string(prompt_msg=prompt_msg))
        elif vs_option is VS_Options.PVC:
            prompt_msg = f"Input your name: "
            self.player_1.set_name(TypedPrompts().prompt_string(prompt_msg=prompt_msg))
            self.player_2.set_name("Computer")
        else:
            raise Exception(f"Invalid vs option {vs_option}")
        
        # Token
        print(f"Tokens are '{Token_Types.X.value}' and '{Token_Types.O.value}'. '{Token_Types.X.value}' plays first.")
        print(f"Tokens options: '{Token_Types.X.name}', '{Token_Types.O.name}'.")
        valid_inputs = [x.name for x in list(Token_Types)]
        if vs_option is VS_Options.PVP:
            prompt_msg = f"Select {self.player_1.name}'s token:"
        elif vs_option is VS_Options.PVC:
            prompt_msg = f"Select your token:'"
        else:
            raise Exception(f"Invalid vs option {vs_option}")
        token = TypedPrompts().prompt_string(prompt_msg=prompt_msg, accepted_strs=valid_inputs)
        token = Token_Types[token]
        token_2 = list(Token_Types)
        token_2.remove(token)
        token_2 = token_2[0]
        
        self.player_1.set_token(token)
        self.player_2.set_token(token_2)
        
        # 'X' starts first, Set 'X' bearer to player_1. Player_1 starts first
        if self.player_1.token is not Token_Types.X:
            self.player_1, self.player_2 = self.player_2, self.player_1
        
        return
    
    def begin(self):
        self.board.display()
        self.game_session = Game_Session_States.PLAYING
        while( self.game_session is Game_Session_States.PLAYING ):
            self.next_turn(self.player_1)
            if self.game_session is not Game_Session_States.PLAYING:
                break
            self.next_turn(self.player_2)
        self.game_over()
        return
    
    def next_turn(self, player: Player):
        if player.player_type is Player_Types.PLAYER:
            self.player_move(player)
        elif player.player_type is Player_Types.COMPUTER:
            self.computer_move(player)
        else:
            raise Exception(f"invalid player or player type in {player}")
        return
        
    def game_over(self):
        match self.game_session:
            case Game_Session_States.WIN:
                print(f"** {self.winner.name} wins! **")
                pass
            case Game_Session_States.LOSE:
                print(f"** You've been had. Computer wins! **")
                pass
            case Game_Session_States.DRAW:
                print(f"** DRAW! **")
                pass
            case _:
                raise Exception(f"Invalid game session {self.game_session}")
        return
        
    def player_move(self, player: Player):
        token_str = player.token.value
        print(f"{player.name}'s turn ({token_str}).")
        move = -1
        while not self.board.isValidMove(move):
            prompt_msg = f"{player.name}, enter a move (1-9): "
            invalid_msg = f"Invalid value entered."
            move = TypedPrompts().prompt_int(prompt_msg=prompt_msg, invalid_msg=invalid_msg, lower=1, upper=9)
            
        self.board.placeToken(token_str, move)
        self.board.display()
        if( self.board.checkWin(token_str) ):
            self.game_session = Game_Session_States.WIN
            self.winner = player
            return
        if( self.board.checkDraw() ):
            self.game_session = Game_Session_States.DRAW
            return
        return
        
    def computer_move(self, computer: Player):
        token_str = computer.token.value
        print(f"{computer.name}'s turn ({token_str}).")
        match self.difficulty:
            case Difficulty_Options.EASY:
                weight = 0.8 # higher is more ideal
                if random.random() > weight:
                    move = self.perfect_move(computer.token)
                else:
                    move = self.random_move()
                pass
            case Difficulty_Options.HARD:
                move = self.perfect_move(computer.token)
                pass
            case Difficulty_Options.NORMAL:
                move = self.greedy_move(computer.token)
                if move == -1:
                    weight = 0.5 # higher is more ideal
                    if random.random() > weight:
                        move = self.perfect_move(computer.token)
                    else:
                        move = self.random_move()
                pass
            case _:
                raise Exception(f"Invalid Difficulty option {self.difficulty}")
        if( not self.board.isValidMove(move) ):
            print(f"COMPUTER messes up and attempts to move {move}. Randomising move...")
            move = self.random_move()
        print(f"Computer plays: {move}")
        self.board.placeToken(token_str, move)
        self.board.display()
        if( self.board.checkWin(token_str) ):
            self.game_session = Game_Session_States.LOSE
            return
        if( self.board.checkDraw() ):
            self.game_session = Game_Session_States.DRAW
            return
        return
        
    def greedy_move(self, token: Token_Types):
        # Returns an opportunistic move if an instant win or loss presents itself
        # Returns a -1 otherwise
        move = -1
        token_str = token.value
        
        # find any auto-wins or auto-losses:
        win_sets = []
        def_sets = []
        for set in self.board.WIN_CONDITIONS:
            line_vals = [self.board.grid[x] for x in set]
            # cull all empty or fully-filled lines
            if( all([x == ' ' for x in line_vals]) ):
                continue
            if( all([x != ' ' for x in line_vals]) ):
                continue
            # Cull lines with 2 blanks
            if line_vals.count(' ') == 2:
                continue
            # Leaving lines with 1 blank. Check for doubles
            rem = [x for x in line_vals if x != ' ']
            if rem[0] == rem[1]:
                if token_str in line_vals:
                    win_sets.append(set)
                else:
                    def_sets.append(set)
        
        # This creates a priority to win instead of defending
        if len(win_sets) != 0:
            set = win_sets[0]
        elif len(def_sets) != 0:
            set = def_sets[0]
        else:
            set = []
        if len(set) != 0:
            line_vals = [self.board.grid[x] for x in set]
            rem = [x for x in line_vals if x != ' ']
            if rem[0] == rem[1]:
                move = [set[x] for x in range(3) if line_vals[x] == ' ' ][0]
                return( move + 1 )
        return move
        
    
    def perfect_move(self, token: Token_Types):
        move = -1
        # return index that starts at 1
        token_str = token.value
        oppo_token_str = [x for x in list(Token_Types) if x is not token][0].value
        
        move = self.greedy_move(token)
        if move != -1:
            return move # +1 already happens in greedy_move()
        
        # Round 1 of 9: Starter: Open at corners
        moves = calc_4_rotated_in_grid(0)
        if self.board.grid.count(' ') == 9:
            move = random.choice(moves)
            return move + 1
        
        # Round 2 of 9: Reacter:
        if self.board.grid.count(' ') == 8:
            # Opponent played center, play a corner
            if self.board.grid[4] != ' ':
                moves = calc_4_rotated_in_grid(0)
                move = random.choice(moves)
                return move + 1
            # Opponent played a corner, play center
            # Opponent played a side, play center
            move = 4
            return move + 1
        
        # Round 3 of 9: Starter
        corner_vals = [self.board.grid[x] for x in calc_4_rotated_in_grid(0)]
        if( self.board.grid.count(' ') == 7 and not all(x == ' ' for x in corner_vals)):
            # Opponent reacted middle, play opposite corner or non-adjacent side
            if self.board.grid[4] == oppo_token_str:
                rotations = 0
                grid = [x for x in self.board.grid]
                while( grid[0] != token_str ):
                    rotations += 1
                    grid = calc_rotate_right90(grid, 1)
                move = random.choice([5,7,8])
                move = calc_4_rotated_in_grid(move)[rotations]
                return move + 1
            # Opponent played a side. Instant win by forcing another side (place at adjacent corner)
            side_vals = [self.board.grid[x] for x in calc_4_rotated_in_grid(1) ]
            if any(x == oppo_token_str for x in side_vals ):
                rotations = 0
                grid = [x for x in self.board.grid]
                while( grid[0] != token_str ):
                    rotations += 1
                    grid = calc_rotate_right90(grid, 1)
                if( grid[1] == ' '):
                    move = 2
                elif( grid[3] == ' '):
                    move = 6
                else:
                    move = random.choice([2,6])
                move = calc_4_rotated_in_grid(move)[rotations]
                return move + 1
            # Play opposite corner if open, else other corner
            rotations = 0
            grid = [x for x in self.board.grid]
            corner_vals = [grid[x] for x in calc_4_rotated_in_grid(0)]
            if token_str in corner_vals:
                while( grid[0] != token_str ):
                    rotations += 1
                    grid = calc_rotate_right90(grid, 1)
                moves = [ x for x in [2,6,8] if grid[x] == ' ' ]
                move = random.choice(moves) 
                return move + 1
            # If the first move wasn't in a corner, it isn't a perfect game anymore... proceed on then
        
        # Round 4 of 9 : Reacter:
        if self.board.grid.count(' ') == 6:
            # If token is in center and player has both opposite corners, play any side:
            line_sets = [[0,4,8],[2,4,6]]
            for set in line_sets:
                comparison_vals = [oppo_token_str, token_str, oppo_token_str]
                line_vals = [self.board.grid[x] for x in set]
                if all([line_vals[x] == comparison_vals[x] for x in range(3)]):
                    moves = calc_4_rotated_in_grid(1)
                    moves = [x for x in moves if self.board.grid[x] == ' ']
                    move = random.choice(moves)
                    return move + 1
        
        # Play move with double-utility or against double-utility
        self_line_sets = []
        oppo_line_sets = []
        for set in self.board.WIN_CONDITIONS:
            line_vals = [self.board.grid[x] for x in set]
            # cull all empty or fully-filled lines
            if( all([x == ' ' for x in line_vals]) ):
                continue
            if( all([x != ' ' for x in line_vals]) ):
                continue
            # Cull lines with 1 blank
            if line_vals.count(' ') == 1:
                continue
            # Leaving lines with 2 blanks. 
            # Seperate lines with opponent token
            if oppo_token_str in line_vals:
                oppo_line_sets.append(set)
                continue
            self_line_sets.append(set)
        # What remains are lines with 1 token and 2 blanks
        
        # Odd turns: Initiator, Even turns: Defender
        if self.board.grid.count(' ') % 2 == 1:
            line_sets = [x for x in self_line_sets]
        else:
            line_sets = [x for x in oppo_line_sets]
            
        # Find overlapping indexes that are empty between any 2 sets
        if len(line_sets) != 0:
            indexes = []
            for set in line_sets:
                for index in set:
                    if self.board.grid[index] == ' ':
                        indexes.append(index)
            moves = [x for x in indexes if indexes.count(x) >= 2] # keep only duplicates
        if len(moves) != 0:
            moves = list(dict(zip(moves,moves))) # flatten duplicates
            move = random.choice(moves)
            return move+1
        
        # All else fails
        return self.random_move()
        
    def random_move(self) -> int:
        # return index that starts at 1
        available_indexes = [x for x in range(9) if self.board.grid[x] == ' ']
        move = random.choice( available_indexes )
        return move + 1

def calc_rotate_right90(grid_in, num_of_rotations):
    # index starts at 0
    # 0 1 2      6 3 0
    # 3 4 5  ->  7 4 1
    # 6 7 8      8 5 2
    new_order = [6, 3, 0, 7, 4, 1, 8, 5, 2]
    current_grid = [ x for x in grid_in ]
    for _ in range(num_of_rotations):
        new_grid = [current_grid[x] for x in new_order]
        current_grid = new_grid
    return new_grid

def calc_4_rotated_in_grid(index_in):
    new_order = [6, 3, 0, 7, 4, 1, 8, 5, 2]
    # index starts at 0
    ret = []
    current_index = index_in
    for _ in range(4):
        ret.append(current_index)
        current_index = new_order[current_index]
    return ret

if __name__ == "__main__":
    newGame = TicTacToeGame()
    newGame.setup_game()
    newGame.begin()
    pass