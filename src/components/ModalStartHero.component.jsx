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
    ModalHeader, ModalOverlay, Stack, useDisclosure
} from '@chakra-ui/react';
import React from 'react';
import { AiOutlineArrowRight } from "react-icons/ai";
import anfitrion from "../assets/anfitrion.jpg";
import student from "../assets/estudiante.jpg";
import logo from "../assets/logoup.png";

const ModalStartHero = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

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
                        <Image src={logo} width={100} height={100} borderRadius={5}/>
                    </Box>
                    <ModalHeader textAlign={'center'}>¿Como quieres utilizar Unipensiones?</ModalHeader>
                    <ModalCloseButton _hover={{bg:"black", color: "white"}}/>
                    <ModalBody>
                        <Stack direction={['column', 'row']} spacing={5} justify={'center'}>
                            <Card maxW='sm' border={'none'} boxShadow={'none'}>
                                <CardBody>
                                    <Image
                                        src={student}
                                        alt='Green double couch with wooden legs'
                                        borderRadius='lg'
                                        width={300}
                                        height={270}
                                    />
                                </CardBody>
                                <CardFooter>
                                    <Button 
                                        as="a"
                                        href='https://unipensiones.vercel.app/'
                                        target={'_blank'}
                                        variant='solid' 
                                        colorScheme='blue' 
                                        width={'full'}
                                        rightIcon={<AiOutlineArrowRight />}>
                                        Soy Estudiante
                                    </Button>
                                </CardFooter>
                            </Card>
                            <Card maxW='sm' border={'none'} boxShadow={'none'}>
                                <CardBody>
                                    <Image
                                        src={anfitrion}
                                        alt='Green double couch with wooden legs'
                                        borderRadius='lg'
                                        width={300}
                                        height={270}
                                    />
                                </CardBody>
                                <CardFooter>
                                    <Button 
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
            </Modal>
        </>
    )
}

export default ModalStartHero