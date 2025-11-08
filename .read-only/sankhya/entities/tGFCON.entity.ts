import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfcbcEntity } from './tGFCBC.entity';
import { TgfcabEntity } from './tGFCAB.entity';

@Index('PK_TGFCON', ['nuconf', 'sequencia'], { unique: true })
@Index('TGFCON_I01', ['nuconf', 'codbarra', 'controle'], {})
@Entity('TGFCON', { schema: 'SANKHYA' })
export class TgfconEntity {
  @Column('int', { primary: true, name: 'NUCONF' })
  nuconf: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'CODBARRA', nullable: true, length: 25 })
  codbarra: string | null;

  @Column('float', { name: 'QTD', nullable: true, precision: 53 })
  qtd: number | null;

  @Column('smallint', { name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @Column('int', { name: 'CODPROD', nullable: true })
  codprod: number | null;

  @Column('varchar', { name: 'CONTROLE', length: 11, default: () => "' '" })
  controle: string;

  @Column('datetime', { name: 'DTVAL', nullable: true })
  dtval: Date | null;

  @Column('datetime', { name: 'DTFABRICACAO', nullable: true })
  dtfabricacao: Date | null;

  @Column('datetime', { name: 'DHCONF', nullable: true })
  dhconf: Date | null;

  @Column('char', { name: 'TIPOCONF', length: 1, default: () => "'B'" })
  tipoconf: string;

  @Column('varchar', { name: 'CODVOL', nullable: true, length: 2 })
  codvol: string | null;

  @OneToMany(() => TgfcbcEntity, (tgfcbcEntity) => tgfcbcEntity.tgfcon)
  tgfcbcs: TgfcbcEntity[];

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfcons)
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota: TgfcabEntity;
}
