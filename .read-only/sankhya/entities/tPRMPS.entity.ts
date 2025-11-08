import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TprdgirEntity } from './tPRDGIR.entity';
import { TprhmrpEntity } from './tPRHMRP.entity';
import { TprimpsEntity } from './tPRIMPS.entity';
import { TprimrpEntity } from './tPRIMRP.entity';
import { TpriprocEntity } from './tPRIPROC.entity';
import { TprlopEntity } from './tPRLOP.entity';
import { TprplpEntity } from './tPRPLP.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TprcmpsEntity } from './tPRCMPS.entity';

@Index('PK_TPRMPS', ['numps'], { unique: true })
@Entity('TPRMPS', { schema: 'SANKHYA' })
export class TprmpsEntity {
  @Column('int', { primary: true, name: 'NUMPS' })
  numps: number;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @Column('datetime', { name: 'DHGERMRP' })
  dhgermrp: Date;

  @Column('datetime', { name: 'DTINICMPS' })
  dtinicmps: Date;

  @Column('datetime', { name: 'DTFINMPS' })
  dtfinmps: Date;

  @Column('datetime', { name: 'DTINIPED' })
  dtiniped: Date;

  @Column('datetime', { name: 'DTFINPED' })
  dtfinped: Date;

  @Column('varchar', { name: 'SITUACAO', length: 1, default: () => "'P'" })
  situacao: string;

  @Column('float', {
    name: 'PERCAJUSTEDEM',
    precision: 53,
    default: () => '(0)',
  })
  percajustedem: number;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 255 })
  descricao: string | null;

  @Column('varchar', { name: 'OBSERVACOES', nullable: true, length: 255 })
  observacoes: string | null;

  @OneToMany(() => TprdgirEntity, (tprdgirEntity) => tprdgirEntity.numps2)
  tprdgirs: TprdgirEntity[];

  @OneToMany(() => TprhmrpEntity, (tprhmrpEntity) => tprhmrpEntity.numps2)
  tprhmrps: TprhmrpEntity[];

  @OneToMany(() => TprimpsEntity, (tprimpsEntity) => tprimpsEntity.numps2)
  tprimps: TprimpsEntity[];

  @OneToMany(() => TprimrpEntity, (tprimrpEntity) => tprimrpEntity.numps2)
  tprimrps: TprimrpEntity[];

  @OneToMany(() => TpriprocEntity, (tpriprocEntity) => tpriprocEntity.numps)
  tpriprocs: TpriprocEntity[];

  @OneToMany(() => TprlopEntity, (tprlopEntity) => tprlopEntity.numps)
  tprlops: TprlopEntity[];

  @ManyToOne(() => TprplpEntity, (tprplpEntity) => tprplpEntity.tprmps)
  @JoinColumn([{ name: 'CODPLANTA', referencedColumnName: 'codplp' }])
  codplanta: TprplpEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tprmps)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TprcmpsEntity, (tprcmpsEntity) => tprcmpsEntity.tprmps)
  @JoinColumn([{ name: 'CODCMPS', referencedColumnName: 'codcmps' }])
  codcmps: TprcmpsEntity;
}
