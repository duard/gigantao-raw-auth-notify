import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGWNCP', ['nuconferencia', 'codprod'], { unique: true })
@Entity('TGWNCP', { schema: 'SANKHYA' })
export class TgwncpEntity {
  @Column('int', { primary: true, name: 'NUCONFERENCIA' })
  nuconferencia: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('numeric', { name: 'QTDCONFERIDA', precision: 13, scale: 4 })
  qtdconferida: number;

  @Column('char', { name: 'TRATADO', length: 1, default: () => "'N'" })
  tratado: string;
}
