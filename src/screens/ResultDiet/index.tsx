import congratulation from '@assets/congratulation.png'
import fail from '@assets/fail.png'
import { Text } from "react-native";

import { Button, ButtonText, Container, Image, SubTitle, Title, TypeStyleProps } from "./styles";

type Props = {
    type: TypeStyleProps;
}

export function ResultDiet({type}: Props) {
    return (
        <Container>
            {
                type === 'POSITIVE' ? 
                    (
                        <>
                            <Title type={type}>Continue assim!</Title>
                            <SubTitle>Você continua <Text style={{fontWeight: "bold"}}>dentro da dieta</Text>. Muito bem!</SubTitle>
                            <Image source={congratulation}/>
                        </>
                    )
                    :
                    (
                        <>
                            <Title type={type}>Que pena!</Title>
                            <SubTitle>Você <Text style={{fontWeight: "bold"}}>saiu da dieta</Text> dessa vez, mas continue se esforçando e não desista!</SubTitle>
                            <Image source={fail}/>
                        </>
                    )
            }
            <Button>
                <ButtonText>Ir para a página inicial</ButtonText>
            </Button>
        </Container>
    )
}