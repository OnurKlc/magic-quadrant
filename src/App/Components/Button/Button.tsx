import { ButtonWrapper } from "./styles";
import { IButtonProps } from "../../Core/Interfaces";

export default function Button({ text, ...props }: IButtonProps) {

    return (
        <ButtonWrapper {...props}>
            {text}
        </ButtonWrapper>
    )
}