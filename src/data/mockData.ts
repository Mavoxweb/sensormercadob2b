import { FAQItem, FormatTypeOption, ProductItem, WorkflowStep } from "@/types";

export const PRODUCTS_BY_SEGMENT: Record<string, ProductItem[]> = {
  supermercado: [
    { id: '1', name: 'Arroz Tipo 1 5kg', category: 'Mercearia', originalPrice: 'R$ 28,90', offerPrice: 'R$ 21,90', unit: 'un', tag: 'Ofertaço' },
    { id: '2', name: 'Feijão Carioca 1kg', category: 'Mercearia', originalPrice: 'R$ 8,50', offerPrice: 'R$ 5,99', unit: 'un', tag: 'Destaque' },
    { id: '3', name: 'Óleo de Soja 900ml', category: 'Mercearia', originalPrice: 'R$ 7,90', offerPrice: 'R$ 5,49', unit: 'un' },
    { id: '4', name: 'Café Torrado e Moído 500g', category: 'Matinais', originalPrice: 'R$ 18,90', offerPrice: 'R$ 14,90', unit: 'un', tag: 'Mais Vendido' },
    { id: '5', name: 'Leite Integral 1L', category: 'Laticínios', originalPrice: 'R$ 5,49', offerPrice: 'R$ 4,19', unit: 'un' },
    { id: '6', name: 'Detergente Líquido 500ml', category: 'Limpeza', originalPrice: 'R$ 2,99', offerPrice: 'R$ 1,99', unit: 'un' },
  ],
  hortifruti: [
    { id: '7', name: 'Maçã Gala Selecionada', category: 'Frutas', originalPrice: 'R$ 9,90', offerPrice: 'R$ 6,99', unit: 'kg', tag: 'Fresquinho' },
    { id: '8', name: 'Banana Prata Extra', category: 'Frutas', originalPrice: 'R$ 6,50', offerPrice: 'R$ 3,99', unit: 'kg' },
    { id: '9', name: 'Tomate Italiano Especial', category: 'Legumes', originalPrice: 'R$ 8,90', offerPrice: 'R$ 5,49', unit: 'kg', tag: 'Super Preço' },
    { id: '10', name: 'Batata Monalisa kg', category: 'Legumes', originalPrice: 'R$ 6,90', offerPrice: 'R$ 3,89', unit: 'kg' },
    { id: '11', name: 'Cenoura Especial kg', category: 'Legumes', originalPrice: 'R$ 5,50', offerPrice: 'R$ 3,29', unit: 'kg' },
    { id: '12', name: 'Alface Americana Hidropônica', category: 'Verduras', originalPrice: 'R$ 4,50', offerPrice: 'R$ 2,99', unit: 'un' },
  ],
  acougue: [
    { id: '13', name: 'Picanha Bovina Grill kg', category: 'Carnes Nobres', originalPrice: 'R$ 79,90', offerPrice: 'R$ 59,90', unit: 'kg', tag: 'Qualidade Premium' },
    { id: '14', name: 'Alcatra em Bife kg', category: 'Bovinos', originalPrice: 'R$ 44,90', offerPrice: 'R$ 34,90', unit: 'kg' },
    { id: '15', name: 'Peito de Frango Resfriado kg', category: 'Aves', originalPrice: 'R$ 18,90', offerPrice: 'R$ 12,90', unit: 'kg', tag: 'Ofertaço' },
    { id: '16', name: 'Linguiça Toscana Especial kg', category: 'Linguiças', originalPrice: 'R$ 22,90', offerPrice: 'R$ 16,90', unit: 'kg' },
    { id: '17', name: 'Costela Bovina Ripa kg', category: 'Bovinos', originalPrice: 'R$ 29,90', offerPrice: 'R$ 21,90', unit: 'kg' },
    { id: '18', name: 'Cupim Bovino Selecionado kg', category: 'Churrasco', originalPrice: 'R$ 36,90', offerPrice: 'R$ 27,90', unit: 'kg' },
  ],
  padaria: [
    { id: '19', name: 'Pão Francês Quentinho kg', category: 'Pães', originalPrice: 'R$ 16,90', offerPrice: 'R$ 11,90', unit: 'kg', tag: 'Fornada Toda Hora' },
    { id: '20', name: 'Pão de Queijo Mineiro kg', category: 'Salgados', originalPrice: 'R$ 34,90', offerPrice: 'R$ 24,90', unit: 'kg' },
    { id: '21', name: 'Bolo de Cenoura c/ Cobertura', category: 'Confeitaria', originalPrice: 'R$ 19,90', offerPrice: 'R$ 14,90', unit: 'un', tag: 'Artesanal' },
    { id: '22', name: 'Croissant Misto Presunto e Queijo', category: 'Salgados', originalPrice: 'R$ 9,50', offerPrice: 'R$ 6,90', unit: 'un' },
    { id: '23', name: 'Torrada Tradicional 160g', category: 'Matinais', originalPrice: 'R$ 6,90', offerPrice: 'R$ 4,50', unit: 'un' },
    { id: '24', name: 'Sonho de Creme de Baunilha', category: 'Doces', originalPrice: 'R$ 5,00', offerPrice: 'R$ 3,49', unit: 'un' },
  ]
};

export const MOCK_STORES = [
  { id: 'br-01', storeName: 'Loja 01 — Centro Matriz', code: 'LOJA-01', status: 'ready' as const, lastSyncTime: 'Agora' },
  { id: 'br-02', storeName: 'Loja 02 — Zona Norte', code: 'LOJA-02', status: 'ready' as const, lastSyncTime: 'Há 2 min' },
  { id: 'br-03', storeName: 'Loja 03 — Zona Sul', code: 'LOJA-03', status: 'ready' as const, lastSyncTime: 'Há 1 min' },
  { id: 'br-04', storeName: 'Loja 04 — Shopping Plaza', code: 'LOJA-04', status: 'ready' as const, lastSyncTime: 'Agora' },
  { id: 'br-05', storeName: 'Loja 05 — Av. Jardim', code: 'LOJA-05', status: 'ready' as const, lastSyncTime: 'Há 3 min' },
  { id: 'br-06', storeName: 'Loja 06 — Aeroporto', code: 'LOJA-06', status: 'ready' as const, lastSyncTime: 'Há 5 min' },
  { id: 'br-07', storeName: 'Loja 07 — Vila Nova', code: 'LOJA-07', status: 'ready' as const, lastSyncTime: 'Agora' },
  { id: 'br-08', storeName: 'Loja 08 — Parque Industrial', code: 'LOJA-08', status: 'ready' as const, lastSyncTime: 'Há 4 min' }
];

export const WORKFLOW_STEPS: WorkflowStep[] = [
  {
    number: '01',
    title: 'INSIRA OS PRODUTOS',
    shortDesc: 'Importação direta por planilha, ERP ou lista rápida de itens.',
    fullDesc: 'Suba sua lista comercial de produtos ou integre com o ERP da sua rede. O sistema aceita códigos EAN, nomes comerciais e tabelas de preços.',
    tag: 'ETAPA 01'
  },
  {
    number: '02',
    title: 'O SISTEMA ORGANIZA O MATERIAL',
    shortDesc: 'Reconhecimento inteligente, categorias e tratamento visual.',
    fullDesc: 'Nossa inteligência comercial categoriza os itens automaticamente, remove o fundo das imagens dos produtos e aplica o layout apropriado.',
    tag: 'ETAPA 02'
  },
  {
    number: '03',
    title: 'A IDENTIDADE DA REDE É APLICADA',
    shortDesc: 'Cores institucionais, tipografia, logos e molduras travadas pela matriz.',
    fullDesc: 'Nenhuma loja quebra o manual de marca. As cores, logos da rede, formatos de selo e fontes são carregados de forma automatizada e protegida.',
    tag: 'ETAPA 03'
  },
  {
    number: '04',
    title: 'A LOJA ADAPTA PREÇOS E OFERTAS',
    shortDesc: 'Autonomia regrada para gerentes ajustarem estoques e preços locais.',
    fullDesc: 'Cada gerente acessa o painel de sua unidade e pode ajustar preços regionais, incluir promoções do dia e alterar vigências sem mexer no design.',
    tag: 'ETAPA 04'
  },
  {
    number: '05',
    title: 'ESCOLHA O FORMATO',
    shortDesc: 'Múltiplos tamanhos gerados automaticamente em um só clique.',
    fullDesc: 'Gere instantaneamente encartes A4 para impressão gráfica, posts 1:1 para feed do Instagram, stories 9:16, lâminas para WhatsApp e displays de TV.',
    tag: 'ETAPA 05'
  },
  {
    number: '06',
    title: 'PUBLIQUE',
    shortDesc: 'Envio simultâneo para impressão gráfica e distribuição digital.',
    fullDesc: 'Com um clique, os arquivos de alta resolução são enviados para gráfica e os materiais digitais ficam disponíveis para download e envio automático.',
    tag: 'ETAPA 06'
  }
];

export const FORMAT_OPTIONS: FormatTypeOption[] = [
  {
    id: 'a4',
    name: 'Encarte A4 Impresso',
    ratio: 'A4',
    dimension: '210 × 297 mm',
    useCase: 'Gráfica / Encarte de Loja',
    iconName: 'Printer'
  },
  {
    id: 'feed',
    name: 'Instagram Feed',
    ratio: '1:1',
    dimension: '1080 × 1080 px',
    useCase: 'Redes Sociais da Loja',
    iconName: 'Instagram'
  },
  {
    id: 'story',
    name: 'Story / WhatsApp Status',
    ratio: '9:16',
    dimension: '1080 × 1920 px',
    useCase: 'Mobile / Stories',
    iconName: 'Smartphone'
  },
  {
    id: 'whatsapp',
    name: 'WhatsApp Lâmina HD',
    ratio: 'PDF / IMG',
    dimension: 'Otimizado HD',
    useCase: 'Listas de Transmissão',
    iconName: 'MessageSquare'
  },
  {
    id: 'tv',
    name: 'TV / Display Digital',
    ratio: '16:9',
    dimension: '1920 × 1080 px',
    useCase: 'Telas da Gôndola / Loja',
    iconName: 'Tv'
  },
  {
    id: 'tag',
    name: 'Etiqueta de Gôndola',
    ratio: 'Etiqueta',
    dimension: '100 × 38 mm',
    useCase: 'Sinalização Interna',
    iconName: 'Tag'
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: "A Sensor Mercado é apenas um site de encartes?",
    answer: "Não. É uma plataforma personalizada para a operação da sua rede, estruturada para conectar matriz e unidades. Trata-se de uma infraestrutura operacional completa para governança de marca, criação automatizada e distribuição de campanhas em massa."
  },
  {
    question: "Cada unidade poderá criar seus próprios materiais?",
    answer: "Sim. A matriz define padrões, molduras, fontes e permissões travadas, enquanto as lojas adaptam produtos, preços e campanhas locais com total velocidade e zero risco de quebrar a identidade visual."
  },
  {
    question: "Serve para redes sociais e impressão?",
    answer: "Sim. A plataforma gera automaticamente materiais em alta resolução para impressão gráfica (A4, tabloides, cartazes de gôndola) e múltiplos formatos digitais (Instagram Feed 1:1, Stories 9:16, WhatsApp HD e TV interna)."
  },
  {
    question: "Existe cobrança mensal?",
    answer: "A proposta comercial é baseada em aquisição da plataforma com acesso vitalício para a sua rede. Não vendemos como SaaS de prateleira ou mensalidade por usuário. Condições, suporte, manutenção e escopo de implementação são formalizados comercialmente para a sua operação."
  },
  {
    question: "A plataforma terá a identidade da minha rede?",
    answer: "Sim. Nome da sua rede, logotipo, paleta oficial de cores, fontes corporativas, selos proprietários e regras de layout são 100% customizados durante o processo de implantação."
  },
  {
    question: "Vocês oferecem suporte e manutenção?",
    answer: "Sim, de acordo com o escopo definido na implantação e na proposta comercial. Garantimos sustentabilidade tecnológica, atualizações de segurança e acompanhamento para o time de marketing da matriz."
  }
];
