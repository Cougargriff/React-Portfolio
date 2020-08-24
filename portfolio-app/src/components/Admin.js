import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Title } from "./TextBox";
import { Input } from "antd";
import styled from "styled-components";
import ColorButton from "./ColorButton";
import { adminSignIn, adminSignOut } from "../store/actions/EditorActions";
import { NColumnContent, TwoColumnContent } from "./Containers";

const EmailPasswordBoxContainer = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
`;

const TopBar = styled.div`
  padding-top: 20px;
  width: 100%;
`;

const StyledInput = styled.input`
  text-align: center;
  margin: 15px;
  width: 350px;
  height: 36px;
  font-size: 20px;
`;

function NavButtons() {
  const dispatch = useDispatch();
  return (
    <TopBar>
      <TwoColumnContent>
        <NColumnContent>
          <ColorButton
            color="#F18E33"
            text="Portfolio"
            href="/"
          />
          <ColorButton
            color="#53DC98"
            text="Blog"
            href="/blog"
          />
          <ColorButton
            color="#779ECB"
            text="Editor"
            href="/admin-editor"
          />
        </NColumnContent>
        <ColorButton
          color="#FF0000"
          text="Sign Out"
          onClick={() => {
            dispatch(adminSignOut());
          }}
        />
      </TwoColumnContent>
    </TopBar>
  );
}

const SignInBoxes = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let psw = "";
  const dispatch = useDispatch();

  return (
    <center>
      <EmailPasswordBoxContainer>
        <StyledInput
          placeholder="Email"
          onChange={(text) => {
            setEmail(text.target.value);
          }}
        />
        <StyledInput
          placeholder="Password"
          type="password"
          onChange={(text) => {
            setPassword(text.target.value);
          }}
        />
        <ColorButton
          color="#228B22"
          text="Sign In"
          onClick={() => {
            dispatch(adminSignIn(email, password));
          }}
        />
      </EmailPasswordBoxContainer>
    </center>
  );
};

const Admin = (props) => {
  const isAdmin = useSelector((state) => state.EditorReducer.isAdmin);

  return isAdmin
    ? (
      <div>
        <NavButtons />
        <center>
          <Title className="headers">You are an admin</Title>
        </center>
      </div>
    )
    : (
      <div>
        <Title className="headers">You are not an admin</Title>
        <SignInBoxes />
      </div>
    );
};

export default Admin;
