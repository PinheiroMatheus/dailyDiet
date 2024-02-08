import { Container, Title, ActionButtonTypeProps, PencilIcon, PlusIcon, TrashIcon } from "./styles";

export type ActionButtonIconProps = 'PENCIL' | 'PLUS' | 'TRASH';
type Props = {
    ActionButtonTextProps: string;
    type?: ActionButtonTypeProps;
    Icon?: ActionButtonIconProps
}

export function ActionButton({ActionButtonTextProps, type = 'DARK', Icon}: Props) {
    return (
        <Container type={type}>
            
            {
                Icon === 'PENCIL'
                ? <PencilIcon type={type}/>
                : Icon === 'PLUS'
                ? <PlusIcon type={type}/>
                : Icon === 'TRASH'
                ? <TrashIcon type={type}/> 
                : null
            }
            
            <Title type={type}>
                { ActionButtonTextProps }
            </Title>
        </Container>
    )
}