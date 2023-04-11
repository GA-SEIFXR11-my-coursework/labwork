item_prices = {}
gst_rate = 0.1 # 10% GST

filename = "supermarket_item_prices.txt"
fp = open(filename)
for line in fp.readlines():
    words = line.split()
    name = words[0]
    price = float(words[1])
    if(words[2] == 'false'):
        gst = False
    else:
        gst = True
    item_prices[name] = {
        "price" : price,
        "gst"   : gst,
    }
fp.close()

def calculate_price(item_list: list[str]) -> float:
    total: float = 0
    for item in item_list:
        if item in item_prices.keys():
            total += item_prices[item]["price"]
    return total

def prompt_items() -> list[str]:
    ret: list[str] = []
    resp = input("Items (comma seperated) eg. banana,milk,milk,chips \n: ")
    ret = resp.split(',')
    for item in ret:
        if item not in item_prices:
            print(f"{item} is unknown. Removing from the list...")
            ret.remove(item)
    return ret
    
def print_receipt(items: list[str]):
    subtotal = calculate_price(items)
    total_gst = 0
    print()
    print("Items: ")
    for item in items:
        price = item_prices[item]["price"]
        gst = 0
        if item_prices[item]["gst"]:
            gst = price * gst_rate
            total_gst += gst
        print(f"{item}\t${price:0.2f}\tGST:{gst:0.2f}")
    print()
    print(f"subtotal: \t${subtotal:0.2f}")
    print(f"GST: \t${total_gst:0.2f}")
    print(f"Total: \t${subtotal+total_gst:0.2f}")
    
if __name__ == "__main__":
    items = prompt_items()
    print_receipt(items)
    
