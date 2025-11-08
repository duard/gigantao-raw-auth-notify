import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFXPRC', ['codprod', 'nutab'], { unique: true })
@Entity('TFXPRC', { schema: 'SANKHYA' })
export class TfxprcEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('int', { primary: true, name: 'NUTAB' })
  nutab: number;

  @Column('float', { name: 'VLRVENDA', precision: 53 })
  vlrvenda: number;

  @Column('int', { name: 'NUVERSAO', nullable: true })
  nuversao: number | null;

  @Column('datetime', { name: 'DATAVIGOR', nullable: true })
  datavigor: Date | null;

  @Column('smallint', { name: 'CODTAB', nullable: true })
  codtab: number | null;
}
