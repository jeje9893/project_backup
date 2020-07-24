const OpenWeatherMapHelper = require("openweathermap-node");

const helper = new OpenWeatherMapHelper(
    {
        APPID: '90680f63f36ae8394a049a2640ed1fa1',
        //units: "imperial"
    }
);

const weather = ' '


module.exports = function(app){
  const School = require('school-kr') 
const school = new School()


const example = async function() {
  // 학교 검색 및 첫 번째 결과의 학교 코드로 초기화
  const result = await school.search(School.Region.BUSAN, '동래고')
  school.init(School.Type.HIGH, School.Region.BUSAN, result[0].schoolCode)

  const meal = await school.getMeal()
  const calendar = await school.getCalendar()

  // 오늘 날짜
  //console.log(`${meal.month}월 ${meal.day}일`)

  // 오늘 급식 정보
  console.log(`오늘 급식:${meal.today}`)
  //console.log(`7/6급식 ${meal['6']}`)

  const mealCustom = await school.getMeal(2020, 7)
  //console.log(mealCustom)


  const optionMeal = await school.getMeal({
    year: 2020,
    month: 7,
    default: '급식이 없습니다'
  })

  // 년도값 대신 옵션 객체를 전달하여 데이터 수집 가능
  // year: 년도 (기본값: 현재 시점의 년도)
  // month: 달 (기본값: 현재 시점의 달)
  // default: 급식이 없는 경우 기본값 (기본값: '')
  // separator: 하루에 2개 이상의 일정이 있는 경우의 구분문자 (기본값: ,)
  //            예: 겨울방학,토요휴업일
  const optionCalendar = await school.getCalendar({
    default: '일정 없는 날',
    separator: '\n'
  })

  //console.log(optionMeal)
  //console.log(optionCalendar)

  helper.getCurrentWeatherByCityName("Busan", (err, currentWeather) => {
    if(err){
        console.log(err);
    }
    else{
        console.log('날씨',currentWeather['weather'],'현재온도',(currentWeather['main']['temp']-274).toFixed(2),'도',' 체감온도',(currentWeather['main']['feels_like']-274).toFixed(2),'도');
        app.get('/',function(req,res){
          res.render('index',{title:'Hello Title',
          meal:`${meal.today}`,
          weather:`날씨:${(currentWeather['weather'][0]['main'])}`,
          temp:`현재온도:${(currentWeather['main']['temp']-273).toFixed(2)}°C`,
          feels_like:`체감온도:${(currentWeather['main']['feels_like']-274).toFixed(2)}°C`,
          humidity:`습도:${(currentWeather['main']['humidity'])}%`
        });
      });
    }
});

  
}
example()
}