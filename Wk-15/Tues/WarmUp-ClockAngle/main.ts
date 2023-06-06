import assert from "assert"

function clockAngle(hour: number, minute: number){
    assert(Number.isInteger(hour))
    assert(Number.isInteger(minute))

    assert(0 < hour && hour <= 12) // 1 to 12
    assert(0 <= minute && minute <= 59) // 0 to 59

    let hourToDegree = (hour: number) => { return(hour / 12 * 360) }
    let minuteToDegree = (minute: number) => { return(minute / 60 * 360) }
    let hourDriftDegree = (hour: number, minute: number) => {
        return( minuteToDegree(minute) / 360 * (360/12) );
    }
    let smallerAngle = (angle: number) => {
        let ret: number;
        angle = (angle + 360) % 360;
        (angle > 180)
        ? ret = Math.abs(360 - angle)
        : ret = angle
        return ret
    }

    let deltaDegrees = (hourDriftDegree(hour,minute) + hourToDegree(hour) - minuteToDegree(minute) + 360 ) % 360;
    return(smallerAngle(deltaDegrees))
}

function toLoggedFunction(callback: Function ){
    return function(...args: unknown[]){
        let result: any = callback(...args);
        console.log(result);
        return result;
    }

}

let logged_clockAngle = toLoggedFunction(clockAngle)

logged_clockAngle(6, 0) // returns 180
logged_clockAngle(12, 0) // returns 0
logged_clockAngle(12, 15) // returns 82.5
logged_clockAngle(9, 45) // returns 22.5
logged_clockAngle(1, 59) // returns 65.5
logged_clockAngle(500, 34) // throws Error: Out of range
