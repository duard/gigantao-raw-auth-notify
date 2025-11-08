import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsicidEntity } from './tSICID.entity';
import { TsibaiEntity } from './tSIBAI.entity';
import { TsiendEntity } from './tSIEND.entity';

@Index('PK_TSICEP', ['codcid', 'codbai', 'codend', 'cep'], { unique: true })
@Index('TSICEP_I01', ['cep'], {})
@Index('TSICEP_I02', ['codend', 'codcid'], {})
@Entity('TSICEP', { schema: 'SANKHYA' })
export class TsicepEntity {
  @Column('int', { primary: true, name: 'CODCID', default: () => '(0)' })
  codcid: number;

  @Column('int', { primary: true, name: 'CODBAI', default: () => '(0)' })
  codbai: number;

  @Column('int', { primary: true, name: 'CODEND', default: () => '(0)' })
  codend: number;

  @Column('char', { primary: true, name: 'CEP', length: 8 })
  cep: string;

  @Column('char', { name: 'INTERVALO', nullable: true, length: 65 })
  intervalo: string | null;

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tsiceps)
  @JoinColumn([{ name: 'CODCID', referencedColumnName: 'codcid' }])
  codc: TsicidEntity;

  @ManyToOne(() => TsibaiEntity, (tsibaiEntity) => tsibaiEntity.tsiceps)
  @JoinColumn([{ name: 'CODBAI', referencedColumnName: 'codbai' }])
  codbai2: TsibaiEntity;

  @ManyToOne(() => TsiendEntity, (tsiendEntity) => tsiendEntity.tsiceps)
  @JoinColumn([{ name: 'CODEND', referencedColumnName: 'codend' }])
  codend2: TsiendEntity;
}
