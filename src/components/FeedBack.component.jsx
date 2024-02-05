// import { Box, Button, ButtonGroup, Card, CardBody, CardHeader, HStack, Heading, Input, InputGroup, Text, Textarea, VStack, useToast } from '@chakra-ui/react'
// import React, { useState } from 'react'

// const FeedBack = () => {

//     const [name, setName] = useState(null);
//     const [feedback, setFeedback] = useState(null);
//     const [isLoading, setIsLoading] = useState(false);
//     const toast = useToast();

//     // const handleSubmitFeedback = async (event) => {
//     //     event.preventDefault();
//     //     setIsLoading(true);
        
//     //     if((name != null && name != "") && (feedback != null && feedback != "")){
//     //         const options = {
//     //             name,
//     //             feedback
//     //         }
//     //         await createFeedBack(options);
//     //         toast({
//     //             title: 'Super!...Tus comentarios fueron enviados a Unipensiones',
//     //             description: "Muchas gracias por aportar a Unipensiones 🥳",
//     //             status: 'success',
//     //             duration: 5000,
//     //             isClosable: true,
//     //             variant: 'top-accent',
//     //             position: 'top'
//     //         })
//     //     }
//     //     else {
//     //         toast({
//     //             title: 'LLena todos los datos',
//     //             description: "Completa todos los campos",
//     //             status: 'error',
//     //             duration: 5000,
//     //             isClosable: true,
//     //             variant: 'top-accent',
//     //             position: 'top'
//     //         })
//     //     }
//     // }
//     return (
//         <Box mt={20}>
//             <Heading>Queremos seguir mejorando para brindarte una experiencia única</Heading>
//             <Text fontSize={18}>Ayuda a Unipensiones a ser muchos más ideal para todos: Puedes enviar recomendaciones,
//                 funcionalidades que quieras que tenga la plataforma o algún tipo de estrategia que te gustase que implementemos</Text>
//             <Box width={'50%'} marginLeft={'auto'} marginRight={'auto'} mt={10}>
//                 <Card size={'md'} >
//                     <CardHeader textAlign={'center'} fontWeight={'bold'} fontSize={20}>
//                         Unipensiones será mejor con tu opinión
//                     </CardHeader>
//                     <CardBody>
//                         <form onSubmit={handleSubmitFeedback}>
//                             <VStack spacing={5}>
//                                 <InputGroup>
//                                     <Input type="text" placeholder='Nombre Completo' size={'lg'} value={name} onChange={(e) => setName(e.target.value)}/>
//                                 </InputGroup>
//                                 <InputGroup>
//                                     <Textarea placeholder='Tu Opinión' size={'lg'} cols={30} value={feedback} onChange={(e) => setFeedback(e.target.value)}/>
//                                 </InputGroup>
//                                 <ButtonGroup display={'flex'} justifyContent={'center'}>
//                                     <Button isLoading={isLoading} type="submit" colorScheme='blue'>Enviar a Unipensiones</Button>
//                                 </ButtonGroup>
//                             </VStack>
//                         </form>
//                     </CardBody>
//                 </Card>
//             </Box>
//         </Box>
//     )
// }

// export default FeedBack