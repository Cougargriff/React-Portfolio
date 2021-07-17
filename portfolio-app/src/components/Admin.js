import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Title } from "./TextBox";
import styled from "styled-components";
import ColorButton from "./ColorButton";
import { adminSignIn, adminSignOut } from "../store/actions/EditorActions";
import { NColumnContent, TwoColumnContent } from "./Containers";
import AdminPanel from "./AdminPanel"

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

function PortfolioBack () {
  const theme = useSelector((state) => state.ThemeReducer.theme);
  return (
    <TopBar>
        <NColumnContent>
          <ColorButton
            color={theme.color1}
            text="Portfolio"
            href="/"
          />
          <ColorButton
            color={theme.color2}
            text="Blog"
            href="/blog"
          />
        </NColumnContent>
    </TopBar>
  );
}

function NavButtons() {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.ThemeReducer.theme);
  return (
    <TopBar>
      <TwoColumnContent>
        <NColumnContent>
          <ColorButton
            color={theme.color1}
            text="Portfolio"
            href="/"
          />
          <ColorButton
            color={theme.color2}
            text="Blog"
            href="/blog"
          />
          <ColorButton
            color={theme.color3}
            text="Editor"
            href="/admin-editor"
          />
        </NColumnContent>
        <ColorButton
          color={theme.color4}
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
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.ThemeReducer.theme);

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
          color={theme.color5}
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
          <Title className="headers">Admin Panel</Title>
          <AdminPanel />
        </center>
      </div>
    )
    : (
      <div>
        <PortfolioBack />
        <Title className="headers">Admin Sign In</Title>
        <SignInBoxes />
      </div>
    );
};

export default Admin;
