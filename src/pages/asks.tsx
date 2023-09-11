import { Box, Button } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { Header } from "../components/Header";
import { Selector } from "../components/Selector";
import { getAsk } from "../services/calls";
import { getMbti } from "../services/calls";

const Asks: React.FC = () => {

  const [total, setTotal] = useState(0)
  const [num, setNum] = useState(0)
  const [perguntas, setPerguntas] = useState([])

  async function callAsks() {
    try {
      const response = await getAsk();
      console.log("🚀 ~ file: asks.tsx:13 ~ callAsks ~ response:", response.data)
      setPerguntas(response.data)
    } catch (error) {
      console.log("erro: ", error);
      console.info("teste");
    }
  }

  async function callMbti() {
    try {
      const response = await getMbti(60);
      console.log("🚀 ~ file: asks.tsx:13 ~ callAsks ~ response:", response.data)
      
    } catch (error) {
      console.log("erro: ", error);
      console.info("teste");
    }
  }



  useEffect(()=>{
    if(total == 0){
      setTotal(num)
    }else{
      setTotal(total + num)
    }
    setNum(0)
  },[num])

  useEffect(()=>{
    console.log('TOTAL: ', total)
  },[total])

  useEffect(() => {
    callAsks();
  }, []);

  const Perguntas = [
    "Pergunta 0: Você acha difícil se apresentar para outras pessoas.",
    "Pergunta 1: Você fica frequentemente tão absorto em seus pensamentos que ignora ou esquece do seu entorno.",
    "Pergunta 2: Você tenta responder aos seus e-mails o mais rapidamente possível e não suporta uma caixa de entrada bagunçada.",
    "Pergunta 3: Você permanece relaxado e concentrado mesmo sob pressão.",
    "Pergunta 4: Geralmente, você não inicia conversas.",
    "Pergunta 5: Você raramente faz alguma coisa por pura curiosidade.",
    "Pergunta 6: Você se sente superior às outras pessoas.",
    "Pergunta 7: Ser organizado é mais importante para você do que ser adaptável.",
    "Pergunta 8: Você é geralmente muito motivado e cheio de energia.",
    "Pergunta 9: Vencer um debate significa menos para você do que assegurar que ninguém fique aborrecido.",
    "Pergunta 10: Você frequentemente sente que tem que se justificar para outras pessoas.",
    "Pergunta 11: Seus ambientes doméstico e de trabalho são bem organizados.",
    "Pergunta 12: Você não se importa em ser o centro das atenções.",
    "Pergunta 13: Você se considera mais prático do que criativo.",
    "Pergunta 14: As pessoas raramente conseguem aborrecê-lo.",
    "Pergunta 15: Seus planos de viagem são geralmente bem pensados.",
    "Pergunta 16: Frequentemente, é difícil para você se relacionar com os sentimentos das outras pessoas.",
    "Pergunta 17: Seu humor pode mudar muito rapidamente.",
    "Pergunta 18: Em uma discussão, a verdade deve ser mais importante que a sensibilidade das pessoas.",
    "Pergunta 19: Você raramente se preocupa em como suas ações afetam as outras pessoas.",
    "Pergunta 20: Seu estilo de trabalho aproxima-se mais de picos de energia aleatórios do que uma abordagem metódica e organizada.",
    "Pergunta 21: Geralmente, você tem inveja dos outros.",
    "Pergunta 22: Um livro ou um vídeo game interessante é frequentemente melhor que um evento social.",
    "Pergunta 23: Ser capaz de desenvolver um plano e manter-se firme na sua execução é a parte mais importante de todo projeto.",
    "Pergunta 24: Você raramente se deixa levar por fantasias e ideias.",
    "Pergunta 25: Você se vê frequentemente perdido em seus pensamentos quando está em contato com a natureza.",
    "Pergunta 26: Se alguém não responde ao seu e-mail rapidamente, você começa a se preocupar se disse alguma coisa errada.",
    "Pergunta 27: Como pai/mãe, preferiria de ver seu/sua filho(a) crescer bondoso(a) do que inteligente.",
    "Pergunta 28: Você não deixa outras pessoas influenciarem suas ações.",
    "Pergunta 29: Seus sonhos têm a tendência de se concentrar no mundo real e seus eventos.",
    "Pergunta 30: Não leva muito tempo para você começar a se envolver em atividades sociais em seu novo local de trabalho.",
    "Pergunta 31: Você é mais um improvisador nato do que um planejador cuidadoso.",
    "Pergunta 32: Suas emoções o controlam mais do que você as controla.",
    "Pergunta 33: Você aprecia ir a eventos sociais que envolvem o uso de fantasias ou encenação.",
    "Pergunta 34: Você frequentemente despende tempo explorando ideias irrealistas e impraticáveis, ainda que intrigantes.",
    "Pergunta 35: Você prefere improvisar do que despender tempo para criar um plano detalhado.",
    "Pergunta 36: Você é uma pessoa relativamente reservada e sossegada.",
    "Pergunta 37: Se você tivesse uma empresa, acharia muito difícil demitir funcionários leais mas com baixo desempenho.",
    "Pergunta 38: Você frequentemente contempla as razões da existência humana.",
    "Pergunta 39: A lógica é geralmente mais importante que o coração na hora de se tomar decisões importantes.",
    "Pergunta 40: Manter suas opções em aberto é mais importante do que manter uma lista de afazeres.",
    "Pergunta 41: Se seu amigo está triste por algum motivo, é mais provável que você ofereça apoio emocional do que sugestões para enfrentar o problema.",
    "Pergunta 42: Você raramente se sente inseguro.",
    "Pergunta 43: Você não tem dificuldades em criar um cronograma pessoal e em segui-lo.",
    "Pergunta 44: Estar certo é mais importante do que ser cooperativo, quando se trata de trabalho em equipe.",
    "Pergunta 45: Você acha que a visão de todos deve ser respeitada, independentemente de ser ou não baseada em fatos.",
    "Pergunta 46: Você se sente com mais energia após despender tempo com um grupo de pessoas.",
    "Pergunta 47: Você perde suas coisas com frequência.",
    "Pergunta 48: Você se vê como muito estável emocionalmente.",
    "Pergunta 49: Sua mente está sempre trabalhando com ideias e planos inexplorados.",
    "Pergunta 50: Você não se chamaria de sonhador.",
    "Pergunta 51: Você geralmente acha difícil relaxar ao se dirigir para muitas pessoas.",
    "Pergunta 52: Falando de modo geral, você confia mais em sua experiência do que em sua imaginação.",
    "Pergunta 53: Você se preocupa demais com o que as outras pessoas pensam.",
    "Pergunta 54: Se o ambiente está lotado, você fica perto das paredes, evitando o centro.",
    "Pergunta 55: Você tem uma tendência a procrastinar até não haver mais tempo para fazer tudo.",
    "Pergunta 56: Você se sente muito ansioso em situações de estresse.",
    "Pergunta 57: Você acredita que é mais recompensador ser querido pelos outros do que poderoso.",
    "Pergunta 58: Você sempre foi interessado em coisas não convencionais e ambíguas, por ex., em livros, arte ou filmes.",
    "Pergunta 59: Você frequentemente toma a iniciativa em situações sociais.",
  ];

  const navigate = useNavigate();

  return (
    <Box>
      <Header />
      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          flexDirection: "column",
          gap: 8,
          paddingTop: 10,
          paddingBottom: 10,
        }}
      >
        {perguntas.map((item) => (
          <Selector ask={item} setNum={setNum} />
        ))}
      <Button variant="text" onClick={()=>{
callMbti()
      }}>Finalizar</Button>
      </Box>
    </Box>
  );
};

export default Asks;
