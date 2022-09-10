import styled from "styled-components";

export const Container = styled.div`
  @import url("https://fonts.googleapis.com/css2?family=Quicksand:wght@700&display=swap");
  height: 100vh;
  width: 100vw;
  background-color: #f1f1f1;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: "Quicksand", sans-serif;
`;

export const Circle = styled.div`
  position: absolute;
  height: 2%;
  width: 1%;
  background-color: #fcf5c2;
  border-radius: 10rem;
  transition: 1s;
  z-index: 1;
  transform: ${(props) => (props.active ? "scale(200)" : "scale(1)")};
`;

export const ButtonContainer = styled.div`
  height: 10vh;
  width: 20vw;
  z-index: 2;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  border-radius: 2rem;
  background-color: white;
  cursor: pointer;
  transition: 0.4s;
  box-shadow: 0px 16px 18px 6px rgba(0, 0, 0, 0.1);
  &:hover {
    transform: scale(1.2);
  }
`;

export const Star = styled.img`
  height: 100%;
  width: 10%;
  background-color: green;
  object-fit: contain;
`;

export const ButtonTitle = styled.h2`
  font-size: 2rem;
  color: ${(props) => (props.active ? "#5D5D5D" : "#7a7a7a")};
  font-weight: bold;
`;

export const StarCount = styled.h2`
  font-size: 2rem;
  color: ${(props) => (props.active ? "#FBD64A" : "#d6d6d6")};
  font-weight: bold;
`;
