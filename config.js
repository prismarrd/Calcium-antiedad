const CONFIG = {
    // Configuración General
    producto: {
        nombre: "Calcium Antiedad",
        marca: "Dr. Melaxin",
        formato: "Stick Bálsamo Multi-uso"
    },

    // Configuración de Contacto y Tracking
    contacto: {
        whatsappTelefono: "18097651290", // Mismo número del código original
        pixelId: "2293470854807086" // Mismo pixel del código original
    },

    // Ofertas y Precios (Como solicitó en el plan)
    ofertas: {
        opcion1: {
            cantidad: 1,
            titulo: "1 Unidad",
            precio: 1720,
            precioAnterior: 2300,
            ahorro: 580,
            badge: "",
            recomendada: false,
            beneficios: [
                "Pago contra entrega",
                "Entrega rápida"
            ]
        },
        opcion2: {
            cantidad: 2,
            titulo: "🔥 2 Unidades",
            precio: 2490,
            precioAnterior: 4600,
            ahorro: 765, // Ahorro visual
            badge: "MÁS VENDIDO - 26% OFF",
            recomendada: true,
            beneficios: [
                "Envío gratis en todo el país",
                "Mayor ahorro",
                "Oferta más elegida"
            ]
        }
    },

    // Información de Envío
    envio: {
        mensajeTopBar: "📦 Pago contra entrega disponible en toda República Dominicana 🚚",
        santoDomingo: "24-48 horas",
        interior: "48-72 horas"
    },

    // Imágenes del Proyecto
    imagenes: {
        hero: "producto/Producto1.png",
        antesDespues: "producto/producto2.png",
        transformacion: "producto/producto3.png",
        checkout: "producto/Producto1.png"
    },

    // Contenido del Hero
    hero: {
        estrellas: "4.8",
        titulo: "EL SECRETO COREANO PARA UNA PIEL MÁS FIRME",
        subtitulo: "El bálsamo antiedad que aporta firmeza, efecto tensor y densidad para una piel de apariencia más joven.",
        badgeAhorro: "🔥 AHORRA RD$580"
    },

    // Beneficios (Iconos de la cuadrícula)
    beneficios: [
        { icono: "✨", texto: "Efecto tensor inmediato" },
        { icono: "🧬", texto: "Restaura la firmeza" },
        { icono: "💧", texto: "Hidratación profunda" },
        { icono: "🛡️", texto: "Piel más densa" },
        { icono: "🌿", texto: "Rico en Calcio y Colágeno" },
        { icono: "⏱️", texto: "Fácil aplicación" }
    ],

    // Ingredientes Destacados (Nueva sección)
    ingredientes: [
        { nombre: "Calcio (Calcium)", descripcion: "Ayuda a mantener la cohesión celular, fortaleciendo la barrera cutánea y aportando densidad a la piel madura." },
        { nombre: "Colágeno Hidrolizado", descripcion: "Penetra profundamente para rellenar las líneas finas y restaurar la elasticidad perdida." },
        { nombre: "Elastina", descripcion: "Trabaja en sinergia con el colágeno para proporcionar un efecto tensor y firmeza duradera." }
    ],

    // Comparación (El cambio que tu piel merece)
    comparacion: {
        antes: [
            "Piel flácida",
            "Falta de volumen",
            "Líneas de expresión",
            "Piel seca y opaca"
        ],
        despues: [
            "Piel más firme",
            "Aspecto rellenado",
            "Efecto tensor visible",
            "Luminosidad juvenil"
        ]
    },

    // Cómo Usar (Pasos)
    pasos: [
        { numero: "1", texto: "Aplica directamente sobre el rostro" },
        { numero: "2", texto: "Desliza en cuello y escote" },
        { numero: "3", texto: "Masajea suavemente" },
        { numero: "4", texto: "Disfruta el efecto tensor" }
    ],

    // Zonas de Aplicación (Nueva sección)
    zonas: [
        "Contorno de Ojos",
        "Líneas de Sonrisa",
        "Frente",
        "Cuello",
        "Escote",
        "Comisuras de los Labios"
    ],

    // Qué incluye
    incluye: [
        "1 Bálsamo Calcium Antiedad Dr. Melaxin",
        "Fórmula premium con Calcio y Colágeno",
        "Formato en stick fácil de llevar",
        "Garantía de calidad original",
        "Asesoría de uso post-compra"
    ],

    // Testimonios
    testimonios: [
        {
            nombre: "Teresa L.",
            avatar: "perfil-testimonios/perfil1.jpg",
            texto: "Me gusto mucho su resultado voy a pedir 2 más",
            imagenResultado: "testimonios/testi1.avif"
        },
        {
            nombre: "Margarita R.",
            avatar: "MR",
            texto: "Es súper práctico. Lo llevo en la cartera y me lo aplico en las líneas de los ojos. Se nota el cambio.",
            imagenResultado: "testimonios/testi2.avif"
        },
        {
            nombre: "Elena P.",
            avatar: "perfil-testimonios/perfil3.jpg",
            texto: "Pensé que sería grasoso pero se absorbe perfecto. La piel se siente mucho más densa y firme.",
            imagenResultado: "testimonios/testi3.avif"
        }
    ],

    // Preguntas Frecuentes
    faq: [
        {
            pregunta: "¿Para qué tipo de piel es?",
            respuesta: "Es ideal para todo tipo de pieles, especialmente aquellas maduras o que empiezan a notar pérdida de firmeza y densidad."
        },
        {
            pregunta: "¿Cómo se aplica?",
            respuesta: "Gracias a su formato stick, solo necesitas deslizarlo suavemente por las zonas que desees tratar (ojos, cuello, frente) y masajear si lo consideras necesario."
        },
        {
            pregunta: "¿Se puede usar debajo del maquillaje?",
            respuesta: "Sí, deja la piel hidratada y tensa, sirviendo como una excelente base antes de aplicar maquillaje."
        },
        {
            pregunta: "¿Cuánto tarda en llegar?",
            respuesta: "En Santo Domingo la entrega toma de 24 a 48 horas. Para el interior del país, el tiempo estimado es de 48 a 72 horas."
        },
        {
            pregunta: "¿Cómo pago?",
            respuesta: "El pago es 100% contra entrega. No necesitas tarjeta de crédito, pagas en efectivo cuando recibas el producto en la puerta de tu casa."
        }
    ]
};
