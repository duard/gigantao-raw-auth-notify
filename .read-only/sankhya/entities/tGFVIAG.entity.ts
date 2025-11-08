import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfmdfeEntity } from './tGFMDFE.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfordEntity } from './tGFORD.entity';
import { TsiempEntity } from './tSIEMP.entity';
import { TgfveiEntity } from './tGFVEI.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFVIAG', ['nuviag'], { unique: true })
@Entity('TGFVIAG', { schema: 'SANKHYA' })
export class TgfviagEntity {
  @Column('int', { primary: true, name: 'NUVIAG' })
  nuviag: number;

  @Column('varchar', { name: 'SERIE', length: 3, default: () => "'0'" })
  serie: string;

  @Column('char', { name: 'STATUSDOC', length: 1, default: () => "'E'" })
  statusdoc: string;

  @Column('char', { name: 'TIPAMB', nullable: true, length: 1 })
  tipamb: string | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('char', { name: 'USATOMSERVCONTR', length: 1, default: () => "'N'" })
  usatomservcontr: string;

  @Column('char', { name: 'USACIOTCTEVINC', length: 1, default: () => "'N'" })
  usaciotctevinc: string;

  @Column('varchar', { name: 'CONTEMDOCTERC', length: 1, default: () => "'N'" })
  contemdocterc: string;

  @Column('char', {
    name: 'TIPMODALMDFE',
    nullable: true,
    length: 1,
    default: () => 'NULL',
  })
  tipmodalmdfe: string | null;

  @OneToMany(() => TgfmdfeEntity, (tgfmdfeEntity) => tgfmdfeEntity.nuviag2)
  tgfmdfes: TgfmdfeEntity[];

  @ManyToMany(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfviags)
  @JoinTable({
    name: 'TGFMME',
    joinColumns: [{ name: 'NUVIAG', referencedColumnName: 'nuviag' }],
    inverseJoinColumns: [{ name: 'CODPARC', referencedColumnName: 'codparc' }],
    schema: 'SANKHYA',
  })
  tgfpars: TgfparEntity[];

  @OneToMany(() => TgfordEntity, (tgfordEntity) => tgfordEntity.nuviag2)
  tgfords: TgfordEntity[];

  @ManyToOne(() => TsiempEntity, (tsiempEntity) => tsiempEntity.tgfviags)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp: TsiempEntity;

  @ManyToOne(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.tgfviags)
  @JoinColumn([{ name: 'CODVEIPRIN', referencedColumnName: 'codveiculo' }])
  codveiprin: TgfveiEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfviags)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.tgfviags2)
  @JoinColumn([{ name: 'CODVEIREB1', referencedColumnName: 'codveiculo' }])
  codveireb: TgfveiEntity;

  @ManyToOne(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.tgfviags3)
  @JoinColumn([{ name: 'CODVEIREB2', referencedColumnName: 'codveiculo' }])
  codveireb2: TgfveiEntity;

  @ManyToOne(() => TgfveiEntity, (tgfveiEntity) => tgfveiEntity.tgfviags4)
  @JoinColumn([{ name: 'CODVEIREB3', referencedColumnName: 'codveiculo' }])
  codveireb3: TgfveiEntity;
}
