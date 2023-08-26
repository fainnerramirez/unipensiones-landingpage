import {
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
import anfitrion from "../assets/anfitrion.png";
import student from "../assets/student.png";

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
                bg={'pink.500'}
                _hover={{ bg: 'pink.400' }}
                onClick={onOpen}>
                ¡Únete a la Experiencia!
            </Button>
            <Modal isOpen={isOpen} onClose={onClose} size={'3xl'}>
                <ModalOverlay />
                <ModalContent>
                    <ModalHeader textAlign={'center'}>¿Cual es tu Rol?</ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Stack direction={['column', 'row']} spacing={10} justify={'center'}>
                            <Card maxW='sm' border={'none'} boxShadow={'none'}>
                                <CardBody>
                                    <Image
                                        src={student}
                                        alt='Green double couch with wooden legs'
                                        borderRadius='lg'
                                        width={270}
                                        height={270}
                                    />
                                </CardBody>
                                <CardFooter>
                                    <Button 
                                        as="a"
                                        href='https://unipensiones.vercel.app/'
                                        target={'_blank'}
                                        variant='solid' 
                                        colorScheme='pink' 
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
                                        width={270}
                                        height={270}
                                    />
                                </CardBody>
                                <CardFooter>
                                    <Button 
                                        variant='solid' 
                                        colorScheme='pink' 
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