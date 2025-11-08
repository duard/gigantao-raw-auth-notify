import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcbplaEntity } from './tCBPLA.entity';
import { TcbpctEntity } from './tCBPCT.entity';
import { TcsprjEntity } from './tCSPRJ.entity';
import { TsicusEntity } from './tSICUS.entity';
import { TsiempEntity } from './tSIEMP.entity';

@Index(
  'PK_TCBMET',
  ['codcco', 'codemp', 'codctactb', 'codproj', 'codcencus', 'recdesp', 'dtref'],
  {
    unique: true,
  },
)
@Entity('TCBMET', { schema: 'SANKHYA' })
export class TcbmetEntity {
  @Column('int', { primary: true, name: 'CODCCO' })
  codcco: number;

  @Column('smallint', { primary: true, name: 'CODEMP', default: () => '(0)' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODCTACTB', default: () => '(0)' })
  codctactb: number;

  @Column('int', { primary: true, name: 'CODPROJ', default: () => '(0)' })
  codproj: number;

  @Column('int', { primary: true, name: 'CODCENCUS', default: () => '(0)' })
  codcencus: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('float', { name: 'PREVISTO', nullable: true, precision: 53 })
  previsto: number | null;

  @Column('float', { name: 'REALIZADO', nullable: true, precision: 53 })
  realizado: number | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('varchar', { primary: true, name: 'RECDESP', length: 1 })
  recdesp: string;

  @ManyToOne(() => TcbplaEntity, (tcbplaEntity) => tcbplaEntity.tcbmets)
  @JoinColumn([{ name: 'CODCTACTB', referencedColumnName: 'codctactb' }])
  codctactb2: TcbplaEntity;

  @ManyToOne(() => TcbpctEntity, (tcbpctEntity) => tcbpctEntity.tcbmets)
  @JoinColumn([{ name: 'NUPERIODOCTB', referencedColumnName: 'nuperiodoctb' }])
  nuperiodoctb: TcbpctEntity;

  @ManyToOne(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.tcbmets)
  @JoinColumn([{ name: 'CODPROJ', referencedColumnName: 'codproj' }])
  codproj2: TcsprjEntity;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tcbmets)
  @JoinColumn([{ name: 'CODCENCUS', referencedColumnName: 'codcencus' }])
  codcencus2: TsicusEntity;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tcbmets)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TsiempEntity;
}
