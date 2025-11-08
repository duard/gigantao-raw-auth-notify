import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TcsconEntity } from './tCSCON.entity';
import { TfprtfEntity } from './tFPRTF.entity';
import { TsicusEntity } from './tSICUS.entity';
import { TgfnatEntity } from './tGFNAT.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { TcsprjEntity } from './tCSPRJ.entity';

@Index('PK_TGFCRI', ['codcriterio'], { unique: true })
@Index('TGFCRI_I01', ['automatico', 'codcencus', 'codnat', 'codproj'], {})
@Entity('TGFCRI', { schema: 'SANKHYA' })
export class TgfcriEntity {
  @Column('smallint', { primary: true, name: 'CODCRITERIO' })
  codcriterio: number;

  @Column('char', { name: 'DESCRICAO', length: 30 })
  descricao: string;

  @Column('int', { name: 'CODNAT', default: () => '(0)' })
  codnat: number;

  @Column('int', { name: 'CODCENCUS', default: () => '(0)' })
  codcencus: number;

  @Column('int', { name: 'CODPROJ', default: () => '(0)' })
  codproj: number;

  @Column('char', { name: 'AUTOMATICO', length: 1, default: () => "'N'" })
  automatico: string;

  @OneToMany(() => TcsconEntity, (tcsconEntity) => tcsconEntity.codcriterio)
  tcscons: TcsconEntity[];

  @OneToMany(() => TfprtfEntity, (tfprtfEntity) => tfprtfEntity.codcriterio)
  tfprtfs: TfprtfEntity[];

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tgfcris)
  @JoinColumn([{ name: 'CODCENCUS', referencedColumnName: 'codcencus' }])
  codcencus2: TsicusEntity;

  @ManyToOne(() => TcsconEntity, (tcsconEntity) => tcsconEntity.tgfcris)
  @JoinColumn([{ name: 'NUMCONTRATO', referencedColumnName: 'numcontrato' }])
  numcontrato: TcsconEntity;

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tgfcris)
  @JoinColumn([{ name: 'CODNAT', referencedColumnName: 'codnat' }])
  codnat2: TgfnatEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfcris)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TgfempEntity;

  @ManyToOne(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.tgfcris)
  @JoinColumn([{ name: 'CODPROJ', referencedColumnName: 'codproj' }])
  codproj2: TcsprjEntity;
}
