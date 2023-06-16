import { styled } from '@utils';

export const Select = styled.select`
    background-color: white;
    border-radius: 0.3rem;
    display: inline-block;
    font: inherit;
    line-height: 1.5rem;
    padding: 0.5rem 3.5rem 0.5rem 1rem;
    margin: 0;
    outline: unset;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
    -webkit-appearance: none;
    -moz-appearance: none;
    background-image: linear-gradient(45deg, transparent 50%, gray 50%),
        linear-gradient(135deg, gray 50%, transparent 50%), radial-gradient(#ddd 70%, transparent 72%);
    background-position: calc(100% - 20px) calc(1em + 2px), calc(100% - 15px) calc(1em + 2px), calc(100% - 0.5em) 0.5em;
    background-size: 5px 5px, 5px 5px, 1.5em 1.5em;
    background-repeat: no-repeat;

    :focus {
        background-image: linear-gradient(45deg, white 50%, transparent 50%),
            linear-gradient(135deg, transparent 50%, white 50%), radial-gradient(gray 70%, transparent 72%);
        background-position: calc(100% - 15px) 1em, calc(100% - 20px) 1em, calc(100% - 0.5em) 0.5em;
        background-size: 5px 5px, 5px 5px, 1.5em 1.5em;
        background-repeat: no-repeat;
    }
`;

export const Option = styled.option`
    padding: 0.5rem;
`;
