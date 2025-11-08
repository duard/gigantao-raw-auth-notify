import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfempEntity } from './tGFEMP.entity';

@Index('PK_TGFGIM', ['codemp', 'dtref'], { unique: true })
@Entity('TGFGIM', { schema: 'SANKHYA' })
export class TgfgimEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', { name: 'NUMRECIBO', nullable: true, length: 32 })
  numrecibo: string | null;

  @Column('smallint', { name: 'CODSITUACAO', default: () => '(0)' })
  codsituacao: number;

  @Column('datetime', { name: 'DHSITUACAO', nullable: true })
  dhsituacao: Date | null;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfgims)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;
}
