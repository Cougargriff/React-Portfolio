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
const CenterItems = styled.div``;

const SignInBoxes = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  let psw = "";
  const dispatch = useDispatch();

  return (
    <center>
      <EmailPasswordBoxContainer>
        <Input
          placeholder="Email"
          onChange={(text) => {
            setEmail(text.target.value);
          }}
        />
        <Input.Password
          placeholder="Password"
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
  const dispatch = useDispatch();

  return isAdmin ? (
    <div>
      <TwoColumnContent>
      
      <NColumnContent>
      <ColorButton
          color='#F18E33'
          text="Portfolio"
          href="/"
        />
        <ColorButton
          color='#53DC98'
          text="Blog"
          href="/blog"
        />
        <ColorButton
          color='#779ECB'
          text="Editor"
          href="/admin-editor"
        />
      </NColumnContent>
      <ColorButton
          color='#FF0000'
          text="Sign Out"
          onClick={() => {
            dispatch(adminSignOut());
          }}
        />
      </TwoColumnContent>
      
      <center>
        <Title className="headers">You are an admin</Title>
      </center>
      
    </div>
  ) : (
    <CenterItems>
      <Title className="headers">You are not an admin</Title>
      <SignInBoxes />
    </CenterItems>
  );
};

export default Admin;
