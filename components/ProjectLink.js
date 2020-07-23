import React from 'react';

import {LabelToIcon} from '../public/constants/icons';

import {Selectable, Small, TextWrapper, TitleSmall} from './Generic';
import {Box, Image} from '@chakra-ui/core';

const Icon = ({label}) =>
    <Box p={2}>
        <Image
            alt={label}
            objectFit="fill"
            height={[8, 10, 12, 12]}
            htmlWidth={'auto'}
            src={LabelToIcon[label]}
        />
    </Box>;

export const ProjectLink = (project) =>
    <Selectable
        href={project.link}
        target={'__blank'}
    >
        <TextWrapper>
            <TitleSmall>{project.title}</TitleSmall>
            <Small>{project.subTitle}</Small>
            <Box
                style={{
                    alignItems: 'center',
                    display: 'flex',
                    flexDirection: 'row'
                }}
            >
                {project.labels.map((label) =>
                    <Icon
                        key={label}
                        label={label}
                    />
                )}
            </Box>
        </TextWrapper>
    </Selectable>;
