import styled from "styled-components";
import backgroundImage from "./image/rectangle2.png";
import appIcon from "./image/ellipse.png";
import { useState } from "react";
import google from "./image/btn-icon-btn-icon-google.jpg";
import kakao from "./image/btn-icon-btn-icon-sns-kakaotalk.jpg";
import apple from "./image/btn-icon-btn-icon-apple.jpg";
import { Link } from "react-router-dom";
const Main = styled.div`
  width: 1440px;
  height: 900px;
  display: flex;
`;
const ColorEffect = styled.div`
  position: absolute;
  width: 1440px;
  height: 450px;
  flex-shrink: 0;
  background-image: url(${backgroundImage});
`;

const InfoMessage = styled.div`
  position: absolute;
  top: 164px;
  right: 530px;
`;
const SignUpMessage = styled.div`
  width: 380px;
  color: #212121;
  text-align: center;
  font-family: Zen Kaku Gothic Antique;
  font-size: 31.25px;
  font-style: normal;

  font-weight: 700;
  line-height: 37.5px; /* 120% */
  letter-spacing: -0.5px;
`;
const AutomateMessage = styled.div`
  color: #757575;
  font-family: Zen Kaku Gothic Antique;
  text-align: center;
  margin-top: 3.5px;
  font-size: 12.8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const Header = styled.div`
  position: absolute;
  display: flex;
  top: 37px;
  left: 72px;
`;
const AppInfo = styled.div`
  width: 46px;
  height: 46px;
  background-image: url(${appIcon});
`;
const AppName = styled.span`
  color: #000;
  margin-left: 7px;
  justify-content: center;
  align-items: center;
  font-family: Zen Kaku Gothic Antique;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: 50.2px; /* 176% */
`;
const SignInBtn = styled.button`
  cursor: pointer;
  margin-left: 1040px;
  width: 136px;
  height: 48px;
  flex-shrink: 0;
  border: 1.5px solid #212121;
  font-family: Zen Kaku Gothic Antique;
  font-size: 12.8px;
  letter-spacing: 0.7px;
  font-style: normal;
  font-weight: 900;
  background-color: transparent;
`;
const SignUpContainer = styled.div`
  position: absolute;

  top: 257.75px;
  left: 528px;
`;
const SignUpInfo = styled.div`
  width: 380px;
  height: 68px;
  border: 1px solid #e0e0e0;
  position: relative;
  background: #fff;
`;
const Proceed = styled.button`
  margin-top: 66px;
  display: flex;
  width: 380px;
  height: 64px;
  border: 1px solid #e0e0e0;
  background: #212121;
  justify-content: center;
  align-items: center;
  color: #fff;
  text-align: center;
  font-family: Zen Kaku Gothic Antique;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;

  cursor: pointer;
  line-height: 28.16px; /* 176% */
`;
const Input = styled.input`
  position: absolute;
  top: 30.46px;
  left: 15.3px;
  color: #616161;
  font-family: Zen Kaku Gothic Antique;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 28.16px; /* 176% */
  height: 31.167px;
  flex-direction: column;
  justify-content: center;
  border-color: transparent;
  flex-shrink: 0;
`;
const SignUpInfoName = styled.span`
  position: absolute;
  top: 11.9px;
  left: 15.3px;
  color: #212121;
  font-family: Zen Kaku Gothic Antique;
  font-size: 10.29px;
  font-style: normal;
  font-weight: 500;
  line-height: 18.06px; /* 175.51% */
`;
const Or = styled.div`
  margin-top: 18.75px;
  text-align: center;
  color: #000;
  font-family: Zen Kaku Gothic Antique;
  font-size: 12.8px;
  font-style: normal;
  font-weight: 400;
  line-height: 22.53px; /* 176.016% */
`;
const ShareIcon = styled.div`
  margin-top: 16.5px;
  display: flex;
  justify-content: center;
`;
const AppleIcon = styled.div`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  border-color: transparent;
  background-color: transparent;
  cursor: pointer;
  margin: 0 25px 0 25px;
  background-image: url(${apple});
`;
const InfoBackground = styled.div`
  position: absolute;
  width: 572px;
  top: 132px;
  left: 434px;

  height: 588px;
  flex-shrink: 0;
  border: 1px solid #e0e0e0;
  background: #fff;
  box-shadow: 0px 82px 40px -14px rgba(0, 100, 100, 0.08);
`;

const GoogleIcon = styled.div`
  width: 40px;
  height: 40px;
  flex-shrink: 0;
  cursor: pointer;
  border-color: transparent;
  margin: 0 25px 0 25px;
  background-image: url(${google});
`;
const KakaoIcon = styled.div`
  width: 40px;
  height: 40px;
  cursor: pointer;
  flex-shrink: 0;
  border-color: transparent;
  margin: 0 25px 0 25px;
  background-image: url(${kakao});
`;
function SignUp() {
  const [firstname, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSignUp = () => {
    // 로그인 처리 로직
    console.log("firstName:", firstname);
    console.log("email:", email);
    console.log("password:", password);
  };

  return (
    <Main>
      <ColorEffect>
        <InfoBackground />
        <Header>
          <AppInfo />
          <AppName>Ojakgyo</AppName>
          <Link to="/signup">
            <SignInBtn>SIGN UP</SignInBtn>
          </Link>
        </Header>
        <InfoMessage>
          <SignUpMessage>Log In to Ojakgyo</SignUpMessage>
          <AutomateMessage>
            Quick & Simple way to Automate your payment
          </AutomateMessage>
        </InfoMessage>

        <SignUpContainer>
          <SignUpInfo>
            <SignUpInfoName>EMAIL ADRRESS</SignUpInfoName>
            <Input
              type="email"
              id="email"
              placeholder="ojakgyo@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </SignUpInfo>
          <SignUpInfo>
            <SignUpInfoName>PASSWORD</SignUpInfoName>
            <Input
              type="password"
              id="password"
              placeholder="**********"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
          </SignUpInfo>
          <Link to="/mainScreen">
            <Proceed onClick={handleSignUp}>PROCEED</Proceed>
          </Link>
          <Or>OR</Or>
          <ShareIcon>
            <GoogleIcon />
            <AppleIcon />
            <KakaoIcon />
          </ShareIcon>
        </SignUpContainer>
      </ColorEffect>
    </Main>
  );
}

export default SignUp;
