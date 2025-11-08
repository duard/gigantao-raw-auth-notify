import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpdepEntity } from './tFPDEP.entity';
import { TfpempEntity } from './tFPEMP.entity';

@Index('PK_TFPVPJ', ['codvpj', 'codemp'], { unique: true })
@Entity('TFPVPJ', { schema: 'SANKHYA' })
export class TfpvpjEntity {
  @Column('int', { primary: true, name: 'CODVPJ' })
  codvpj: number;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('varchar', { name: 'NOME', length: 100 })
  nome: string;

  @Column('int', { name: 'CODUSU' })
  codusu: number;

  @Column('varchar', { name: 'CPF', length: 11 })
  cpf: string;

  @Column('varchar', { name: 'CNPJ', nullable: true, length: 14 })
  cnpj: string | null;

  @Column('varchar', { name: 'SEXO', nullable: true, length: 1 })
  sexo: string | null;

  @Column('varchar', { name: 'EMAIL', nullable: true, length: 80 })
  email: string | null;

  @Column('varchar', { name: 'TELEFONE', nullable: true, length: 13 })
  telefone: string | null;

  @Column('datetime', { name: 'DTNASC', nullable: true })
  dtnasc: Date | null;

  @Column('datetime', { name: 'DTINICIO' })
  dtinicio: Date;

  @Column('datetime', { name: 'DTFIM', nullable: true })
  dtfim: Date | null;

  @Column('text', { name: 'OBSERVACAO', nullable: true })
  observacao: string | null;

  @Column('int', { name: 'MODIFPOR' })
  modifpor: number;

  @Column('datetime', {
    name: 'DHALTER',
    nullable: true,
    default: () => 'getdate()',
  })
  dhalter: Date | null;

  @Column('image', { name: 'IMAGEM', nullable: true })
  imagem: Buffer | null;

  @Column('char', {
    name: 'PERTENCEDP',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  pertencedp: string | null;

  @ManyToOne(() => TfpdepEntity, (tfpdepEntity) => tfpdepEntity.tfpvpjs)
  @JoinColumn([{ name: 'CODDEP', referencedColumnName: 'coddep' }])
  coddep: TfpdepEntity;

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.tfpvpjs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TfpempEntity;
}
