import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGWRCS', ['nuseparacao', 'nutarefa', 'sequencia'], { unique: true })
@Entity('TGWRCS', { schema: 'SANKHYA' })
export class TgwrcsEntity {
  @Column('int', { primary: true, name: 'NUSEPARACAO' })
  nuseparacao: number;

  @Column('int', { primary: true, name: 'NUTAREFA' })
  nutarefa: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('float', { name: 'QTDCORTE', nullable: true, precision: 53 })
  qtdcorte: number | null;
}
