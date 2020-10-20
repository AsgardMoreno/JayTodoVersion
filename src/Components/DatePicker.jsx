import React, { useState } from 'react';
import './Styles/datePicker.css';

//Setting Day, Month, Year Values
const DatePicker = () => {
  //!!!!! Agregar metodo para iniciar con fecha
  //actual al volver a abrir modal !!!!!
  const today = new Date();
  let [day, setDay] = useState(today.getDate());

  const months = ['Ene', 'Feb', 'Mar', 'Abr',
    'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct',
    'Nov', 'Dic'];
  let [monthNumber, setMonthNumber] = useState(today.getMonth());
  const month31Days = [0, 2, 4, 6, 7, 9, 11];
  const month30Days = [3, 5, 8, 10];

  let [year, setYear] = useState(today.getFullYear());

  // console.log(`${day} / ${(months[monthNumber])} / ${year}`)

  //DAY UP click handler
  const dayUp = () => {
    if (month31Days.includes(monthNumber) && day >= 31) {
      //console.log(monthNumber)
      setDay(day = 1);
    }
    else if (month30Days.includes(monthNumber) && day >= 30) {
      setDay(day = 1);
      //console.log(monthNumber)
    }
    else if (monthNumber === 1 && day >= 28 && (year % 4) !== 0) {
      setDay(day = 1);
      //console.log(monthNumber)
    }
    else if (monthNumber === 1 && (year % 4) === 0 && day >= 29) {
      setDay(day = 1);
      //console.log(monthNumber)
    }
    else {
      setDay(day = day + 1);
    }
  };

  //DAY DOWN click handler
  const dayDown = () => {
    if (month31Days.includes(monthNumber) && day <= 1) {
      setDay(day = 31);
      //console.log(monthNumber)
    }
    else if (month30Days.includes(monthNumber) && day <= 1) {
      setDay(day = 30);
      //console.log(monthNumber)
    }
    else if (monthNumber === 1 && day <= 1 && (year % 4) !== 0) {
      setDay(day = 28);
      //console.log(monthNumber)
    }
    else if (monthNumber === 1 && (year % 4) === 0 && day <= 1) {
      setDay(day = 29);
      //console.log(monthNumber)
    }
    else {
      setDay(day = day - 1);
    }
  };
  //MONTH UP click handler
  const monthUp = () => {
    setMonthNumber(monthNumber = monthNumber + 1)
    //console.log(monthNumber)
    // console.log(month30Days.includes(monthNumber) && day > 30)
    if (month30Days.includes(monthNumber) && day >= 30) {
      setDay(day = 30);
    }
    else if (monthNumber > 11) {
      setMonthNumber(monthNumber = 0)
      //console.log(monthNumber)
    }
    else if (monthNumber === 1 && (year % 4) !== 0 && day >= 28) {
      setDay(day = 28);
      //console.log('feb28days')
    }
    else if (monthNumber === 1 && (year % 4) === 0 && day >= 29) {
      setDay(day = 29);
      //console.log('feb29days')
    }
  };
  //MONTH DOWN click handler
  const monthDown = () => {
    setMonthNumber(monthNumber = monthNumber - 1)
    //console.log(monthNumber)
    if (month30Days.includes(monthNumber) && day >= 30) {
      setDay(day = 30);
    }
    else if (monthNumber < 0) {
      setMonthNumber(monthNumber = 11)
      //console.log(monthNumber)
    }
    else if (monthNumber === 1 && (year % 4) !== 0 && day >= 28) {
      setDay(day = 28);
      //console.log('feb28days')
    }
    else if (monthNumber === 1 && (year % 4) === 0 && day >= 29) {
      setDay(day = 29);
      //console.log('feb29days')
    }
  };
  //YEAR UP click handler
  const yearUp = () => {
    setYear(year = year + 1)
    if (monthNumber === 1 && (year % 4) !== 0 && day >= 28) {
      setDay(day = 28);
      //console.log('feb28days')
    }
  }
  //YEAR DOWN click handler
  const yearDown = () => {
    setYear(year = year - 1);
    if (year <= 1) {
      setYear(year = 1);
    }
    else if (monthNumber === 1 && (year % 4) !== 0 && day >= 28) {
      setDay(day = 28);
      //console.log('feb28days')
    }
  }

  return (
    // The format we want to use
    <div className="datePicker" >
      {/* DAY */}
      <div className="day">
        {/* Minute UpArrow here */}
        <div onClick={dayUp} className="dayUp" ></div>
        {/* Day's Display */}
        <input id='day' readOnly="readonly" className="dayInput" value={day} />
        {/* Minute DownArrow here */}
        <div onClick={dayDown} className="dayDown"></div>
      </div>
      {/* Day, Month, Year SEPARATOR */}
      <div className="separator"> / </div>
      {/* MONTH */}
      <div className="month">
        {/* Month upArrow here */}
        <div onClick={monthUp} className="monthUp"></div>
        {/* Month Display */}
        <input id='month' readOnly="readonly" className="monthInput" value={months[monthNumber]} />
        {/* Month downArrow here */}
        <div onClick={monthDown} className="monthDown"></div>
      </div>
      {/* Day, Month, Year SEPARATOR */}
      <div className="separator"> / </div>
      {/* YEAR */}
      <div className="year ">
        {/* Year upArrow here */}
        <div onClick={yearUp} className="yearUp"></div>
        {/* Year Display */}
        <input id='year' readOnly="readonly" className="yearInput" value={year} />
        {/* Year downArrow here */}
        <div onClick={yearDown} className="yearDown"></div>
      </div>
    </div >
  )
}
export default DatePicker;