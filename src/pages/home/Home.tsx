import { useNavigate } from "react-router-dom";
import ButtonComponent from "../../components/ButtonComponent/ButtonComponent";

const Home = () => {
  const navigate = useNavigate();

  return (
    <main className="h-screen flex flex-col items-center justify-center gap-10">
      <h1 className="text-4xl font-semibold">Home page</h1>

      <section className="flex gap-5">
        <ButtonComponent
          buttonText="Rockets"
          type="button"
          onClick={() => navigate("/rocket")}
        />

        <ButtonComponent
          buttonText="Crew Members"
          type="button"
          onClick={() => navigate("/crew")}
        />
      </section>
    </main>
  );
};

export default Home;
