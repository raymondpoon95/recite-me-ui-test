import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { AppDispatch, RootState } from "../../store/store";
import { fetchCrewListData } from "../../features/crew/crewSlice";
import SearchComponent from "../../components/SearchComponent/SearchComponent";
import { useNavigate } from "react-router-dom";

const Crew = () => {
  const navigate = useNavigate();
  const dispatch: AppDispatch = useDispatch();
  const { crew, loading, errorMessage } = useSelector(
    (state: RootState) => state.crew
  );

  const [searchInput, setSearchInput] = useState<string>("");

  useEffect(() => {
    dispatch(fetchCrewListData({ page: 1 }));
  }, [dispatch]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (errorMessage) {
    return <p>{errorMessage}</p>;
  }

  const handleOnClickSearch = () => {
    dispatch(fetchCrewListData({ page: 1, search: searchInput }));
  };

  return (
    <main className="p-6">
      <h1 className="text-4xl font-semibold">Crew Members</h1>

      <div className="my-10">
        <SearchComponent
          searchValue={searchInput}
          setSearchValue={setSearchInput}
          handleOnClickSearch={handleOnClickSearch}
        />
      </div>

      <section>
        {crew.map(({ agency, name, status, wikipedia, id }) => (
          <div
            key={id}
            className="p-5 flex flex-col gap-3 border border-slate-300 my-10 rounded-md cursor-pointer"
            onClick={() => navigate(`/crew/${id}`)}
          >
            <p className="font-semibold">Agency: {agency}</p>
            <p className="font-semibold">Name: {name}</p>
            <p className="font-semibold">Status: {status}</p>
            <p className="font-semibold">Wikipedia: {wikipedia}</p>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Crew;
