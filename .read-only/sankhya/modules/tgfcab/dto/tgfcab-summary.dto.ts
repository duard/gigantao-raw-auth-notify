import { ApiProperty } from '@nestjs/swagger';
import { TsiusuResponseDto } from '../../../shared/dto/tsiusu.response.dto';
import { TgftopResponseDto } from './tgftop-response.dto';
import { TgfparResponseDto } from '../../tgfpar/dto/tgfpar-response.dto';
import { TgfiteResponseDto } from '../../tgfite/dto/tgfite-response.dto';
import { TgflibResponseDto } from '../../tgflib/dto/tgflib-response.dto';
import { TsicidResponseDto } from '../../tsicid/dto/tsicid-response.dto';

export class TgfcabSummaryDto {
  @ApiProperty({ description: 'Número único da nota' })
  nunota: number;

  @ApiProperty({ description: 'Código da empresa' })
  codemp: number;

  @ApiProperty({ description: 'Número da nota' })
  numnota: number;

  @ApiProperty({ description: 'Série da nota' })
  serienota: string | null;

  @ApiProperty({ description: 'Data de negociação' })
  dtneg: Date;

  @ApiProperty({ description: 'Data de faturamento' })
  dtfatur: Date | null;

  @ApiProperty({ description: 'Data de entrada/saída' })
  dtentsai: Date | null;

  @ApiProperty({
    description:
      'Tipo de movimento (C=Compra, V=Venda, O=Orçamento, Q=Requisição)',
  })
  tipmov: string | null;

  @ApiProperty({
    description: 'Status da nota (A=Aberta, L=Liberada, P=Pendente)',
  })
  statusnota: string | null;

  @ApiProperty({ description: 'Valor da nota' })
  vlrnota: number | null;

  @ApiProperty({ description: 'Valor do frete' })
  vlrfrete: number | null;

  @ApiProperty({ description: 'Peso da nota' })
  peso: number | null;

  @ApiProperty({ description: 'Chave da NFe' })
  chavenfe: string | null;

  @ApiProperty({ description: 'Número da cotação' })
  numcotacao: number | null;

  @ApiProperty({ description: 'Código do parceiro' })
  codparc: number;

  @ApiProperty({
    type: () => TgfparResponseDto,
    nullable: true,
    description: 'Dados do parceiro',
  })
  tgfpar: TgfparResponseDto | null;

  @ApiProperty({ description: 'Código do parceiro remetente' })
  codparcremetente: number;

  @ApiProperty({
    type: () => TgfparResponseDto,
    nullable: true,
    description: 'Dados do parceiro remetente',
  })
  tgfparRemetente: TgfparResponseDto | null;

  @ApiProperty({
    type: () => TsiusuResponseDto,
    nullable: true,
    description: 'Dados do usuário',
  })
  codusu2: TsiusuResponseDto | null;

  @ApiProperty({
    type: () => TgftopResponseDto,
    nullable: true,
    description: 'Dados do tipo de operação',
  })
  tgftop: TgftopResponseDto | null;

  @ApiProperty({
    type: () => [TgfiteResponseDto],
    description: 'Itens da nota',
  })
  tgfites: TgfiteResponseDto[];

  @ApiProperty({
    type: () => [TgflibResponseDto],
    description: 'Liberações da nota',
  })
  tgflibs: TgflibResponseDto[];

  @ApiProperty({ description: 'Código da cidade de origem' })
  codcidorigem: number | null;

  @ApiProperty({
    type: () => TsicidResponseDto,
    nullable: true,
    description: 'Dados da cidade de origem',
  })
  cidadeOrigem: TsicidResponseDto | null;

  @ApiProperty({ description: 'Código da cidade de destino' })
  codciddestino: number | null;

  @ApiProperty({
    type: () => TsicidResponseDto,
    nullable: true,
    description: 'Dados da cidade de destino',
  })
  cidadeDestino: TsicidResponseDto | null;

  @ApiProperty({
    type: () => TgfcabSummaryDto,
    nullable: true,
    description: 'Dados da nota de compra',
  })
  adNunotapedcompra: TgfcabSummaryDto | null;

  @ApiProperty({ description: 'Observação da nota' })
  observacao: string | null;

  @ApiProperty({ description: 'Status de pendência (S=Sim, N=Não)' })
  pendente: string | null;

  @ApiProperty({ description: 'Status de aprovação (S=Sim, N=Não)' })
  aprovado: string | null;

  @ApiProperty({ description: 'Status de cancelamento (S=Sim, N=Não)' })
  cancelado: string | null;

  @ApiProperty({ description: 'Número do pedido' })
  numpedido: number | null;

  @ApiProperty({ description: 'Número do pedido 2' })
  numpedido2: string | null;

  @ApiProperty({ description: 'Código da transportadora' })
  codparctransp: number;

  @ApiProperty({
    type: () => TgfparResponseDto,
    nullable: true,
    description: 'Dados da transportadora',
  })
  tgfparTransp: TgfparResponseDto | null;

  @ApiProperty({ description: 'Código do motorista' })
  codmotorista: number | null;

  @ApiProperty({
    type: () => TgfparResponseDto,
    nullable: true,
    description: 'Dados do motorista',
  })
  tgfparMotorista: TgfparResponseDto | null;

  @ApiProperty({ description: 'Código do veículo' })
  codveiculo: number | null;

  @ApiProperty({ description: 'Placa do veículo' })
  placa: string | null;

  @ApiProperty({ description: 'KM do veículo' })
  kmveiculo: number | null;

  @ApiProperty({ description: 'Peso bruto' })
  pesobruto: number | null;

  @ApiProperty({ description: 'Quantidade de volumes' })
  qtdvol: number | null;

  @ApiProperty({ description: 'Volume' })
  volume: string | null;

  @ApiProperty({ description: 'Custo total dos produtos' })
  totalcustoprod: number | null;

  @ApiProperty({ description: 'Custo total dos serviços' })
  totalcustoserv: number | null;
}
