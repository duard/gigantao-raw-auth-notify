import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm';
import { TprefxEntity } from './tPREFX.entity';

@Index('PK_TPRTFX', ['idefx'], { unique: true })
@Index('TPRTFX_I01', ['idefxorig', 'idefxdest'], { unique: true })
@Entity('TPRTFX', { schema: 'SANKHYA' })
export class TprtfxEntity {
  @Column('int', { primary: true, name: 'IDEFX' })
  idefx: number;

  @Column('int', { name: 'IDEFXORIG' })
  idefxorig: number;

  @Column('int', { name: 'IDEFXDEST' })
  idefxdest: number;

  @Column('char', { name: 'PADRAO', length: 1, default: () => "'N'" })
  padrao: string;

  @Column('int', { name: 'EXPCONDICAO', nullable: true })
  expcondicao: number | null;

  @Column('char', { name: 'DEFSTATUSEXEC', length: 1, default: () => "'N'" })
  defstatusexec: string;

  @Column('int', { name: 'ORDEMAVAL', nullable: true })
  ordemaval: number | null;

  @Column('char', { name: 'PRIORITARIO', length: 1, default: () => "'N'" })
  prioritario: string;

  @OneToOne(() => TprefxEntity, (tprefxEntity) => tprefxEntity.tprtfx, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'IDEFX', referencedColumnName: 'idefx' }])
  idefx2: TprefxEntity;
}
