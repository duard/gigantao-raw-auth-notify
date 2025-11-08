import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSIMASANO', ['codmasano'], { unique: true })
@Entity('TSIMASANO', { schema: 'SANKHYA' })
export class TsimasanoEntity {
  @Column('smallint', { primary: true, name: 'CODMASANO' })
  codmasano: number;

  @Column('varchar', { name: 'DESCMASC', length: 100 })
  descmasc: string;

  @Column('varchar', { name: 'TIPOCAMPO', length: 1 })
  tipocampo: string;

  @Column('datetime', { name: 'DTCRIAC' })
  dtcriac: Date;

  @Column('datetime', { name: 'DTALTER', nullable: true })
  dtalter: Date | null;

  @Column('varchar', { name: 'CHAVEMASC', nullable: true, length: 25 })
  chavemasc: string | null;

  @Column('varchar', { name: 'APLICAFUNC', nullable: true, length: 150 })
  aplicafunc: string | null;

  @Column('smallint', { name: 'CODUSUCRIAC' })
  codusucriac: number;

  @Column('smallint', { name: 'CODUSUALTER', nullable: true })
  codusualter: number | null;
}
