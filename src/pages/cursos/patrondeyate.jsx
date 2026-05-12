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
export default function Patrondeyate() {
  return (
    <div >
        <Header />
            <div className="w-full max-w-6xl mx-auto py-12 md:py-20 mt-36">
                <div className="grid gap-8 md:gap-12">
                  <div className="grid gap-4">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-600 body-font">Curso Superior de Patrón de Yate a Vela / Motor</h1>
                    <p className="text-xl md:text-2xl font-semibold text-azul-edit tracking-wide">
                      Inicio: <span className="font-bold">27 de Mayo de 2026</span>
                    </p>
                    <p className="text-lg md:text-xl text-gray-500 ">
                      Si ya poseés habilitación de Timonel de Yate a Vela o Motor y querés avanzar, este es tu próximo paso.
                    </p>
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <img
                        src="../assets/img/curso1.jpg"
                        alt="Curso de Navegación"
                        width={600}
                        height={400}
                        className="rounded-lg object-cover w-full aspect-[3/2]"
                    />
                    <img
                        src="../assets/img/curso2.jpg"
                        alt="Curso de Navegación"
                        width={600}
                        height={400}
                        className="rounded-lg object-cover w-full aspect-[3/2]"
                    />
                    <img
                        src="../assets/img/curso3.jpg"
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
                          Al programa oficial de la Prefectura Naval Argentina se le incorporan contenidos ampliados que fortalecen la formación del Patrón de Yate. La formación incluye navegación, con énfasis en navegación por estima y navegación costera; meteorología práctica aplicada a la toma de decisiones; reglamentación y seguridad; artes marineras avanzadas; navegación electrónica y uso práctico del sextante.
                          </p>
                          <p className="text-gray-700 ">REQUISITO: Poseer habilitación de Timonel de Yate a Vela o Motor</p>
                        </div>
                        <hr />
                        <div className="grid gap-2">
                          <h2 className="text-2xl md:text-3xl font-bold">Objetivos del Curso</h2>
                          <ul className="space-y-2 text-gray-700 ">
                              <li>
                              <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                              Profundizar los conocimientos teóricos y prácticos necesarios para una navegación segura dentro del ámbito correspondiente a la categoría Patrón de Yate
                              </li>
                              <li>
                              <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                              Desarrollar criterio náutico, autonomía y capacidad de planificación
                              </li>
                              <li>
                              <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                              Fortalecer la toma de decisiones mediante meteorología práctica, reglamentación, seguridad y artes marineras avanzadas
                              </li>
                              <li>
                              <CheckIcon className="mr-2 inline-block h-4 w-4 text-primary" />
                              Cumplir con los requisitos de la Prefectura Naval Argentina para la categoría correspondiente
                              </li>
                          </ul>
                        </div>
                        <hr />
                        <div className="grid gap-2">
                          <h2 className=" text-red-700 text-2xl md:text-3xl font-bold">Importante</h2>
                          <ul className="space-y-2 text-gray-700 ">
                              <li>
                              <span className="mr-3">&#9875;</span>
                              Cupos limitados. La inscripción depende del cupo disponible.
                              </li>
                              <li>
                              <span className="mr-3">&#9875;</span>
                              Examen según normativa P.N.A.
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
                                      $640.000
                                    </h2>

                                    <p className="text-white">------------</p>
                                    <p className="font-medium text-gray-200">Inscripción: $240.000 </p>
                                    <p className="text-white">+</p>
                                    <p className="font-medium text-gray-200">Cuotas: 4 de $100.000 </p>

                                    <Link to="/formulario">
                                      <button className="w-full px-4 py-2 mt-10 tracking-wide text-blue-500 capitalize transition-colors duration-300 transform bg-white rounded-md hover:bg-gray-100 focus:outline-none focus:bg-gray-100 focus:ring focus:ring-gray-200 focus:ring-opacity-80">
                                        Inscribirse
                                      </button>
                                    </Link>
                                  </div>

                                  <div className="w-full p-8 space-y-4 text-center bg-azul-edit rounded-lg">
                                    <p className="font-medium text-gray-200 uppercase">NO Socios</p>

                                    <h2 className="text-3xl font-bold text-white uppercase ">
                                      $750.000
                                    </h2>

                                    <p className="text-white">------------</p>
                                    <p className="font-medium text-gray-200">Inscripción: $250.000 </p>
                                    <p className="text-white">+</p>
                                    <p className="font-medium text-gray-200">Cuotas: 4 de $125.000 </p>

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
                          5 meses
                          </p>
                        </div>
                        <div className="grid gap-2">
                          <h2 className="text-2xl md:text-3xl font-bold">Modalidad</h2>
                          
                          <p className="text-gray-500 ">
                            <span className="mr-3">&#9875;</span>
                            Clases online en vivo los miércoles.
                          </p>

                          <p className="text-gray-500 ">
                            <span className="mr-3">&#9875;</span>
                            Plataforma asincrónica con material completo.
                          </p>

                          <p className="text-gray-500 ">
                            <span className="mr-3">&#9875;</span>
                            1 clase presencial mensual.
                          </p>

                          <p className="text-gray-500 ">
                            <span className="mr-3">&#9875;</span>
                             Conocimientos extras voluntarios: Primeros Auxilios, Inglés Técnico Náutico y Meteorología Práctica.
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
                          <h3 className="font-semibold">Bautista Romero Argerich</h3>
                          <li className="text-gray-500 ">
                          Patron de Yate a Vela o Motor 
                          </li>
                          <li className="text-gray-500 ">
                          Navegante oceanico
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
                          <h3 className="font-semibold">Miguel Angel Romero </h3>
                          <li className="text-gray-500 ">
                          PILOTO de YATES 
                          </li>
                          <li className="text-gray-500 ">
                          Navegante oceanico
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
                          <h3 className="font-semibold">Martin Caruso </h3>
                          <li className="text-gray-500 ">
                          Patron de Yate a Vela o Motor 
                          </li>
                          <li className="text-gray-500 ">
                          Navegante oceanico
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
                          <span className="text-lg font-semibold text-gray-700 group-hover:text-blue-600 transition duration-300 ease-in-out">¿Qué se incluye en el Curso Superior de Patrón de Yate?</span>
                          <svg className="w-6 h-6 text-gray-500 group-hover:text-blue-600 transition duration-300 ease-in-out ml-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path>
                          </svg>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent className="p-6 bg-gray-50 border-t border-gray-300 rounded-b-lg shadow-inner">
                        <p className="text-gray-600 leading-relaxed">
                          El Curso Superior de Patrón de Yate incluye:
                          <ul className="list-disc pl-6 space-y-2 mt-2">
                            <li>Clases online en vivo, plataforma asincrónica con material completo y 1 clase presencial mensual</li>
                            <li>Contenidos ampliados de navegación, meteorología práctica, reglamentación, seguridad y artes marineras avanzadas</li>
                            <li>Uso práctico del sextante y navegación electrónica</li>
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
                          Este curso está diseñado para personas que posean habilitación de Timonel de Yate a Vela o Motor.
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
                          El curso se dicta en la Escuela de Yachting – Club Náutico Córdoba. El examen se realiza según normativa P.N.A.
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