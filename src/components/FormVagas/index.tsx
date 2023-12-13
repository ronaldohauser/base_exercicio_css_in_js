// No arquivo FormVagas/index.tsx
import React, { FormEvent, useState } from 'react';
import { FormWrapper, BotaoPesquisar, CampoPesquisa } from './styles';

type Props = {
   aoPesquisar: (termo: string) => void;
};

const FormVagas = ({ aoPesquisar }: Props) => {
   const [termo, setTermo] = useState<string>('');

   const aoEnviarForm = (e: FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      aoPesquisar(termo.toLocaleLowerCase());
   };

   return (
      <FormWrapper onSubmit={aoEnviarForm}>
         <CampoPesquisa
            placeholder="Front-end, fullstack, node, design"
            onChange={(e) => setTermo(e.target.value)}
            type="search"
         />
         <BotaoPesquisar type="submit">Pesquisar</BotaoPesquisar>
      </FormWrapper>
   );
};

export default FormVagas;
