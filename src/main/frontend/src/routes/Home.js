import styled from "styled-components";
import homeScreen from "./image/home.png";
import mainContext from "./image/start-your-14-day-free-trial.png";
import { Link } from "react-router-dom";
const Main = styled.div`
  width: 1440px;
  height: 900px;
  background-image: url(${homeScreen});
  display: flex;
`;

const MainContext = styled.span`
  position: absolute;
  top: 249px;
  left: 530px;
  width: 380px;
  height: 313px;
  background-repeat: no-repeat;
  background-image: url(${mainContext});
`;
const StartBtn = styled.div`
  position: absolute;
  top: 592px;
  left: 530px;
  display: flex;
  width: 380px;
  height: 94px;
  background-color: rgba(256, 256, 256, 0.2);
  flex-direction: column;
  justify-content: center;
  color: #5c5c5c;
  text-align: center;
  font-family: Zen Kaku Gothic Antique;
  font-size: 25px;
  font-style: normal;
  font-weight: 400;
  line-height: 28.16px; /* 112.64% */
`;
function Home() {
  return (
    <Main>
      <MainContext />
      <Link to="/login">
        <StartBtn>start Ojakgyo</StartBtn>
      </Link>
    </Main>
  );
}

export default Home;
