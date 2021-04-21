import axios from "axios";

const airportsAxiosInstance = axios.create({
  baseURL: `${process.env.api}/api/v1/airports`,
});

export const getAirportService = async () => {
  try {
    const tours = await airportsAxiosInstance.get("/");
    return tours.data;
  } catch (err) {
    console.log(err);
    throw new Error(err);
  }
};
