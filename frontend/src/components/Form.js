import axios from "axios";
import React, { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import { toast } from "react-toastify";
import { Link } from "react-router-dom";

const FormContainer = styled.form`
  display: flex;
  align-items: flex-end;
  gap: 10px;
  flex-wrap: wrap;
  background-color: #fff;
  padding: 100px;
  box-shadow: 0px 0px 5px #ccc;
  border-radius: 5px;
  .uploadSend {
    width: auto;
    height: 1.5rem;
  }
  .place {
    width: 5.9rem;
    height: 6.1rem;
  }
`;

const InputArea = styled.div`
  display: flex;
  flex-direction: column;
`;

const Input = styled.input`
  width: 120px;
  padding: 0 10px;
  border: 1px solid #bbb;
  border-radius: 5px;
  height: 40px;
`;

const Label = styled.label``;

const Button = styled.button`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: #2c73d2;
  color: white;
  height: 42px;
`;

const StyledLink = styled(Link)`
  padding: 10px;
  cursor: pointer;
  border-radius: 5px;
  border: none;
  background-color: red;
  color: white;
  height: 23px;
`;

const Form = ({ getUsers, onEdit, setOnEdit }) => {
  const ref = useRef();
  useEffect(() => {
    if (onEdit) {
      const user = ref.current;

      user.nome.value = onEdit.nome;
      user.price.value = onEdit.price;
      user.marca.value = onEdit.marca;
      user.ano.value = onEdit.ano;
      user.desc.value = onEdit.desc;
    }
  }, [onEdit]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    const user = ref.current;

    if (
      !user.nome.value ||
      !user.price.value ||
      !user.marca.value ||
      !user.ano.value ||
      !user.desc.value
    ) {
      return toast.warn("Preencha todos os campos!");
    }

    if (onEdit) {
      await axios
        .put("http://localhost:8800/" + onEdit._id, {
          nome: user.nome.value,
          price: user.price.value,
          marca: user.marca.value,
          ano: user.ano.value,
          desc: user.desc.value,
        })
        .then(({ data }) => toast.success(data))
        .catch(({ data }) => toast.error(data));
    } else {
      await axios
        .post("http://localhost:8800", {
          nome: user.nome.value,
          price: user.price.value,
          marca: user.marca.value,
          ano: user.ano.value,
          desc: user.desc.value,
        })
        .then(({ data }) => toast.success(data))
        .then(
          handleUpload(user)
        )
        .catch(({ data }) => toast.error(data));
    }

    user.nome.value = "";
    user.price.value = "";
    user.marca.value = "";
    user.ano.value = "";
    user.desc.value = "";

    setOnEdit(null);
    getUsers();
  };

  const [file, setFile] = useState(null);

  const handleFile = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = (date) => {
    let image = file;

    let formdata = new FormData();

    formdata.append("name", `${date.nome.value}`);
    formdata.append("image", image);

    axios({
      url: `http://localhost:8800/img`,
      method: "POST",
      headers: {
        "Content-Type": "multipart/form-data",
        "x-powered-by": "express",
        "access-control-allow-origin": "*",
      },
      data: formdata,
    })
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.error(err);
      });
  };

  return (
    <FormContainer ref={ref} onSubmit={handleSubmit}>
      <InputArea className="place">
        <label> Select File </label>
        <input
          type="file"
          multiple
          name="file"
          onChange={(e) => handleFile(e)}
        />
        <br />
        <button type="button" className="uploadSend" onClick={(e) => handleUpload(e)}>
          Upload
        </button>
      </InputArea>
      <InputArea>
        <Label>Nome</Label>
        <Input name="nome" />
      </InputArea>
      <InputArea>
        <Label>Marca</Label>
        <Input name="marca" />
      </InputArea>
      <InputArea>
        <Label>Ano</Label>
        <Input name="ano" type="number" min="1900" max="2023" />
      </InputArea>
      <InputArea>
        <Label>Descrição</Label>
        <Input name="desc" />
      </InputArea>
      <InputArea>
        <Label>Preço</Label>
        <Input name="price" />
      </InputArea>
      <StyledLink to={"./catalogo"}>Catálogo</StyledLink>
      <Button type="submit">SALVAR</Button>
    </FormContainer>
  );
};

export default Form;
