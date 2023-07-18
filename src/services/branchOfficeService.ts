import { BranchOffice } from '../types';
export async function fetchBranchOffices(): Promise<BranchOffice[]> {
  const response = await fetch('http://localhost:3004/offices');
  const data = await response.json();
  return data.branchOffices;
}

export async function createBranchOffices(body: BranchOffice){
  return fetch('http://localhost:3004/offices', {
    method: 'POST',
    body: JSON.stringify(body),
    headers:{
      'Content-Type': 'application/json'
    }});
}

export async function editBranchOffices(code: string, body: BranchOffice){
  return fetch(`http://localhost:3004/offices/${code}`, {
    method: 'PUT',
    body: JSON.stringify(body),
    headers:{
      'Content-Type': 'application/json'
    }});
}

export async function getByIdBranchOffices(id: string ): Promise<BranchOffice> {
  const response = await fetch(`http://localhost:3004/offices/${id}`);
  return await response.json();
}

export async function deleteBranchOffice(code: string ): Promise<BranchOffice> {
  const response = await fetch(`http://localhost:3004/offices/${code}`, {
    method: 'DELETE'});
  return await response.json();
}