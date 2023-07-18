import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { editBranchOffices, getByIdBranchOffices } from '../services/branchOfficeService';

interface BranchOffice {
  code: string;
  identification: string;
  currency: string;
}

const EditBranchOfficeForm: React.FC = () => {
  const navigate = useNavigate();
  const { code } = useParams<{ code: string }>();
  const [branchOffice, setBranchOffice] = React.useState<BranchOffice | null>(null);

  React.useEffect(() => {
    getOffice(code);
  }, [code]);

  const getOffice = async (id: string | undefined) => {
    if (id) {
      const data = await getByIdBranchOffices(id);
      console.log('edit--', data);
      setBranchOffice(data);
    }
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const updatedBranchOffice: BranchOffice = {
      code: branchOffice!.code,
      identification: branchOffice!.identification,
      currency: branchOffice!.currency,
    };

    if (code) {
      await editBranchOffices(code, updatedBranchOffice);
      navigate('/');
    }
  };

  if (!branchOffice) {
    return <div>Cargando...</div>;
  }

  return (
    <div>
      <h2>Editar Sucursal de Oficina</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Código:
          <input
            type="text"
            value={branchOffice.code}
            onChange={(event) => setBranchOffice({ ...branchOffice, code: event.target.value })}
          />
        </label>
        <br />
        <label>
          Identificación:
          <input
            type="text"
            value={branchOffice.identification}
            onChange={(event) =>
              setBranchOffice({ ...branchOffice, identification: event.target.value })
            }
          />
        </label>
        <br />
        <label>
          Moneda:
          <input
            type="text"
            value={branchOffice.currency}
            onChange={(event) => setBranchOffice({ ...branchOffice, currency: event.target.value })}
          />
        </label>
        <br />
        <button type="submit">Actualizar</button>
      </form>
    </div>
  );
};

export default EditBranchOfficeForm;
