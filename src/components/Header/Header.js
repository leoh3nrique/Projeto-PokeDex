import {
  ContainerLogo,
  StyledBtnHome,
  StyledBtnPokedex,
  StyledHeader,
  StyledImage,
} from "./styled";
import imageHeader from "../../assets/imageHeader.svg";
import { goToHome, goToPokedex } from "../../router/cordinator";
import { useNavigate, useParams } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const params = useParams();

  return (
    <StyledHeader>
      {location.pathname === "/pokedex" && (
        <StyledBtnHome onClick={() => goToHome(navigate)}>
          Todos Pokémons
        </StyledBtnHome>
      )}
      {location.pathname === `/details/${params.id}` && (
        <StyledBtnHome onClick={() => goToHome(navigate)}>
          Todos Pokémons
        </StyledBtnHome>
      )}

      <ContainerLogo>
        <StyledImage src={imageHeader} />
      </ContainerLogo>

      {location.pathname === "/" && (
        <StyledBtnPokedex onClick={() => goToPokedex(navigate)}>
          Pokedex
        </StyledBtnPokedex>
      )}
    </StyledHeader>
  );
};

export default Header;
