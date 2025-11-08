import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGWFATAUTO', ['codemp'], { unique: true })
@Entity('TGWFATAUTO', { schema: 'SANKHYA' })
export class TgwfatautoEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('char', { name: 'ATIVO', nullable: true, length: 1 })
  ativo: string | null;

  @Column('varchar', { name: 'SERIENOTA', nullable: true, length: 3 })
  serienota: string | null;

  @Column('varchar', { name: 'SITUACAO', nullable: true, length: 15 })
  situacao: string | null;

  @Column('datetime', { name: 'DTULTFATCONFSEP', nullable: true })
  dtultfatconfsep: Date | null;

  @Column('char', { name: 'ENVNOTAFAT', nullable: true, length: 1 })
  envnotafat: string | null;

  @Column('char', { name: 'ENVPEDNAOFAT', nullable: true, length: 1 })
  envpednaofat: string | null;

  @Column('varchar', { name: 'EMAIL', nullable: true, length: 255 })
  email: string | null;

  @Column('text', { name: 'FILTROFATAUTO', nullable: true })
  filtrofatauto: string | null;
}
