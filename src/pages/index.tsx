import React, { FormEvent, useState } from 'react';
import { GetStaticProps } from 'next';
import { InitialApolloState, initializeApollo } from '../lib/apolloClient';
import Layout from '../components/Layout';
import a from 'next/link';
import { useQuery } from '@apollo/client';
import { GetGithubInfo, GithubInfo } from '../utils/queries';
import styled from 'styled-components';

const Presentacion = styled.p`
  text-align: justify;
`;

const Index = () => {
  const { data } = useQuery<GithubInfo>(GetGithubInfo);
  const [formData, setFormData] = useState({
    email: '',
    msg: ''
  });

  const handleFormDataChange = (evt) => {
    setFormData(prev => ({
      ...prev,
      [evt.target.name]: evt.target.value
    }));
  };

  const sendContact = (evt: FormEvent<HTMLFormElement>) => {
    evt.preventDefault();
    fetch('https://lucasignacio.me/api/contact', {
        method: 'POST',
        credentials: 'same-origin',
        body: JSON.stringify(formData)
      }
    ).then(res => res.json())
      .then(data => {
        alert(data.msg);
      });
  };

  return (
    <Layout description={'Yeah'}>
      <h1> Lucas Vergara Ibañez </h1>
      <h3> En construcción... </h3>
      <div>
        <a href={'https://github.com/LIbanezDev'} target={'_blank'}>
          <button className='btn' style={{ marginRight: 5 }}>
            <i className='fa fa-github' />
          </button>
        </a>
        <a href={'https://www.linkedin.com/in/lucas-ignacio-vergara-iba%C3%B1ez-b22673166/'} target={'_blank'}>
          <button className='btn' style={{ marginRight: 5 }}>
            <i className='fa fa-linkedin' />
          </button>
        </a>
        <a href={'/CV_Lucas_Vergara.pdf'} download>
          <button className='btn' style={{ marginRight: 5 }}>
            <i className='fas fa-file' />
          </button>
        </a>
      </div>
      <div>
        <h3> Presentación </h3>
        <Presentacion>
          Estudiante de Informática, 20 años, Santiago de Chile <br />
          Tengo mucha motivación para aprender desarrollando proyectos que signifiquen un
          desafio para mi carrera como programador. <br />
          Llevo aproximadamente 1 año desarrollando en la web, en mis primeros meses utilizaba PHP como lenguaje primario y uno de
          sus Frameworks Laravel, con estos construí un sitio para subir material de estudio para los ramos de las carreras en mi
          Universidad. <br />
          Desde hace 6 meses estoy especializandome en uno de los muchos Javascript stacks, en el cliente React y su Framework NextJS, en el servidor
          Node con el Framework NestJS, y GraphQL o REST como interfaz de comunicación. <br />
          Cuento con conocimientos en arquitectura orientada a microservicios y Docker como herramienta de construcción de contenedores. <br />
        </Presentacion>
      </div>
      <div>
        <h3> Conocimientos </h3>
        <ul>
          <li> Node con Express</li>
          <li> HTML, Javascript y Typescript</li>
          <li> Lenguaje SQL y gestores de bases de datos relacionales: MySQL & PostgreSQL</li>
          <li> GraphQL</li>
          <li> React</li>
          <li> Nextjs</li>
          <li> Nestjs</li>
          <li> Docker</li>
          <li> Google Cloud Platform</li>
        </ul>
      </div>
      <div>
        <h3> Proyectos </h3>
        <div className={'animate__animated animate__fadeIn'}>
          <ul>
            {data.viewer.repositories.nodes
              .filter(repo => repo.homepageUrl != null && repo.homepageUrl != '')
              .map(repo => (
                <li key={repo.url}>
                  <a href={repo.url} target={'_blank'}>
                    {repo.name}
                  </a>
                  <br />
                </li>
              ))}
          </ul>
        </div>
      </div>
      <div>
        <h3> Contacto... </h3>
        <form onSubmit={sendContact}>
          <label htmlFor={'emailForm'}> Información de emisor </label> <br />
          <input name='email' id={'emailForm'} value={formData.email} onChange={handleFormDataChange} placeholder={'Nombre o Correo'} /> <br />
          <label htmlFor={'emailForm'}> Mensaje </label> <br />
          <textarea name='msg' id={'msgForm'} value={formData.msg} onChange={handleFormDataChange} /> <br />
          <button type={'submit'}>Enviar</button>
        </form>
      </div>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps<InitialApolloState> = async () => {
  const apolloClient = initializeApollo();
  await apolloClient.query({
    query: GetGithubInfo
  });
  const cache = apolloClient.cache.extract();
  return {
    props: {
      initialApolloState: cache
    },
    revalidate: 1
  };
};

export default Index;
