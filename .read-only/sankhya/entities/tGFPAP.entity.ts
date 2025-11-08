import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfhppEntity } from './tGFHPP.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgfvolEntity } from './tGFVOL.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TGFPAP', ['codparc', 'codprod', 'sequencia'], { unique: true })
@Index('TGFPAP_I01', ['codparc', 'codprod'], {})
@Entity('TGFPAP', { schema: 'SANKHYA' })
export class TgfpapEntity {
  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('varchar', { name: 'CODPROPARC', nullable: true, length: 100 })
  codproparc: string | null;

  @Column('varchar', { name: 'DESCRPROPARC', nullable: true, length: 80 })
  descrproparc: string | null;

  @Column('int', { name: 'PRAZOENT', nullable: true })
  prazoent: number | null;

  @Column('varchar', { name: 'CODBARRA', nullable: true, length: 25 })
  codbarra: string | null;

  @Column('varchar', { name: 'DUM14', nullable: true, length: 25 })
  dum14: string | null;

  @Column('varchar', { name: 'CONTPARC', nullable: true, length: 11 })
  contparc: string | null;

  @Column('varchar', { name: 'CONTROLE', nullable: true, length: 50 })
  controle: string | null;

  @Column('varchar', { name: 'UNIDADE', nullable: true, length: 6 })
  unidade: string | null;

  @Column('smallint', {
    primary: true,
    name: 'SEQUENCIA',
    default: () => '(0)',
  })
  sequencia: number;

  @Column('float', { name: 'PERCDESC', nullable: true, precision: 53 })
  percdesc: number | null;

  @Column('datetime', { name: 'DTVALDESC', nullable: true })
  dtvaldesc: Date | null;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 255 })
  observacao: string | null;

  @Column('float', { name: 'MULTIPCPA', nullable: true, precision: 53 })
  multipcpa: number | null;

  @Column('varchar', { name: 'IMPLAUDOLOTE', length: 1, default: () => "'N'" })
  implaudolote: string;

  @Column('smallint', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('varchar', { name: 'CODBARRAPARC', nullable: true, length: 30 })
  codbarraparc: string | null;

  @Column('char', { name: 'UNIDADELOTE', nullable: true, length: 6 })
  unidadelote: string | null;

  @OneToMany(() => TgfhppEntity, (tgfhppEntity) => tgfhppEntity.tgfpap)
  tgfhpps: TgfhppEntity[];

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgfpaps)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tgfpaps)
  @JoinColumn([{ name: 'UNIDADEPARC', referencedColumnName: 'codvol' }])
  unidadeparc: TgfvolEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfpaps)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;
}
