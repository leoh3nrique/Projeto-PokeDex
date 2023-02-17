import { BackImage, ContainerImages, FrontImage } from "../styled"


export const Images = ({front, back}) =>{
    return(
        <ContainerImages>
        <FrontImage>
          <img
            src={front}
            alt="Front of pokemon "
          />
        </FrontImage>
        <BackImage>
          <img
            src={back}
            alt="Back of pokemon"
          />
        </BackImage>
      </ContainerImages>

    )
}