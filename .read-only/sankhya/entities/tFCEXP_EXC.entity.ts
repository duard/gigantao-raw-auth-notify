import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFCEXP_EXC', ['nucurriculo', 'sequencia', 'dhexclusao'], {
  unique: true,
})
@Entity('TFCEXP_EXC', { schema: 'SANKHYA' })
export class TfcexpExcEntity {
  @Column('datetime', { primary: true, name: 'DHEXCLUSAO' })
  dhexclusao: Date;

  @Column('int', { primary: true, name: 'NUCURRICULO' })
  nucurriculo: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('char', { name: 'NOMEEMPRESA', length: 200 })
  nomeempresa: string;

  @Column('char', { name: 'TIPOEMPRESA', length: 1 })
  tipoempresa: string;

  @Column('char', { name: 'TIPOEND', nullable: true, length: 3 })
  tipoend: string | null;

  @Column('char', { name: 'NOMEEND', nullable: true, length: 80 })
  nomeend: string | null;

  @Column('char', { name: 'NUMEND', nullable: true, length: 6 })
  numend: string | null;

  @Column('char', { name: 'COMPLEND', nullable: true, length: 30 })
  complend: string | null;

  @Column('char', { name: 'BAIRRO', nullable: true, length: 45 })
  bairro: string | null;

  @Column('char', { name: 'CIDADE', nullable: true, length: 45 })
  cidade: string | null;

  @Column('char', { name: 'UF', nullable: true, length: 2 })
  uf: string | null;

  @Column('char', { name: 'CEP', nullable: true, length: 8 })
  cep: string | null;

  @Column('char', { name: 'EMAIL', nullable: true, length: 200 })
  email: string | null;

  @Column('varchar', { name: 'TELEFONE', nullable: true, length: 13 })
  telefone: string | null;

  @Column('datetime', { name: 'DATADM' })
  datadm: Date;

  @Column('datetime', { name: 'DATDEM', nullable: true })
  datdem: Date | null;

  @Column('char', { name: 'ULTCARGOOCUPADO', length: 45 })
  ultcargoocupado: string;

  @Column('text', { name: 'DESCRATIVIDADES' })
  descratividades: string;

  @Column('float', {
    name: 'FAIXASALARIALINICIAL',
    nullable: true,
    precision: 53,
  })
  faixasalarialinicial: number | null;

  @Column('float', {
    name: 'FAIXASALARIALFINAL',
    nullable: true,
    precision: 53,
  })
  faixasalarialfinal: number | null;

  @Column('money', { name: 'ULTSALARIO', nullable: true })
  ultsalario: number | null;
}
