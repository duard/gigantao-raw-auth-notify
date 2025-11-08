import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TfpabeEntity } from './tFPABE.entity';
import { TfpagnocatrEntity } from './tFPAGNOCATR.entity';
import { TfpempEntity } from './tFPEMP.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpambrEntity } from './tFPAMBR.entity';
import { TfpamfEntity } from './tFPAMF.entity';
import { TfpativEntity } from './tFPATIV.entity';
import { TfpcatrEntity } from './tFPCATR.entity';
import { TfpfatrEntity } from './tFPFATR.entity';

@Index('PK_TFPAMB', ['codamb'], { unique: true })
@Entity('TFPAMB', { schema: 'SANKHYA' })
export class TfpambEntity {
  @Column('int', { primary: true, name: 'CODAMB' })
  codamb: number;

  @Column('text', { name: 'DSCAMB', nullable: true })
  dscamb: string | null;

  @Column('datetime', { name: 'INIVALID', nullable: true })
  inivalid: Date | null;

  @Column('datetime', { name: 'FIMVALID', nullable: true })
  fimvalid: Date | null;

  @Column('smallint', { name: 'LOCALAMB', nullable: true })
  localamb: number | null;

  @Column('smallint', { name: 'TPINSC', nullable: true })
  tpinsc: number | null;

  @Column('varchar', { name: 'NRINSCR', nullable: true, length: 15 })
  nrinscr: string | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('char', { name: 'USADOESOCIAL', length: 1, default: () => "'N'" })
  usadoesocial: string;

  @Column('text', { name: 'METERG', nullable: true })
  meterg: string | null;

  @Column('text', { name: 'OBSERVACAO', nullable: true })
  observacao: string | null;

  @Column('text', { name: 'DSCATIVDES', nullable: true })
  dscativdes: string | null;

  @Column('varchar', { name: 'NMAMB', nullable: true, length: 100 })
  nmamb: string | null;

  @Column('smallint', { name: 'UNMED', nullable: true })
  unmed: number | null;

  @OneToMany(() => TfpabeEntity, (tfpabeEntity) => tfpabeEntity.codamb2)
  tfpabes: TfpabeEntity[];

  @OneToMany(
    () => TfpagnocatrEntity,
    (tfpagnocatrEntity) => tfpagnocatrEntity.codamb2,
  )
  tfpagnocatrs: TfpagnocatrEntity[];

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.tfpambs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TfpempEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tfpambs)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpambs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @OneToMany(() => TfpambrEntity, (tfpambrEntity) => tfpambrEntity.codamb2)
  tfpambrs: TfpambrEntity[];

  @OneToMany(() => TfpamfEntity, (tfpamfEntity) => tfpamfEntity.codamb2)
  tfpamfs: TfpamfEntity[];

  @OneToMany(() => TfpativEntity, (tfpativEntity) => tfpativEntity.codamb2)
  tfpativs: TfpativEntity[];

  @OneToMany(() => TfpcatrEntity, (tfpcatrEntity) => tfpcatrEntity.codamb)
  tfpcatrs: TfpcatrEntity[];

  @OneToMany(() => TfpfatrEntity, (tfpfatrEntity) => tfpfatrEntity.codamb2)
  tfpfatrs: TfpfatrEntity[];
}
