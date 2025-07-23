<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Orvex - Agentes IA para Automatización y Atención al Cliente</title>
    <!-- Tailwind CSS CDN -->
    <script src="https://cdn.tailwindcss.com"></script>
    <!-- Google Fonts - Inter -->
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet">
    <!-- Font Awesome for icons -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <style>
        body {
            font-family: 'Inter', sans-serif;
            background-color: #000000; /* Fondo negro principal */
            color: #E5E7EB; /* Texto gris claro */
        }
        .text-orvex-red {
            color: #FF0000; /* Rojo vibrante para Orvex */
        }
        .bg-orvex-red {
            background-color: #FF0000; /* Rojo vibrante para Orvex */
        }
        .border-orvex-red {
            border-color: #FF0000; /* Rojo vibrante para Orvex */
        }
        /* Custom spinner for loading effect */
        .spinner {
            border: 4px solid rgba(255, 255, 255, 0.3);
            border-radius: 50%;
            border-top: 4px solid #FF0000;
            width: 30px;
            height: 30px;
            -webkit-animation: spin 1s linear infinite;
            animation: spin 1s linear infinite;
        }
        @-webkit-keyframes spin {
            0% { -webkit-transform: rotate(0deg); }
            100% { -webkit-transform: rotate(360deg); }
        }
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
    </style>
</head>
<body className="antialiased">

    <!-- Hero Section -->
    <section className="relative h-screen flex items-center justify-center text-center bg-black overflow-hidden">
        <!-- Background Overlay for subtle effect -->
        <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-black to-gray-900 opacity-90"></div>
        
        <!-- Content Container -->
        <div className="relative z-10 p-6 max-w-4xl mx-auto">
            <!-- Orvex Logo Placeholder -->
            <div className="mb-8">
                <!-- Replace with your actual logo image -->
                <img src="https://placehold.co/200x60/000000/FF0000?text=ORVEX" alt="Orvex Logo" className="mx-auto h-16 sm:h-20 rounded-lg">
            </div>
            
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-extrabold leading-tight text-white mb-4">
                <span className="text-orvex-red">Orvex:</span> Agentes IA que Trabajan por Ti
            </h1>
            <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
                Nuestros agentes de inteligencia artificial se encargan de la gestión de citas, atención al cliente 24/7 y automatización de tareas clave para tu negocio.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
                <a href="#contact" className="bg-orvex-red hover:bg-red-700 text-white font-bold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105">
                    Solicita una Demostración Gratuita
                </a>
                <a href="#capabilities" className="border-2 border-orvex-red text-orvex-red hover:bg-orvex-red hover:text-white font-bold py-3 px-8 rounded-full transition duration-300 ease-in-out transform hover:scale-105">
                    Descubre sus Capacidades
                </a>
            </div>
        </div>
    </section>

    <!-- Capabilities of AI Agents Section -->
    <section id="capabilities" className="py-16 sm:py-24 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
                Las Capacidades de Nuestros <span className="text-orvex-red">Agentes IA:</span> Trabajan por Ti, 24/7
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="text-left">
                    <p className="text-lg text-gray-300 leading-relaxed mb-6">
                        Descubre cómo los agentes de inteligencia artificial de Orvex transforman la operativa diaria de tu negocio, liberándote para lo que realmente importa. Nuestros agentes están diseñados para interactuar, gestionar y automatizar, ofreciendo soluciones innovadoras y eficientes.
                    </p>
                    <p className="text-lg text-gray-300 leading-relaxed">
                        Desde la primera interacción hasta la gestión de datos, Orvex asegura que cada proceso sea fluido y sin errores.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
                    <!-- Capability 1: WhatsApp & Web Chatbot -->
                    <div className="bg-gray-800 p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                        <div className="text-orvex-red text-4xl mb-4"><i className="fab fa-whatsapp"></i> <i className="fas fa-comments"></i></div>
                        <h3 className="text-xl font-semibold text-white mb-2">Responden en WhatsApp y Web</h3>
                        <p className="text-gray-400">Interactúan con tus clientes de forma natural en cualquier momento, respondiendo preguntas frecuentes, vendiendo productos y ofreciendo soporte al instante.</p>
                    </div>
                    <!-- Capability 2: Appointment Management -->
                    <div className="bg-gray-800 p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                        <div className="text-orvex-red text-4xl mb-4"><i className="far fa-calendar-alt"></i></div>
                        <h3 className="text-xl font-semibold text-white mb-2">Crean Citas y Gestionan Disponibilidad</h3>
                        <p className="text-gray-400">Automatizan todo el ciclo de citas: desde la verificación de disponibilidad y la programación, hasta el envío de recordatorios y confirmaciones automáticas.</p>
                    </div>
                    <!-- Capability 3: Client Database -->
                    <div className="bg-gray-800 p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                        <div className="text-orvex-red text-4xl mb-4"><i className="fas fa-database"></i></div>
                        <h3 className="text-xl font-semibold text-white mb-2">Guardar Clientes en Base de Datos</h3>
                        <p className="text-gray-400">Capturan, organizan y guardan la información de tus clientes de forma segura en bases de datos, facilitando un seguimiento personalizado y eficiente.</p>
                    </div>
                    <!-- Capability 4: Google Calendar Integration -->
                    <div className="bg-gray-800 p-6 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                        <div className="text-orvex-red text-4xl mb-4"><i className="far fa-calendar-check"></i></div>
                        <h3 className="text-xl font-semibold text-white mb-2">Crear Eventos en Google Calendar</h3>
                        <p className="text-gray-400">Sincronizan tu agenda y crean y actualizan eventos en tu Google Calendar en tiempo real, asegurando que tu agenda esté siempre organizada y al día.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Gemini AI Feature Section -->
    <section className="py-16 sm:py-24 bg-black">
        <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                ✨ Prueba Nuestros Agentes IA ✨
            </h2>
            <p className="text-lg text-gray-300 mb-10">
                Escribe una pregunta o un escenario que tus clientes podrían tener, y observa cómo un agente IA de Orvex podría responder.
            </p>
            <div className="bg-gray-800 p-8 rounded-xl shadow-xl">
                <div className="mb-6">
                    <textarea id="userPrompt" rows="5" placeholder="Ej: 'Quiero agendar una cita para el martes a las 3 PM.' o '¿Cuáles son sus horarios de atención?'" className="w-full p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-orvex-red transition duration-200"></textarea>
                </div>
                <button id="generateResponseBtn" className="bg-orvex-red hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 w-full flex items-center justify-center">
                    <span id="buttonText">Generar Respuesta IA</span>
                    <div id="loadingSpinner" className="spinner ml-3 hidden"></div>
                </button>
                <div id="aiResponse" className="mt-8 p-6 bg-gray-700 rounded-lg text-left text-gray-200 leading-relaxed hidden">
                    <!-- AI response will be displayed here -->
                </div>
            </div>
        </div>
    </section>

    <!-- How It Works Section -->
    <section className="py-16 sm:py-24 bg-black">
        <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
                Así de Fácil es Integrar <span className="text-orvex-red">Orvex</span> en Tu Negocio
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                <!-- Step 1 -->
                <div className="flex flex-col items-center p-6 bg-gray-900 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                    <div className="bg-orvex-red text-white text-3xl font-bold w-16 h-16 flex items-center justify-center rounded-full mb-4">1</div>
                    <h3 className="text-xl font-semibold text-white mb-2">Define tus Necesidades</h3>
                    <p className="text-gray-400 text-center">Cuéntanos qué procesos quieres automatizar y qué objetivos buscas alcanzar.</p>
                </div>
                <!-- Step 2 -->
                <div className="flex flex-col items-center p-6 bg-gray-900 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                    <div className="bg-orvex-red text-white text-3xl font-bold w-16 h-16 flex items-center justify-center rounded-full mb-4">2</div>
                    <h3 className="text-xl font-semibold text-white mb-2">Configuración Personalizada</h3>
                    <p className="text-gray-400 text-center">Diseñamos y entrenamos tu agente IA a la medida, adaptándolo a tu marca y necesidades.</p>
                </div>
                <!-- Step 3 -->
                <div className="flex flex-col items-center p-6 bg-gray-900 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                    <div className="bg-orvex-red text-white text-3xl font-bold w-16 h-16 flex items-center justify-center rounded-full mb-4">3</div>
                    <h3 className="text-xl font-semibold text-white mb-2">Implementación Rápida</h3>
                    <p className="text-gray-400 text-center">Integramos tu agente en tu sitio web y WhatsApp en cuestión de días.</p>
                </div>
                <!-- Step 4 -->
                <div className="flex flex-col items-center p-6 bg-gray-900 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                    <div className="bg-orvex-red text-white text-3xl font-bold w-16 h-16 flex items-center justify-center rounded-full mb-4">4</div>
                    <h3 className="text-xl font-semibold text-white mb-2">Resultados Instantáneos</h3>
                    <p className="text-gray-400 text-center">Observa cómo Orvex transforma tu operación y la experiencia de tus clientes.</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Key Benefits Section -->
    <section className="py-16 sm:py-24 bg-gray-900">
        <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
                Beneficios Tangibles para Tu Negocio con <span className="text-orvex-red">Orvex</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <!-- Benefit 1 -->
                <div className="bg-gray-800 p-6 rounded-xl shadow-lg flex items-start space-x-4 transform hover:scale-105 transition duration-300 ease-in-out">
                    <div className="text-orvex-red text-3xl flex-shrink-0 mt-1"><i className="fas fa-chart-line"></i></div>
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Aumento de la Eficiencia</h3>
                        <p className="text-gray-400">Libera a tu equipo de tareas repetitivas, permitiéndoles enfocarse en actividades de mayor valor.</p>
                    </div>
                </div>
                <!-- Benefit 2 -->
                <div className="bg-gray-800 p-6 rounded-xl shadow-lg flex items-start space-x-4 transform hover:scale-105 transition duration-300 ease-in-out">
                    <div className="text-orvex-red text-3xl flex-shrink-0 mt-1"><i className="fas fa-clock"></i></div>
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Disponibilidad Continua</h3>
                        <p className="text-gray-400">Ofrece atención al cliente 24/7, sin interrupciones, mejorando la satisfacción.</p>
                    </div>
                </div>
                <!-- Benefit 3 -->
                <div className="bg-gray-800 p-6 rounded-xl shadow-lg flex items-start space-x-4 transform hover:scale-105 transition duration-300 ease-in-out">
                    <div className="text-orvex-red text-3xl flex-shrink-0 mt-1"><i className="fas fa-dollar-sign"></i></div>
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Reducción de Costos</h3>
                        <p className="text-gray-400">Minimiza errores y optimiza la asignación de recursos, impactando positivamente tus finanzas.</p>
                    </div>
                </div>
                <!-- Benefit 4 -->
                <div className="bg-gray-800 p-6 rounded-xl shadow-lg flex items-start space-x-4 transform hover:scale-105 transition duration-300 ease-in-out">
                    <div className="text-orvex-red text-3xl flex-shrink-0 mt-1"><i className="fas fa-handshake"></i></div>
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Mejora la Experiencia del Cliente</h3>
                        <p className="text-gray-400">Ofrece respuestas rápidas y personalizadas, construyendo lealtad y confianza.</p>
                    </div>
                </div>
                <!-- Benefit 5 -->
                <div className="bg-gray-800 p-6 rounded-xl shadow-lg flex items-start space-x-4 transform hover:scale-105 transition duration-300 ease-in-out">
                    <div className="text-orvex-red text-3xl flex-shrink-0 mt-1"><i className="fas fa-funnel-dollar"></i></div>
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Incremento de Ventas y Leads</h3>
                        <p className="text-gray-400">No pierdas oportunidades por falta de atención; convierte más visitantes en clientes.</p>
                    </div>
                </div>
                <!-- Benefit 6 -->
                <div className="bg-gray-800 p-6 rounded-xl shadow-lg flex items-start space-x-4 transform hover:scale-105 transition duration-300 ease-in-out">
                    <div className="text-orvex-red text-3xl flex-shrink-0 mt-1"><i className="fas fa-shield-alt"></i></div>
                    <div>
                        <h3 className="text-xl font-semibold text-white mb-2">Seguridad y Fiabilidad</h3>
                        <p className="text-gray-400">Nuestros sistemas están diseñados para operar con la máxima seguridad y consistencia.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Use Cases / Industries Section -->
    <section className="py-16 sm:py-24 bg-black">
        <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-12">
                Orvex: La Solución Perfecta Para <span className="text-orvex-red">Diversas Industrias</span>
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-8">
                <!-- Industry 1 -->
                <div className="flex flex-col items-center p-4 bg-gray-900 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                    <div className="text-orvex-red text-5xl mb-3"><i className="fas fa-hospital"></i></div>
                    <p className="text-white text-lg font-semibold">Centros Médicos</p>
                </div>
                <!-- Industry 2 -->
                <div className="flex flex-col items-center p-4 bg-gray-900 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                    <div className="text-orvex-red text-5xl mb-3"><i className="fas fa-brain"></i></div>
                    <p className="text-white text-lg font-semibold">Clínicas Psicológicas</p>
                </div>
                <!-- Industry 3 -->
                <div className="flex flex-col items-center p-4 bg-gray-900 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                    <div className="text-orvex-red text-5xl mb-3"><i className="fas fa-user-tie"></i></div>
                    <p className="text-white text-lg font-semibold">Consultorios</p>
                </div>
                <!-- Industry 4 -->
                <div className="flex flex-col items-center p-4 bg-gray-900 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                    <div className="text-orvex-red text-5xl mb-3"><i className="fas fa-store"></i></div>
                    <p className="text-white text-lg font-semibold">E-commerce</p>
                </div>
                <!-- Industry 5 -->
                <div className="flex flex-col items-center p-4 bg-gray-900 rounded-xl shadow-lg transform hover:scale-105 transition duration-300 ease-in-out">
                    <div className="text-orvex-red text-5xl mb-3"><i className="fas fa-lightbulb"></i></div>
                    <p className="text-white text-lg font-semibold">Servicios de Asesoría</p>
                </div>
            </div>
        </div>
    </section>

    <!-- Call to Action & Contact Form Section -->
    <section id="contact" className="py-16 sm:py-24 bg-gray-900">
        <div className="max-w-3xl mx-auto px-6 text-center">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-8">
                Transforma Tu Negocio Hoy. <span className="text-orvex-red">Contáctanos.</span>
            </h2>
            <p className="text-lg text-gray-300 mb-10">
                ¿Listo para llevar tu eficiencia y atención al cliente al siguiente nivel? Completa el formulario y uno de nuestros expertos se pondrá en contacto contigo.
            </p>
            <form className="bg-gray-800 p-8 rounded-xl shadow-xl">
                <div className="mb-6">
                    <input type="text" id="name" name="name" placeholder="Tu Nombre Completo" className="w-full p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-orvex-red transition duration-200" required>
                </div>
                <div className="mb-6">
                    <input type="email" id="email" name="email" placeholder="Tu Correo Electrónico" className="w-full p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-orvex-red transition duration-200" required>
                </div>
                <div className="mb-6">
                    <input type="tel" id="phone" name="phone" placeholder="Tu Número de Teléfono" className="w-full p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-orvex-red transition duration-200">
                </div>
                <div className="mb-6">
                    <textarea id="message" name="message" rows="5" placeholder="Cuéntanos más sobre tus necesidades (opcional)" className="w-full p-4 rounded-lg bg-gray-700 text-white border border-gray-600 focus:outline-none focus:border-orvex-red transition duration-200"></textarea>
                </div>
                <button type="submit" className="bg-orvex-red hover:bg-red-700 text-white font-bold py-4 px-10 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 w-full">
                    Enviar Solicitud
                </button>
            </form>
            <p className="mt-8 text-sm text-gray-500">
                Al enviar, aceptas nuestra <a href="#" className="text-orvex-red hover:underline">Política de Privacidad</a>.
            </p>
        </div>
    </section>

    <!-- Footer -->
    <footer className="bg-black py-12">
        <div className="max-w-6xl mx-auto px-6 text-center">
            <!-- Orvex Logo Placeholder -->
            <div className="mb-6">
                <img src="https://placehold.co/150x45/000000/FF0000?text=ORVEX" alt="Orvex Logo" className="mx-auto h-12 rounded-lg">
            </div>
            <div className="flex justify-center space-x-6 mb-6">
                <a href="#" className="text-gray-400 hover:text-orvex-red transition duration-200 text-2xl"><i className="fab fa-facebook-f"></i></a>
                <a href="#" className="text-gray-400 hover:text-orvex-red transition duration-200 text-2xl"><i className="fab fa-twitter"></i></a>
                <a href="#" className="text-gray-400 hover:text-orvex-red transition duration-200 text-2xl"><i className="fab fa-linkedin-in"></i></a>
                <a href="#" className="text-gray-400 hover:text-orvex-red transition duration-200 text-2xl"><i className="fab fa-instagram"></i></a>
            </div>
            <p className="text-gray-500 text-sm">
                &copy; 2024 Orvex. Todos los derechos reservados.
            </p>
        </div>
    </footer>

    <script>
        document.addEventListener('DOMContentLoaded', () => {
            const userPromptInput = document.getElementById('userPrompt');
            const generateResponseBtn = document.getElementById('generateResponseBtn');
            const aiResponseDiv = document.getElementById('aiResponse');
            const loadingSpinner = document.getElementById('loadingSpinner');
            const buttonText = document.getElementById('buttonText');

            generateResponseBtn.addEventListener('click', async () => {
                const prompt = userPromptInput.value.trim();
                if (!prompt) {
                    aiResponseDiv.textContent = 'Por favor, introduce una pregunta o escenario para el agente IA.';
                    aiResponseDiv.classNameList.remove('hidden');
                    return;
                }

                // Show loading state
                buttonText.classNameList.add('hidden');
                loadingSpinner.classNameList.remove('hidden');
                generateResponseBtn.disabled = true;
                aiResponseDiv.classNameList.add('hidden');
                aiResponseDiv.textContent = ''; // Clear previous response

                try {
                    let chatHistory = [];
                    // Instruct the LLM to act as an Orvex AI agent
                    chatHistory.push({ role: "user", parts: [{ text: `Eres un agente de inteligencia artificial de Orvex. Tu función es automatizar la gestión de citas, responder preguntas frecuentes, guardar clientes en bases de datos y crear eventos en Google Calendar. Responde a la siguiente consulta de un cliente de forma útil y profesional, demostrando tus capacidades:\n\nConsulta del cliente: "${prompt}"` }] });
                    
                    const payload = { contents: chatHistory };
                    const apiKey = ""; // Canvas will automatically provide the API key at runtime
                    const apiUrl = `https://generativelanguage.googleapis.com/v1beta/models/gemini-2.0-flash:generateContent?key=${apiKey}`;

                    const response = await fetch(apiUrl, {
                        method: 'POST',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(payload)
                    });

                    const result = await response.json();

                    if (result.candidates && result.candidates.length > 0 &&
                        result.candidates[0].content && result.candidates[0].content.parts &&
                        result.candidates[0].content.parts.length > 0) {
                        const text = result.candidates[0].content.parts[0].text;
                        aiResponseDiv.textContent = text;
                        aiResponseDiv.classNameList.remove('hidden');
                    } else {
                        aiResponseDiv.textContent = 'Lo siento, no pude generar una respuesta. Inténtalo de nuevo.';
                        aiResponseDiv.classNameList.remove('hidden');
                    }
                } catch (error) {
                    console.error('Error al llamar a la API de Gemini:', error);
                    aiResponseDiv.textContent = 'Hubo un error al procesar tu solicitud. Por favor, inténtalo más tarde.';
                    aiResponseDiv.classNameList.remove('hidden');
                } finally {
                    // Hide loading state
                    buttonText.classNameList.remove('hidden');
                    loadingSpinner.classNameList.add('hidden');
                    generateResponseBtn.disabled = false;
                }
            });
        });
    </script>
</body>
</html>
