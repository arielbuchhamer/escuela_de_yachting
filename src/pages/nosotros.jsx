import Header from "../components/Header/header";
import Footer from "../components/footer";

const Nosotros = () => {
  return (
    <>
      <Header />

      {/* HERO full width */}
      <div className="relative mt-24 w-screen left-1/2 -translate-x-1/2">
        <img
          src="../assets/img/escuela.jpg"
          alt="Imagen de un barco"
          className="w-full h-64 sm:h-72 md:h-[420px] xl:h-[560px] object-cover object-[center_65%]"
        />

        {/* Overlay cinematic */}
        <div className="absolute inset-0 bg-gradient-to-b from-sky-950/45 via-black/20 to-black/65"></div>

        {/* Bruma */}
        <div className="absolute inset-x-0 bottom-0 h-28 bg-gradient-to-t from-white/30 to-transparent blur-md"></div>

        {/* Título */}
        <div className="absolute inset-0 flex items-end">
          <div className="w-full px-4 sm:px-8 lg:px-12 pb-10 sm:pb-12 md:pb-16">
            <div className="inline-block rounded-2xl border border-white/20 bg-white/10 backdrop-blur-md px-5 py-4 shadow-xl">
              <h1 className="font-Dafoe text-white text-4xl sm:text-5xl md:text-7xl xl:text-8xl tracking-tight drop-shadow">
                Sobre Nosotros
              </h1>
              <div className="mt-3 flex items-center gap-2">
                <span className="h-[2px] w-16 bg-white/80 rounded-full"></span>
                <span className="h-[2px] w-8 bg-sky-200/70 rounded-full"></span>
              </div>
            </div>
          </div>
        </div>

        {/* Olas (SVG) */}
        <div className="absolute bottom-0 left-0 w-full">
          <svg
            viewBox="0 0 1440 140"
            className="w-full h-[90px] sm:h-[110px]"
            preserveAspectRatio="none"
          >
            <path
              d="M0,90 C120,70 240,110 360,90 C480,70 600,110 720,90 C840,70 960,110 1080,90 C1200,70 1320,110 1440,90 L1440,140 L0,140 Z"
              fill="rgba(255,255,255,0.98)"
            />
          </svg>
        </div>
      </div>

      {/* CUERPO estilo carta pirata */}
      <section className="w-full py-12 md:py-16 lg:py-20 px-3 sm:px-6">
        <div className="mx-auto max-w-5xl relative">
          {/* Ligas rojas rotas (decoración) */}
          <div className="pointer-events-none absolute -top-6 left-4 right-4 h-14 hidden sm:block">
            <div
              className="absolute left-0 top-3 h-8 w-48 bg-gradient-to-r from-red-900 via-red-700 to-red-900 opacity-90 shadow-md"
              style={{
                clipPath:
                  "polygon(0% 10%, 92% 0%, 100% 50%, 92% 100%, 0% 90%, 3% 50%)",
                transform: "rotate(-2deg)",
              }}
            />
            <div
              className="absolute right-0 top-4 h-8 w-52 bg-gradient-to-l from-red-900 via-red-700 to-red-900 opacity-85 shadow-md"
              style={{
                clipPath:
                  "polygon(8% 0%, 100% 10%, 97% 50%, 100% 90%, 8% 100%, 0% 55%)",
                transform: "rotate(2deg)",
              }}
            />
          </div>

          {/* PAPEL (ahora el rasgado está PEGADO al papel, no separado) */}
          <div
            className="
              relative overflow-hidden rounded-[22px]
              border border-[#7a5a2a]/40
              shadow-[0_30px_90px_rgba(0,0,0,0.25)]
              px-6 sm:px-10 md:px-14
              py-10 sm:py-12 md:py-14
            "
            style={{
              background:
                "radial-gradient(1200px 600px at 30% 0%, rgba(255,255,255,0.45), transparent 60%)," +
                "radial-gradient(900px 500px at 90% 30%, rgba(255,255,255,0.25), transparent 55%)," +
                "linear-gradient(180deg, #f3dfb6 0%, #eed19a 35%, #e6bf7a 100%)",
            }}
          >
            {/* RASGADO SUPERIOR (pegado) */}
            <div className="pointer-events-none absolute -top-6 left-0 w-full">
              <svg viewBox="0 0 1440 140" className="w-full h-20" preserveAspectRatio="none">
                {/* Papel */}
                <path
                  d="M0,70 C80,40 160,100 240,70 C320,40 400,100 480,70
                     C560,40 640,100 720,70 C800,40 880,100 960,70
                     C1040,40 1120,100 1200,70 C1280,40 1360,100 1440,70
                     L1440,0 L0,0 Z"
                  fill="#f0d9a6"
                />
                {/* Borde quemado */}
                <path
                  d="M0,70 C80,40 160,100 240,70 C320,40 400,100 480,70
                     C560,40 640,100 720,70 C800,40 880,100 960,70
                     C1040,40 1120,100 1200,70 C1280,40 1360,100 1440,70"
                  fill="none"
                  stroke="rgba(60,35,10,0.35)"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* RASGADO INFERIOR (pegado) */}
            <div className="pointer-events-none absolute -bottom-6 left-0 w-full">
              <svg viewBox="0 0 1440 140" className="w-full h-20" preserveAspectRatio="none">
                {/* Papel */}
                <path
                  d="M0,70 C100,100 200,40 300,70 C400,105 500,45 600,70
                     C700,100 800,40 900,70 C1000,105 1100,45 1200,70
                     C1300,100 1380,55 1440,70 L1440,140 L0,140 Z"
                  fill="#e8c888"
                />
                {/* Borde quemado */}
                <path
                  d="M0,70 C100,100 200,40 300,70 C400,105 500,45 600,70
                     C700,100 800,40 900,70 C1000,105 1100,45 1200,70
                     C1300,100 1380,55 1440,70"
                  fill="none"
                  stroke="rgba(60,35,10,0.35)"
                  strokeWidth="6"
                  strokeLinecap="round"
                />
              </svg>
            </div>

            {/* QUEMADO INTERNO */}
            <div
              className="pointer-events-none absolute inset-0"
              style={{
                boxShadow:
                  "inset 0 0 0 2px rgba(90,55,15,0.25), " +
                  "inset 0 0 80px rgba(80,45,10,0.45), " +
                  "inset 0 0 160px rgba(55,30,5,0.35)",
              }}
            />

            {/* ESQUINAS QUEMADAS */}
            <div className="pointer-events-none absolute -top-6 -left-6 h-24 w-24 bg-black/30 rounded-full blur-2xl"></div>
            <div className="pointer-events-none absolute -top-6 -right-6 h-28 w-28 bg-black/30 rounded-full blur-2xl"></div>
            <div className="pointer-events-none absolute -bottom-6 -left-6 h-28 w-28 bg-black/30 rounded-full blur-2xl"></div>
            <div className="pointer-events-none absolute -bottom-6 -right-6 h-24 w-24 bg-black/30 rounded-full blur-2xl"></div>

            {/* MORDISCOS LATERALES */}
            <div className="pointer-events-none absolute top-1/3 -left-8 h-20 w-20 bg-black/20 rounded-full blur-xl"></div>
            <div className="pointer-events-none absolute top-2/3 -right-8 h-24 w-24 bg-black/20 rounded-full blur-xl"></div>

            {/* TEXTURA */}
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.18] mix-blend-multiply"
              style={{
                background:
                  "repeating-linear-gradient(0deg, rgba(60,35,10,0.10) 0px, rgba(60,35,10,0.10) 1px, transparent 1px, transparent 6px)",
              }}
            />

            {/* Texto tipo carta */}
            <div className="relative">
              <div
                className="space-y-7 text-[#1b140c]"
                style={{ fontFamily: "ui-serif, Georgia, 'Times New Roman', serif" }}
              >
                <p className="leading-relaxed text-[16px] sm:text-[17px] md:text-[18px]">
                  <span className="float-left mr-3 mt-1 text-5xl sm:text-6xl font-bold text-[#2a1d10] leading-none">
                    L
                  </span>
                  a Escuela de Náutica Deportiva del Club Náutico Córdoba se fundó en 1997 en Villa Carlos Paz, Argentina. Desde los comienzos, nuestra filosofía siempre ha sido la de ofrecer una formación de máxima calidad, con los medios apropiados y adaptándonos a la disponibilidad de tiempo de nuestros alumnos, por eso tenemos la más amplia disponibilidad de horarios y días para tomar los cursos.
                </p>

                <p className="leading-relaxed text-[16px] sm:text-[17px] md:text-[18px]">
                  Nuestro objetivo es la formación de navegantes con sólidos conocimientos en todas las áreas que la náutica comprende. En Nuestra escuela los alumnos pueden realizar los cursos correspondientes a todas las habilitaciones náuticas, comenzando por Conductor Náutico o directamente por Timonel, continuando con Patrón de Yate, para finalizar con la mayor habilitación náutica deportiva, la de Piloto de Yate.
                </p>

                <p className="leading-relaxed text-[16px] sm:text-[17px] md:text-[18px]">
                  Además de los cursos regulares, los alumnos pueden complementar sus estudios con una amplia variedad de clínicas de perfeccionamiento. Para ello contamos con los mejores instructores y profesores especializados en las distintas disciplinas que la actividad comprende. Contamos con la flota de embarcaciones más adecuada para la enseñanza, razones por las que nos hemos convertido en líderes de la enseñanza náutica de recreo.
                </p>

                <p className="leading-relaxed text-[16px] sm:text-[17px] md:text-[18px]">
                  Además, al formar parte de nuestra comunidad de antiguos alumnos, accederá a servicios exclusivos, como; asesoramiento en la compra de embarcación, planificación de derrota para la navegación a distintos puertos, dirección de obra en embarcaciones, dirección y asesoramiento en reparación de embarcaciones, traslados de embarcaciones, participar en travesías de fin de semana o en vacaciones, cursos especiales a bordo de nuestras embarcaciones, prácticas de perfeccionamiento y recibirá gratuitamente nuestro boletín donde le informaremos de la actualidad en la náutica de recreo, cursos y actividades de su interés.No olvide que, a la hora de salir a navegar, su seguridad y la de su tripulación dependerá de sus conocimientos por ello, infórmese de nuestras modalidades de cursos.
                </p>

                <p className="leading-relaxed text-[16px] sm:text-[17px] md:text-[18px]">
                  No lo dude, la Escuela del Club Náutico Córdoba es su mejor opción. Venga a conocernos, lo llevaremos a buen puerto!
                </p>

                <p className="leading-relaxed text-[16px] sm:text-[17px] md:text-[18px] font-semibold">
                  Esperando verlo pronto a bordo, le deseamos, Mar Llana y Buenos Vientos
                </p>
              </div>

              {/* SELLO con logo (sin import) */}
              <div className="mt-10 flex items-center justify-end">
                <div className="relative h-20 w-20 sm:h-24 sm:w-24">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-red-900 via-red-800 to-red-950 shadow-[0_10px_25px_rgba(0,0,0,0.25)]"></div>
                  <div className="absolute inset-2 rounded-full border border-white/15"></div>
                  <div className="absolute inset-[10px] rounded-full border border-black/20"></div>
                  <div className="absolute top-2 left-3 h-6 w-6 rounded-full bg-white/10 blur-[1px]"></div>

                  <div className="absolute inset-0 flex items-center justify-center">
                    <img
                      src="../assets/img/logo.png"
                      alt="Logo"
                      className="h-10 w-10 sm:h-12 sm:w-12 object-contain opacity-90 drop-shadow"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Instructores (NO CAMBIO TUS TARJETAS) */}
          <div className="mt-12">
            <div className="mt-12 grid grid-cols-2 gap-6 md:grid-cols-3 lg:grid-cols-3 justify-center">
              <div className="flex flex-col items-center space-y-2">
                <img
                  src="../assets/img/miky.jpeg"
                  width={200}
                  height={200}
                  alt="John Doe"
                  className="h-[200px] w-[200px] rounded-full object-cover"
                />
                <h3 className="text-lg font-semibold">Miguel Ángel Romero (Micky)</h3>
                <p className="text-gray-500 dark:text-gray-400">Profesor Clases Teóricas / Prácticas</p>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <img
                  src="../assets/img/bauti.jpeg"
                  width={200}
                  height={200}
                  alt="Jane Smith"
                  className="h-[200px] w-[200px] rounded-full object-cover"
                />
                <h3 className="text-lg font-semibold">Bautista Romero Argerich </h3>
                <p className="text-gray-500 dark:text-gray-400">Profesor Clases Teóricas / Prácticas</p>
              </div>

              <div className="flex flex-col items-center space-y-2">
                <img
                  src="../assets/img/martin.jpeg"
                  width={200}
                  height={200}
                  alt="Michael Johnson"
                  className="h-[200px] w-[200px] rounded-full object-cover"
                />
                <h3 className="text-lg font-semibold">Martin Caruso </h3>
                <p className="text-gray-500 dark:text-gray-400">Profesor Clases Teóricas / Prácticas</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Nosotros;