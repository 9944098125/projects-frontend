import styled from "styled-components";
import { Link } from "react-router-dom";

export const LoginContainer = styled.div`
  display: flex;
  justify-content: space-between;
  background-image: url("https://images.unsplash.com/photo-1572177812156-58036aae439c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8cHJvamVjdHN8ZW58MHx8MHx8&w=1000&q=80");
  height: 100vh !important;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  overflow: auto;
`;

export const GlassEffectUpperPart = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Title = styled.p`
  font-size: 25px;
  font-weight: 600;
  font-family: cursive;
  font-style: italic;
  transform: scale(1, 1.2);
  color: #ffffff;
  margin: 25px;
  background-color: black;
  border-radius: 50%;
  align-self: center;
  padding: 15px;
  cursor: pointer;
`;

export const Options = styled.p`
  font-size: ${(props) => props.fs};
  font-weight: 600;
  font-family: cursive;
  letter-spacing: 0.5px;
  transform: scale(1, 1.1);
  margin-right: 20px;
  color: #ffffff;
`;

export const TotalGlassContainer = styled.div`
  margin-right: 50px;
  width: ${(props) => (props.reg ? "45%" : "35%")};
  margin-top: ${(props) => (props.reg ? "3%" : "10%")};
`;

export const GlassEffect = styled.div`
  width: 100%;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(5px);
  margin-right: 10%;
  border-radius: 12px;
  padding-right: 20px;
  padding-left: 20px;
  padding-bottom: 15px;
`;

export const SignInHead = styled.p`
  font-size: 22px;
  font-weight: 600;
  font-style: italic;
  font-family: cursive;
  letter-spacing: 0.8px;
  transform: scale(1, 1.2);
  color: #ffffff;
`;

export const FormContainer = styled.div`
  width: 100%;
  height: 100%;
  padding: 15px;
`;

export const Description = styled.p`
  font-size: 25px;
  font-weight: 500;
  font-family: cursive;
  font-style: italic;
  color: #ffffff;
`;

export const Linked = styled(Link)`
  color: white;
  text-decoration: none;
  &:hover {
    color: orange;
    text-decoration: underline;
  }
`;

export const SubmitButton = styled.button`
  background-color: #088f8f;
  border-radius: 8px;
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  font-size: 15px;
  font-weight: 500;
  height: 40px;
  border: none;
  &:hover {
    background-color: #5f9ea0;
    font-weight: 600;
  }
`;

export const NavbarContainer = styled.div`
  background-color: #00688b;
  border-bottom: 3px solid #b2dfee;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100vw;
  height: 70px;
  padding: 15px;
`;

export const AvatarContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 15px;
  cursor: pointer;
`;

export const Username = styled.p`
  font-size: 19px;
  font-weight: 700;
  font-family: cursive;
  font-style: italic;
  color: #ffffff;
`;

export const AppName = styled.p`
  font-size: 25px;
  font-weight: 800;
  font-family: cursive;
  font-style: italic;
  color: white;
  cursor: pointer;
`;

export const SidebarContainer = styled.div`
  width: 20vw;
  background-color: #00688b;
  min-height: 85vh;
  max-height: 88.4vh;
  padding-left: 15px;
  padding: 10px;
`;

export const SidebarItems = styled.p`
  color: white;
  font-size: 18px;
  font-style: italic;
  font-weight: 700;
  cursor: pointer;
  width: 100%;
`;

export const ProjectCreationContainer = styled.div`
  height: 100%;
  width: 100%;
`;
export const AllFieldsContainer = styled.div`
  width: 80%;
  height: 100%;
  padding: 5%;
`;
export const CreateButton = styled.button`
  width: 25%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #008b8b;
  border: none;
  color: white;
  border-radius: 8px;
`;

export const GetContainer = styled.div`
  padding: 15px;
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const EachItem = styled.div`
  width: 100%;
  background-color: pink;
  border-radius: 12px;
  height: 100%;
  padding: 15px;
  margin: 5px;
`;

export const EachItemUpperPart = styled.div`
  height: 120px;
  overflow-y: scroll;
  background-color: #00688b;
  padding: 15px;
  border-radius: 12px;
`;

export const EachItemText = styled.p`
  font-size: ${(props) => props.fs};
  font-weight: ${(props) => props.fw};
  font-style: ${(props) => props.it && "italic"};
  color: white;
  font-family: ${(props) => props.ff && "cursive"};
  text-decoration: ${(props) => props.links && "underline"};
`;

export const UpdateButton = styled.button`
  width: 25%;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #008b8b;
  border: none;
  color: white;
  border-radius: 8px;
`;

export const TextField = styled.input`
  background-color: #ffffff;
  border-radius: 8px;
  height: 45px;
  border: none;
  border-bottom: 2px solid green;
  &:focus {
    outline: none;
    border: none;
    border-bottom: 3px solid green;
  }
`;

export const TextArea = styled.textarea`
  border-radius: 8px;
`;

export const MyAccountContainer = styled.div`
  width: 100%;
  padding: 25px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
`;

export const EachRowInAccount = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items: center;
  margin-bottom: 20px;
  width: 50%;
  background-color: #bced91;
  padding: 20px;
`;

export const TextInRow = styled.p`
  font-size: ${(props) => props.fs};
  font-weight: ${(props) => props.fw};
  color: ${(props) => props.color};
  font-style: ${(props) => props.it && "italic"};
  transform: ${(props) => props.sc && "scale(1.2,1.3)"};
  font-family: ${(props) => props.ff && "cursive"};
`;
