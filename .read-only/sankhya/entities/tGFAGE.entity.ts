import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgflocEntity } from './tGFLOC.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TcseqpEntity } from './tCSEQP.entity';
import { TgftipEntity } from './tGFTIP.entity';
import { TgfmeqEntity } from './tGFMEQ.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TgfcabEntity } from './tGFCAB.entity';
import { TgfhorEntity } from './tGFHOR.entity';

@Index('PK_TGFAGE', ['codagenda'], { unique: true })
@Index('TGFAGE_I01', ['nuequipe', 'concluido', 'codagenda'], {})
@Index('TGFAGE_I02', ['codlocal', 'concluido', 'codagenda'], {})
@Index('TGFAGE_I03', ['numeq', 'codservico', 'codagenda'], {})
@Entity('TGFAGE', { schema: 'SANKHYA' })
export class TgfageEntity {
  @Column('int', { primary: true, name: 'CODAGENDA' })
  codagenda: number;

  @Column('int', { name: 'NUMEQ' })
  numeq: number;

  @Column('int', { name: 'CODSERVICO' })
  codservico: number;

  @Column('int', { name: 'NUEQUIPE' })
  nuequipe: number;

  @Column('int', { name: 'CODLOCAL' })
  codlocal: number;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 250 })
  observacao: string | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('varchar', { name: 'OBSEXEC', nullable: true, length: 150 })
  obsexec: string | null;

  @Column('varchar', { name: 'CONCLUIDO', length: 3, default: () => "'N'" })
  concluido: string;

  @Column('float', { name: 'APONTAMENTO', nullable: true, precision: 53 })
  apontamento: number | null;

  @ManyToOne(() => TgflocEntity, (tgflocEntity) => tgflocEntity.tgfages)
  @JoinColumn([{ name: 'CODLOCAL', referencedColumnName: 'codlocal' }])
  codlocal2: TgflocEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfages)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TcseqpEntity, (tcseqpEntity) => tcseqpEntity.tgfages)
  @JoinColumn([{ name: 'NUEQUIPE', referencedColumnName: 'nuequipe' }])
  nuequipe2: TcseqpEntity;

  @ManyToOne(() => TgftipEntity, (tgftipEntity) => tgftipEntity.tgfages, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODTIP', referencedColumnName: 'codtip' }])
  codtip: TgftipEntity;

  @ManyToOne(() => TgfmeqEntity, (tgfmeqEntity) => tgfmeqEntity.tgfages)
  @JoinColumn([{ name: 'NUMEQ', referencedColumnName: 'numeq' }])
  numeq2: TgfmeqEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfages)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TgfempEntity;

  @OneToMany(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.codagenda)
  tgfcabs: TgfcabEntity[];

  @OneToMany(() => TgfhorEntity, (tgfhorEntity) => tgfhorEntity.codagenda2)
  tgfhors: TgfhorEntity[];
}
