import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGWSXP', ['nuseparacao', 'codemp', 'ordemcarga'], { unique: true })
@Entity('TGWSXP', { schema: 'SANKHYA' })
export class TgwsxpEntity {
  @Column('int', { primary: true, name: 'NUSEPARACAO' })
  nuseparacao: number;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'ORDEMCARGA' })
  ordemcarga: number;
}
