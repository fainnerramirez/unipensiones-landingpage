import {
  Box,
  Button,
  Container,
  Flex,
  Heading,
  Icon,
  Image,
  Stack,
  Text,
  createIcon
} from '@chakra-ui/react'
import React from 'react'
import ModalStartHero from './ModalStartHero.component'
import TextDinamic from './DinamicText.component'
import Logo from "../assets/logoup.png"
import ModalVideoPromotional from './ModalVideoPromotional.component'

const Hero = () => {
  return (
    <Container maxW={'7xl'}>
      <Stack
        align={'center'}
        spacing={{ base: 8, md: 10 }}
        py={{ base: 10, md: 28 }}
        direction={{ base: 'column', md: 'row' }}>
        <Box>
          <Image src={Logo} borderRadius={20} width={{ base: 200, md: '100%' }} />
        </Box>
        <Stack flex={1} spacing={{ base: 5, md: 10 }}>
          <Heading
            textAlign={'center'}
            lineHeight={0.5}
            fontWeight={600}
            fontSize={{ base: '3xl', sm: '4xl', lg: '6xl' }}>
            <Text
              as={'span'}
              position={'relative'}
              fontWeight={'bold'}
            >
              Unipensiones
            </Text>
            <br />
            <br />
          </Heading>
          <Box>
            <TextDinamic />
          </Box>
          <Stack spacing={{ base: 4, sm: 6 }} justifyContent={'center'} direction={{ base: 'column', sm: 'row' }}>
            <ModalStartHero />
            <ModalVideoPromotional />
          </Stack>
        </Stack>
      </Stack>
    </Container>
  )
}


export default Hero;