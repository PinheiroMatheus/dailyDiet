import { Container, ImageProfile, Logo } from "./styles";

import logo from '@assets/logo.png';
import profilePhoto from '@assets/profilePhoto.png';

export function Header() {
    return (
        <Container>
            <Logo source={logo}/>
            <ImageProfile source={profilePhoto}/>
        </Container>
    )
}