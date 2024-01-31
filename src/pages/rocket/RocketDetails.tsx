import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { RocketType } from "../../types/types";
import axios from "axios";

const RocketDetails = () => {
  const { id } = useParams();
  const [rocketData, setRocketData] = useState<RocketType>();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    const fetchRocketData = async () => {
      try {
        setErrorMessage("");
        setLoading(true);
        const response = await axios.get(
          `${import.meta.env.VITE_APP_BASE_API_URL}/rockets/${id}`
        );
        if (response) setRocketData(response.data);
      } catch (error) {
        if (error instanceof Error) setErrorMessage(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchRocketData();
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (errorMessage) {
    return <p>{errorMessage}</p>;
  }

  return (
    <main className="p-6">
      <h1 className="text-4xl font-semibold">Rocket {rocketData?.name}</h1>

      <section>
        <div className="p-5 flex flex-col gap-3">
          <p className="font-semibold">ID: {rocketData?.id}</p>
          <p className="font-semibold">Name: {rocketData?.name}</p>
          <p className="font-semibold">Country: {rocketData?.country}</p>
          <p className="font-semibold">Company: {rocketData?.company}</p>
          <p className="font-semibold">
            Cost per launch: {rocketData?.cost_per_launch}
          </p>
          <img src={rocketData?.flickr_images[0]} />
          <img src={rocketData?.flickr_images[1]} />
        </div>
      </section>
    </main>
  );
};

export default RocketDetails;
