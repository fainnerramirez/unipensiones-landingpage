import { Box, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import Group from "../assets/grupo2.png"

const GroupStudents = () => {
    return (
        <Box width={'full'}>
            <Heading textAlign={'center'}>
                Publica tu pensión y conviertete en un anfitrión
            </Heading>
            <Image src={Group} width={'100%'} />
        </Box>
    )
}

export default GroupStudents