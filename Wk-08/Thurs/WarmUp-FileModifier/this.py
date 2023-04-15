
def create_file():
    outfile = input("Enter a new file name: ")
    outdata = input("Enter the data you want to store to the file ( separate new line content with a comma): \n")
    fp = open(outfile, "w")
    lines = outdata.split(",")
    fp.writelines( [ x+"\n" for x in lines ])
    fp.close()
    return

if __name__ == "__main__":
    create_file()
    