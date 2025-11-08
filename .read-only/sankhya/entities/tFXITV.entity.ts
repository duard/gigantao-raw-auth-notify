import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFXITV', ['seq'], { unique: true })
@Entity('TFXITV', { schema: 'SANKHYA' })
export class TfxitvEntity {
  @Column('int', { primary: true, name: 'SEQ' })
  seq: number;

  @Column('varchar', { name: 'TABELA', length: 100 })
  tabela: string;

  @Column('int', { name: 'PDV' })
  pdv: number;

  @Column('int', { name: 'CODSTATUS' })
  codstatus: number;

  @Column('varchar', { name: 'STATUS', nullable: true, length: 3103 })
  status: string | null;

  @Column('text', { name: 'DADOS', nullable: true })
  dados: string | null;

  @Column('datetime', { name: 'DTINCLUSAO', nullable: true })
  dtinclusao: Date | null;

  @Column('datetime', { name: 'DTALTER', nullable: true })
  dtalter: Date | null;

  @Column('int', { name: 'NUVERSAO', nullable: true })
  nuversao: number | null;

  @Column('int', { name: 'PROCESSORDER', nullable: true })
  processorder: number | null;
}
