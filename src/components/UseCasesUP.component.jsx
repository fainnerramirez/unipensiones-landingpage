import { Box, Button, HStack, Heading, Image, Stack, Text, useToast } from '@chakra-ui/react'
import React from 'react'
import GroupE from "../assets/grupoe.jpg"
import GroupA from "../assets/groupA.jpg"
import { useState } from 'react'

const UseCasesUP = () => {
    const toast = useToast();
    const [anfitrionesURL, setAnfitrionesURL] = useState('https://anfitriones.unipensiones.app/')
    const [estudiantesURL, setEstudiantesURL] = useState('https://estudiantes.unipensiones.app/')

    return (
        <Box>
            <Heading textAlign={'center'}>
                ¡Usa Unipensiones Como Tu Quieras!
            </Heading>
            <Box mt={5}>
                <Text fontSize={'2xl'} textAlign={'center'}>
                    Unipensiones es una aplicación versátil que puede ser usado de dos maneras
                </Text>
                <HStack spacing={10} mt={10}>
                    <Box width={'50%'}>
                        <Image src={GroupE} width={'90%'} height={'90%'} borderRadius={'full'} />
                    </Box>
                    <Box width={'50%'}>
                        <Text fontSize={'2xl'} textAlign={'left'}>
                            <b>Unipensiones para estudiantes</b>
                        </Text>
                        <Box>
                            <Text noOfLines={[10, 10, 30]}>
                                Sumérgete en la experiencia única de Unipensiones para Estudiantes, una sección dedicada exclusivamente a satisfacer las necesidades y preferencias de los estudiantes en busca de alojamiento universitario. En este espacio especializado, los usuarios pueden explorar de manera intuitiva diversas opciones de pensiones que se adaptan a su estilo de vida académico. <br />
                                Descubre una amplia variedad de alojamientos, desde acogedoras habitaciones individuales hasta espacios compartidos ideales para vivir la experiencia universitaria al máximo. La aplicación te permite realizar búsquedas personalizadas según tus preferencias, brindándote la flexibilidad de encontrar la pensión perfecta que se ajuste a tu presupuesto, ubicación y comodidades deseadas. <br />
                                Además, Unipensiones para Estudiantes facilita el proceso de solicitud y comunicación con los anfitriones. Explora reseñas de otros estudiantes, visualiza imágenes detalladas y conecta directamente con los anfitriones para asegurarte de encontrar un hogar que cumpla con todas tus expectativas. <br />
                                Con Unipensiones para Estudiantes, tu búsqueda de alojamiento universitario se transforma en una experiencia sin complicaciones, permitiéndote concentrarte en lo que realmente importa: tu educación y tu vida estudiantil. Únete a nuestra comunidad y descubre la forma más eficiente y emocionante de encontrar el lugar perfecto para llamar hogar durante tu trayectoria académica.
                            </Text>
                        </Box>
                        <Box>
                            <Button 
                                as="a"
                                href={estudiantesURL}
                                colorScheme='blue' 
                                target='_blank'
                                >
                                    Explorar</Button>
                        </Box>
                    </Box>
                </HStack>
                <HStack spacing={10} mt={10} mb={10}>
                    <Box width={'50%'}>
                        <Text fontSize={'2xl'} textAlign={'left'}>
                            <b>Unipensiones para anfitriones</b>
                        </Text>
                        <Box>
                            <Text noOfLines={[10, 10, 30]}>
                                Conviértete en un anfitrión excepcional con Unipensiones para Anfitriones, la plataforma diseñada para hacer que compartir tu espacio sea sencillo y gratificante. En esta sección dedicada, los anfitriones tienen la oportunidad de ofrecer sus alojamientos a estudiantes de todo el país, contribuyendo a la comunidad universitaria y generando ingresos adicionales. <br />
                                Unipensiones para Anfitriones te brinda las herramientas necesarias para gestionar y destacar tu espacio de manera efectiva. Crea perfiles detallados, comparte imágenes atractivas y destaca las comodidades únicas que ofrece tu alojamiento. La aplicación te permite establecer tarifas personalizadas y gestionar disponibilidades, brindándote un control total sobre tu espacio. <br />
                                Además, la plataforma facilita la comunicación con posibles inquilinos. Responde a consultas, acepta solicitudes de estudiantes y gestiona las reservas de manera eficiente. Con Unipensiones para Anfitriones, puedes construir relaciones positivas con los estudiantes, recibir reseñas valiosas y contribuir al ambiente universitario. <br />
                                Únete a la red de anfitriones comprometidos y descubre cómo Unipensiones para Anfitriones puede simplificar el proceso de compartir tu espacio, permitiéndote disfrutar de una experiencia enriquecedora mientras apoyas a la comunidad estudiantil. ¡Haz que tu hogar sea parte de la emocionante travesía universitaria de estudiantes de todo el país! <br />
                            </Text>
                        </Box>
                        <Box>
                            <Button as="a" href={anfitrionesURL} target='_blank' colorScheme='blue'>Explorar</Button>
                        </Box>
                    </Box>
                    <Box width={'50%'}>
                        <Image src={GroupA} width={'90%'} height={'90%'} borderRadius={'full'} />
                    </Box>
                </HStack>
            </Box>

        </Box>
    )
}

export default UseCasesUP