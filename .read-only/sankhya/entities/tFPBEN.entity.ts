import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TsibcoEntity } from './tSIBCO.entity';
import { TgftitEntity } from './tGFTIT.entity';
import { TsictaEntity } from './tSICTA.entity';
import { TfpeveEntity } from './tFPEVE.entity';
import { TfptbeEntity } from './tFPTBE.entity';
import { TgfnatEntity } from './tGFNAT.entity';
import { TsiempEntity } from './tSIEMP.entity';
import { TsicusEntity } from './tSICUS.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TcsprjEntity } from './tCSPRJ.entity';
import { TfpreqadmEntity } from './tFPREQADM.entity';
import { TfpcbeEntity } from './tFPCBE.entity';
import { TfpdbeEntity } from './tFPDBE.entity';
import { TfpfbeEntity } from './tFPFBE.entity';
import { TfpreqbenEntity } from './tFPREQBEN.entity';

@Index('PK_TFPBEN', ['codben'], { unique: true })
@Entity('TFPBEN', { schema: 'SANKHYA' })
export class TfpbenEntity {
  @Column('int', { primary: true, name: 'CODBEN' })
  codben: number;

  @Column('varchar', { name: 'DESCRICAO', length: 50 })
  descricao: string;

  @Column('text', { name: 'FORMULA', nullable: true })
  formula: string | null;

  @Column('float', { name: 'VLRPARTEEMPRESA', precision: 53 })
  vlrparteempresa: number;

  @Column('int', { name: 'CODTIPOPER' })
  codtipoper: number;

  @Column('int', { name: 'CODPARCEMP', nullable: true })
  codparcemp: number | null;

  @Column('varchar', { name: 'FORMULAIND', nullable: true, length: 1000 })
  formulaind: string | null;

  @Column('char', { name: 'VALIDAAFASTAMENTO', nullable: true, length: 1 })
  validaafastamento: string | null;

  @Column('text', { name: 'DETALHES', nullable: true })
  detalhes: string | null;

  @Column('char', {
    name: 'DESCHRCARGA',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  deschrcarga: string | null;

  @ManyToOne(() => TsibcoEntity, (tsibcoEntity) => tsibcoEntity.tfpbens)
  @JoinColumn([{ name: 'CODBCO', referencedColumnName: 'codbco' }])
  codbco: TsibcoEntity;

  @ManyToOne(() => TgftitEntity, (tgftitEntity) => tgftitEntity.tfpbens)
  @JoinColumn([{ name: 'CODTIPTIT', referencedColumnName: 'codtiptit' }])
  codtiptit: TgftitEntity;

  @ManyToOne(() => TsictaEntity, (tsictaEntity) => tsictaEntity.tfpbens)
  @JoinColumn([{ name: 'CODCTABCOINT', referencedColumnName: 'codctabcoint' }])
  codctabcoint: TsictaEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfpbens)
  @JoinColumn([{ name: 'CODEVENTOEMP', referencedColumnName: 'codevento' }])
  codeventoemp: TfpeveEntity;

  @ManyToOne(() => TfptbeEntity, (tfptbeEntity) => tfptbeEntity.tfpbens)
  @JoinColumn([{ name: 'CODTBE', referencedColumnName: 'codtbe' }])
  codtbe: TfptbeEntity;

  @ManyToOne(() => TfpeveEntity, (tfpeveEntity) => tfpeveEntity.tfpbens2)
  @JoinColumn([{ name: 'CODEVENTO', referencedColumnName: 'codevento' }])
  codevento: TfpeveEntity;

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tfpbens)
  @JoinColumn([{ name: 'CODNAT', referencedColumnName: 'codnat' }])
  codnat: TgfnatEntity;

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tfpbens)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TsiempEntity;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tfpbens)
  @JoinColumn([{ name: 'CODCENCUS', referencedColumnName: 'codcencus' }])
  codcencus: TsicusEntity;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tfpbens2)
  @JoinColumn([{ name: 'CODCENCUSDIF', referencedColumnName: 'codcencus' }])
  codcencusdif: TsicusEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tfpbens)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @ManyToOne(() => TcsprjEntity, (tcsprjEntity) => tcsprjEntity.tfpbens)
  @JoinColumn([{ name: 'CODPROJ', referencedColumnName: 'codproj' }])
  codproj: TcsprjEntity;

  @ManyToMany(
    () => TfpreqadmEntity,
    (tfpreqadmEntity) => tfpreqadmEntity.tfpbens,
  )
  tfpreqadms: TfpreqadmEntity[];

  @OneToMany(() => TfpcbeEntity, (tfpcbeEntity) => tfpcbeEntity.codben)
  tfpcbes: TfpcbeEntity[];

  @OneToMany(() => TfpdbeEntity, (tfpdbeEntity) => tfpdbeEntity.codben2)
  tfpdbes: TfpdbeEntity[];

  @OneToMany(() => TfpfbeEntity, (tfpfbeEntity) => tfpfbeEntity.codben2)
  tfpfbes: TfpfbeEntity[];

  @OneToMany(() => TfpreqbenEntity, (tfpreqbenEntity) => tfpreqbenEntity.codben)
  tfpreqbens: TfpreqbenEntity[];
}
