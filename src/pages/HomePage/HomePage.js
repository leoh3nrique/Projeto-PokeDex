import { useContext } from "react";
import Card from "../../components/Card/Card";
import { GlobalContext } from "../../contexts/GlobalContext";
import { StyledContainer } from "./styled";
import Header from "../../components/Header/Header";

const HomePage = () => {
  const context = useContext(GlobalContext);
  const { pokemons } = context;

  return (
    <>
        <Header />
      <StyledContainer>
        {pokemons.map((elem, index) => {
          return <Card key={index} name={elem.name} url={elem.url} />;
        })}
      </StyledContainer>
    </>
  );
};
export default HomePage;
