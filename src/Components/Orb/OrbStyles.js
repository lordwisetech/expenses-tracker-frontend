// OrbStyles.js
import styled, { keyframes } from 'styled-components';

// Define the keyframes outside of the component
export const moveOrb = keyframes`
    0% {
        transform: translate(0, 0);
    }
    50% {
        transform: translate(${props => props.width}px, ${props => props.height / 2}px);
    }
    100% {
        transform: translate(0, 0);
    }
`;

// Define the styled component outside of the component
export const OrbStyled = styled.div`
    width: 70vh;
    height: 70vh;
    position: absolute;
    border-radius: 50%;
    margin-left: -37vh;
    margin-top: -37vh;
    background: linear-gradient(180deg, #F56692 0%, #F2994A 100%);
    filter: blur(400px);
    animation: ${props => moveOrb(props)} 15s alternate linear infinite;
`;
