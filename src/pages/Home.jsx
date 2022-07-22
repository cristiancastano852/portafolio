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
    <aside className='hidden w-2/5 h-screen flex-col items-center lg:flex bg-cielo scroll-permanent'>
       <img src={foto} className="w-2/3 h-2/5 rounded-full p-5" alt=""/>
      <h1 className='text-xl font-bold'>Ingeniero en sistemas</h1>
      <Redescomponent icon={<AiFillGithub/>} texto='cristiancastano852'/>
      <Redescomponent icon={<AiOutlineLinkedin/>} texto='cristiancastano852'/>
      <Redescomponent icon={<AiOutlineMail/>} texto='cristiancastano852@gmail.com'/>
    </aside>
    <div className='w-screen h-full bg-negro flex flex-col '>
      <div className='flex flex-col items-center'>
       <img src={foto} className="w-2/5 rounded-full p-5 lg:hidden" alt=""/>
      </div>
      <h1 className='flex flex-col items-center text-xl font-bold p-0'>Cristian Alexander</h1>
      <h1 className='flex flex-col items-center text-xl font-bold p-0 pb-4'>Castaño Montoya</h1>

      <div className='lg:hidden'>
        <Spancomponent icon={<MdPerson/>} texto="SOBRE MÍ"/>
      </div>
      <div className='flex flex-col items-center bg-negro lg:hidden' >
        <h4 className=' p-4 pl-10 pr-10 text-sm md:text-lg text-center'>Soy estudiante de ingeniería en sistemas, cursando el octavo semestre. Cuento con muy buena lógica de programación, apasionado por el desarrollo web. </h4>
      </div>
      <div className='flex flex-row justify-center items-center space-x-12 '>
        <Redescomponent icon={<AiFillGithub className=''/>} texto='cristiancastano852' url='https://github.com/cristiancastano852'/>
        <Redescomponent icon={<AiOutlineLinkedin/>} texto='cristiancastano852' url='https://www.linkedin.com/in/cristiancastano852/'/>
        <Redescomponent icon={<AiOutlineMail/>} texto='cristiancastano852@gmail.com'/>
      </div>
      <Spancomponent icon={<MdSchool/>} texto="INFORMACIÓN ACADEMICA"/>
      <div className='snap-y snap-mandatory flex justify-center items-center bg-negro p-2 space-x-4 '>
          <Studycomponent titulo="Ingenieria de sistemas" lugar="Universidad de Antioquia" tiempo="2018 - Actualidad"/>
          <Studycomponent titulo="Dibujo Arquitectonico" lugar="Tecnica - SENA" tiempo="2016 - 2017"/>
          <Studycomponent titulo="Bachiller" lugar="Colegio Concejo de Bello" tiempo="2006-2017"/>
      </div>

      <Spancomponent icon={<MdMood/>} texto="INTERESES"/>
      <div className='snap-y snap-mandatory flex justify-center items-center bg-negro p-2 space-x-4'>
        <InterestsComponent titulo="Desarrollo Web" descripcion="Me interesa aprender sobre el desarrollo Web con diferentes tecnologías y con buenas prácticas."/>
        <InterestsComponent titulo="Seguridad informática" descripcion="Tengo interés sobre la ciberseguridad, todo lo relacionado con prevenir ataques y tener protegido los datos."/>
        <InterestsComponent titulo="Robótica" descripcion="Me interesa aprender a manejar y construir máquinas inteligentes."/>
      </div>

      <Spancomponent icon={<MdOutlineFavoriteBorder/>} texto="HOBBIES"/>
      <div className='snap-y snap-mandatory flex justify-center items-center bg-negro p-2 space-x-4'>
        <Imagecomponent image={cine} texto='Cine'/>
        <Imagecomponent image={leer} texto='Leer'/>
        <Imagecomponent image={gym} texto='Gym'/>
      </div>

      <Spancomponent icon={<MdOutlineRecordVoiceOver/>} texto="IDIOMAS"/>
      <div className='snap-y snap-mandatory flex justify-center items-center bg-negro p-2 space-x-4'>
          <InterestsComponent titulo='Español' descripcion='Nivel: Nativo'/>
          <InterestsComponent titulo='Inglés' descripcion='Nivel: Intermedio'/>
      </div>

      <Spancomponent icon={<MdBookmarkBorder/>} texto="CURSOS Y CERTIFICACIONES"/>
      <div className='snap-y snap-mandatory flex justify-center items-center bg-negro p-2 space-x-4'>
        <Studycomponent titulo="Curso de HTML y CSS." lugar="Platzi" tiempo="2020"/>
        <Studycomponent titulo="Curso de Git y GitHub" lugar="Platzi" tiempo="2020"/>
        <Studycomponent titulo="Curso básico de Python" lugar="Platzi" tiempo="2021"/>
        <Studycomponent titulo="Curso de POO con JavaScript" lugar="Platzi" tiempo="2021"/>
      </div>
    </div>
  </main>
);

export {Home};