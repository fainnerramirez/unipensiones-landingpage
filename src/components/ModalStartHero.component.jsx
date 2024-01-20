import {
    Box,
    Button,
    Card,
    CardBody,
    CardFooter,
    Divider,
    Image,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalHeader, ModalOverlay, Stack, useDisclosure, useToast
} from '@chakra-ui/react';
import React, { useState } from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import anfitrion from "../assets/anfitrion.jpg";
import student from "../assets/estudiante.jpg";
import logo from "../assets/logoup.png";

const ModalStartHero = () => {

    const [anfitrionesURL, setAnfitrionesURL] = useState('https://anfitriones.unipensiones.app/')
    const { isOpen, onOpen, onClose } = useDisclosure()
    const toast = useToast();

    return (
        <>
            <Button
                rounded={'full'}
                size={'lg'}
                fontWeight={'normal'}
                px={6}
                colorScheme={'pink'}
                bg={'blue.500'}
                _hover={{ bg: 'blue.400' }}
                onClick={onOpen}>
                ¡Únete a la Experiencia!
            </Button>
            <Modal isOpen={isOpen} onClose={onClose} size={'3xl'}>
                <ModalOverlay />
                <ModalContent>
                    <Box display={'flex'} justifyContent={'center'} alignItems={'center'} mt={5}>
                        <Image src={logo} width={{base: 50, md: 100}} height={{base: 50, md: 100}} borderRadius={5} />
                    </Box>
                    <ModalHeader textAlign={'center'}>¿Como quieres utilizar Unipensiones?</ModalHeader>
                    <ModalCloseButton _hover={{ bg: "black", color: "white" }} />
                    <ModalBody>
                        <Stack direction={['row']} spacing={{base: 2, md: 5}} justify={'center'}>
                            <Card maxW='sm' border={'none'} boxShadow={'none'}>
                                <CardBody p={0}>
                                    <Image
                                        src={student}
                                        alt='Green double couch with wooden legs'
                                        borderRadius='lg'
                                        width={300}
                                        height={{base: 200, md: 270}}
                                    />
                                </CardBody>
                                <CardFooter p={{base: 0, md: 1}} mt={5}>
                                    <Button
                                        variant='solid'
                                        colorScheme='blue'
                                        width={'full'}
                                        rightIcon={<AiOutlineArrowRight />}
                                        onClick={() =>
                                            toast({
                                                title: 'Estamos terminando de construirlo para tí',
                                                description: "Estará habilitado el día 25 de Enero De 2024 🥳",
                                                status: 'info',
                                                duration: 9000,
                                                isClosable: true,
                                                variant: 'top-accent',
                                                position: 'top'
                                            })
                                        }>
                                        Soy Estudiante
                                    </Button>
                                </CardFooter>
                            </Card>
                            <Card maxW='sm' border={'none'} boxShadow={'none'}>
                                <CardBody p={0}>
                                    <Image
                                        src={anfitrion}
                                        alt='Green double couch with wooden legs'
                                        borderRadius='lg'
                                        width={300}
                                        height={{base: 200, md: 270}}
                                    />
                                </CardBody>
                                <CardFooter p={{base: 0, md: 1}} mt={5}>
                                    <Button
                                        as="a"
                                        href={anfitrionesURL}
                                        target={'_blank'}
                                        variant='solid'
                                        colorScheme='blue'
                                        width={'full'}
                                        rightIcon={<AiOutlineArrowRight />}>
                                        Soy Anfitrión (a)
                                    </Button>
                                </CardFooter>
                            </Card>
                        </Stack>
                    </ModalBody>
                </ModalContent>
            </Modal >
        </>
    )
}

export default ModalStartHero