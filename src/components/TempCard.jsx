

const TempCard = ({ weatherData }) => {
  console.log(weatherData)



  return (
    <div className="flex  flex-col gap-1 md:gap-4">
      {
        weatherData.list.map((item, index) => (
          <div key={index} className="flex justify-evenly list-none bg-[#174F9C] mt-2 px-[2px] md:px-2 py-2 text-[18px] md:text-[21px] mx-2 md:mx-16  ">
            <span>
              <p>{item.dt_txt.slice(10)}</p>
              <p>{item.dt_txt.slice(0, 10)}</p>
            </span>
            <span>
              <p>{item.weather[0].description}</p>
            </span>
            <span>
              <p>{Math.round(item.main?.temp_max)}</p>
            </span>
            <span>
              <p>{Math.round(item.main?.temp_min)}</p>
            </span>
            <span>
              <p>{Math.round(item.wind.speed)}</p>
            </span>
            <span>
              <p>{Math.round(item.main.humidity)}</p>
            </span>
          </div>
        ))
      }
    </div>
  )
}

export default TempCard