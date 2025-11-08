import { Column, Entity, Index } from 'typeorm';

@Index('PK_TWFRSLA', ['codprn', 'versao', 'regra'], { unique: true })
@Entity('TWFRSLA', { schema: 'SANKHYA' })
export class TwfrslaEntity {
  @Column('int', { primary: true, name: 'CODPRN' })
  codprn: number;

  @Column('int', { primary: true, name: 'VERSAO' })
  versao: number;

  @Column('int', { primary: true, name: 'REGRA' })
  regra: number;

  @Column('varchar', { name: 'ATIVO', length: 1 })
  ativo: string;

  @Column('varchar', { name: 'NOMEREGRA', length: 100 })
  nomeregra: string;

  @Column('int', { name: 'CARGAHORARIA', nullable: true })
  cargahoraria: number | null;

  @Column('varchar', { name: 'TIPOTEMPO', length: 1 })
  tipotempo: string;

  @Column('float', { name: 'TEMPOLIMITE', precision: 53 })
  tempolimite: number;

  @Column('text', { name: 'CONDICOESESCOLHA', nullable: true })
  condicoesescolha: string | null;

  @Column('text', { name: 'CONDICOESSUSPENSAO', nullable: true })
  condicoessuspensao: string | null;

  @Column('varchar', { name: 'TIPOTEMPOAVISO', nullable: true, length: 1 })
  tipotempoaviso: string | null;
}
