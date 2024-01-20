import { Box, Heading, Image } from '@chakra-ui/react'
import React from 'react'
import Group from "../assets/grupo2.png"

const GroupStudents = () => {
    return (
        <Box width={'full'} mt={5} mb={10}>
            <Heading textAlign={'center'}>
                Encontrar tu pensión ideal nunca fue tan fácil con Unipensiones
            </Heading>
            <Image src={Group} width={'100%'} />
        </Box>
    )
}

export default GroupStudents