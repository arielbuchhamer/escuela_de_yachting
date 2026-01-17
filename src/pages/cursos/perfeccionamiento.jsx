import Header from "../../components/Header/header";
import Footer from "../../components/footer";
import { Link } from "react-router-dom";

import React, { useState } from "react";

// Button Component
function Button({ children, size, className }) {
  return (
    <button className={`btn ${size} ${className}`}>
      {children}
    </button>
  );
}

// Accordion Components
function Accordion({ children }) {
  return <div>{children}</div>;
}

function AccordionItem({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      <div onClick={() => setIsOpen(!isOpen)}>
        {children[0]}
      </div>
      {isOpen && <div>{children[1]}</div>}
    </div>
  );
}

function AccordionTrigger({ children }) {
  return <div>{children}</div>;
}

function AccordionContent({ children }) {
  return <div>{children}</div>;
}

// CheckIcon Component
function CheckIcon(props) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M20 6 9 17l-5-5" />
    </svg>
  );
}

// Main Component
export default function Perfeccionamiento() {
  return (
    <div >
        <Header />
            <div className="w-full max-w-6xl mx-auto py-12 md:py-20 mt-36">
                <div className="grid gap-8 md:gap-12">
                  <div className="grid gap-4">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-600 body-font">Perfeccionamiento para Timoneles y Patrones</h1>
                    <p className="text-xl md:text-2xl font-semibold text-azul-edit tracking-wide">
                      Inicio: <span className="font-bold">14/02/2026</span>
                    </p>
                    <p className="text-lg md:text-xl text-gray-500 ">
                      Este curso te capacitará en las habilidades esenciales para regatas, maniobras en puertos, mantenimiento de embarcaciones y navegación segura en todas las condiciones.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <img
                        src="../assets/img/perfec1.jpeg"
                        alt="Curso de Navegación"
                        width={600}
                        height={400}
                        className="rounded-lg object-cover w-full aspect-[3/2]"
                    />
                    <img
                        src="../assets/img/perfec2.jpeg"
                        alt="Curso de Navegación"
                        width={600}
                        height={400}
                        className="rounded-lg object-cover w-full aspect-[3/2]"
                    />
                    <img
                        src="../assets/img/perfec3.jpeg"
                        alt="Curso de Navegación"
                        width={600}
                        height={400}
                        className="rounded-lg object-cover w-full aspect-[3/2]"
                    />
                  </div>
                  <div className="grid gap-8 md:grid-cols-2 items-start">
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                          <h2 className="text-2xl md:text-3xl font-bold">Detalles del Curso</h2>
                          <p className="text-gray-700 ">
                            El Curso es el ideal para aquellos que desean iniciarse o mejorar habilidades para el mundo de las regatas, puesta a punto, preparación de maniobras (puntuales para cada embarcación) trimados de aparejos y velas, etc. Maniobra de Ingreso y salida de Puertos ya sea a vela o a motor, fondear con Ancla, amarrar al Borneo, Muelle o Marina. Obtener mayores conocimientos sobre cuidados y mantenimiento del barco y sus accesorios. Preparación de la embarcación para navegar con mal tiempo, técnicas para Capear o correr temporales, Ancla de Mar Y Meteorología Práctica                          
                          </p>
                        </div>
                        <hr />
                        <div className="grid gap-2">
                          <h2 className="text-2xl md:text-3xl font-bold">Objetivos del Curso</h2>
                          <ul className="space-y-2 text-gray-700 ">
                              <li>
                              <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                              Dominar el uso de compás de gobierno, GPS y otros instrumentos de navegación
                              </li>
                              <li>
                              <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                              Aprender a planificar rutas seguras y eficientes
                              </li>
                              <li>
                              <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                              Desarrollar habilidades de toma de decisiones en situaciones de emergencia
                              </li>
                              <li>
                              <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                              Conocer las técnicas de navegación en diferentes entornos 
                              </li>
                          </ul>
                        </div>
                        <hr />
                        <div className="grid gap-2">
                          <h2 className=" text-red-700 text-2xl md:text-3xl font-bold">Importante</h2>
                          <ul className="space-y-2 text-gray-700 ">
                              <li>
                              <span className="mr-3">&#9875;</span>
                              Los Alumnos, docentes, personal administrativo y egresados de la UNIVERSIDAD CATÓLICA DE CÓRDOBA reciben un 15% de descuento sobre las cuotas de los No-Socios
                              </li>
                              <li>
                              <span className="mr-3">&#9875;</span>
                              Pago total de contado recibe un 10% de descuento
                              </li>
                              <li>
                              <span className="mr-3">&#9875;</span>
                              Los No-Socios abonaran al Club Náutico Córdoba cuotas como Socios Pasantes durante los meses de asistencia presencial por el uso de las instalaciones durante las clases prácticas.
                              </li>
                              <li>
                              <span className="mr-3">&#9875;</span>
                              La cuota cursante del Club está sujeta a modificación sin previo aviso
                              </li>
                          </ul>
                        </div>
                    </div>
                    <div className="grid gap-4">
                        <div className="grid gap-2">
                          <h2 className="text-2xl md:text-3xl font-bold text-center">Precios</h2>
                          <div>
                            <div className="container px-6  mx-auto">
                                <div className="grid grid-cols-1 gap-8 mt-7 xl:mt-12 xl:gap-12 md:grid-cols-2 ">
                                    <div className="w-full p-8 space-y-4 text-center bg-azul-edit rounded-lg">
                                        <p className="font-medium text-gray-200 uppercase">Socios</p>

                                        <h2 className="text-3xl font-bold text-white uppercase ">
                                            $400.000
                                        </h2>
                                        <p></p>
                                        <br />
                                        <br />  
                                        <br />
                                        <Link to="/formulario">
                                          <button className="w-full px-4 py-2 mt-10 tracking-wide text-blue-500 capitalize transition-colors duration-300 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:ring focus:ring-gray-200 focus:ring-opacity-80">
                                              Inscribirse
                                          </button>
                                        </Link>
                                        

                                    </div>

                                    <div className="w-full p-8 space-y-4 text-center bg-azul-edit rounded-lg">
                                        <p className="font-medium text-gray-200 uppercase">NO Socios</p>

                                        <h2 className="text-3xl font-bold text-white uppercase ">
                                            $460.000
                                        </h2>
                                        <br />
                                        <br />
                                        <br />

                                        <Link to="/formulario">
                                          <button className="w-full px-4 py-2 mt-10 tracking-wide text-blue-500 capitalize transition-colors duration-300 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:ring focus:ring-gray-200 focus:ring-opacity-80">
                                              Inscribirse
                                          </button>
                                        </Link>

                                    </div>
                                </div>
                            </div>
                        </div>
                        </div>
                        <div className="grid gap-2">
                          <h2 className="text-2xl md:text-3xl font-bold">Metodos de pago</h2>
                          <div className="flex items-center space-x-4">
                            <img src="../assets/img/billete-de-banco.png" alt="" className="h-5 w-5"/>
                            <p className="text-gray-500 text-base">
                              Efectivo
                            </p>
                          </div>
                          <div className="flex items-center space-x-4">
                            <img src="../assets/img/cajero-automatico.png" alt="" className="h-5 w-5"/>
                            <p className="text-gray-500 text-base">
                              Deposito
                            </p>
                          </div>
                          <div className="flex items-center space-x-4">
                            <img src="../assets/img/transferencia-movil.png" alt="" className="h-5 w-5"/>
                            <p className="text-gray-500 text-base">
                              Transferencia
                            </p>
                          </div>
                        </div>
                        <div className="grid gap-2">
                          <h2 className="text-2xl md:text-3xl font-bold">Duración</h2>
                          <p className="text-gray-500 ">
                            12 clases Prácticas en sede Club Náutico Córdoba de 3 hs a bordo de Veleros de la Clase Internacional J24
                          </p>
                        </div>
                        <div className="grid gap-2">
                          <h2 className="text-2xl md:text-3xl font-bold">Modalidad</h2>
                          
                          <p className="text-gray-500 ">
                            <span className="mr-3">&#9875;</span>
                            Clases Prácticas: Presenciales a bordo de los barcos escuela de clase J24, en sede Club Náutico Córdoba, Villa Carlos Paz. (Tripulacion maxima 4 alumnos por barco) 
                          </p>
                          <p className="text-gray-500 ">
                            <span className="mr-3">&#9875;</span>
                            1 clase semanal de 3 hs. en los siguientes días a elección:  Miércoles, Jueves, Viernes o Sábado desde las 15:00 a las 18:00
                          </p>
                        </div>
                    </div>
                </div>
                <div className="grid gap-4">
                  <h2 className="text-2xl md:text-3xl font-bold">Nuestros Instructores</h2>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    <div className="grid gap-4">
                        <img
                            src="../assets/img/bauti.jpeg"
                            alt="Instructor 1"
                            width={100}
                            height={100}
                            className="rounded-full w-20 h-20 object-cover"
                        />
                      <div className="grid gap-1">
                          <h3 className="font-semibold">Romero Argerich Bautista</h3>
                          <li className="text-gray-500 ">
                          Patron de Yate a Vela o Motor 
                          </li>
                          <li className="text-gray-500 ">
                          Profesor Clases Prácticas / Teóricas
                          </li>
                      </div>
                    </div>
                    <div className="grid gap-4">
                      <img
                          src="../assets/img/miky.jpeg"
                          alt="Instructor 2"
                          width={100}
                          height={100}
                          className="rounded-full w-20 h-20 object-cover"
                      />
                      <div className="grid gap-1">
                          <h3 className="font-semibold">Romero Miguel Angel</h3>
                          <li className="text-gray-500 ">
                          PILOTO de YATES 
                          </li>
                          <li className="text-gray-500 ">
                          Profesor Clases Prácticas / Teóricas
                          </li>
                      </div>
                    </div>
                    <div className="grid gap-4">
                      <img
                          src="../assets/img/martin.jpeg"
                          alt="Instructor 3"
                          width={100}
                          height={100}
                          className="rounded-full w-20 h-20 object-cover"
                      />
                      <div className="grid gap-1">
                          <h3 className="font-semibold">Caruso Martin</h3>
                          <li className="text-gray-500 ">
                          Patron de Yate a Vela o Motor 
                          </li>
                          <li className="text-gray-500 ">
                          Profesor Clases Prácticas / Teóricas
                          </li>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="grid gap-10 max-w-2xl mx-auto p-6">
                  <h2 className="text-3xl md:text-4xl font-bold text-center mb-2 text-gray-800">Preguntas Frecuentes</h2>
                  <Accordion>
                    <AccordionItem>
                      <AccordionTrigger className="group cursor-pointer p-5 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 bg-white w-full">
                        <div className="mb-5 flex items-center justify-between w-full">
                          <span className="text-lg font-semibold text-gray-700 group-hover:text-blue-600 transition duration-300 ease-in-out">¿Qué se incluye en el curso de Perfeccionamiento?</span>
                          <svg className="w-6 h-6 text-gray-500 group-hover:text-blue-600 transition duration-300 ease-in-out ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                          </svg>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="p-6 bg-gray-50 border-t border-gray-300 rounded-b-lg shadow-inner">
                        <p className="text-gray-600 leading-relaxed">
                          El curso de conductor nautico incluye:
                          <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li> seguro personal</li>
                          </ul>
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <br />
                    <AccordionItem>
                      <AccordionTrigger className="group cursor-pointer p-5 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 bg-white w-full">
                        <div className="mb-5 flex items-center justify-between w-full">
                          <span className="text-lg font-semibold text-gray-700 group-hover:text-blue-600 transition duration-300 ease-in-out">¿Qué nivel de experiencia se requiere para el curso?</span>
                          <svg className="w-6 h-6 text-gray-500 group-hover:text-blue-600 transition duration-300 ease-in-out ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                          </svg>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="p-6 bg-gray-50 border-t border-gray-300 rounded-b-lg shadow-inner">
                        <p className="text-gray-600 leading-relaxed">
                          Este curso está diseñado para personas con una experiencia previa como timonel de vela. Durante el curso, se cubrirán desde conceptos fundamentales hasta técnicas avanzadas, de manera que todos los participantes puedan mejorar sus habilidades.
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                    <br />
                    <AccordionItem>
                      <AccordionTrigger className="group cursor-pointer p-5 border border-gray-300 rounded-lg shadow-md hover:shadow-lg transition duration-300 ease-in-out transform hover:-translate-y-1 bg-white w-full">
                        <div className="mb-5 flex items-center justify-between w-full">
                          <span className="text-lg font-semibold text-gray-700 group-hover:text-blue-600 transition duration-300 ease-in-out">¿Hay algún requisito de equipo o material?</span>
                          <svg className="w-6 h-6 text-gray-500 group-hover:text-blue-600 transition duration-300 ease-in-out ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                          </svg>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="p-6 bg-gray-50 border-t border-gray-300 rounded-b-lg shadow-inner">
                        <p className="text-gray-600 leading-relaxed">
                          No se requiere equipo o material específico para participar en el curso. Proporcionaremos todos los instrumentos de navegación necesarios durante las sesiones. 
                        </p>
                      </AccordionContent>
                    </AccordionItem>
                  </Accordion>
                </div>
            </div>
        </div>
        <Footer />
    </div>
  );
}