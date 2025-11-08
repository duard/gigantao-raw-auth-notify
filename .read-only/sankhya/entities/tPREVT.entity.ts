import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToOne,
} from 'typeorm';
import { TprefxEntity } from './tPREFX.entity';
import { TprrpaEntity } from './tPRRPA.entity';

@Index('PK_TPREVT', ['idefx'], { unique: true })
@Entity('TPREVT', { schema: 'SANKHYA' })
export class TprevtEntity {
  @Column('int', { primary: true, name: 'IDEFX' })
  idefx: number;

  @Column('int', { name: 'IDEFXANEXADO', nullable: true })
  idefxanexado: number | null;

  @Column('char', { name: 'INTERROMPE', length: 1, default: () => "'N'" })
  interrompe: string;

  @Column('int', { name: 'IDENTIFICADOR', nullable: true })
  identificador: number | null;

  @OneToOne(() => TprefxEntity, (tprefxEntity) => tprefxEntity.tprevt, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'IDEFX', referencedColumnName: 'idefx' }])
  idefx2: TprefxEntity;

  @ManyToOne(() => TprrpaEntity, (tprrpaEntity) => tprrpaEntity.tprevts)
  @JoinColumn([{ name: 'IDRPAINICIALIZA', referencedColumnName: 'idrpa' }])
  idrpainicializa: TprrpaEntity;
}
