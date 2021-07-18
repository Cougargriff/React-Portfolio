import React, { useState } from "react";
import styled from "styled-components";
import { useSelector, useDispatch } from 'react-redux'
import { Title } from './TextBox'
import {
    swapTheme
} from "../store/actions/ThemeActions";

const ModalContent = styled.div`
    width: 100%;
    height: 0%;
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
`;

const ShadowBuffer = styled.div`
    width: 100%;
    height: 100%;
    margin: 20px;
`;

const ModalWrapper = styled.div`
    visibility: ${(props) => (props.visible ? 'visible' : 'hidden')};
    position: absolute;
    height: 150px;
    width: 320px;
    top: 80px;
    right: 40px;
    overflow-y: visible;

    @media (max-width: 850px) {
        top: 190px;
        right: 50%;
        transform: translate(315px, 0px);
        width: 285px;
    }

`;

const Modal = styled.div`
    background: white;
    height: 100%;
    width: 100%;
    border-radius: 16px;
    overflow-x: clip;
    overflow-y: visible;
    z-index: 10;

    -webkit-box-shadow: 0px 1px 35px -14px rgba(0, 0, 0, 0.4);
    -moz-box-shadow: 0px 1px 35px -14px rgba(0, 0, 0, 0.4);
    box-shadow: 0px 1px 35px -14px rgba(0, 0, 0, 0.4);
`;

const ModalTop = styled.div`
    background: white;
    width: 50px;
    height: 75px;
    margin-top: -16px;
    float: right;
    margin-right: 13px;
    transform: rotate(45deg);
    border-radius: 16px;
    z-index: 20;
    
    @media (max-width: 850px) {
        background: white;
        float: left;
        transform: rotate(135deg);
        margin-right: 0px;
        margin-left: -4px;
        margin-top: 0px;
    }
`;

const RadioHolder = styled.div`
    display: flex;
    flex-direction: row;
`;



const ModalTitle = styled.div`
`;

const ThemeModal = function (props) {

    const dispatch = useDispatch();
    const themes = useSelector((state) => state.ThemeReducer.themes);
    const selected = useSelector((state) => state.ThemeReducer.selected);

    const changeTheme = function (e) {
        const newSelection = e.target.value;
        dispatch(swapTheme(newSelection));
    };

    const ThemeRadioButtons = function () {
        return (
            <RadioHolder onChange={changeTheme}>
            {
                Object.keys(themes).map(themeName => {
                    return (
                        <div>
                            <input key={themeName} checked={themeName === selected} type="radio" value={themeName} name="Themes" /> {themeName} 
                        </div>
                    );
                })

            }
            </RadioHolder>
        );
    }

    const SettingsTitle = function () {
        return (
            <ModalTitle> 
                <h3> 
                    Choose a new theme:
                </h3>
            </ModalTitle>
        );
    }

    return (
        <ModalWrapper visible={props.visible}>
            <ShadowBuffer>
                <ModalTop/>
                <Modal> 
                    <ModalContent>
                        <SettingsTitle />
                        <ThemeRadioButtons /> 
                    </ModalContent>
                </Modal>
            </ShadowBuffer>
        </ModalWrapper>
    );
};

export default ThemeModal;
