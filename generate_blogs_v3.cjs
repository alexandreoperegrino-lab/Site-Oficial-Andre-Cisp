const fs = require('fs');
const path = require('path');

const articles = [
  {
    slug: 'como-consertar-celular-que-nao-liga',
    title: 'Como Consertar Celular Que Não Liga: O Guia Definitivo',
    image: 'https://i.imgur.com/rOLcd2z.jpeg',
    keywords: 'conserto de celular, smartphone não liga, placa morta',
    content: `
      <h2>Introdução ao Desafio de Aparelho Morto</h2>
      <p>Lidar com um aparelho que se recusa a dar sinal de vida é frequente. O cliente relata que apagou do nada. Esta é uma grande oportunidade lucrativa. Primeiramente devemos descartar fatores externos.</p>
      <h2>Passo 1: Entrevista com o Cliente e Triagem Visual</h2>
      <p>Descubra as condições prévias. O celular caiu? Teve contato com água? Inspecione danos na carcaça. Uma simples queda pode soltar o flat flex da bateria dentro, parecendo que a placa queimou.</p>
      <h2>Passo 2: Análise Inicial com USB Tester</h2>
      <p>Use um detector USB. Consumo zero sugere problemas no conector USB ou malhas primárias de carregamento. Consumo travado em baixa corrente aponta para problemas gravíssimos de processador ou memória. Consumo normal sem vídeo aponta para a tela (display).</p>
      <h2>Passo 3: Verificação de Curto Primário</h2>
      <p>Use a fonte assimétrica ligando na entrada da bateria. Se zerar a tensão e a corrente pular, temos um curto de linha principal. Injete baixa tensão e utilize spray congelante para revelar os capacitores defeituosos que superaquecem e derretem a cobertura branca.</p>
    `
  },
  {
    slug: 'vale-a-pena-abrir-assistencia-tecnica-de-celular',
    title: 'Análise: Ainda Vale a Pena Abrir Assistência Técnica de Celular?',
    image: 'https://i.imgur.com/U5ZFIqM.jpeg',
    keywords: 'assistência de celular, montar loja, lucro celular',
    content: `
      <h2>O Cenário Tecnológico Mundial</h2>
      <p>O Brasil possui mais de um celular ativo por pessoa. Aparelhos são artigos vitais de comunicação e trabalho. O valor cobrado num reparo avançado pode salvar um produto caríssimo. Definitivamente vale a pena.</p>
      <h2>Os Custos Básicos vs Lucro</h2>
      <p>A troca de periféricos sustenta o capital de giro, com altos volumes diários e peças simples de instalar (telas e baterias). Contudo, a maestria real do lucro bruto vem da manutenção de painéis e soldas microscópicas (bga), com margens operacionais altíssimas.</p>
      <h2>Por que alguns falham?</h2>
      <p>Por imperícia e tentativa no achismo em lugar de estudar a real engenharia do processo de consertos profissionais. Quem baseia sua atuação em pura trocação sem entender esquemáticos se frustrará logo cedo.</p>
      <h2>Evolução no Negócio</h2>
      <p>Estudando os macetes corretos, estruturando atendimento impecável e controlando estoque de displays mais saídos (como a famosa linha A e G no Brasil), o giro e saúde financeira se perpetua.</p>
    `
  },
  {
    slug: 'ferramentas-para-conserto-de-celular',
    title: 'Guia de Ferramentas Profissionais',
    image: 'https://i.imgur.com/OqERzl8.jpeg',
    keywords: 'ferramentas assistência, equipamentos conserto',
    content: `
      <h2>As Bases Mecânicas do Laboratório</h2>
      <p>Chaves de impacto mínimo, espátulas delicadas sem ranhuras de plástico firme são vitais para preservar a casca selada que muitos atuais modelos Androids ou iPhones protegem sua base. Jamais marque ou lasque a caixa do seu cliente, isso acaba a credibilidade.</p>
      <h2>Manuseio Elétrico Estático</h2>
      <p>A proteção ESD em pulsos e manta de mesa absorvem perfeitamente o impacto das interações do operário. Numa escala milimétrica do processamento moderno a estática do polegar do técnico estala com picos imensos queimando os núcleos e mosfets lógicos siliciosos, isolar sua energia é básico.</p>
      <h2>Sopradores Térmicos e Estações</h2>
      <p>Uma boa sucção por vácuo e os pratos térmicos que descolam camadas touch screen com fitas 3M ou cola sólida OCA farão da sua vida menos traumatizante. Trocas originais que mantém a carcaça de base de fábrica com o vidro selado só o mestre qualificado manja realizar via as chapas separadoras.</p>
    `
  },
  {
    slug: 'identificar-curto-placa-mae-notebook',
    title: 'Como Identificar Curto na Placa-Mãe de Notebook',
    image: 'https://i.imgur.com/zub8wE7.jpeg',
    keywords: 'conserto de notebook, curto placa mãe',
    content: `
      <h2>O Medo de Reparo em Notebooks</h2>
      <p>Ao conectar a força contínua a placa sequer tenta engatilhar o super iO ou emitir as fontes 3Volts e 5Volts ALW. Uma grande porção foca a substituição e manda trocar. Errado. Identificar o núcleo do erro se paga com extrema destreza técnica de altíssimo lucro.</p>
      <h2>A Famosa Linha 19V</h2>
      <p>Os maiores danos se dão nos MOSFET de alta e capacitores colossais cerâmicos encarregados de filtrar 19 volts advindos direto do carregador (jack). Como a força primária penetra lá e se embate contra oscilações elétricas, costumam queimar no primeiro pico impedindo a placa entrar em estado de vida (start).</p>
      <h2>Encontros de Componentes Superaquecendo</h2>
      <p>Um método primoroso consiste na busca no toque (thermal check) ao injetar meros 1 ou 2 Volts no trecho, pois a resistência alterada esquenta. Assim o micro condensador de meros centavos avisa sozinho a sua quebra aos observadores capacitados.</p>
    `
  },
  {
    slug: 'solda-bga-o-que-e-e-como-fazer',
    title: 'Solda BGA (Reballing): O Que É e Como Fazer?',
    image: 'https://i.imgur.com/vSOrJ2J.jpeg',
    keywords: 'solda bga, reballing placa, reflow',
    content: `
      <h2>O Padrão BGA de Microprocessadores</h2>
      <p>Pela necessidade de reduzir as distâncias milimétricas, fábricas de processador embutiram as antigas pernas aos pinos laterais diretos, fazendo as matrizes Ball Grid Arrays. Elas soldam o bloco de calor encostado e interativo inteiramente aderido na pci-express. Retirar e botar chips nesta modalidade difere imensamente daqueles tradicionais.</p>
      <h2>As Consequências da Expansão Térmica</h2>
      <p>Ao aquecer na alta densidade, os games e laptops forçam esse BGA numa contração rotineira das microesferas de ligas baratas contidas originalmente. Surgem então os trincamentos ou "famosa soldas frias". Restaurar ou Substituir esse elo pede refazimentos completos (Reball).</p>
      <h2>Maquinários e Curvas de Temperaturas</h2>
      <p>Estações base IR (Infravermelho puros) ou Máquinas de jatos de alta pressões calibrados por estágios com sensores termopar duplos fixam um mapeamento nos chips (curva de resfriar / pico para amolecer a soldagem original / manter estanque a fixação líquida a vácuo) evitando a morte por fervura da central processadora de silício fina (bolha populhar do die).</p>
    `
  },
  {
    slug: 'defeito-conector-de-carga-celular-resolvido',
    title: 'Resolvendo o Defeito no Conector de Carga Definitivamente',
    image: 'https://i.imgur.com/8nsgt3n.jpeg',
    keywords: 'defeito conector de carga, celular não carrega',
    content: `
      <h2>A Porta USB Type-C ou Micro Submetida a Altas Lutas diárias</h2>
      <p>Os cabos carregam não apenas forças pesadas (como o protocolo turbo quick-charge que engata voltagens altíssimas oscilantes 9v, 12v em cargas primárias aos celulares). O impacto do usuário plugar trinta vezes diárias quebra a soldagem flexível inferior que sela o conjunto metálico principal cravado na base lógica.</p>
      <h2>Substituir Sub-Placa vs Trocar Conector (Pinos)</h2>
      <p>Trocar unicamente a peça de base conector original micro soldado e raspar antigas soldagens frias antigas repovoando ele nos fluxos e ligar as conexões laterais preserva CIs nativos controladores. As chamadas Dock boards inteiras no paralelo chines trazem apenas ligações burras, roubando velocidade e segurança total, o mestre consertador optará sempre pela ressolda exímia do metal mantido o board oficial pcb do celular intacto e salvo na subida do sinal à matriz maior.</p>
    `
  },
  {
    slug: 'como-trocar-tela-quebrada-celular',
    title: 'Troca de Tela: Faça Como as Autorizadas Fazem',
    image: 'https://i.imgur.com/LOdmxYg.jpeg',
    keywords: 'troca de tela do celular, vidro quebrado smartphone',
    content: `
      <h2>Não Fique com Prejuízos Bobos</h2>
      <p>Todo iniciante já decepou acidentalmente cabos flex nas extremidades e arrebentou touch-screens internos em baterias pontudas que atravessaram tudo durante fechamento na falta de encaixe central. Estudar as metodologias do invólucro garante um reparo perfeito de fábrica original, não deixando "saltar" telas de vidros espessos nas marcas super incéis que invadem e machucam os leds da base traseira base.</p>
      <h2>Técnicas Suaves a Ventosas Aquecida</h2>
      <p>O limite imposto nos calores para evitar mancham os super Amoled e Retina displays nunca deveria suplantar os rigorosos 95°C no visor por tempos elásticos curtos; a química isolada removedora isopropílica tem que entrar aos laços em mililitros nos lados e vácuos sem encharcamentos lúdicos e desnecessários na tela preta. O serviço de mestre e cirurgia se vale de delicadeza pura.</p>
    `
  },
  {
    slug: 'manutencao-preventiva-em-notebooks',
    title: 'Manutenção Preventiva Completa em Notebooks e PCs',
    image: 'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?auto=format&fit=crop&w=800&q=80',
    keywords: 'limpeza dissipador notebook, pasta térmica prata',
    content: `
      <h2>Os Vilões de Fumaças Escuras</h2>
      <p>Poeira endurecida forma literal barreira sólida maciça em filamentos das refrigerações radiais e axiais, criando travas no vento forçado nos radiadores laterais; o componente mor (famoso heatpipe / dissipador) e calibres vitais nas pastas base zinco / siliconados vêm aos farelos e perdem todo fator térmico, ocasionando afogamento termodinâmico contínuo na lentidão da vida humana, chegando a limites absolutos causando colapsos irreparáveis caso o sistema desarme demoradamente em longas jornadas gráficas extremadas que clientes usam nas bases lúdicas.</p>
      <h2>A Cura Química Superior ao invés Da Gambiarra Corretiva</h2>
      <p>Abertura do chassis frontal contendo ventoinha minúscula, limpar os eixos travados nas micro arruelas lubrificando por minigotas de fluído siliconado leve super liso; no ponto mor, aplicar bases superiores químicas plenas (Ouro / Prata térmica premium), trocando os Thermal pads elastômeros que interajam o BGA dos bancos ram nos arredores que fervem pesadamente na demanda dos sistemas super modernos farão da vida inteira renascer pura por longos percursos absolutos.</p>
    `
  },
  {
    slug: 'multimetro-digital-como-usar-na-eletronica',
    title: 'A Ferramenta Básica de Tudo: Medição Com Multímetro Digital',
    image: 'https://i.imgur.com/CtVO54f.jpeg',
    keywords: 'multímetro celular, conserto placa mãe notebook multimetro',
    content: `
      <h2>Você Precisa Abrir A Visão Escura do Elétron</h2>
      <p>Ninguém na pura visão humana repara se ali tem 5 volts correndo ou 19 contínuos calmos. Com multi medidores atuamos cegamente apalpando tensões na corrente exata ou verificações na queda óhmica das malhas; a interconexão do esquemático pdf na tela para com o equipamento medidor acusa a saúde de todo pino regulador SMD contido e soldado que por si nunca demonstram um derretimento no estado bruto.</p>
      <h2>As Duas Funções que Resolvem 90%</h2>
      <p>Escala de diodo com aviso sonoro (buzzer): Ao medir paralelos em negativo ao redor nos cerâmicos base, você nota se uma fonte secundária de alta conversão encontra base terra e soa os apitos fatais contínuo sem tréguas, denunciando colapsos fortes da tensão (linha inteira e os capacitores filtrantes acoplados se danificados soam sem pausa no apanhador ponteira negra contra positiva conectada aterrada); Ao ligar à rede e ir buscar as correntes, com multímetro para base (DC 20v) confirmamos se quem chega no capacitor alimenta efetivamente Omosfets subsequentes ou param de transacionar e perdem força elétrica.</p>
    `
  },
  {
    slug: 'curso-de-eletronica-online-vale-a-pena',
    title: 'Análise Clara: Cursos Online para Consertos Valem o Investimento?',
    image: 'https://images.unsplash.com/photo-1517420879524-86d64ac2f339?auto=format&fit=crop&w=800&q=80',
    keywords: 'curso de eletronica celular, vale a pena online',
    content: `
      <h2>A Vantagem Exclusiva EAD Na Eletrônica</h2>
      <p>Para atuar e diagnosticar macro componentes ou aprender reflow pesados BGA o olhar é focado sobre um monitor trinocular colado no silício milimétrico; sendo absolutamente insuperável no meio presencial das lousas. Treinos via captura de macros no modo HD permitem replay imediato cem vezes no mesmo conector para ver manias térmicas na manipulação de chaves finas absolutas nas distâncias seguras que jamais atingiriam as vias presencial do professor num monte de alunos enjaulados e obstrusos por cabeças e ferramentas.</p>
      <h2>As Garantias Do Resultado Fiel</h2>
      <p>Foque no peso total, certificados práticos reais providos por quem comanda laboratórios de transe diário e vivências provadas; Os consertos captados in loco são passíveis de repetição contínua para sua completa imersão em laboratório. Todo tempo outrora pego em vias e transportes urbanos você gasta agora dominando osciloscópios no conforto base do seu desktop focado no avanço da sua técnica contínua soberana lucrando logo na base seguinte inicial imediata superando o seu retorno super rápido.</p>
    `
  }
];

const headerFooterCode = `
    <!-- Header/Nav -->
    <header class="fixed w-full top-0 z-50 bg-navy-login/80 backdrop-blur-md border-b border-tech-purple/20 transition-all duration-300" id="header">
        <div class="container mx-auto px-6 h-20 flex items-center justify-between">
            <a href="/" class="font-display font-bold text-2xl tracking-tight text-white flex items-center gap-2 group">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-tech-purple group-hover:rotate-12 transition-transform duration-300"><path d="M12 2v20"/><path d="m17 5-5-3-5 3v14l5 3 5-3z"/></svg>
                André <span class="text-tech-purpleGlow">Cisp</span>
            </a>
            
            <nav class="hidden md:flex items-center gap-8 font-medium">
                <a href="/#inicio" class="text-tech-light hover:text-tech-purpleGlow transition-colors hover:scale-105 inline-block">Início</a>
                <a href="/#sobre" class="text-tech-light hover:text-tech-purpleGlow transition-colors hover:scale-105 inline-block">Sobre</a>
                <a href="/#cursos" class="text-tech-light hover:text-tech-purpleGlow transition-colors hover:scale-105 inline-block">Cursos</a>
                <a href="/#depoimentos" class="text-tech-light hover:text-tech-purpleGlow transition-colors hover:scale-105 inline-block">Depoimentos</a>
                <a href="/blog/index.html" class="text-tech-light hover:text-tech-purpleGlow transition-colors hover:scale-105 inline-block">Blog</a>
                <a href="/cursos-gratis.html" class="text-tech-light hover:text-tech-purpleGlow transition-colors hover:scale-105 inline-block">Cursos Grátis</a>
                <a href="/#garantia" class="text-tech-light hover:text-tech-purpleGlow transition-colors hover:scale-105 inline-block">Garantia</a>
                <a href="/#duvidas" class="text-tech-light hover:text-tech-purpleGlow transition-colors hover:scale-105 inline-block">Dúvidas</a>
            </nav>

            <a href="https://wa.me/5581979046978?text=Ol%C3%A1%21%20Gostaria%20de%20tirar%20d%C3%BAvidas%20sobre%20os%20cursos." class="hidden md:flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 px-5 py-2.5 rounded-lg font-bold text-white transition-all glow-green hover:-translate-y-1">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.794s.441-1.273.6-1.446c.158-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.058.376-.058l.416-.505c.116-.145.232-.116.39-.058.158.058 1.012.477 1.185.564.173.087.289.129.332.202.043.073.043.423-.101.827z"/></svg>
                WhatsApp
            </a>
            
            <button id="mobile-menu-btn" class="md:hidden text-white focus:outline-none hover:text-tech-purple transition-colors z-50 relative p-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"/></svg>
            </button>
        </div>
        
        <div id="mobile-menu" class="hidden md:hidden bg-navy-900 border-t border-tech-purple/20 px-6 py-4 shadow-xl">
            <nav class="flex flex-col gap-4">
                <a href="/#inicio" class="text-white hover:text-tech-purple transition-colors block py-1 border-b border-white/5">Início</a>
                <a href="/#sobre" class="text-white hover:text-tech-purple transition-colors block py-1 border-b border-white/5">Sobre</a>
                <a href="/#cursos" class="text-white hover:text-tech-purple transition-colors block py-1 border-b border-white/5">Cursos</a>
                <a href="/#depoimentos" class="text-white hover:text-tech-purple transition-colors block py-1 border-b border-white/5">Depoimentos</a>
                <a href="/blog/index.html" class="text-white hover:text-tech-purple transition-colors block py-1 border-b border-white/5">Blog</a>
                <a href="/cursos-gratis.html" class="text-white hover:text-tech-purple transition-colors block py-1 border-b border-white/5">Cursos Grátis</a>
                <a href="/#garantia" class="text-white hover:text-tech-purple transition-colors block py-1 border-b border-white/5">Garantia</a>
                <a href="/#duvidas" class="text-white hover:text-tech-purple transition-colors block py-1 border-b border-white/5">Dúvidas</a>
                <a href="https://wa.me/5581979046978?text=Ol%C3%A1%21%20Gostaria%20de%20tirar%20d%C3%BAvidas%20sobre%20os%20cursos." class="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-400 px-5 py-3 mt-2 rounded-lg font-bold text-white transition-all glow-green">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.77-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.794s.441-1.273.6-1.446c.158-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86.174.086.275.058.376-.058l.416-.505c.116-.145.232-.116.39-.058.158.058 1.012.477 1.185.564.173.087.289.129.332.202.043.073.043.423-.101.827z"/></svg>
                    Falar no WhatsApp
                </a>
            </nav>
        </div>
    </header>
`;

const footerCode = `
    <!-- Footer -->
        <!-- Elegant Footer -->
    <footer class="relative bg-[#00040a] pt-24 pb-10 mt-auto overflow-hidden">
        <!-- Top border gradient -->
        <div class="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-tech-purpleGlow text-transparent opacity-50"></div>
        <!-- Subtle Glow Effect -->
        <div class="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-32 bg-tech-purpleGlow/20 blur-[130px] z-0 pointer-events-none"></div>
        
        <div class="container mx-auto px-6 relative z-10">
            <div class="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-16 mb-16">
                
                <!-- Brand & Description -->
                <div class="md:col-span-12 lg:col-span-5 flex flex-col">
                    <a href="/index.html" class="font-display font-bold text-3xl tracking-tight text-white flex items-center gap-3 mb-6 group cursor-pointer inline-flex w-fit">
                        <div class="relative p-2.5 bg-white/5 rounded-xl border border-white/10 group-hover:border-tech-purple/50 transition-colors shadow-lg shadow-black/50">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-tech-purple group-hover:scale-110 transition-transform"><path d="M12 2v20"/><path d="m17 5-5-3-5 3v14l5 3 5-3z"/></svg>
                        </div>
                        André <span class="text-tech-purpleGlow">Cisp</span>
                    </a>
                    <p class="text-tech-light/60 mb-8 leading-relaxed text-[17px] font-light max-w-md">
                        Qualificando com excelência e método direto ao ponto. Desde reparos básicos até os níveis mais complexos. A didática perfeita para o seu laboratório evoluir.
                    </p>
                    
                    <!-- Social Links -->
                    <div class="flex items-center gap-4 mt-auto">
                        <a href="#" class="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-tech-light/70 hover:bg-tech-purple hover:text-white hover:border-tech-purple hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all hover:-translate-y-1" aria-label="YouTube">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"/><path d="m10 15 5-3-5-3z"/></svg>
                        </a>
                        <a href="#" class="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-tech-light/70 hover:bg-tech-purple hover:text-white hover:border-tech-purple hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all hover:-translate-y-1" aria-label="Instagram">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/></svg>
                        </a>
                        <a href="#" class="w-11 h-11 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-tech-light/70 hover:bg-tech-purple hover:text-white hover:border-tech-purple hover:shadow-[0_0_15px_rgba(168,85,247,0.4)] transition-all hover:-translate-y-1" aria-label="Facebook">
                            <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
                        </a>
                    </div>
                </div>
                
                <!-- Quick Links -->
                <div class="md:col-span-4 lg:col-span-3 lg:col-start-7">
                    <h4 class="font-bold text-white mb-8 tracking-wider text-sm flex items-center gap-3">
                        <span class="w-2 h-2 rounded-full bg-tech-purpleGlow"></span>
                        NAVEGAÇÃO
                    </h4>
                    <ul class="space-y-4 font-light">
                        <li><a href="/index.html" class="text-tech-light/70 hover:text-white hover:translate-x-1.5 inline-flex items-center gap-2.5 transition-all group w-fit"><span class="w-0 group-hover:w-3 h-[1px] bg-tech-purple transition-all duration-300"></span> Início</a></li>
                        <li><a href="/index.html#cursos" class="text-tech-light/70 hover:text-white hover:translate-x-1.5 inline-flex items-center gap-2.5 transition-all group w-fit"><span class="w-0 group-hover:w-3 h-[1px] bg-tech-purple transition-all duration-300"></span> Nossos Cursos</a></li>
                        <li><a href="/cursos-gratis.html" class="text-tech-light/70 hover:text-white hover:translate-x-1.5 inline-flex items-center gap-2.5 transition-all group w-fit"><span class="w-0 group-hover:w-3 h-[1px] bg-tech-purple transition-all duration-300"></span> Aulas Grátis</a></li>
                        <li><a href="/blog/index.html" class="text-tech-light/70 hover:text-white hover:translate-x-1.5 inline-flex items-center gap-2.5 transition-all group w-fit"><span class="w-0 group-hover:w-3 h-[1px] bg-tech-purple transition-all duration-300"></span> Blog & Dicas</a></li>
                        <li><a href="/index.html#garantia" class="text-tech-light/70 hover:text-white hover:translate-x-1.5 inline-flex items-center gap-2.5 transition-all group w-fit"><span class="w-0 group-hover:w-3 h-[1px] bg-tech-purple transition-all duration-300"></span> Garantia</a></li>
                    </ul>
                </div>
                
                <!-- Contact Info -->
                <div class="md:col-span-8 lg:col-span-3">
                    <h4 class="font-bold text-white mb-8 tracking-wider text-sm flex items-center gap-3">
                        <span class="w-2 h-2 rounded-full bg-tech-purpleGlow"></span>
                        CONTATO
                    </h4>
                    <ul class="space-y-5">
                        <li>
                            <a href="#" class="group flex items-start gap-4 text-tech-light/70 hover:text-white transition-colors">
                                <div class="mt-0.5 p-2.5 bg-white/5 rounded-lg border border-white/10 text-tech-purpleGlow group-hover:bg-tech-purple/20 group-hover:border-tech-purple/50 transition-all shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
                                </div>
                                <div class="flex flex-col">
                                    <span class="text-[13px] font-medium opacity-60 uppercase tracking-wider mb-0.5">WhatsApp</span>
                                    <span class="text-base tracking-wide font-light text-white/90">(81) 97904-6978</span>
                                </div>
                            </a>
                        </li>
                        <li>
                            <a href="#" class="group flex items-start gap-4 text-tech-light/70 hover:text-white transition-colors">
                                <div class="mt-0.5 p-2.5 bg-white/5 rounded-lg border border-white/10 text-tech-purpleGlow group-hover:bg-tech-purple/20 group-hover:border-tech-purple/50 transition-all shrink-0">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
                                </div>
                                <div class="flex flex-col">
                                    <span class="text-[13px] font-medium opacity-60 uppercase tracking-wider mb-0.5">E-mail</span>
                                    <span class="text-base tracking-wide font-light text-white/90">suporte@andrecisp.com.br</span>
                                </div>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
            
            <!-- Bottom Border & Copyright -->
            <div class="pt-8 flex flex-col md:flex-row justify-between items-center gap-6 border-t border-white/10 text-[13px]">
                <p class="text-tech-light/40 font-light tracking-wide text-center md:text-left">
                    &copy; 2026 <span class="text-white ml-0.5 font-medium">André Cisp Treinamentos</span>. Todos os direitos reservados.
                </p>
                <div class="flex flex-wrap justify-center items-center gap-x-8 gap-y-3 text-tech-light/40 font-light">
                    <a href="#" class="hover:text-white transition-colors">Termos de Uso</a>
                    <a href="#" class="hover:text-white transition-colors">Política de Privacidade</a>
                </div>
            </div>
        </div>
    </footer>
    
    <script>
        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        if (menuBtn && mobileMenu) {
            menuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
            });
        }
    </script>
</body>
</html>
`;

articles.forEach((article) => {
  const html = `
<!DOCTYPE html>
<html lang="pt-br" class="scroll-smooth">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>${article.title} | Blog do André Cisp</title>
    <link rel="icon" type="image/png" href="/public/circuit_board_repair.png" />
    <meta name="description" content="${article.title}">
    <meta name="keywords" content="${article.keywords}">
    
    <!-- Meta tags unificadas da main e outras paginas -->
    <meta property="og:title" content="${article.title} - André Cisp Blog">
    <meta property="og:description" content="Leia este artigo completo no Blog Oficial do André Cisp.">
    <meta property="og:image" content="${article.image}">
    
    <!-- Tailwind CSS (via CDN para simplicidade) -->
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        tech: {
                            orange: '#f97316',
                            orangeGlow: '#fb923c',
                            blue: '#3b82f6',
                            purple: '#8b5cf6',
                            purpleGlow: '#a855f7',
                            dark: '#0f172a',
                            light: '#f8fafc',
                        },
                        navy: {
                            DEFAULT: '#0a0f1d',
                            900: '#0d1326',
                            800: '#141d38',
                            login: '#080c17'
                        }
                    },
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        display: ['Space Grotesk', 'sans-serif'],
                    }
                }
            }
        }
    </script>
    <style>
        .markdown-content h2 { font-size: 1.875rem; font-weight: 700; margin-top: 2rem; margin-bottom: 1rem; color: white; display: flex; align-items: center; gap: 0.5rem; }
        .markdown-content h2::before { content: ""; display: block; width: 0.5rem; height: 1.5rem; background-color: #f97316; border-radius: 0.25rem; }
        .markdown-content h3 { font-size: 1.5rem; font-weight: 600; margin-top: 1.5rem; margin-bottom: 0.75rem; color: #f8fafc; }
        .markdown-content p { margin-bottom: 1.25rem; line-height: 1.8; color: rgba(248, 250, 252, 0.8); font-size: 1.125rem; }
        .markdown-content ul { list-style-type: none; margin-bottom: 1.5rem; padding-left: 0; }
        .markdown-content ul li { position: relative; padding-left: 1.5rem; margin-bottom: 0.75rem; line-height: 1.7; color: rgba(248, 250, 252, 0.8); font-size: 1.125rem; }
        .markdown-content ul li::before { content: ""; position: absolute; left: 0; top: 0.5rem; width: 0.5rem; height: 0.5rem; background-color: #a855f7; border-radius: 50%; }
        .markdown-content strong { color: white; font-weight: 600; text-shadow: 0 0 10px rgba(168, 85, 247, 0.2); }
    </style>
</head>
<body class="bg-navy text-tech-light font-sans antialiased overflow-x-hidden selection:bg-tech-orange/30 selection:text-white">

${headerFooterCode}

    <!-- Article Content -->
    <main class="pt-32 pb-24 md:pt-40 min-h-screen relative z-10">
        <div class="container mx-auto px-6 max-w-4xl">
            <!-- Breadcrumbs -->
            <div class="flex items-center gap-2 text-sm text-tech-light/50 mb-8 font-medium">
                <a href="/" class="hover:text-tech-purpleGlow transition-colors">Início</a>
                <span>/</span>
                <a href="/blog/index.html" class="hover:text-tech-purpleGlow transition-colors">Blog</a>
                <span>/</span>
                <span class="text-tech-orangeGlow truncate" style="max-width: 200px;">${article.title}</span>
            </div>

            <article class="bg-navy-900 rounded-3xl overflow-hidden shadow-2xl border border-white/5 relative z-10">
                <div class="h-[60vh] min-h-[400px] w-full relative">
                    <div class="absolute inset-0 bg-gradient-to-t from-navy-900 via-navy-900/40 to-transparent z-10"></div>
                    <img src="${article.image}" alt="${article.title}" class="w-full h-full object-cover">
                    
                    <div class="absolute bottom-0 left-0 w-full p-8 md:p-12 z-20">
                        <div class="inline-flex items-center gap-2 mb-4 bg-tech-orange/20 border border-tech-orange/30 text-tech-orangeGlow px-3 py-1 rounded-full text-xs font-bold uppercase tracking-widest backdrop-blur-sm">
                            Em Alta
                        </div>
                        <h1 class="text-4xl md:text-5xl font-display font-bold text-white leading-tight mb-4">${article.title}</h1>
                        <div class="flex items-center gap-4 text-tech-light/60 text-sm font-medium">
                            <span class="flex items-center gap-1.5"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-tech-purple"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/><circle cx="12" cy="7" r="4"/></svg> André Cisp</span>
                            <span>•</span>
                            <span class="flex items-center gap-1.5"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-tech-purple"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg> Maio 2026</span>
                            <span>•</span>
                            <span class="flex items-center gap-1.5"><svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-tech-orangeGlow"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg> 10 min leitura</span>
                        </div>
                    </div>
                </div>

                <div class="p-8 md:p-12 lg:p-16">
                    <div class="markdown-content">
                        ${article.content}
                    </div>
                    
                    <div class="mt-16 pt-8 border-t border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6">
                        <div class="flex items-center gap-4">
                            <img src="https://i.imgur.com/w2fHQZO.png" alt="André Cisp" class="w-16 h-16 rounded-full object-cover border-2 border-tech-purple bg-navy-800">
                            <div>
                                <h4 class="text-white font-bold text-lg font-display">André Cisp</h4>
                                <p class="text-tech-light/60 text-sm">Professor Especialista</p>
                            </div>
                        </div>
                        <a href="/#cursos" class="flex items-center gap-2 bg-white/5 border border-white/10 hover:border-tech-purple/50 px-6 py-3 rounded-xl font-bold text-white transition-all hover:bg-tech-purple/20 group">
                            Seja meu Aluno Especialista
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="text-tech-purpleGlow group-hover:translate-x-1 transition-transform"><path d="M5 12h14"/><path d="m12 5 7 7-7 7"/></svg>
                        </a>
                    </div>
                </div>
            </article>
            
        </div>
    </main>

${footerCode}
`;

  const filePath = path.join(__dirname, "blog", `${article.slug}.html`);
  fs.writeFileSync(filePath, html);
  console.log(`Created extensive v4: ${article.slug}.html`);
});
