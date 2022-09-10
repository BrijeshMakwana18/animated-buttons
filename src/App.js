import { useState } from "react";
import {
  Container,
  Circle,
  ButtonContainer,
  ButtonTitle,
  StarCount,
} from "./styles";
function App() {
  const [active, setActive] = useState(true);

  const handleOnStarClick = () => {
    setActive(!active);
  };
  return (
    <Container>
      <Circle active={active} />
      <ButtonContainer active={active} onClick={handleOnStarClick}>
        <ButtonTitle active={active}>Star</ButtonTitle>
        <StarCount active={active}>50</StarCount>
      </ButtonContainer>
    </Container>
  );
}

export default App;
