import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFIDPC', ['nuconf', 'seqconf', 'seqid'], { unique: true })
@Entity('TGFIDPC', { schema: 'SANKHYA' })
export class TgfidpcEntity {
  @Column('int', { primary: true, name: 'NUCONF' })
  nuconf: number;

  @Column('int', { primary: true, name: 'SEQID' })
  seqid: number;

  @Column('int', { primary: true, name: 'SEQCONF' })
  seqconf: number;

  @Column('varchar', { name: 'NOME', length: 50 })
  nome: string;

  @Column('varchar', { name: 'IDENTIFICADOR', length: 100 })
  identificador: string;

  @Column('int', { name: 'AGRUPAMENTO', nullable: true })
  agrupamento: number | null;
}
