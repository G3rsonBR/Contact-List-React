import { useState } from "react";

export function CreateContact({ cancelCreateContacts, updateCreatedContacts }) {
  const [formData, setFormData] = useState({});

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const newData = {
      ...formData,
      id: Date.now(),
    }

    console.log(newData)

    setFormData({})
    updateCreatedContacts(newData)
    
  };

  return (
    <div className="createUserDiv">
      <form autoComplete="off" onSubmit={handleSubmit}>
        <label htmlFor="name">
          Nome: <span>*</span>
          <input
            type="text"
            id="name"
            name="name"
            placeholder="Digite seu Nome..."
            value={formData.name || ""}
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="numTel">
          Número de contato: <span>*</span>
          <input
            type="text"
            id="numTel"
            name="numTel"
            placeholder="(99) 99999-9999"
            value={formData.numTel || ""}
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="endereco">
          Endereço: <span>*</span>
          <input
            type="text"
            id="endereco"
            name="endereco"
            placeholder="Digite seu Endereço..."
            value={formData.endereco || ""}
            onChange={handleChange}
            required
          />
        </label>

        <label htmlFor="email">
          E-mail: <span>*</span>
          <input
            type="email"
            id="email"
            name="email"
            placeholder="Digite seu E-mail..."
            value={formData.email || ""}
            onChange={handleChange}
            required
          />
        </label>

        <button className="btnFormsCreate" type="submit">
          Salvar
        </button>

        <button
          className="btnCancel"
          type="button"
          onClick={cancelCreateContacts}
        >
          Cancelar
        </button>
      </form>
    </div>
  );
}
