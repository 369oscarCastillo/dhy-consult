import "./App.css";
import Contenido, { Imagencont } from "./Componentes/Contenido";
import Pie, { Redes } from "./Componentes/Foot";
import Head, { Imagen, Socialmedia, Titulos } from "./Componentes/Head";
import Subcontenido from "./Componentes/Subcontenido";
import Formulario from "./Componentes/Formulario";
import { Mainfig, Maintext } from "./Componentes/main";
import { BsFillFileRuledFill, BsFillNutFill, BsFillGrid3X3GapFill, BsBarChartFill, BsBarChartSteps } from "react-icons/bs";
import {GiMiningHelmet, GiMining} from "react-icons/gi"

function App() {
  return (
    <div className="App" >
      <div className="Contenedor-principal">
        <div className="encabezado-pagina">
          <div>
            <Imagen></Imagen>
          </div>
          <div>
            <Titulos />
          </div>
          <div>
            <Socialmedia />
          </div>
          <div>
            <Head />
          </div>
        </div>

        <div className="sub-contenido-main" id="main">
          <Maintext
            tema="DHY Mining Corp"
            subtema="Consultoría minera enfocado en los principales ejes de sostenibilidad estratégicos para su desarrollo"
            testimonio2="Nuestro principal objetivo es impulsar la industria minera peruana, desarrollando trabajos de calidad y respetando los principios ambientales, económicas, sociales y empresariales "
          />

          <Mainfig></Mainfig>
        </div>

        <div className="sub-contenido-nostros" id="nosotros">
          <Imagencont
            imagen1="first"
            imagen2="second"
            imagen3="five"
            imagen4="four"
          />
          <Contenido
            tema="Nosotros"
            testimonio1="Somos una empresa consultora enfocada en el rubro de la industria minera peruana."
            testimonio2="Contamos con un staff de profesionales altamente capacitados, además, con amplia experiencia en diferentes áreas de la minería."
            testimonio3="Nuestras principales acciones están basadas en ayudar incrementar valor para las empresas mineras, realizar investigaciones para incrementar la productividad de las operaciones mineras, incentivar la innovación aprovechando las nuevas tecnologías "
          />
        </div>

        <div className="sub-titulos" id="servicios">          
          <Contenido
            tema="Servicios"
            testimonio2="Realizamos servicios en las sigueintes áreas: Planeamiento mina, Geología, Finanzas y Permisología"
          />          
        </div>
        <div className="sub-contenido">
          <Subcontenido
            titulo="Planeamiento"
            imagen="cuatro"
            icono1={<GiMiningHelmet/>}
            icono2={<BsFillNutFill/>}
            icono3={<GiMining/>}
            texto="Desarrollamos planes de minado para operaciones mineras subterráneas y superficiales. Los profesionales a cargo de desarrollar este trabajo poseen experiencias en el realizar planes minado a corto plazo y  largo plazo en las principales empresas mineras del Perú. Además, de desempeñarse en el extranjero con cargos importantes en el área de finanzas, operaciones y planeamiento.  
            "
          />
          <Subcontenido
            titulo="Geología"
            imagen="cinco"
            icono1={<GiMiningHelmet/>}
            icono2={<BsFillNutFill/>}
            icono3={<GiMining/>}            
            texto="En el área de geología desarrollamos trabajos de modelos geológicos desde la etapa inicial hasta las actualizaciones, además,  de otros procesos geológicos. Por otro lado, contamos con profesionales altamente competentes para realizar trabajos de cálculo de recursos y reservas de minerales, teniendo en consideración los códigos y estándares internacionales.
            "
          />
          <Subcontenido
            titulo="Finanzas"
            imagen="uno"
            icono1={<BsBarChartFill/>}
            icono2={<BsFillNutFill />}
            icono3={<BsBarChartSteps/>}
            texto="Realizamos estudio de evaluación financiera de proyectos mineros desde la etapa inicial hasta los estudios de factibilidad. Los profesionales a cargo tienen experiencias en realizar valorizaciones de las principales Compañías mineras del Perú. También, realizamos evaluación financiera de operaciones en marcha y trabajar conjuntamente en la implementación de las mejoras. 
            "
          />
          <Subcontenido
            titulo="Permisología"
            imagen="dos"
            icono1={<BsFillFileRuledFill/>}
            icono2={<BsFillNutFill />}
            icono3={<BsFillGrid3X3GapFill/>}
            texto="Somos expertos en el proceso de adquisición de las concesiones mineras de su interés. Nuestro trabajo está basado en la celeridad y compromiso para una mejor experiencias en el proceso. Además, realizamos tramites y todos los requerimientos permisológicos que se pueden presentar en el desarrollo de un proyecto minero, desde la etapa inicial hasta el cierre de la operación.  
            "
          />
        </div>
        <div className="sub-titulos" id="entregables">
          <Contenido
            tema="Entregables"           
            testimonio2="DHY Mining Corp es una empresa que cuenta con profesionales altamente capacitados y con amplia experiencia, que a travez de los diferentes soluciones que desarrollamos, presentamos entregables personalizados de acuerdo a las necesidades específica de su operación minera."            
          />
        </div>
        <div className="sub-contenido">          
          <Subcontenido
            titulo="Minería"
            imagen="seis"
            icono1={<GiMiningHelmet/>}
            icono2={<BsFillNutFill/>}
            icono3={<GiMining/>}            
            texto="Elaboración y evaluación de proyectos mineros"
            
          />
          <Subcontenido
            titulo="Minería"
            imagen="tres"
            icono1={<GiMiningHelmet/>}
            icono2={<BsFillNutFill/>}
            icono3={<GiMining/>}
            texto="Asesorías en finanzas y gestión minera"
          />
          <Subcontenido
            titulo="Geología"
            imagen="doce"
            icono1={<GiMiningHelmet/>}
            icono2={<BsFillNutFill/>}
            icono3={<GiMining/>}
            texto="Implementación y actualización de modelos geológicos-mineros en forma remota"
          />
          <Subcontenido
            titulo="Procesos"
            imagen="nueve"
            icono1={<GiMiningHelmet/>}
            icono2={<BsFillNutFill/>}
            icono3={<GiMining/>}
            texto="Elaboración y evaluación de procesos mineros-geológicos"
          />
          <Subcontenido
            titulo="Entrenamiento"
            imagen="siete"
            icono1={<BsFillFileRuledFill/>}
            icono2={<BsFillNutFill />}
            icono3={<BsFillGrid3X3GapFill/>}
            texto="Entrenamiento de Software minero-geológico a nivel educativo y empresarial"
          />
          <Subcontenido
            titulo="Estudios"
            imagen="once"
            icono1={<BsFillFileRuledFill/>}
            icono2={<BsFillNutFill />}
            icono3={<BsFillGrid3X3GapFill/>}
            texto="Estudio conceptual y estudio de factibilidad geológico-minero"
          />
          <Subcontenido
            titulo="Soporte"
            imagen="ocho"
            icono1={<BsFillFileRuledFill/>}
            icono2={<BsFillNutFill />}
            icono3={<BsFillGrid3X3GapFill/>}
            texto="Distribución, comercialización y soporte de software minero-geológico"
          />
          <Subcontenido
            titulo="Asesorías"
            imagen="dos"
            icono1={<BsFillFileRuledFill/>}
            icono2={<BsFillNutFill />}
            icono3={<BsFillGrid3X3GapFill/>}
            texto="Asesorías en la obtención de permisos"
          />
        </div>
        <div className="sub-contenido-investigacion" id="investigacion">
          <Contenido
            tema="Investigación"                       
            testimonio1="Realizamos investigaciones en las diferentes áreas de las minería. Tenemos un compromiso para mejorar la productividad de las operaciones mineras buscando nuevas formas de implementación y aprovechando las nuevas tecnologías basadas en Ciencia de Datos, Inteligencia Artificial y Big Data."
            
          />
          <Subcontenido
            titulo="Minería"
            imagen="inv1"
            texto="Desarrollamos investigacion para mejorar los diferentes procesos de la actividad minera"
          />
          <Subcontenido
            titulo="Geología"
            imagen="inv2"
            texto="Desarrollamos investigación en los diferentes campos de la geología aplicada a la minería"
          />
        </div>
        <div className="sub-contenido-nostros">
          <Contenido
            tema="Misión"
            testimonio1="Desarrollar consultoría en minería con base a cuatro ejes de sostenibilidad estratégica"
          />
          <Contenido
            tema="visión"
            testimonio1="Ser el líder en consultoría minera a nivel nacional y ayudar a su desarrollo e investigación"
          />
        </div>

        <div className="sub-titulos" id="contactos">
          <h1>Contáctanos</h1>
        </div>

        <div className="footer">
          <Formulario id="formulario"></Formulario>
          <Pie
            nombre="Servicios"
            cadena1="Planeamiento Mina"
            cadena2="Geología" 
            cadena3='Permisología'        
          />
          <Pie
            nombre="Ubicación"
            cadena1="La Perla, Callao, Lima-Perú"
            cadena2="Teléfono:+51951473150"
            cadena3='gerenciageneral@dhyminingcorpsrl.com'
           
          />
          <Redes nombre1="Redes Sociales"></Redes>
        </div>

        
      </div>
    </div>
  );
}

export default App;
