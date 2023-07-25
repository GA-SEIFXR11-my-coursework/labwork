import * as React from "react";
import dayjs from "dayjs";
import toObject from "dayjs/plugin/toObject";
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';

type DayjsObject = ReturnType<typeof dayjs.Dayjs.prototype.toObject>;
dayjs.extend(toObject);

export default function DateFact(){
  const [date, setDate] = React.useState<dayjs.Dayjs | null>(dayjs());
  const [dateObj, setDateObj] = React.useState<DayjsObject>();
  const [dateFact, setDateFact] = React.useState('');

  // new date change
  React.useEffect(()=>{
    console.log("useEffect A")
    setDateObj(date?.toObject());
  },[date])

  // dateObj change
  React.useEffect(()=>{
    console.log("useEffect B")
    if( !dateObj ){ return }
    getDateFact({day: dateObj?.date, month: dateObj?.months + 1})
      .then((res)=>{setDateFact(res || '')})
    ;
  },[dateObj])

  return(
    <>
    <h1>Random date fact</h1>
    <LocalizationProvider dateAdapter={AdapterDayjs}>
      <DatePicker
        label="Select date"
        value={date}
        onChange={(newDate) =>  setDate(newDate as dayjs.Dayjs)}
      />
    </LocalizationProvider>
    <p>{dateFact}</p>
    </>
  )
}


interface getDateFactProps {
  day: number;
  month: number;
}
async function getDateFact(props: getDateFactProps): Promise<string | undefined>{
  const {day, month} = props;
  const url = `http://numbersapi.com/${month}/${day}/date`;
  const res = await fetch(url);
  return res.text();
}
