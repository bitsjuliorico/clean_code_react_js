import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Table, TableBody, TableCell, TableHead, TableRow } from '@material-ui/core';
import { BranchOffice } from '../types';
import { fetchBranchOffices } from '../services/branchOfficeService';

function HomePage() {
  const [branchOffices, setBranchOffices] = React.useState<BranchOffice[]>([]);

  React.useEffect(() => {
    fetchBranchOffices().then((data) => {
      setBranchOffices(data);
    });
  }, []);

  return (
    <div>
      <h1>Lista de Sucursales de Oficina</h1>
      <Button component={Link} to="/branch-offices/create" variant="contained" color="primary">
        Crear Sucursal de Oficina
      </Button>
      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Código</TableCell>
            <TableCell>Identificación</TableCell>
            <TableCell>Moneda</TableCell>
            <TableCell>Acciones</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {branchOffices.map((branchOffice) => (
            <TableRow key={branchOffice.code}>
              <TableCell>{branchOffice.code}</TableCell>
              <TableCell>{branchOffice.identification}</TableCell>
              <TableCell>{branchOffice.currency}</TableCell>
              <TableCell>
                {/* <Link to={`/branch-offices/${branchOffice.code}`}>Ver</Link>{' '} */}
                <Link to={`/branch-offices/${branchOffice.code}/edit`}>Editar</Link>{' '}
                <Link to={`/branch-offices/${branchOffice.code}/delete`}>Borrar</Link>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}

export default HomePage;
