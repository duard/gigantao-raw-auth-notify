import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpempEntity } from './tFPEMP.entity';
import { TgffinEntity } from './tGFFIN.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TfpncoEntity } from './tFPNCO.entity';
import { TfpgpsEntity } from './tFPGPS.entity';
import { TfpvcoEntity } from './tFPVCO.entity';

@Index('PK_TFPCOM', ['nucompensacao'], { unique: true })
@Index('TFPCOM_I01', ['codemp', 'codparc', 'referencia'], {})
@Entity('TFPCOM', { schema: 'SANKHYA' })
export class TfpcomEntity {
  @Column('int', { primary: true, name: 'NUCOMPENSACAO' })
  nucompensacao: number;

  @Column('datetime', { name: 'REFERENCIA' })
  referencia: Date;

  @Column('smallint', { name: 'CODEMP' })
  codemp: number;

  @Column('int', { name: 'CODPARC' })
  codparc: number;

  @Column('float', { name: 'VLRORIGINAL', precision: 53 })
  vlroriginal: number;

  @Column('datetime', { name: 'DTRECOLHIMENTO', nullable: true })
  dtrecolhimento: Date | null;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 250 })
  observacao: string | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpcoms)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.tfpcoms)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TfpempEntity;

  @ManyToOne(() => TgffinEntity, (tgffinEntity) => tgffinEntity.tfpcoms, {
    onDelete: 'SET NULL',
  })
  @JoinColumn([{ name: 'NUFIN', referencedColumnName: 'nufin' }])
  nufin: TgffinEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tfpcoms)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;

  @ManyToOne(() => TfpncoEntity, (tfpncoEntity) => tfpncoEntity.tfpcoms)
  @JoinColumn([{ name: 'CODNATCOMP', referencedColumnName: 'codnatcomp' }])
  codnatcomp: TfpncoEntity;

  @OneToMany(() => TfpgpsEntity, (tfpgpsEntity) => tfpgpsEntity.nucompensacao)
  tfpgps: TfpgpsEntity[];

  @OneToMany(() => TfpvcoEntity, (tfpvcoEntity) => tfpvcoEntity.nucompensacao2)
  tfpvcos: TfpvcoEntity[];

  @OneToMany(() => TfpvcoEntity, (tfpvcoEntity) => tfpvcoEntity.nucomporig2)
  tfpvcos2: TfpvcoEntity[];
}
