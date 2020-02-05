import styled, { keyframes, css } from 'styled-components';

export const Container = styled.div`
    max-width: 700px;
    background: #fff;
    border-radius: 4px;
    box-shadow: 0 0 20px;
    padding: 30px;
    margin: 80px auto;

    h1 {
        font-size: 22px;
        display: flex;
        flex-direction: row;
        align-items: center;
    }
    svg {
        margin-right: 10px;
    }
`;

export const Form = styled.form`
    margin-top: 30px;
    display: flex;
    flex-direction: row;

    input {
        flex: 1;
        border: 1px solid #eee;
        padding: 10px 15px;
        border-radius: 5px;
        font-size: 15px;
    }
`;

const rotate = keyframes`
from {
    transform: rotate(0deg)
}
to{
    transform: rotate(360deg)
}
`;

export const SubmitButton = styled.button.attrs(props => ({
    type: 'submit',
    disabled: props.loading,
}))`
    background: #deb887;
    border: 0;
    padding: 10px 10px;
    border-radius: 5px;

    display: flex;
    justify-content: center;
    align-items: center;

    &[disabled] {
        cursor: not-allowed;
        opacity: 0.5;
    }

    ${props =>
        props.loading &&
        css`
            svg {
                animation: ${rotate} 2s linear infinite;
            }
        `}
`;

export const List = styled.ul`
    padding: 15px;
    width: 100%;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    grid-gap: 15px;

    div {
        display: flex;

        flex-direction: column;
        padding: 15px;
        min-height: 100px;
        background: #ffdead;

        /* position: relative;
        display: flex;
        flex-flow: column;
        min-height: 150px;
        padding: 15px;
        background: #f3f3f3; */
    }
    img {
        margin: auto;
        width: 150px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
`;
