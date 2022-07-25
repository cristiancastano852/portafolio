import React from 'react';
import {MdPerson,MdSchool, MdMood, MdOutlineFavoriteBorder,MdOutlineRecordVoiceOver, MdBookmarkBorder} from 'react-icons/md';
import { AiFillGithub, AiOutlineMail, AiOutlineLinkedin } from "react-icons/ai";
import foto from '../assets/cristian.jpeg'
import cine from '../assets/popcorni.jpg'
import leer from '../assets/leeri.jpg'
import gym from '../assets/gymi.jpg'
import  {Spancomponent}  from '../components/Spancomponent';
import { Studycomponent } from '../components/Studycomponent';
import { InterestsComponent } from '../components/InterestsComponent';
import { Imagecomponent } from '../components/Imagecomponent';
import { Redescomponent } from '../components/Redescomponent';

const Home = () => (
  
  <main className='flex font-serif text-blanco' >
     <aside className='hidden lg:flex w-2/5 sticky flex-col h-screen items-center top-0 bg-negro'>
     <img src={foto} className="w-2/3 h-2/5 rounded-full bg-gradient-to-t from-gris p-4 m-5" alt=""/>
      <h1 className='text-xl font-bold underline underline-offset-8'>Ingeniero de sistemas.</h1>
      <div className='flex flex-col items-center' >
        <h4 className=' p-4 pl-10 pr-10 text-sm md:text-lg text-center'>Soy estudiante de ingeniería en sistemas, cursando el octavo semestre. Cuento con muy buena lógica de programación, apasionado por el desarrollo web. </h4>
      </div>
      <Redescomponent icon={<AiFillGithub className='h-5 w-5' />} texto='cristiancastano852' url='https://github.com/cristiancastano852'/>
      <Redescomponent icon={<AiOutlineLinkedin className='h-5 w-5'/>} texto='cristiancastano852' url='https://www.linkedin.com/in/cristiancastano852/'/>
      <Redescomponent icon={<AiOutlineMail className='h-5 w-5'/>} texto='cristiancastano852@gmail.com'/>
    </aside>

    <div className='w-screen h-full bg-gradient-to-r from-negro to-cielo flex flex-col'>
      <div className='flex flex-col items-center'>
       <img src={foto} className="w-2/5 rounded-full p-3 bg-gradient-to-t from-negro m-5 md:p-5 md:w-1/3 lg:hidden" alt=""/>
      </div>
      <h1 className='flex flex-col items-center texl-xs text-center mb-6 underline underline-offset-8 md:text-xl font-bold mx-6 lg:mt-12'>CRISTIAN ALEXANDER CASTAÑO MONTOYA</h1>

      <div className='lg:hidden'>
        <Spancomponent icon={<MdPerson className='h-5 w-5'/>} texto="SOBRE MÍ"/>
      </div>
      <div className='flex flex-col items-center lg:hidden' >
        <h4 className=' p-4 pl-10 pr-10 text-sm md:text-lg text-center'>Soy estudiante de ingeniería en sistemas, cursando el octavo semestre. Cuento con muy buena lógica de programación, apasionado por el desarrollo web. </h4>
      </div>
      <div className='flex flex-row justify-center items-center space-x-12 '>
        <Redescomponent icon={<AiFillGithub className='h-5 w-5' />} texto='cristiancastano852' url='https://github.com/cristiancastano852'/>
        <Redescomponent icon={<AiOutlineLinkedin className='h-5 w-5' />} texto='cristiancastano852' url='https://www.linkedin.com/in/cristiancastano852/'/>
        <Redescomponent icon={<AiOutlineMail className='h-5 w-5' />} texto='cristiancastano852@gmail.com'/>
      </div>

      <section className='p-4'>
      <Spancomponent icon={<MdSchool className='h-5 w-5'/>} texto="INFORMACIÓN ACADEMICA"/>
      <div className='cards'>
          <Studycomponent titulo="Ingenieria de sistemas" lugar="Universidad de Antioquia" tiempo="2018 - Actualidad"/>
          <Studycomponent titulo="Dibujo Arquitectonico" lugar="Tecnica - SENA" tiempo="2016 - 2017"/>
          <Studycomponent titulo="Bachiller Académico" lugar="Colegio Concejo de Bello" tiempo="2006-2017"/>
      </div>

      <Spancomponent icon={<MdMood className='h-5 w-5'/>} texto="INTERESES"/>
      <div className='cards'>
        <InterestsComponent titulo="Desarrollo Web" descripcion="Me interesa aprender sobre el desarrollo Web con diferentes tecnologías y con buenas prácticas."/>
        <InterestsComponent titulo="Inteligencia artificial" descripcion="Me interesa aprender a manejar y construir máquinas inteligentes, creando cosas nuevas para la sociedad."/>
        <InterestsComponent titulo="Seguridad informática" descripcion="Tengo interés sobre la ciberseguridad, todo lo relacionado con prevenir ataques y tener protegido los datos."/>
      </div>

      <Spancomponent icon={<MdOutlineFavoriteBorder className='h-5 w-5'/>} texto="HOBBIES"/>
      <div className='cards'>
        <Imagecomponent image={cine} texto='Cine'/>
        <Imagecomponent image={leer} texto='Leer'/>
        <Imagecomponent image={gym} texto='Gym'/>
      </div>

      <Spancomponent icon={<MdOutlineRecordVoiceOver className='h-5 w-5'/>} texto="IDIOMAS"/>
      <div className='cards'>
          <InterestsComponent titulo='Español' descripcion='Nivel: Nativo'/>
          <InterestsComponent titulo='Inglés' descripcion='Nivel: Intermedio'/>
      </div>

      <Spancomponent icon={<MdBookmarkBorder className='h-5 w-5'/>} texto="CURSOS Y CERTIFICACIONES"/>
        <div className='cards'>
          <Studycomponent titulo="Curso de HTML y CSS." lugar="- Platzi -" tiempo="2020"/>
          <Studycomponent  titulo="Curso de Git y GitHub" lugar="- Platzi -" tiempo="2020"/>
          <Studycomponent  titulo="Curso básico de Python" lugar="- Platzi -" tiempo="2021"/>
          <Studycomponent  titulo="Curso de POO con JS" lugar="- Platzi -" tiempo="2021"/>
        </div>
        </section>
      </div>
  </main>
);

export {Home};