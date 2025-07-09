const Header = () => {
  const primaryColor = '#FF0000'; // Rojo de Orvex
  const darkBgColor = '#1a1a1a';  // Fondo oscuro

  return (
    <nav className=" shadow-md py-4 px-6 flex justify-between items-center fixed w-full z-10">
      <div className="flex items-center">
        {/* Logo de Orvex */}
        <div className="h-8 w-8 mr-2" style={{ backgroundColor: darkBgColor }}>
          <img src="https://placehold.co/32x32/1a1a1a/FF0000?text=ORVEX" alt="Orvex Logo" className="h-full w-full object-contain" />
        </div>
        <span className="text-2xl font-bold" style={{ color: primaryColor }}>ORVEX</span>
      </div>
      <div className="space-x-6 hidden md:flex">
        <a href="#inicio" className="hover:text-gray-400 font-medium transition-colors duration-200" style={{ color: 'white' }}>Inicio</a>
        <a href="#servicios" className="hover:text-gray-400 font-medium transition-colors duration-200" style={{ color: 'white' }}>Servicios</a>
        <a href="#testimonios" className="hover:text-gray-400 font-medium transition-colors duration-200" style={{ color: 'white' }}>Testimonios</a>
        <button
          className="px-6 py-2 rounded-full font-semibold transition-all duration-300 ease-in-out"
          style={{ backgroundColor: primaryColor, color: 'white', boxShadow: `0 4px 15px rgba(255, 0, 0, 0.4)` }}
          onClick={() => alert('¡Agendar Demo Clicked!')}
        >
          Agendar Demo
        </button>
      </div>
      {/* Botón de menú para móviles */}
      <button className="md:hidden text-white hover:text-gray-400">
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path></svg>
      </button>
    </nav>
  );
};

export default Header;
