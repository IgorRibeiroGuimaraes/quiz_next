import { embaralhar } from "@/functions/arrays";
import questoes from "../bancoDeQuestoes";

const handler = (req: any, res: any) => {
    const ids = questoes.map((questao) => questao.id);
    res.status(200).json(embaralhar(ids));
  };
  
  export default handler;
