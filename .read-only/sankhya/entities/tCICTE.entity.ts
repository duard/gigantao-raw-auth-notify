import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcicabcteEntity } from './tCICABCTE.entity';
import { TgfcabEntity } from './tGFCAB.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TfpdepEntity } from './tFPDEP.entity';
import { TsiempEntity } from './tSIEMP.entity';

@Index('PK_TCICTE', ['dtinvent', 'codprod', 'codbem', 'codemp'], {
  unique: true,
})
@Entity('TCICTE', { schema: 'SANKHYA' })
export class TcicteEntity {
  @Column('datetime', { primary: true, name: 'DTINVENT' })
  dtinvent: Date;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('char', { primary: true, name: 'CODBEM', length: 30 })
  codbem: string;

  @Column('char', {
    name: 'EXISTENACP',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  existenacp: string | null;

  @Column('char', {
    name: 'EXISTENACT',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  existenact: string | null;

  @Column('char', {
    name: 'AJUSTADO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  ajustado: string | null;

  @ManyToOne(
    () => TcicabcteEntity,
    (tcicabcteEntity) => tcicabcteEntity.tcictes,
  )
  @JoinColumn([
    { name: 'DTINVENT', referencedColumnName: 'dtinvent' },
    { name: 'CODEMP', referencedColumnName: 'codemp' },
  ])
  tcicabcte: TcicabcteEntity;

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tcictes, {
    onDelete: 'SET NULL',
  })
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota: TgfcabEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tcictes)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TfpdepEntity, (tfpdepEntity) => tfpdepEntity.tcictes)
  @JoinColumn([{ name: 'CODDEPCP', referencedColumnName: 'coddep' }])
  coddepcp: TfpdepEntity;

  @ManyToOne(() => TfpdepEntity, (tfpdepEntity) => tfpdepEntity.tcictes2)
  @JoinColumn([{ name: 'CODDEPCT', referencedColumnName: 'coddep' }])
  coddepct: TfpdepEntity;

  @ManyToOne(() => TfpdepEntity, (tfpdepEntity) => tfpdepEntity.tcictes3)
  @JoinColumn([{ name: 'CODDEPSIS', referencedColumnName: 'coddep' }])
  coddepsis: TfpdepEntity;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tcictes)
  @JoinColumn([{ name: 'CODEMPSIS', referencedColumnName: 'codemp' }])
  codempsis: TsiempEntity;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tcictes2)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TsiempEntity;
}
