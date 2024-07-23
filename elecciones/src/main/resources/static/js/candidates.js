const candidates = [
    { 
        id: 1, 
        name: 'Keiko Fujimori', 
        party: 'FUERZA POPULAR', 
        photo: 'img/Postulante1.png',
        partySymbol: 'img/Logo1.png',
        speech: 'Proponemos fortalecer la seguridad con cámaras en cada esquina, mejorar la infraestructura vial, aumentar el presupuesto para educación y promover la energía renovable.',
        proposals: [
            '1. <strong>Cámaras de seguridad en cada esquina</strong> de cada cuadra para garantizar la seguridad.',
            '2. <strong>Mejora de la infraestructura vial</strong> con reparaciones y nuevas construcciones.',
            '3. <strong>Aumento del presupuesto para educación</strong>, asegurando recursos para las escuelas.',
            '4. <strong>Creación de nuevos parques</strong> y áreas verdes en zonas urbanas.',
            '5. <strong>Promoción del uso de energía renovable</strong> para proteger el medio ambiente.',
            '6. <strong>Fortalecimiento del sistema de salud</strong> con mejores servicios médicos.',
            '7. <strong>Incentivos para pequeñas y medianas empresas</strong> para fomentar el emprendimiento.',
            '8. <strong>Programas de capacitación laboral</strong> para mejorar las habilidades de los trabajadores.',
            '9. <strong>Desarrollo de transporte público eficiente</strong> y amigable con el medio ambiente.',
            '10. <strong>Reformas en el sistema judicial</strong> para una justicia más accesible y eficiente.'
        ] 
    },
    { 
        id: 2, 
        name: 'Franks Vilca', 
        party: 'Partido AEA', 
        photo: 'img/Postulante2.png',
        partySymbol: 'img/Logo2.png',
        speech: 'Prometemos reducir impuestos para familias de bajos ingresos, construir viviendas accesibles, e implementar políticas de igualdad de género.',
        proposals: [
            '1. <strong>Reducción de impuestos</strong> para familias de bajos ingresos para aliviar la carga económica.',
            '2. <strong>Construcción de viviendas accesibles</strong> y de calidad para todos los ciudadanos.',
            '3. <strong>Implementación de programas de reciclaje</strong> en todas las ciudades para reducir la contaminación.',
            '4. <strong>Incremento del salario mínimo</strong> para asegurar una compensación justa para los trabajadores.',
            '5. <strong>Promoción de la cultura y el arte</strong> con apoyo y financiamiento a proyectos culturales.',
            '6. <strong>Seguridad alimentaria y nutricional</strong> mediante programas para asegurar acceso a alimentos saludables.',
            '7. <strong>Mejoras en el sistema de transporte público</strong> para mayor eficiencia y accesibilidad.',
            '8. <strong>Fomento de la investigación y el desarrollo</strong> para promover la innovación.',
            '9. <strong>Programas de prevención de enfermedades</strong> para reducir la incidencia de enfermedades.',
            '10. <strong>Rehabilitación de espacios públicos deteriorados</strong> para que sean seguros y agradables.'
        ] 
    },
    { 
        id: 3, 
        name: 'Pedro Castillo', 
        party: 'Perú Libre', 
        photo: 'img/Postulante3.png',
        partySymbol: 'img/Logo3.png',
        speech: 'Proponemos fortalecer la educación técnica, desarrollar infraestructura rural, y crear programas de salud mental para apoyar a los ciudadanos.',
        proposals: [
            '1. <strong>Fortalecimiento de la educación técnica</strong> y vocacional para mejorar la preparación laboral.',
            '2. <strong>Desarrollo de infraestructura en áreas rurales</strong> para facilitar el acceso a servicios básicos.',
            '3. <strong>Creación de programas de salud mental</strong> para apoyar a quienes enfrentan desafíos psicológicos.',
            '4. <strong>Implementación de políticas de igualdad de género</strong> en todos los aspectos de la vida.',
            '5. <strong>Mejora de la calidad del agua potable</strong> para asegurar el acceso a agua limpia y segura.',
            '6. <strong>Desarrollo del turismo sostenible</strong> para proteger el medio ambiente mientras aprovechamos nuestros recursos.',
            '7. <strong>Incentivos para la agricultura local</strong> para mejorar la producción y seguridad alimentaria.',
            '8. <strong>Reformas en el sistema de pensiones</strong> para garantizar pensiones justas y sostenibles.',
            '9. <strong>Expansión de servicios de internet en zonas rurales</strong> para conectar a más personas con oportunidades digitales.',
            '10. <strong>Inversión en la modernización de la policía</strong> para mejorar la seguridad y eficacia en la prevención del crimen.'
        ] 
    },
    { 
        id: 4, 
        name: 'Eduardo Durand', 
        party: 'Partido Progreso', 
        photo: 'img/Postulante4.png',
        partySymbol: 'img/Logo4.png',
        speech: 'Prometemos modernizar la educación con tecnología, mejorar el acceso a la salud, crear oportunidades de empleo, y fortalecer la justicia social.',
        proposals: [
            '1. <strong>Implementación de tecnología en el sistema educativo</strong> para preparar a los estudiantes para el futuro.',
            '2. <strong>Ampliación de centros de salud</strong> y mejora de servicios médicos en áreas rurales.',
            '3. <strong>Creación de programas de empleo</strong> para jóvenes y desempleados.',
            '4. <strong>Fortalecimiento de la justicia social</strong> mediante políticas inclusivas.',
            '5. <strong>Desarrollo de infraestructura urbana</strong> para mejorar la calidad de vida.',
            '6. <strong>Promoción del emprendimiento</strong> con incentivos para nuevos negocios.',
            '7. <strong>Reducción de la burocracia</strong> para facilitar trámites ciudadanos.',
            '8. <strong>Impulso a la investigación científica</strong> y tecnológica.',
            '9. <strong>Reformas en el sistema de transporte</strong> para mayor eficiencia.',
            '10. <strong>Protección del medio ambiente</strong> con políticas sostenibles.'
        ] 
    },
    { 
        id: 5, 
        name: 'Andre Añazco', 
        party: 'Unión Nacional', 
        photo: 'img/Postulante5.png',
        partySymbol: 'img/Logo5.png',
        speech: 'Nos comprometemos a fomentar la innovación, desarrollar infraestructura rural, incrementar la inversión en salud, y garantizar la transparencia gubernamental.',
        proposals: [
            '1. <strong>Fomento a la innovación</strong> en todos los sectores para impulsar el desarrollo.',
            '2. <strong>Desarrollo de infraestructura en áreas rurales</strong> para mejorar la conectividad y los servicios.',
            '3. <strong>Incremento de la inversión en salud</strong> para mejorar los servicios médicos y reducir las listas de espera.',
            '4. <strong>Garantía de transparencia gubernamental</strong> con mecanismos de control y auditoría.',
            '5. <strong>Creación de empleo</strong> con programas de capacitación y formación.',
            '6. <strong>Protección de derechos laborales</strong> y mejora de las condiciones de trabajo.',
            '7. <strong>Desarrollo de políticas de inclusión social</strong> para todos los ciudadanos.',
            '8. <strong>Fomento a la educación técnica</strong> con programas especializados.',
            '9. <strong>Reducción de impuestos</strong> para fomentar el crecimiento económico.',
            '10. <strong>Rehabilitación de áreas urbanas</strong> para mejorar la calidad de vida.'
        ] 
    },
    { 
        id: 6, 
        name: 'César Garay', 
        party: 'Nuevo Futuro', 
        photo: 'img/Postulante6.png',
        partySymbol: 'img/Logo6.png',
        speech: 'Proponemos transformar el sistema educativo, mejorar la infraestructura urbana, crear políticas de empleo, y promover el desarrollo sostenible.',
        proposals: [
            '1. <strong>Transformación del sistema educativo</strong> con enfoques modernos y accesibles.',
            '2. <strong>Mejora de la infraestructura urbana</strong> con nuevos proyectos de construcción y renovación.',
            '3. <strong>Creación de políticas de empleo</strong> para reducir el desempleo y mejorar las oportunidades.',
            '4. <strong>Promoción del desarrollo sostenible</strong> con prácticas amigables con el medio ambiente.',
            '5. <strong>Inversión en energías limpias</strong> para reducir la huella de carbono.',
            '6. <strong>Fortalecimiento del sistema de salud</strong> con nuevos centros médicos y programas de prevención.',
            '7. <strong>Reformas en el sistema de pensiones</strong> para asegurar una jubilación digna.',
            '8. <strong>Desarrollo del transporte público</strong> con nuevos proyectos de infraestructura.',
            '9. <strong>Apoyo a la innovación tecnológica</strong> para mantener el país a la vanguardia.',
            '10. <strong>Garantía de justicia social</strong> con políticas inclusivas y equitativas.'
        ] 
    },
    { 
        id: 7, 
        name: 'Martin Vizcarra', 
        party: 'Renovación Nacional', 
        photo: 'img/Postulante7.png',
        partySymbol: 'img/Logo7.png',
        speech: 'Prometemos reforzar la lucha contra la corrupción, mejorar el sistema educativo, invertir en infraestructura, y garantizar la seguridad ciudadana.',
        proposals: [
            '1. <strong>Reforzamiento de la lucha contra la corrupción</strong> con mecanismos más estrictos y transparentes.',
            '2. <strong>Mejora del sistema educativo</strong> con nuevas políticas y recursos.',
            '3. <strong>Inversión en infraestructura</strong> para modernizar el país y crear empleo.',
            '4. <strong>Garantía de seguridad ciudadana</strong> con nuevas estrategias de prevención y respuesta.',
            '5. <strong>Desarrollo de proyectos de vivienda</strong> accesible para todos los ciudadanos.',
            '6. <strong>Fortalecimiento de la salud pública</strong> con mayores recursos y programas de prevención.',
            '7. <strong>Fomento a la cultura</strong> y las artes con nuevos proyectos y financiamiento.',
            '8. <strong>Incentivos a la inversión privada</strong> para fomentar el crecimiento económico.',
            '9. <strong>Desarrollo de energías renovables</strong> para una mayor sostenibilidad.',
            '10. <strong>Reformas en el sistema judicial</strong> para asegurar una justicia más rápida y equitativa.'
        ] 
    },
    { 
        id: 8, 
        name: 'Alan García', 
        party: 'Partido Libertad', 
        photo: 'img/Postulante8.png',
        partySymbol: 'img/Logo8.png',
        speech: 'Nuestra propuesta incluye reformas económicas, desarrollo de infraestructura, mejora en la seguridad, y fortalecimiento de la educación.',
        proposals: [
            '1. <strong>Reformas económicas</strong> para impulsar el crecimiento y la estabilidad financiera.',
            '2. <strong>Desarrollo de infraestructura</strong> para modernizar el país y crear empleo.',
            '3. <strong>Mejora de la seguridad</strong> con nuevas políticas y recursos.',
            '4. <strong>Fortalecimiento del sistema educativo</strong> con programas de calidad.',
            '5. <strong>Fomento a la inversión extranjera</strong> para potenciar la economía.',
            '6. <strong>Protección del medio ambiente</strong> con medidas de sostenibilidad.',
            '7. <strong>Desarrollo de políticas de salud</strong> para mejorar el bienestar de los ciudadanos.',
            '8. <strong>Reducción de la burocracia</strong> para facilitar los trámites y servicios.',
            '9. <strong>Apoyo a la cultura y las artes</strong> con financiamiento y promoción.',
            '10. <strong>Reformas en el sistema de pensiones</strong> para una mayor equidad.'
        ] 
    }
];
