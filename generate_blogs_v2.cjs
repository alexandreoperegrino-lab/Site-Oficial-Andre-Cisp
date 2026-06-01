const fs = require('fs');
const path = require('path');

const articles = [
  {
    slug: 'como-consertar-celular-que-nao-liga',
    title: 'Como Consertar Celular Que Não Liga: O Guia Definitivo e Completo',
    image: 'https://i.imgur.com/M8K8BUr.jpeg',
    keywords: 'conserto de celular, smartphone não liga, placa morta, manutenção de celulares, curso de manutenção, defeito celular',
    content: `
      <h2>Introdução ao Desafio de "Aparelho Morto"</h2>
      <p>Lidar com um aparelho que se recusa a dar sinal de vida é um dos desafios mais comuns no dia a dia da <strong>manutenção de celular</strong>. O cliente muitas vezes chega à assistência técnica relatando que "apagou do nada", "fui dormir e acordei com ele desligado", ou até mesmo que o dispositivo sofreu uma queda ou teve contato com líquidos. Embora possa parecer assustador para técnicos novatos, para os profissionais experientes essa é uma das ocorrências mais lucrativas.</p>
      <p>Dominar a arte do conserto de aparelhos nesse estado elevará imediatamente seu negócio para um novo patamar, garantindo mais clientes e maior rentabilidade.</p>

      <h2>Passo 1: Entrevista com o Cliente e Triagem Visual</h2>
      <p>Antes de abrir qualquer dispositivo, converse com o cliente. A informação é a sua ferramenta primária. Descubra qual foi a última atividade antes do problema: foi durante um carregamento de energia? Sofreu queda? Existem indicativos de umidade (como condensação na câmera)?</p>
      <p>Realize também uma inspeção visual externa. Veja se há telas rachadas que podem indicar rompimento do display (e não que a placa não liga), ou veja se há sujeira severa bloqueando as portas de carregamento (conector USB/Type-C).</p>

      <h2>Passo 2: Análise Inicial com USB Tester (Dock Test)</h2>
      <p>O próximo passo essencial é conectar o aparelho a um <strong>USB tester</strong> ou analisador de carga de boa qualidade, em conjunto com um cabo que você sabe estar 100% funcional. Preste atenção no comportamento dos medidores de tensão (V) e corrente (A).</p>
      <ul>
        <li><strong>Consumo Zero:</strong> Pode significar que a energia sequer entra. O culpado geralmente é um conector de carga quebrado, trilhas rompidas de 5V ou até o cabo flex que liga a subplaca inferior principal à placa-mãe (FPC).</li>
        <li><strong>Consumo Pulsante ou Travado (Ex: 0.1A constante):</strong> Muitas vezes aponta para problemas gravíssimos associados aos CIs de gerenciamento de energia (PMIC), memória NAND corrompida, processador/CPU com solda fria ou curto em malhas secundárias.</li>
        <li><strong>Consumo Normal (Ex: 1A ~ 2A) mas sem vídeo:</strong> A placa-mãe muito provavelmente ligou. Neste cenário, desconfie que a falha reside inteiramente no setor de imagens (LCD/OLED queimados, malhas do display (MIPI) em curto, curto no backlight (filtro, diodo, bobina) ou cabo de display rompido).</li>
      </ul>

      <h2>Passo 3: Tensão da Bateria (Medição Real no Multímetro)</h2>
      <p>Se o teste via cabo USB não apresentar luz sobre o estado vital da máquina, é hora de ir para a bancada e desmontar. Remova o invólucro do dispositivo com ferramentas plásticas evitando perfurar a bateria. Em seguida, usando o seu <strong>multímetro digital</strong> ajustado para medição de Corrente Contínua (geralmente entre 20V DC), mesa a tensão da bateria. A maioria das baterias de íon de lítio requer um mínimo de aproximadamente 3.6V para ligar o aparelho e no mínimo 3.7V para ligar os conversores primários do PMIC. Baterias totalmente drenadas (<3.0V) acionarão um circuito protetor extremo. Basta reativar a bateria (conhecido como "dar um choque") através de uma fonte própria para este fim antes de dar o diagnóstico como perdido.</p>
      
      <h2>Passo 4: Verificação de Curto Primário na Fonte de Bancada</h2>
      <p>As chaves mestres para achar defeitos quando a placa não reage à energia consistem em conectar a placa a uma Fonte Assimétrica CC (Fonte de Bancada). Devemos aplicar as pontas na malha V-Battery principal (conector da bateria) aplicando 4.0 a 4.2V e observar seu comportamento.</p>
      <ul>
        <li>Se, mesmo desligado (antes de pressionar o botão de Power), a fonte disparar consumo ou picos que atingem toda a amperagem programada e a tensão despencar a 0V, você tem um <strong>Curto Circuito Primário</strong> extremo. Um componente ligado na linha vermelha fundamental fechou contanto pleno com a linha preta de terra.</li>
        <li>Basta aplicar as técnicas consagradas térmicas: spray congelante ou breu resinoso na placa, injetar levemente tensão monitorada no conector de novo e buscar pelo calor. O componente em curto — seja um condensador ou capacitor smd em malhas primárias ou conversor de energia — derreterá instantaneamente sua cobertura, acusando sua culpa.</li>
      </ul>

      <h2>Evoluindo Profissionalmente os Lucros</h2>
      <p>Muitos técnicos fogem dessas análises complexas, tornando-se conhecidos apenas por "trocadores de peças". Dominar o conserto profundo de placas por metodologias lógicas atende aos serviços difíceis, que são mais valorizados. É recomendável estudar com quem já superou todas estas fases: acompanhe especialistas aprovados e treinamentos sérios que orientam como conduzir a microeletrônica passo a passo, tornando tudo um desafio lógico de medições perfeitamente explicadas, permitindo a devolução completa das máquinas para a vida real e deixando o cliente amplamente satisfeito e a sua assistência prosperando absurdamente.</p>
    `
  },
  {
    slug: 'vale-a-pena-abrir-assistencia-tecnica-de-celular',
    title: 'Análise Completa: Ainda Vale a Pena Abrir Uma Assistência Técnica de Celular?',
    image: 'https://i.imgur.com/vAXSWzQ.jpeg',
    keywords: 'assistência técnica de celular, como montar assistência de celular, empreender loja manutenção, reparar celular da lucro, como começar assistência',
    content: `
      <h2>O Cenário Tecnológico Mundial e a Assistência Técnica</h2>
      <p>Ao refletimos sobre as vastas possibilidades de investimento existentes nos dias de hoje para a prestação de serviços ou empreendedorismo de ponta, rapidamente notamos a hegemonia da tecnologia no cotidiano mundial. Atualmente, o Brasil possui mais dispositivos móveis ativos (smartphones) do que possui habitantes propriamente ditos, superando facilmente a proporção em uso diário massivo. Isso comprova uma evidência inexorável: <strong>montar e manter uma Assistência Técnica de Celular continua sendo um dos mercados mais robustos, resistentes e rentáveis que você pode apostar</strong>, inclusive superando adversidades constantes das macro-crises do país. E como os telefones costumam ter valores agregados cada vez maiores, com modelos base ultra-premium facilmente transpassando salários inteiros de um indivíduo comum, o conserto imediato tem absoluta soberania contra o simples descarte.</p>

      <h2>O Lucro Contra os Custos Básicos</h2>
      <p>Vamos desmistificar uma barreira psicológica que atormenta milhares de interessados. <em>Eu preciso de muito capital para poder iniciar uma loja bonita e gigantesca no centro?</em> A resposta categórica é um estrondoso NÃO. O mercado perdoa humildade no início se respaldada com extrema excelência de trabalho.</p>
      <p>Sua bancada deve começar de modo cirúrgico na sua mesa de casa no cômodo livre, na porta lateral de uma garagem limpa para a vizinhança. Seu foco nos lucros se resume em dois mundos rentáveis: a troca de flex e periféricos externos rápidos (botões, conectores base, display montado, câmeras) que carregam um percentual médio e retorno ultrarrápido; ou o reparo complexo laboratorial lógico, quando requer domínios de placa mãe, curtos circuitos graves microscópicos e recuperação via ressolda severa, cuja margem de porcentagem de mão-de-obra e serviço chega facilmente de centenas de porcentos de lucros em 1 simples reparo sem necessidade de reposições de peças custosas inteiras. Você dita a especialização de sua estrutura, o foco deve ser, em todos os lugares, em conhecimento.</p>

      <h2>Fatores que Levam Você ao Insucesso</h2>
      <p>Apesar dos bons indicativos e prosperidade perene, várias lojas acabam fechando as portas nos doze primeiros meses na área, não por faltar fluxo no faturamento ou concorrência excessiva (já que existe mercado abundante pra quase todos). Mas porque os próprios fundadores falham gravemente nos trâmites elementares operacionais. Explicando claramente, eles baseiam inteiramente a rotina no achismo, vendo tutorias imprecisos em plataformas em vídeo que cortam as técnicas essenciais de controle de temperaturas de ar, ou deixam de documentar entrada exata (estado de carcaça e dados de série dos equipamentos). Erro de temperatura de chapa destrói baterias inflando elas (acarretando prejuízos aos lojistas inexperientes e danos aos donos de celulares). Erro de diagnósticos causa troca desnecessária de telas operacionais perdendo toda a reserva de emergência da loja num único movimento ruim.</p>

      <h2>Como se Desenvolver com Inteligência no Segmento</h2>
      <p>O melhor planejamento antes da primeira chave de fenda (phipps, pentalobe ou tri-point) encostar num hardware real será fazer e aplicar tudo que treinamentos e cursos com credibilidade no mercado fornecem. Fazer reparos simulados através das lentes de quem montou mais de centenas de lojas consolidadas, não te custa caro: te encurta todo aquele tempo inicial que seria pura decepção pagador de componentes queimados. Somado à gestão eficiente baseada nas dicas reais contábeis de faturamentos de peças importadas seguras (e a fuga e triagem eximidos de comprar falsificaçoes) trará ao seu recém estúdio / oficina de reparações uma força magnifica.</p>
    `
  },
  {
    slug: 'ferramentas-para-conserto-de-celular',
    title: 'Guia de Ferramentas Essenciais e Profissionais para Assistência de Celular',
    image: 'https://i.imgur.com/WD5c9FQ.jpeg',
    keywords: 'ferramentas assistência técnica de celular, ferramentas de manutenção, maquinario para bancada, estação solda, reparo notebook',
    content: `
      <h2>Ferramentas de Base Mecânica para um Estúdio Organizado</h2>
      <p>O pilar da excelência prática na construção fundamental de um laboratório real reside na escolha cautelosa e metódica dos devidos apetrechos. Uma extensa margem do exido depende não apenas das mãos sábias mas inevitavelmente das tecnologias instrumentais aliadas ao <strong>conserto laboratorial</strong>. Inciar da forma adequada, protegendo a si próprio e garantindo longevidade sem desgastes nos perfis externos originais.</p>
      
      <p>Começando pelo material mecânico fundamental, invista categoricamente em <strong>chaves variadas de destorque</strong> de alta solidez preferencialmente ímantadas para assegurar a fixação contra fugas diminutas das roscas de fixação; também priorize adquirir "iSclack" ventosas super aderentes de altíssima categoria que farão total milagre separando molduras aderidas, seguidas amplamente de inúmeras espátulas e alavancas pálidas e ultrafinas base plástico poliéter para cortes das travas no invólucro do hardware alheio ser prejudicado ou danificado por acúmulos por escorrões da força natural externa no decorrer dos anos intensos de manutenções.</p>

      <h2>Instrumentação Especial de Base Estática e Eletrônica</h2>
      <p>Nunca permita manipular diretamente componentes desprovido das obrigatoriedades essenciais, sendo um manto ou <strong>esteiras profissionais isolantes antiestáticas ESD</strong>. Elas proveem raterramento crucial dispersando cargas humanas estáticas antes do circuito mudo processador sofrer picos microscópicos das fagulhas humanas elétricas; não descarte jamais de suas luvas térmicas e condutoras de fluxo na operação laboratorial severa.</p>

      <ul>
        <li><strong>Estações Modernas Base Solda/Soprador 2 em 1:</strong> Componente mor para ressolda exata de portas, trilhas condutoras ou substituição pura de SMD com total flexibilização macro modular nas temperaturas estáticas (evitando matar ilhas da placa), utilizando pontas variadas da chapa.</li>
        <li><strong>Separadora Térmica (Sucção a Vácuo):</strong> Um tanque forte blindado munido de pratos em metal base furada. Prové elevação controlada constante para fixar totalmente a tela que sofrerá incisões metálicas a fio durante toda remoção técnica daquela fronte danificada em milímetros milagrosa e sublime nos lucros diárias (o tão notório desmonte de tela frente da frente colada sob as carapuças duras a 90C na operação da retaguarda técnica de ponta).</li>
        <li><strong>Testador Diagnóstico Rápido e Limpadores:</strong> Multímetros miniatura base precisões de oscilosópio; um Doc Test ultra rápido a medições na ponta FPC externa sem aberturas demoradas; fracos galões pressurizados cheios até o topo base Isopropílico - seu liquido santo diário a lavadoras e desoxidações brutais de placas após queda aos sanitários. E <em>fluxes</em> amtek / resina pura para exatidão e solda espelhada da precisão de fábrica.</li>
      </ul>

      <h2>A Busca por Visões Além da Biologia: Microscópica Laboratorial</h2>
      <p>Não existe hoje laboratório que se consagra nos meios altamente requintados na microeletrônica celular e computacional operando da era das pedras de visualizações oculares cruas biológicas. Com o contínuo abrandamento na densificação (muitos chips e componentes menores do que areia na malha fina), investir fortemente no Microscópio Trinocular a lente objetiva de alto poder (ex:. AmScope/AK), ou numa tela eletrônica com grande claridade via base óptica em led fará os pontos isolados e soldagem fria ou caminhos rachados micro na pista aparecerem à vida inteira diante do mestre ali efetuando a magia prática da devolução.</p>
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
    <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%239333ea' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpath d='M12 2v20'/%3E%3Cpath d='m17 5-5-3-5 3v14l5 3 5-3z'/%3E%3C/svg%3E">
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
