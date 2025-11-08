import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFMDECD', ['nsu'], { unique: true })
@Entity('TGFMDECD', { schema: 'SANKHYA' })
export class TgfmdecdEntity {
  @Column('varchar', { primary: true, name: 'NSU', length: 15 })
  nsu: string;

  @Column('varchar', { name: 'CHAVEACESSO', nullable: true, length: 44 })
  chaveacesso: string | null;

  @Column('datetime', { name: 'DTCONSULTA', nullable: true })
  dtconsulta: Date | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;
}
