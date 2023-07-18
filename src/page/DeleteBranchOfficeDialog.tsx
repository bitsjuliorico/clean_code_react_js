import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { deleteBranchOffice, getByIdBranchOffices } from '../services/branchOfficeService';
import { Button, Dialog, DialogActions, DialogContent, DialogTitle } from '@material-ui/core';
import { BranchOffice } from '../types';

interface DeleteBranchOfficeDialogProps {
  open: boolean;
  onClose: () => void;
}

const DeleteBranchOfficeDialog: React.FC<DeleteBranchOfficeDialogProps> = ({ open, onClose }) => {
  const navigate = useNavigate();
  const { code } = useParams<{ code: string }>();
  const [branchOffice, setBranchOffice] = React.useState<BranchOffice | null>(null);

  React.useEffect(() => {
    getBranchOffice();
  }, []);

  const getBranchOffice = async () => {
    if(code) {
      const data = await getByIdBranchOffices(code);
      setBranchOffice(data);
    }
  };

  const handleDelete = async () => {
    if (code) {
      await deleteBranchOffice(code);
      navigate('/');
    }
  };

  return (
    <Dialog open={open} onClose={onClose}>
      <DialogTitle>Confirmar eliminación</DialogTitle>
      <DialogContent>
        {branchOffice && (
          <p>
            ¿Estás seguro de que deseas eliminar la sucursal de oficina "{branchOffice.description}"?
          </p>
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={onClose} color="primary">
          Cancelar
        </Button>
        <Button onClick={handleDelete} color="primary">
          Eliminar
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default DeleteBranchOfficeDialog;
