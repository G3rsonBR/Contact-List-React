export function TableRow({ props, deleteContact }) {
  return (
    <tr>
      <td>{props.name}</td>
      <td>{props.email}</td>
      <td>{props.endereco}</td>
      <td>{props.numTel}</td>
      <td><button onClick={() => deleteContact(props.id)}>X</button></td>
    </tr>
  );
}
