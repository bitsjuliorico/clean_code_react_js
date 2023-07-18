import React from 'react';

import { BranchOffice } from '../types';
import { createBranchOffices } from '../services/branchOfficeService';

const CreateBranchOfficeForm: React.FC = () => {
  const [code, setCode] = React.useState('');
  const [identification, setIdentification] = React.useState('');
  const [currency, setCurrency] = React.useState('');

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const branchOffice: BranchOffice = {
      code,
      identification,
      currency,
    };

    await createBranchOffices(branchOffice);
    setCode('');
    setIdentification('');
    setCurrency('');
  };

  return (
    <div>
      <h2>Crear nueva Sucursal de Oficina</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Código:
          <input type="text" value={code} onChange={(event) => setCode(event.target.value)} />
        </label>
        <br />
        <label>
          Identificación:
          <input
            type="text"
            value={identification}
            onChange={(event) => setIdentification(event.target.value)}
          />
        </label>
        <br />
        <label>
          Moneda:
          <input type="text" value={currency} onChange={(event) => setCurrency(event.target.value)} />
        </label>
        <br />
        <button type="submit">Crear</button>
      </form>
    </div>
  );
};

export default CreateBranchOfficeForm;
