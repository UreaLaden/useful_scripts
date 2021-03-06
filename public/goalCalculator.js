//User inputs desired day, month and year of completion
//getCurrentDate calculates and parses the current date and time of the user's device
//convertToJulian converts both current and goal dates to julian

//get calculateRemainingDays returns their difference
console.log("Connected!");
//Checks if input year is a leap year
const isLeapYear = year => {
    //If a year is not divisible by 4: common year
    if(year % 4 !== 0){
      return false;
    }
    //If a year is not divisible by 100: leap year
    else if(year % 100 !== 0){
      //If a year is not divisible by 400 as well:leap year
      if(year % 400 !== 0){
        return true;
      }
      return false;
    }
    else
    {
      return false;
    }
  }
  
  //This function takes in the Integer value of month, day and year
  //then converts to its julian equivalent.
  const convertToJulian = (month, day, year) =>{
      let initialDay = 0;
      switch(month)
      {
        case 1:
            initialDay = 0;
            break;
        case 2:
            initialDay = 31;
            break;
        case 3:
            initialDay = 60;
            break;
        case 4:
            initialDay = 91;
            break;
        case 5:
            initialDay = 121;
            break;
        case 6:
            initialDay = 152;
            break;
        case 7:
            initialDay = 182;
            break;
        case 8:
            initialDay = 213;
            break;
        case 9:
            initialDay = 244;
            break;
        case 10:
            initialDay = 274;
            break;
        case 11:
            initialDay = 305;
            break;
        case 12:
            initialDay = 335;
            break;
      }
      // let choice = isLeapYear(year) ? ' was ' : ' was not ';
      // console.log(`${month}/${day}/${year} ${choice} a leap year`);
      return isLeapYear(year) ? initialDay + day : initialDay + (day - 1);
  }
  
  const getCurrentDate = () =>{
    let timeStamp = new Date();
    let day = timeStamp.getDate();
    let month = timeStamp.getMonth() + 1; //January is '0'
    let year = timeStamp.getFullYear();
    let sMonth;
    switch(month){
      case 1:
        sMonth = 'January';
        break;
      case 2:
      sMonth = 'February';
        break;
      case 3:
      sMonth = 'March';
        break;
      case 4:
      sMonth = 'April';
        break;
      case 5:
      sMonth = 'May';
        break;
      case 6:
      sMonth = 'June';
        break;
      case 7:
      sMonth = 'July';
        break;
      case 8:
      sMonth = 'August';
        break;
      case 9:
      sMonth = 'September';
        break;
      case 10:
      sMonth = 'October';
        break;
      case 11:
      sMonth = 'November';
        break;
      case 12:
      sMonth = 'December';
        break;
    }
    console.log(`Current Day: ${sMonth} ${day} ${year}`);
    return {day:day,month:[month,sMonth],year:year};
  }
  
  const calculateRemainingDays = (gMonth, gDay,gYear) =>{
    let currentDate = getCurrentDate();
    let currJulianDay = convertToJulian
    (
      currentDate.month[0],
      currentDate.day,
      currentDate.year
    );
    let goalJulianDay = convertToJulian(gMonth, gDay, gYear);
    return `${goalJulianDay - currJulianDay} days remaining until ${gMonth}/${gDay}/${gYear} `;
  }
  
  //Desired completion date
  let gDay = 5;
  let gMonth = 6;
  let gYear = 2021;
  
  function remainingDays(){
    let field = document.querySelector('#date');
    let dateArr = field.value.split('-');
    let year = Number(dateArr[0]);
    let month = dateArr[1].length < 2 ? '0' + dateArr[1]:dateArr[1];
    let day = Number(dateArr[2]);
    field.value = `${year}-${month}-${day}`;
    let remainingDayText = calculateRemainingDays(Number(month),day,year);
    document.getElementById('output').innerText = remainingDayText;
    document.querySelector('#setDate').hidden =true;
    document.getElementById('output').hidden = false;
  }
