import { useContext } from "react";
import { GlobalContext } from "../../contexts/GlobalContext";
import { Page } from "./styled";
import { TiArrowRightThick } from "react-icons/ti";
import { TiArrowLeftThick } from "react-icons/ti";

export const SwitchPages = () => {
  const context = useContext(GlobalContext);
  const {page,setSwap} = context;

  return (
    <Page>
      <button onClick={() => setSwap("left")}><TiArrowLeftThick color="white" size={20}/></button>
      <span >{page}</span>
      <button onClick={() => setSwap("right")}><TiArrowRightThick color="white" size={20}/></button>
    </Page>
  );
};
