import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFTTF', ['hostname', 'codmaq', 'ordem'], { unique: true })
@Entity('TGFTTF', { schema: 'SANKHYA' })
export class TgfttfEntity {
  @Column('int', { primary: true, name: 'CODMAQ' })
  codmaq: number;

  @Column('smallint', { primary: true, name: 'ORDEM' })
  ordem: number;

  @Column('varchar', { name: 'NOMEREDE', length: 100 })
  nomerede: string;

  @Column('varchar', { name: 'NROTRANSACAO', length: 50 })
  nrotransacao: string;

  @Column('varchar', { name: 'DATATRANSACAO', length: 50 })
  datatransacao: string;

  @Column('varchar', { name: 'HORATRANSACAO', length: 50 })
  horatransacao: string;

  @Column('varchar', { name: 'AUTORIZACAO', length: 50 })
  autorizacao: string;

  @Column('varchar', { name: 'NRODOC', length: 50 })
  nrodoc: string;

  @Column('float', { name: 'VLRPAGO', precision: 53 })
  vlrpago: number;

  @Column('varchar', { primary: true, name: 'HOSTNAME', length: 100 })
  hostname: string;
}
