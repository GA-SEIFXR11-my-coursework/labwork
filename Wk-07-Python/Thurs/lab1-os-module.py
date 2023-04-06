#!/usr/bin/python3

import os

abspath_downloads = "/Users/tadyen/Downloads"
ext_dict = {}
for filename in os.listdir(abspath_downloads):
    ext = filename.split(".")
    if len(ext) == 2 and ext[0] != "" :
        ext = ext[1]
    else:
        ext = ""
    
    if ext != "":
        print(ext)
        try:
            ext_dict[ext] += 1
        except:
            ext_dict[ext] = 1

max_occurs = max(ext_dict.values())
if( list(ext_dict.values()).count(max_occurs) == 1 ):
    for key, val in ext_dict.items():
        if val == max_occurs:
            print(f"Wow, you have a lot of {key} files!")
print(ext_dict)