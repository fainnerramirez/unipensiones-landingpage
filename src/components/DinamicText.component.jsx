import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Heading } from "@chakra-ui/react";

const textos = [
    "Descubre la Pensión Universitaria Perfecta de Forma Sencilla",
    "Conecta Tu Pensión con Cientos de Estudiantes Buscando Alojamiento",
    "Encuentra Tu Pensión Universitaria Ideal con un Simple Click",
    "Explora Opciones de Alojamiento Estudiantil con Unipensiones",
    "Ofrece Tu Espacio de Estudio a Estudiantes de Todo el País",
    "Haz que Encontrar una Pensión Universitaria Sea una Experiencia Sin Estrés",
];

const TextDinamic = () => {
    const [indiceTexto, setIndiceTexto] = useState(0);

    useEffect(() => {
        const intervalo = setInterval(() => {
            setIndiceTexto((prevIndice) => (prevIndice + 1) % textos.length);
        }, 3000); // Cambia el valor de intervalo según tus preferencias

        return () => clearInterval(intervalo);
    }, []);

    return (
        <div>
            <AnimatePresence mode="wait">
                <motion.div
                    key={indiceTexto}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -20 }}
                    transition={{ duration: 0.5 }}
                >
                    <Heading textAlign={'center'}>{textos[indiceTexto]}</Heading>
                </motion.div>
            </AnimatePresence>
        </div>
    );
};

export default TextDinamic;
