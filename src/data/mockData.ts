import { FAQItem, FormatTypeOption, ProductItem, WorkflowStep } from "@/types";

export const PRODUCTS_BY_SEGMENT: Record<string, ProductItem[]> = {
  supermercado: [
    { 
      id: '1', 
      name: 'Arroz Tipo 1 5kg', 
      category: 'Mercearia', 
      originalPrice: 'R$ 28,90', 
      offerPrice: 'R$ 21,90', 
      unit: 'un', 
      tag: 'Ofertaço',
      imageUrl: 'https://images.unsplash.com/photo-1586201375761-83865001e8ac?auto=format&fit=crop&w=400&q=80' 
    },
    { 
      id: '2', 
      name: 'Feijão Carioca 1kg', 
      category: 'Mercearia', 
      originalPrice: 'R$ 8,50', 
      offerPrice: 'R$ 5,99', 
      unit: 'un', 
      tag: 'Destaque',
      imageUrl: 'https://images.unsplash.com/photo-1551462147-ff29053bfc14?auto=format&fit=crop&w=400&q=80' 
    },
    { 
      id: '3', 
      name: 'Óleo de Soja 900ml', 
      category: 'Mercearia', 
      originalPrice: 'R$ 7,90', 
      offerPrice: 'R$ 5,49', 
      unit: 'un',
      imageUrl: 'https://images.unsplash.com/photo-1474979266404-7eaacbcd87c5?auto=format&fit=crop&w=400&q=80' 
    },
    { 
      id: '4', 
      name: 'Café Torrado e Moído 500g', 
      category: 'Matinais', 
      originalPrice: 'R$ 18,90', 
      offerPrice: 'R$ 14,90', 
      unit: 'un', 
      tag: 'Mais Vendido',
      imageUrl: 'https://images.unsplash.com/photo-1559056199-641a0ac8b55e?auto=format&fit=crop&w=400&q=80' 
    },
    { 
      id: '5', 
      name: 'Leite Integral 1L', 
      category: 'Laticínios', 
      originalPrice: 'R$ 5,49', 
      offerPrice: 'R$ 4,19', 
      unit: 'un',
      imageUrl: 'https://images.unsplash.com/photo-1563636619-e9143da7973b?auto=format&fit=crop&w=400&q=80' 
    },
    { 
      id: '6', 
      name: 'Detergente Líquido 500ml', 
      category: 'Limpeza', 
      originalPrice: 'R$ 2,99', 
      offerPrice: 'R$ 1,99', 
      unit: 'un',
      imageUrl: 'https://images.unsplash.com/photo-1585842378054-ee2e52f94ba2?auto=format&fit=crop&w=400&q=80' 
    },
  ],
  hortifruti: [
    { 
      id: '7', 
      name: 'Maçã Gala Selecionada', 
      category: 'Frutas', 
      originalPrice: 'R$ 9,90', 
      offerPrice: 'R$ 6,99', 
      unit: 'kg', 
      tag: 'Fresquinho',
      imageUrl: 'https://images.unsplash.com/photo-1560806887-1e4cd0b6cbd6?auto=format&fit=crop&w=400&q=80' 
    },
    { 
      id: '8', 
      name: 'Banana Prata Extra', 
      category: 'Frutas', 
      originalPrice: 'R$ 6,50', 
      offerPrice: 'R$ 3,99', 
      unit: 'kg',
      imageUrl: 'https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?auto=format&fit=crop&w=400&q=80' 
    },
    { 
      id: '9', 
      name: 'Tomate Italiano Especial', 
      category: 'Legumes', 
      originalPrice: 'R$ 8,90', 
      offerPrice: 'R$ 5,49', 
      unit: 'kg', 
      tag: 'Super Preço',
      imageUrl: 'https://images.unsplash.com/photo-1592924357228-91a4daadcfea?auto=format&fit=crop&w=400&q=80' 
    },
    { 
      id: '10', 
      name: 'Batata Monalisa kg', 
      category: 'Legumes', 
      originalPrice: 'R$ 6,90', 
      offerPrice: 'R$ 3,89', 
      unit: 'kg',
      imageUrl: 'https://images.unsplash.com/photo-1518977676601-b53f82aba655?auto=format&fit=crop&w=400&q=80' 
    },
    { 
      id: '11', 
      name: 'Cenoura Especial kg', 
      category: 'Legumes', 
      originalPrice: 'R$ 5,50', 
      offerPrice: 'R$ 3,29', 
      unit: 'kg',
      imageUrl: 'https://images.unsplash.com/photo-1598170845058-12ef4a457939?auto=format&fit=crop&w=400&q=80' 
    },
    { 
      id: '12', 
      name: 'Alface Americana Hidropônica', 
      category: 'Verduras', 
      originalPrice: 'R$ 4,50', 
      offerPrice: 'R$ 2,99', 
      unit: 'un',
      imageUrl: 'https://images.unsplash.com/photo-1622206151226-18ca2c9ab4a1?auto=format&fit=crop&w=400&q=80' 
    },
  ],
  acougue: [
    { 
      id: '13', 
      name: 'Picanha Bovina Grill kg', 
      category: 'Carnes Nobres', 
      originalPrice: 'R$ 79,90', 
      offerPrice: 'R$ 59,90', 
      unit: 'kg', 
      tag: 'Qualidade Premium',
      imageUrl: 'https://images.unsplash.com/photo-1558030006-450675393462?auto=format&fit=crop&w=400&q=80' 
    },
    { 
      id: '14', 
      name: 'Alcatra em Bife kg', 
      category: 'Bovinos', 
      originalPrice: 'R$ 44,90', 
      offerPrice: 'R$ 34,90', 
      unit: 'kg',
      imageUrl: 'https://images.unsplash.com/photo-1603048588665-791ca8aea617?auto=format&fit=crop&w=400&q=80' 
    },
    { 
      id: '15', 
      name: 'Peito de Frango Resfriado kg', 
      category: 'Aves', 
      originalPrice: 'R$ 18,90', 
      offerPrice: 'R$ 12,90', 
      unit: 'kg', 
      tag: 'Ofertaço',
      imageUrl: 'https://images.unsplash.com/photo-1604503468506-a8da13d82791?auto=format&fit=crop&w=400&q=80' 
    },
    { 
      id: '16', 
      name: 'Linguiça Toscana Especial kg', 
      category: 'Linguiças', 
      originalPrice: 'R$ 22,90', 
      offerPrice: 'R$ 16,90', 
      unit: 'kg',
      imageUrl: 'https://images.unsplash.com/photo-1529692236671-f1f6cf9683ba?auto=format&fit=crop&w=400&q=80' 
    },
    { 
      id: '17', 
      name: 'Costela Bovina Ripa kg', 
      category: 'Bovinos', 
      originalPrice: 'R$ 29,90', 
      offerPrice: 'R$ 21,90', 
      unit: 'kg',
      imageUrl: 'https://images.unsplash.com/photo-1544025162-d76694265947?auto=format&fit=crop&w=400&q=80' 
    },
    { 
      id: '18', 
      name: 'Cupim Bovino Selecionado kg', 
      category: 'Churrasco', 
      originalPrice: 'R$ 36,90', 
      offerPrice: 'R$ 27,90', 
      unit: 'kg',
      imageUrl: 'https://images.unsplash.com/photo-1565299585323-38d6b0865b47?auto=format&fit=crop&w=400&q=80' 
    },
  ],
  padaria: [
    { 
      id: '19', 
      name: 'Pão Francês Quentinho kg', 
      category: 'Pães', 
      originalPrice: 'R$ 16,90', 
      offerPrice: 'R$ 11,90', 
      unit: 'kg', 
      tag: 'Fornada Toda Hora',
      imageUrl: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?auto=format&fit=crop&w=400&q=80' 
    },
    { 
      id: '20', 
      name: 'Pão de Queijo Mineiro kg', 
      category: 'Salgados', 
      originalPrice: 'R$ 34,90', 
      offerPrice: 'R$ 24,90', 
      unit: 'kg',
      imageUrl: 'https://images.unsplash.com/photo-1598142982901-df6efc8b8dd7?auto=format&fit=crop&w=400&q=80' 
    },
    { 
      id: '21', 
      name: 'Bolo de Cenoura c/ Cobertura', 
      category: 'Confeitaria', 
      originalPrice: 'R$ 19,90', 
      offerPrice: 'R$ 14,90', 
      unit: 'un', 
      tag: 'Artesanal',
      imageUrl: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=400&q=80' 
    },
    { 
      id: '22', 
      name: 'Croissant Misto Presunto e Queijo', 
      category: 'Salgados', 
      originalPrice: 'R$ 9,50', 
      offerPrice: 'R$ 6,90', 
      unit: 'un',
      imageUrl: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=400&q=80' 
    },
    { 
      id: '23', 
      name: 'Torrada Tradicional 160g', 
      category: 'Matinais', 
      originalPrice: 'R$ 6,90', 
      offerPrice: 'R$ 4,50', 
      unit: 'un',
      imageUrl: 'https://images.unsplash.com/photo-1584776296944-ab6fb57b0bdd?auto=format&fit=crop&w=400&q=80' 
    },
    { 
      id: '24', 
      name: 'Sonho de Creme de Baunilha', 
      category: 'Doces', 
      originalPrice: 'R$ 5,00', 
      offerPrice: 'R$ 3,49', 
      unit: 'un',
      imageUrl: 'https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=400&q=80' 
    },
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
    number: '1',
    title: '1. A gente monta com a sua cara',
    shortDesc: 'Nome, logo e cores da sua rede dentro da plataforma.',
    fullDesc: 'Personalizamos 100% da plataforma com a sua marca oficial, cores e fontes da sua rede de supermercados.',
    tag: 'ETAPA 01'
  },
  {
    number: '2',
    title: '2. Você define o padrão',
    shortDesc: 'O modelo pronto que todas as suas lojas vão usar.',
    fullDesc: 'A matriz cria os modelos aprovados e travados, garantindo alinhamento total de comunicação.',
    tag: 'ETAPA 02'
  },
  {
    number: '3',
    title: '3. Cada loja ajusta o que é local',
    shortDesc: 'Produto, preço e oferta da região, sem fugir do padrão.',
    fullDesc: 'As lojas ganham autonomia para ajustar ofertas e preços regionais de forma rápida e intuitiva.',
    tag: 'ETAPA 03'
  },
  {
    number: '4',
    title: '4. Sai pronto pra postar e imprimir',
    shortDesc: 'Encarte pronto pras redes sociais e pra gráfica.',
    fullDesc: 'Com um clique, os encartes são gerados para Instagram, Stories, WhatsApp e arquivo em alta para impressão.',
    tag: 'ETAPA 04'
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
    question: "É só um site de encarte?",
    answer: "Não. É uma plataforma da sua rede, com a sua marca, pra todas as suas lojas."
  },
  {
    question: "Cada loja pode criar o próprio material?",
    answer: "Pode. Você define o padrão e a loja ajusta preço e oferta da região."
  },
  {
    question: "Serve pra rede social e pra impressão?",
    answer: "Serve. Cria, publica e gera o arquivo pronto pra gráfica."
  },
  {
    question: "Tem mensalidade?",
    answer: "Não é o modelo. É uma aquisição única. Suporte e manutenção ficam definidos no contrato."
  },
  {
    question: "A plataforma fica com a minha marca?",
    answer: "Fica. Nome, logo e cores são da sua rede."
  },
  {
    question: "Tem suporte?",
    answer: "Tem, e acessível. Você fala com gente de verdade, conforme combinado no contrato."
  }
];
