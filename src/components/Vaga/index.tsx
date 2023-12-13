// eslint-disable-next-line prettier/prettier
import {
   VagaItem,
   VagaTitulo,
   DetalhesLista,
   DetalheItem,
   VagaLink,
} from './styles';

type Props = {
   titulo: string;
   localizacao: string;
   nivel: string;
   modalidade: string;
   salarioMin: number;
   salarioMax: number;
   requisitos: string[];
};

const Vaga = (props: Props) => (
   <VagaItem>
      <VagaTitulo>{props.titulo}</VagaTitulo>
      <DetalhesLista>
         <DetalheItem>Localizacao: {props.localizacao}</DetalheItem>
         <DetalheItem>Senioridade: {props.nivel}</DetalheItem>
         <DetalheItem>Tipo de contratacao: {props.modalidade}</DetalheItem>
         <DetalheItem>
            Salário: {props.salarioMin} - {props.salarioMax}
         </DetalheItem>
         <DetalheItem>
            Requisitos: {props.requisitos.join(', ')}
         </DetalheItem>
      </DetalhesLista>
      <VagaLink href="#">Ver detalhes e candidatar-se</VagaLink>
   </VagaItem>
);

export default Vaga;
