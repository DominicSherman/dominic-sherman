import React from 'react';
import {Avatar, Divider, Flex, Heading} from '@chakra-ui/core';

const Header = () =>
    <Flex
        align={'center'}
        direction={'column'}
        id={'header'}
        justify={'center'}
        p={2}
        w={'100%'}
    >
        <Avatar
            name={'Dominic Sherman'}
            src={'/assets/Headshot.jpg'}
            size={'2xl'}
            zIndex={-1}
        />
        <Heading mt={4}>{'Dominic Sherman'}</Heading>
        <Heading size={'lg'}>{'Web & Mobile Developer'}</Heading>
    </Flex>;

export default Header;
