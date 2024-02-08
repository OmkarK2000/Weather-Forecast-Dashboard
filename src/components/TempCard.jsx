

const TempCard = ({ weatherData }) => {
  console.log(weatherData)



  return (
    <div className=" gap-4">
      {
        weatherData.list.map((item, index) => (
          <div key={index} className="flex justify-evenly bg-[#174F9C] mt-2 px-2 py-2 list-none mx-[100px] ">
            <span>
              <p>{item.dt_txt}</p>
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