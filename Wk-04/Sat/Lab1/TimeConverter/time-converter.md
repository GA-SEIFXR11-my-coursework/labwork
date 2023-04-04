# Time converter
Write a function that accepts a time in AM/PM format (`hh:mm:ssAM` or `hh:mm:ssPM`) and convert it to military (24-hour) time (`hh:mm:ss`).
Note:
 - 12:00:00AM on a 12-hour clock is 00:00:00 on a 24-hour clock.
 - 12:00:00PM on a 12-hour clock is 12:00:00 on a 24-hour clock.
 - All input times are valid.
 - throw error if the input does not contain AM or PM (since we need this to determine the time)

Examples (make sure you test all of these!):

```
timeConverter('07:05:45AM')
// expect to return '07:05:45'.
```

```
timeConverter('07:05:45PM')
// expect to return '19:05:45'.
```
```
timeConverter('12:01:00PM');
// expect to return '12:01:00'.
```
```
timeConverter('12:01:00AM');
// expect to return '00:01:00'.
```


Extension:

Make it error prone
> What if the input is 19:95:45PM ? Return/console.log an error if the given input's hour/minute/second value(s) is/are invalid

### Hint!
- Use string `split` method to separate components to be able to operate upon them individually 
- Use string `slice` method to remove the AM/PM from the input during printing output