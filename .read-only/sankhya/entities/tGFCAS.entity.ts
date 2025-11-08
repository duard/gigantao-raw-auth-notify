import {
    Column,
    Entity,
    Index,
    JoinColumn,
    ManyToOne,
    OneToMany,
} from 'typeorm';
import { TgfcabEntity } from './tGFCAB.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TgfiasEntity } from './tGFIAS.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfvenEntity } from './tGFVEN.entity';

@Index('PK_TGFCAS', ['nuagenda'], { unique: true })
@Index('TGFCAS_I01', ['dtagenda'], {})
@Index('TGFCAS_I02', ['codemp', 'dtagenda'], {})
@Index('TGFCAS_I03', ['codexec', 'dtagenda', 'status'], {})
@Entity('TGFCAS', { schema: 'SANKHYA' })
export class TgfcasEntity {
  @Column('int', { primary: true, name: 'NUAGENDA' })
  nuagenda: number;

  @Column('smallint', { name: 'CODEMP' })
  codemp: number;

  @Column('smallint', { name: 'CODEXEC' })
  codexec: number;

  @Column('datetime', { name: 'DTAGENDA' })
  dtagenda: Date;

  @Column('smallint', { name: 'HRAGENDA' })
  hragenda: number;

  @Column('smallint', { name: 'HRFINALAGENDA' })
  hrfinalagenda: number;

  @Column('varchar', { name: 'STATUS', length: 1, default: () => "'0'" })
  status: string;

  @Column('varchar', { name: 'FATURADO', length: 1, default: () => "'N'" })
  faturado: string;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 3103 })
  observacao: string | null;

  @Column('smallint', { name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('int', { name: 'NUAGENDAORIGEM', nullable: true })
  nuagendaorigem: number | null;

  @Column('varchar', {
    name: 'MOTIVOCANCELADO',
    length: 1,
    default: () => "'0'",
  })
  motivocancelado: string;

  @Column('varchar', { name: 'OBSCANCELADO', nullable: true, length: 3103 })
  obscancelado: string | null;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfcas)
  @JoinColumn([{ name: 'NUNOTAFATURA', referencedColumnName: 'nunota' }])
  nunotafatura: TgfcabEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfcas)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfcas)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @ManyToOne(() => TgfvenEntity, (tgfvenEntity) => tgfvenEntity.tgfcas)
  @JoinColumn([{ name: 'CODEXEC', referencedColumnName: 'codvend' }])
  codexec2: TgfvenEntity;

  @OneToMany(() => TgfiasEntity, (tgfiasEntity) => tgfiasEntity.nuagenda2)
  tgfias: TgfiasEntity[];
}
