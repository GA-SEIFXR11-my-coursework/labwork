function pomodoro(...tasks: string[][]): string[]{
    // Pomodoro is a technique of breaking up tasks into 25min of work followed by 5min breaks (with longer breaks after a set of three of these).
    const padding = {
        "start": "start",
        "normal": "5min break",
        "long": "20min break"
    }
    let output: string[] = []
    for(let i in tasks){
        let index = Number(i)
        let task = tasks[index]
        
        // if first loop
        if(index == 0){
            output.push(padding["start"])
            output.push(...task)
            continue
        }

        // middle loops
        (index % 3 != 0)
            ? output.push(padding["normal"])
            : output.push(padding["long"])
        output.push(...task)

        // if last loop
        if(index == (tasks.length - 1)){
            ((index+1) % 3 != 0)
                ? output.push(padding["normal"])
                : output.push(padding["long"])
        }
    }
    return output
}

console.log(
    pomodoro(["Write proposal", "Send email to Fred"], ["prepare presentation"], ["fill out spreadsheet"])
)
console.log(
    pomodoro(["create files", "draw wireframe"], ["add database", "make the code work"], ["add tests", "fix bugs", "make mobile friendly"])
)