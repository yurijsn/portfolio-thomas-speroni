// ─────────────────────────────────────────────────────────────────────────────
// FONTE CENTRALIZADA DE DADOS — Thomas Speroni
// Todos os componentes importam daqui. Nunca duplicar dados do cliente.
// ─────────────────────────────────────────────────────────────────────────────

export const CLIENTE = {
  nome: 'Thomas Speroni',
  titulo: 'Psicanalista e Psicólogo',
  crp: 'CRP/RJ 49818',
  whatsapp: '5521981327575',
  whatsappDisplay: '+55 21 9 8132-7575',
  // URL exata de contato — usada em TODOS os botões
  whatsappUrl: 'https://api.whatsapp.com/send/?phone=5521981327575&text=Ol%C3%A1.+Gostaria+de+agendar+uma+consulta&type=phone_number&app_absent=0',
  site: 'https://thomassperoni.com.br',
  email: 'contato@thomas-speroni.com',
  linkedin: 'https://www.linkedin.com/in/thomas-speroni/',
  lattes: 'http://lattes.cnpq.br/4878504390951528',
  orcid: 'https://orcid.org/0000-0001-6579-2334',
};

export const COPY = {
  hero: {
    headline:
      'Há os que sofrem de amor. De passado. De futuro. De muitas ou poucas questões. E há os que sofrem sem saber do que sofrem.',
    cta: 'Marcar uma conversa',
  },

  quemEThomas: {
    h2: null, // seção sem título explícito — apresentação direta
    paragrafos: [
      'Thomas Speroni é psicanalista, psicólogo e professor universitário.',
      'Há quase 10 anos se dedica a receber em seu consultório (presencial e online) todos aqueles que, por alguma razão, sofrem: de angústia, de ansiedade, de obsessões, de insatisfações, de pensamentos, de traumas, de amor, de passado, de presente, de futuro, de muitas, algumas ou poucas questões – e também aqueles que sofrem sem saber do que sofrem.',
      'Desde 2019 também ensina psicanálise e psicopatologia em cursos de graduação em psicologia e medicina e pós-graduação em psicanálise.',
    ],
  },

  citacaoFreud: {
    texto:
      'A vida, como nos é imposta, é muito difícil: nos traz muitas dores, decepções, tarefas insolúveis. [...] Sobre esse ponto não existe conselho válido para todos; cada um tem que ensaiar por si mesmo a maneira em que pode ser feliz.',
    autor: 'Sigmund Freud',
  },

  aEscuta: {
    h2: 'A escuta',
    paragrafos: [
      'A psicanálise não oferece respostas — oferece um espaço onde as perguntas podem, finalmente, ser feitas.',
      'No consultório, o que importa não é o diagnóstico, mas o que cada pessoa traz de singular: a história que nunca foi dita inteira, o que retorna sem pedir licença, o que pesa sem ter nome ainda.',
      'A análise leva tempo — porque o inconsciente tem o seu próprio ritmo, e ele não pode ser forçado.',
    ],
    cta: 'Falar com Thomas',
  },

  formacao: {
    h2: 'Formação',

    academica: [
      {
        id: 1,
        grau: 'Mestrado em Psicanálise',
        instituicao: 'Universidade do Estado do Rio de Janeiro — UERJ',
        local: 'Rio de Janeiro, RJ',
        detalhe: 'Dissertação: Depressão, psicanálise e atualidade',
        mencao: 'Aprovada com menção de excelência, indicação para publicação e para doutorado',
      },
      {
        id: 2,
        grau: 'Bacharelado em Psicologia',
        instituicao: 'Universidade Veiga de Almeida — UVA',
        local: 'Rio de Janeiro, RJ',
        detalhe: null,
        mencao: null,
      },
      {
        id: 3,
        grau: 'Intercâmbio',
        instituicao: 'Universidad Anáhuac',
        local: 'Ciudad de México, DF, México',
        detalhe: null,
        mencao: null,
      },
    ],

    atuacao: [
      {
        id: 1,
        texto: 'Professor de psicanálise e psicopatologia em graduação e pós-graduação desde 2019',
      },
      {
        id: 2,
        texto: 'Formação permanente no Corpo Freudiano — Escola de Psicanálise',
      },
      {
        id: 3,
        texto: 'Gestor editorial da revista Psicanálise & Barroco em Revista',
        italic: 'Psicanálise & Barroco em Revista',
      },
      {
        id: 4,
        texto: 'Participação em mais de 40 congressos nacionais e internacionais de psicanálise',
      },
    ],
  },

  consultorios: {
    h2: 'Consultórios',
    locais: [
      {
        id: 'ipanema',
        cidade: 'Ipanema — Rio de Janeiro',
        endereco: 'Rua Alberto de Campos, 119, casa 5',
        referencia: 'A 600 metros do metrô Nossa Senhora da Paz',
      },
      {
        id: 'buzios',
        cidade: 'Búzios — Armação dos Búzios',
        endereco: 'Rua dos Pescadores, 55, sala 9 — Manguinhos',
        referencia: 'German Mall / German Saúde',
      },
      {
        id: 'online',
        cidade: 'Online',
        endereco: 'Via videochamada',
        referencia: 'Brasil e exterior',
      },
    ],
    modalidades: null,
    cta: 'Marcar uma conversa',
  },

  textos: {
    h2: 'Textos',
    artigos: [
      {
        id: 1,
        titulo: 'O que é a psicanálise?',
        autor: 'Thomas Speroni',
        leitura: '2 min de leitura',
        lede:
          'Pergunta complexa. Mas tentemos fazer um humilde recorte da questão.',
        conteudo: [
          { tipo: 'p', texto: 'Pergunta complexa. Mas tentemos fazer um humilde recorte da questão.' },
          { tipo: 'p', texto: 'A psicanálise comporta uma teoria, um método de investigação, uma técnica, uma prática e uma ética. Tudo isso voltado ao psiquismo humano e seu tratamento. A psicanálise se dedica a saber e a tratar esse negócio que chamamos de "mente", as "coisas da cabeça".' },
          { tipo: 'p', texto: 'Nasce alguns anos depois da psiquiatria e quase junto da neurologia. Psicanálise e neurologia compartilham do mesmo berçário: o Hospital Salpêtrière. Nesse hospital de Paris trabalhou e lecionou o médico Jean-Martin Charcot, considerado o pai da neurologia moderna. Foi com Charcot que Sigmund Freud, médico considerado o pai da psicanálise, foi estudar em 1885. Dentro do enorme hospital Charcot tinha uma enfermaria especial dedicada aos doentes que apresentavam fenômenos patológicos, mas que, após rigoroso exame médico, constatava-se que não tinham qualquer alteração biológica.' },
          { tipo: 'p', texto: 'O que é isso que acomete um sujeito a ponto de ele ficar, por exemplo, com as pernas paralisadas sem que haja qualquer sinal de mau funcionamento do seu aparelho biológico?' },
          { tipo: 'p', texto: 'A psicanálise nasce a partir daquilo que a medicina não consegue explicar e nem tratar. [Se hoje a medicina consegue explicar e/ou tratar os transtornos mentais, eis aí um debate profícuo, que penso poder começar com duas questões: 1) isso que a medicina encontra no corpo biológico de certos pacientes com transtornos mentais (uma alteração de neurotransmissores, por exemplo) é causa ou consequência do próprio transtorno? 2) os medicamentos têm sido honestamente eficazes no tratamento das pessoas?].' },
          { tipo: 'p', texto: 'Depois de estudar com Charcot, Freud se debruça sobre esse enigma. A partir daí e ao longo dos anos a psicanálise se dedicou não só à doença do ser humano, mas a todo seu psiquismo. Ao se devotar a entender a mente, a psicanálise acaba por estender seus tentáculos para a compreensão de quase tudo aquilo que é humano e que o ser humano produz: o corpo, o amor, o ódio, os conflitos, a sociedade, as ciências, a arte, a política... É por isso que não é preciso estar necessariamente doente para procurar um analista: basta ser humano, basta ter "coisas na cabeça". Quem não tem coisas na cabeça?' },
        ],
      },
      {
        id: 2,
        titulo: 'Orientações para o atendimento online',
        autor: 'Thomas Speroni',
        leitura: '3 min de leitura',
        lede:
          'Algumas orientações simples que fazem diferença para que a sessão online aconteça com a mesma qualidade do atendimento presencial.',
        conteudo: [
          { tipo: 'h2', texto: 'Ambiente' },
          { tipo: 'p', texto: 'Pode ser um cantinho da sua casa, um cômodo da casa de um amigo ou parente, um quarto de hotel, uma sala de reuniões ou escritório no seu local de trabalho... Pode ser deitado, sentado ou em pé. O importante é que seja um lugar confortável e silencioso para você, e que seja também um lugar em que você esteja sozinho, sem a presença de outras pessoas no mesmo cômodo. Uma sessão de análise é algo extremamente íntimo, e essa intimidade deve ser preservada no atendimento online.' },
          { tipo: 'h2', texto: 'Horário' },
          { tipo: 'p', texto: 'Quando entramos numa sessão de análise precisamos estar inteiramente naquele espaço e naquele tempo. Por isso é importante separar um horário de maneira que a sua sessão não se misture com outros afazeres e tarefas. O trabalho que fazemos aqui é um trabalho denso, que demanda muitíssimo, portanto, não se faz análise enquanto se faz qualquer outra coisa: não se faz análise enquanto se lava a louça, ou enquanto se responde e-mails ou mensagens, ou enquanto se penteia o cabelo... A sessão requer atenção total.' },
          { tipo: 'p', texto: 'Já é difícil demais pensarmos e dizermos o que temos para pensar e dizer, assim que precisamos evitar elementos e circunstâncias que sirvam de distração e prejudiquem o andamento do tratamento.' },
          { tipo: 'p', texto: 'O horário da sua sessão precisa ser exclusivamente o horário da sua sessão.' },
          { tipo: 'h2', texto: 'Fone de ouvido' },
          { tipo: 'p', texto: 'Dê preferência à utilização de fones de ouvido durante as sessões. Eles melhoram a experiência da chamada garantindo que só você escute o que o profissional tem a lhe dizer, e também costumam captar melhor sua voz – o que é essencial para que o profissional te escute.' },
          { tipo: 'h2', texto: 'Conexão de internet' },
          { tipo: 'p', texto: 'Evite lugares, cômodos, cantos ou redes com conexões instáveis. Priorize locais onde você já sabe que a conexão wi-fi ou os dados móveis pegam bem.' },
          { tipo: 'h2', texto: 'Distrações' },
          { tipo: 'p', texto: 'Tenha o cuidado de eliminar possibilidades de distração durante a sessão de análise. Desligue a televisão, o rádio, afaste-se de barulhos e estímulos visuais e suspenda temporariamente as notificações de seu celular.' },
          { tipo: 'p', texto: 'É claro que deixar de seguir à risca essas orientações não impede que se realize o atendimento. Pode acontecer de o fone de ouvido dar defeito, ou a internet começar a ficar instável. Às vezes precisamos ter uma sessão urgente e, naquele momento, não temos como procurar um lugar em que possamos ficar totalmente sozinhos, ou então estamos sem nossos fones. Podemos avaliar a viabilidade do atendimento levando em conta sempre as premissas e os aspectos éticos.' },
        ],
      },
    ],
  },

  contato: {
    h2: 'Marcar uma conversa',
    subtexto: 'Entre em contato pelo WhatsApp.',
    btnPrimario: 'Marcar uma conversa',
    btnWhatsapp: 'Falar com Thomas',
  },

  footer: {
    nav: [
      { label: 'Home', href: '#' },
      { label: 'Sobre', href: '#sobre' },
      { label: 'Consultórios', href: '#consultorios' },
      { label: 'Textos', href: '#textos' },
    ],
    copyright: '© 2026 Thomas Speroni',
  },
};
