import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { fetchRocketListData } from "../../features/rockets/rocketsSlice";
import { useNavigate } from "react-router-dom";

const Rocket = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const { rockets, loading, errorMessage } = useSelector(
    (state: RootState) => state.rocket
  );

  useEffect(() => {
    dispatch(fetchRocketListData());
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (errorMessage) {
    return <p>{errorMessage}</p>;
  }

  return (
    <main className="p-6">
      <h1 className="text-4xl font-semibold">Rockets List</h1>

      <section>
        {rockets.map(({ name, country, company, cost_per_launch, id }) => (
          <div
            key={id}
            className="my-10 border border-slate-300 flex cursor-pointer"
            onClick={() => navigate(`${id}`)}
          >
            <div className="p-5 flex flex-col gap-3">
              <p className="font-semibold">ID: {id}</p>
              <p className="font-semibold">Name: {name}</p>
              <p className="font-semibold">Country: {country}</p>
              <p className="font-semibold">Company: {company}</p>
              <p className="font-semibold">
                Cost per launch: {cost_per_launch}
              </p>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Rocket;
