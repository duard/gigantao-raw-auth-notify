import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { TcfoscabEntity } from './tCFOSCAB.entity';
import { TcfservosatoEntity } from './tCFSERVOSATO.entity';

@Index('PK_TCFSERVOS', ['nuos', 'sequencia'], { unique: true })
@Entity('TCFSERVOS', { schema: 'SANKHYA' })
export class TcfservosEntity {
  @Column('int', { primary: true, name: 'NUOS' })
  nuos: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('float', { name: 'QTD', nullable: true, precision: 53 })
  qtd: number | null;

  @Column('float', { name: 'VLRUNIT', nullable: true, precision: 53 })
  vlrunit: number | null;

  @Column('float', { name: 'VLRTOT', nullable: true, precision: 53 })
  vlrtot: number | null;

  @Column('datetime', { name: 'DATAINI', nullable: true })
  dataini: Date | null;

  @Column('datetime', { name: 'DATAFIN', nullable: true })
  datafin: Date | null;

  @Column('float', { name: 'TEMPO', nullable: true, precision: 53 })
  tempo: number | null;

  @Column('varchar', { name: 'STATUS', nullable: true, length: 10 })
  status: string | null;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 1000 })
  observacao: string | null;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('int', { name: 'SEQNOTA', nullable: true })
  seqnota: number | null;

  @Column('int', { name: 'CODPARC', nullable: true })
  codparc: number | null;

  @Column('varchar', { name: 'CONTROLE', nullable: true, length: 100 })
  controle: string | null;

  @Column('char', {
    name: 'AD_EXIBEDASH',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  adExibedash: string | null;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tcfservos)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;

  @ManyToOne(() => TcfoscabEntity, (tcfoscabEntity) => tcfoscabEntity.tcfservos)
  @JoinColumn([{ name: 'NUOS', referencedColumnName: 'nuos' }])
  nuos2: TcfoscabEntity;

  @OneToMany(
    () => TcfservosatoEntity,
    (tcfservosatoEntity) => tcfservosatoEntity.tcfservos,
  )
  tcfservosatoes: TcfservosatoEntity[];
}
