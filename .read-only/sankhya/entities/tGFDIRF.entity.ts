import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfempEntity } from './tGFEMP.entity';

@Index('PK_TGFDIRF', ['codemp', 'dtinicial', 'dtfinal'], { unique: true })
@Entity('TGFDIRF', { schema: 'SANKHYA' })
export class TgfdirfEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTINICIAL' })
  dtinicial: Date;

  @Column('datetime', { primary: true, name: 'DTFINAL' })
  dtfinal: Date;

  @Column('char', { name: 'ARQCONFIRMADO', length: 1, default: () => "'N'" })
  arqconfirmado: string;

  @Column('char', { name: 'TIPDECLARACAO', length: 1, default: () => "'N'" })
  tipdeclaracao: string;

  @Column('varchar', { name: 'NUMRECIBO', nullable: true, length: 12 })
  numrecibo: string | null;

  @Column('varchar', { name: 'IDESTLEIAUTE', nullable: true, length: 7 })
  idestleiaute: string | null;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfdirfs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;
}
