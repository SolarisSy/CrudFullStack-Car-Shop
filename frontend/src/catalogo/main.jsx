import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { ReactComponent as Icon } from "./img/icon.svg";
import "./CSS/styles.css";
import { toast } from "react-toastify";
import axios from "axios";

const loja = {
  nomeApp: "MotoCars",
  autor: "Solaris NickError404",
};

const StyledLink = styled(Link)`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: transparent;
  color: white;
  svg {
    width: 50px;
    height: 50px;
    fill: currentColor;
  }
`;

const Header = (props) => {
  return (
    <header className="cabecalho">
      <StyledLink to={"/"}>
        <Icon />
      </StyledLink>
      <h1 className="titulo">{props.nomeApp}</h1>
    </header>
  );
};

const Produto = (props) => {
  return (
    <div className="produto">
      <img className="produto__img" src={'http://localhost:8800/' + props.produto.src} alt="produto" />
      <p className="produto__nome">{props.produto.nome}</p>
      <p className="produto__preco">R$ {props.produto.price}</p>
      <p className="produto__desc">{props.produto.desc}</p>
    </div>
  );
};

const Content = () => {
  const [users, setUsers] = useState([]);

  const getUsers = async () => {
    try {
      const res = await axios.get("http://localhost:8800");
      setUsers(res.data.sort((a, b) => (a.nome > b.nome ? 1 : -1)));
    } catch (error) {
      toast.error(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, [setUsers]);

  const [image, setImage] = useState(null);

  useEffect(() => {
    const loadImage = async () => {
      await axios
        .get("http://localhost:8800/img")
        .then(({ data }) => {
          setImage(data);
        })
        .catch((error) => {
          console.error(error);
        });
    };

    loadImage();
  }, []);

  let UserAndImageList = {
    usuarios: users,
    images: image,
  };

  if (!UserAndImageList.usuarios || !UserAndImageList.images) {
    return null;
  }

  const mergedObjects = UserAndImageList.usuarios.map((user, i) => {
    const matchingImage = UserAndImageList.images.find(
      (image) => image.name === user.nome
    );

    const src = matchingImage.src.replace('public\\', '')
    return matchingImage ? { ...user, src } : null;
  });

  return (
    <main className="conteudo">
      <h2 className="conteudo__cabecalho">Nosso Veículos</h2>
      <section className="produto__container">
        {mergedObjects.map((produto, index) => (
            <Produto key={index} produto={produto} />
          ))}
      </section>
    </main>
  );
};

const Footer = (props) => {
  return (
    <footer className="rodape">
      <p>Desenvolvido por {props.autor}</p>
    </footer>
  );
};

const App = () => {
  return (
    <div>
      <Header nomeApp={loja.nomeApp} />
      <Content />
      <Footer autor={loja.autor} />
    </div>
  );
};

export default App;
