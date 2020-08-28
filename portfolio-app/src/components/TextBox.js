import styled from 'styled-components';

export const Title = styled.h1`
    font-size: ${props => props.size ? props.size : "70px"};
    ${props => props.margins}

    @media (max-width: ${props => props.changeFontAt ? props.changeFontAt : "700px"}) {
        font-size: ${props => props.changeFontTo ? props.changeFontTo : (props.size ? props.size : "")};
    }
`