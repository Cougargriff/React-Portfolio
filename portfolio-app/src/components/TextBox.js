import styled from 'styled-components';

export const Title = styled.h1`
    font-size: ${props => props.size ? props.size : "70px"};
    ${props => props.margins}
`