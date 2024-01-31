import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { CrewProps } from "../../types/types";
import axios from "axios";

const CrewDetails = () => {
  const { id } = useParams();
  const [crewData, setCrewData] = useState<CrewProps>();
  const [loading, setLoading] = useState<boolean>(false);
  const [errorMessage, setErrorMessage] = useState<string>("");

  useEffect(() => {
    const fetchRocketData = async () => {
      try {
        setErrorMessage("");
        setLoading(true);
        const response = await axios.get(
          `${import.meta.env.VITE_APP_BASE_API_URL}/crew/${id}`
        );
        if (response) setCrewData(response.data);
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
      <h1 className="text-4xl font-semibold">{crewData?.name}</h1>

      <section>
        <div className="p-5 flex flex-col gap-3">
          <p className="font-semibold">Agency: {crewData?.agency}</p>
          <p className="font-semibold">Name: {crewData?.name}</p>
          <p className="font-semibold">Status: {crewData?.status}</p>
          <p className="font-semibold">Wikipedia: {crewData?.wikipedia}</p>
          <img src={crewData?.image} />
        </div>
      </section>
    </main>
  );
};

export default CrewDetails;
