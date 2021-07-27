import React from 'react';
import { Wrapper, Content, Text } from './HeroImage.styles';

const HeroImage = ({title, image, text}) => (
    <Wrapper image={image}>
        <Content>
            <Text>
                <h1>{title}</h1>
                <p>{text}</p>
            </Text>
        </Content>
    </Wrapper>
);

export default HeroImage;

