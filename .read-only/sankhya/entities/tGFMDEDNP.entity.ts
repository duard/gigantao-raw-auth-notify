import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFMDEDNP', ['chaveacesso', 'codemp'], { unique: true })
@Entity('TGFMDEDNP', { schema: 'SANKHYA' })
export class TgfmdednpEntity {
  @Column('varchar', { primary: true, name: 'CHAVEACESSO', length: 44 })
  chaveacesso: string;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('smallint', { name: 'TPDOC', nullable: true })
  tpdoc: number | null;

  @Column('text', { name: 'XMLEVENTO', nullable: true })
  xmlevento: string | null;

  @Column('varchar', { name: 'MSGERRO', nullable: true, length: 3103 })
  msgerro: string | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;
}
