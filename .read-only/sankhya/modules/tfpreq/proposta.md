```ts
// Tipos básicos para valores de origem e status
export type ReqStatus = -2 | 0 | 1 | 2 | 3 | number;
export type OrigemTipo = 'R' | 'V' | 'S' | 'G' | 'D' | 'E' | 'T' | 'C' | 'F' | string;

// Tradução dos status
export const StatusLabels: Record<ReqStatus, string> = {
  [-2]: "CANCELADO",
  [0]: "AGUARDANDO AÇÃO",
  [1]: "AGUARDANDO AÇÃO",
  [2]: "APROVADO",
  [3]: "REJEITADO",
} as const;

export function getStatusLabel(status: ReqStatus): string {
  return StatusLabels[status] ?? `${status} STATUS DESCONHECIDO`;
}

// Ordenação por status
export const StatusOrdenacao: Record<ReqStatus, number> = {
  [-2]: 140,
  [0]: 100,
  [1]: 99,
  [2]: 500,
  [3]: 120,
} as const;

export function getOrdenacao(status: ReqStatus): number {
  return StatusOrdenacao[status] ?? 215;
}

// Tradução da origem
export const OrigemLabels: Record<OrigemTipo, string> = {
  R: "RESCISÃO",
  V: "FÉRIAS",
  S: "ALTERAÇÃO CARGO/SALARIO",
  G: "ALTERAÇÃO CARGA HORÁRIA",
  D: "DÉCIMO TERCEIRO",
  E: "ALTERAÇÃO ENDEREÇO",
  T: "TRANSFERÊNCIA DE EMPRESA",
  C: "ALTERAÇÃO DE DADOS CADASTRAIS",
  F: "AFASTAMENTO",
} as const;

export function getOrigemLabel(origem: OrigemTipo): string {
  return OrigemLabels[origem] ?? "ORIGEM DESCONHECIDA";
}

// Cores (background e foreground)
export function getColors(status: ReqStatus, diasRestantes: number) {
  let bkColor = "#008bff";
  let fgColor = "#FFFFFF";

  if ([2, 3, -2].includes(status)) {
    bkColor = "#FFFFFF";
    fgColor = "#000000";
  } else if (diasRestantes <= 0) {
    bkColor = diasRestantes === 0 ? "#FF0000" : "#000000";
  } else if (diasRestantes <= 3) {
    bkColor = "#FFA500";
  }

  return { bkColor, fgColor };
}

// Interface tipada para a requisição
export interface Requisicao {
  id: number;
  dtCriacao: Date;
  dtLimite: Date;
  status: ReqStatus;
  ordenacao: number;
  statusLabel: string;
  diasRestantes: number;
  origemTipo: OrigemTipo;
  origemLabel: string;
  codEmp: number;
  nomeFantasia: string;
  codFunc: number;
  nomeFunc: string;
  cpf: string;
  descCargo: string;
  solicitante: string;
  observacao: string | null;
  bkColor: string;
  fgColor: string;
}

// Exemplo de uso
const req: Requisicao = {
  id: 1,
  dtCriacao: new Date("2025-08-01"),
  dtLimite: new Date("2025-08-21"),
  status: 1,
  ordenacao: getOrdenacao(1),
  statusLabel: getStatusLabel(1),
  diasRestantes: 5,
  origemTipo: "V",
  origemLabel: getOrigemLabel("V"),
  codEmp: 10,
  nomeFantasia: "EMPRESA TESTE",
  codFunc: 123,
  nomeFunc: "JOÃO SILVA",
  cpf: "123.456.789-00",
  descCargo: "ANALISTA",
  solicitante: "000001 - Maria",
  observacao: "Teste de observação",
  ...getColors(1, 5),
};
```
