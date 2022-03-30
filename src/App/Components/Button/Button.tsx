import { ButtonWrapper } from "./styles";

export default function Button({ text }: {text: string}) {

    return (
        <ButtonWrapper>
            {text}
        </ButtonWrapper>
    )
}