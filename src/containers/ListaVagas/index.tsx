import React, { useState } from 'react';
import FormVagas from '../../components/FormVagas';
import Vaga from '../../components/Vaga';
import { ListaVagasContainer, VagasLista } from './styles';

type VagaType = {
  id: number;
  titulo: string;
  localizacao: string;
  nivel: string;
  modalidade: string;
  salarioMin: number;
  salarioMax: number;
  requisitos: string[];
};

const vagasMock: VagaType[] = [

];

const ListaVagas = () => {
  const [filtro, setFiltro] = useState<string>('');

  const vagasFiltradas = vagasMock.filter(
    (x) => x.titulo.toLocaleLowerCase().search(filtro) >= 0
  );

  return (
    <ListaVagasContainer>
      <FormVagas aoPesquisar={(termo: string) => setFiltro(termo)} />
      <VagasLista>
        {vagasFiltradas.map((vaga) => (
          <Vaga
            key={vaga.id}
            titulo={vaga.titulo}
            localizacao={vaga.localizacao}
            nivel={vaga.nivel}
            modalidade={vaga.modalidade}
            salarioMin={vaga.salarioMin}
            salarioMax={vaga.salarioMax}
            requisitos={vaga.requisitos}
          />
        ))}
      </VagasLista>
    </ListaVagasContainer>
  );
};

export default ListaVagas;
