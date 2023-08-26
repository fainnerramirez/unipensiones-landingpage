import React from 'react'
import {
    Button,
    Card,
    CardBody,
    CardFooter,
    Divider,
    HStack,
    Image,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent, ModalFooter, ModalHeader, ModalOverlay, Stack, useDisclosure
} from '@chakra-ui/react'
import student from "../assets/student.png";
import anfitrion from "../assets/anfitrion.png";
import {AiOutlineArrowRight} from "react-icons/ai"

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
                            <Card maxW='sm'>
                                <CardBody>
                                    <Image
                                        src={student}
                                        alt='Green double couch with wooden legs'
                                        borderRadius='lg'
                                        width={270}
                                        height={270}
                                    />
                                </CardBody>
                                <Divider />
                                <CardFooter>
                                    <Button 
                                        variant='solid' 
                                        colorScheme='pink' 
                                        width={'full'}
                                        rightIcon={<AiOutlineArrowRight />}>
                                        Soy Estudiante
                                    </Button>
                                </CardFooter>
                            </Card>
                            <Card maxW='sm'>
                                <CardBody>
                                    <Image
                                        src={anfitrion}
                                        alt='Green double couch with wooden legs'
                                        borderRadius='lg'
                                        width={270}
                                        height={270}
                                    />
                                </CardBody>
                                <Divider />
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