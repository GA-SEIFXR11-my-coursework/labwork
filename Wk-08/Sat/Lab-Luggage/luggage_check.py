LUGGAGE_CHECKS = {
    "HEIGHT"    : { "LIMIT" : 56, "MSG" : "Height exceeds 56cm" }, 
    "WIDTH"     : { "LIMIT" : 36, "MSG" : "Width exceeds 36cm" },
    "DEPTH"     : { "LIMIT" : 23, "MSG" : "Depth exceeds 23cm" },
    "WEIGHT"    : { "LIMIT" : 10, "MSG" : "Weight exceeds 10kg" },
}

# Rules
# Your carry-on bag cannot weigh more than 10kg
# Your carry-on bag must fit in the overhead lockers and not exceed 56cm (height) x 36cm (width) x 23cm (depth).
def check(height_cm, width_cm, depth_cm, weight_kg) -> list[str]:
    try:
        height = int(height_cm)
        width = int(width_cm)
        depth = int(depth_cm)
        weight = int(weight_kg)
    except:
        raise Exception("Parsed values are not numbers. This should've been prevented prior to call.")
    
    msgs: list[str] = []
    if( height > LUGGAGE_CHECKS["HEIGHT"]["LIMIT"] ):
        msgs.append( LUGGAGE_CHECKS["HEIGHT"]["MSG"])
        
    if( width > LUGGAGE_CHECKS["WIDTH"]["LIMIT"] ):
        msgs.append( LUGGAGE_CHECKS["WIDTH"]["MSG"])
        
    if( depth > LUGGAGE_CHECKS["DEPTH"]["LIMIT"] ):
        msgs.append( LUGGAGE_CHECKS["DEPTH"]["MSG"])
        
    if( weight > LUGGAGE_CHECKS["WEIGHT"]["LIMIT"] ):
        msgs.append( LUGGAGE_CHECKS["WEIGHT"]["MSG"])
    
    return msgs