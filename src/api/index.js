import axios from "axios";

const url = "https://covid19.mathdro.id/api";
export const fetchData = async () => {
  try {
    //short way es6 destrucureing and short object property method
    const {
      data: { confirmed, recovered, deaths, lastUpdate },
    } = await axios.get(url);
    const modifiedData = { confirmed, recovered, deaths, lastUpdate };

    //long way with es5
    //const {data} = await axios.get(url);
    // const modifiedData = {
    //     confirmed:data.confirmed,
    //     recovered:data.recovered,
    //     death:data.death,
    //     lastUpdate:data.lastUpdate,

    // }
    return modifiedData;
  } catch (error) {}
};

export const fetchDailyData = async () => {
  try {
    const { data } = await axios.get(`${url}/daily`);
    const modifiedData = data.map((dailyData) => ({
      confirmed: dailyData.confirmed.total,
      deaths: dailyData.deaths.total,
      date: dailyData.reportDate,
    }));

    return modifiedData;
  } catch (error) {}
};
