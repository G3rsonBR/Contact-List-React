import "./App.css";
import { TableRow } from "./components/TableRow";
import { CreateContact } from "./components/CreateContact";
import { useState } from "react";

export default function App() {
  const [isCreateContactOpen, setIsCreateContactOpen] = useState(false);

  const [contacts, setContacts] = useState(() => {
    const storedData = JSON.parse(localStorage.getItem("data")) || [];
    return storedData;
  });

  const updateCreatedContacts = (newUser) => {
    const updatedContacts = [...contacts, newUser];
    setContacts(updatedContacts);
    localStorage.setItem("data", JSON.stringify(updatedContacts));
  };

  const deleteContact = (id) => {
    const updatedContacts = contacts.filter((contact) => contact.id !== id);
    setContacts(updatedContacts);
    localStorage.setItem("data", JSON.stringify(updatedContacts));
  };

  const clearLocalStorage = () => {
    localStorage.clear();
    setContacts([]);
  };

  return (
    <>
      <header>
        <h1>Lista de Contatos</h1>
        <div className="btnActions">
          <button onClick={() => setIsCreateContactOpen(!isCreateContactOpen)}>
            Criar usuário
          </button>
          <button className="btnCancel" onClick={clearLocalStorage}>
            Deletar Todos os Usuários
          </button>
        </div>
      </header>

      {isCreateContactOpen && (
        <CreateContact
          cancelCreateContacts={() =>
            setIsCreateContactOpen(!isCreateContactOpen)
          }
          updateCreatedContacts={updateCreatedContacts}
        />
      )}

      <div className="contacts">
        <p className="attention">
          Atenção: tela muito pequena, rotacione seu dispositivo para visualizar
        </p>
        <p className="totalContacts">Total de contatos: {contacts.length}</p>
        {contacts && (
          <table className="table">
            <thead>
              <tr>
                <th>Nome</th>
                <th>Email</th>
                <th>Endereço</th>
                <th>Telefone</th>
                <th>Apagar</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map((item, index) => {
                return <TableRow key={index} props={item} deleteContact={() => deleteContact(item.id)} />;
              })}
            </tbody>
          </table>
        )}
      </div>
    </>
  );
}
