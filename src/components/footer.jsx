import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <>
            
            <div className="bg-azul-edit mt-10">
                <div className="max-w-screen-xl py-10 px-4 sm:px-6 text-white sm:flex justify-between mx-auto">
                    <div className="p-1 sm:w-4/12">
                        <img src="../assets/img/logo.png" alt="" />
                    </div>

                    <div className="p-5 sm:w-5/12 flex flex-col">
                        <div className="text-sm uppercase  font-bold mb-5">Contacto</div>
                        <div className="flex ">
                            <div className="h-10 w-10 bg-cover">
                                <img className="w-7 h-7" src="../assets/img/mail.png" alt="" /> 
                            </div>
                            <div className="">
                                <div className=" text-m">escuelanautucacnc@gmail.com</div>
                            </div>
                        </div>
                        <div className="flex ">
                            <div className="h-10 w-10 bg-cover">
                                <img className="w-6 h-6" src="../assets/img/telefono.png" alt="" /> 
                            </div>
                            <div className="">
                                <div className=" text-m">+54 9 3541 54-0017</div>
                            </div>
                        </div>
                        <div className="flex ">
                            <div className="h-10 w-10 bg-cover">
                                <img className="w-7 h-7" src="../assets/img/mapa.png" alt="" /> 
                            </div>
                            <div className="">
                                <Link to="https://maps.app.goo.gl/krgVeitVmaJnxgxe7">
                                    <div className=" text-m">Villa Carlos Paz, Cordoba</div>
                                </Link>
                            </div>
                        </div>

                    </div>
                    <div className="p-5 sm:w-3/12">
                        <div className="text-sm uppercase  font-bold mb-5">Seguinos en nuestras redes!</div>
                        <ul className="grid grid-cols-3 gap-5">
                            <li>
                                <Link to="https://www.instagram.com/escueladeyachting">
                                    <img src="../assets/img/instagram.png" className="w-20"/> 
                                </Link>
                                
                            </li>
                            <li>
                                <Link to="https://www.facebook.com/escuelanauticacba">
                                    <img src="../assets/img/facebook.png" className="w-20"/>  
                                </Link>
                                
                            </li>
                            <li>
                                <Link to="https://wa.me/+543541540017">
                                    <img src="../assets/img/whatsapp.png" className="w-20"/>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="flex py-5 m-auto text-white  text-sm flex-col items-center border-t max-w-screen-xl">
                    <p>© Copyright 2024. Escuela de Yachting.</p>
                </div>
            </div>

        </>
    )
}

export default Footer;