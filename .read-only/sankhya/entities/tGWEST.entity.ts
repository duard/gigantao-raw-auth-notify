import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgweplEntity } from './tGWEPL.entity';
import { TgfvolEntity } from './tGFVOL.entity';
import { TgflocEntity } from './tGFLOC.entity';
import { TgwendEntity } from './tGWEND.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgwrplEntity } from './tGWRPL.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfempEntity } from './tGFEMP.entity';

@Index(
  'PK_TGWEST',
  ['codemp', 'codlocal', 'controle', 'codend', 'codprod', 'codvol', 'codparc'],
  {
    unique: true,
  },
)
@Index(
  'TGWEST_I_COMP_END',
  ['codend', 'codprod', 'controle', 'estoquevolpad'],
  {},
)
@Index('TGWEST_I01', ['codend'], {})
@Index('TGWEST_I02', ['codprod', 'codend'], {})
@Entity('TGWEST', { schema: 'SANKHYA' })
export class TgwestEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODLOCAL' })
  codlocal: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('char', {
    primary: true,
    name: 'CONTROLE',
    length: 11,
    default: () => "' '",
  })
  controle: string;

  @Column('int', { primary: true, name: 'CODEND' })
  codend: number;

  @Column('char', { primary: true, name: 'CODVOL', length: 2 })
  codvol: string;

  @Column('int', { primary: true, name: 'CODPARC', default: () => '(0)' })
  codparc: number;

  @Column('float', {
    name: 'ENTRADASPEND',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  entradaspend: number | null;

  @Column('float', {
    name: 'SAIDASPEND',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  saidaspend: number | null;

  @Column('float', {
    name: 'ESTOQUE',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  estoque: number | null;

  @Column('datetime', { name: 'DTVAL', nullable: true })
  dtval: Date | null;

  @Column('float', {
    name: 'ENTRPENDVOLPAD',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  entrpendvolpad: number | null;

  @Column('float', {
    name: 'SAIDPENDVOLPAD',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  saidpendvolpad: number | null;

  @Column('float', {
    name: 'ESTOQUEVOLPAD',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  estoquevolpad: number | null;

  @Column('datetime', { name: 'DTREC', nullable: true })
  dtrec: Date | null;

  @OneToMany(() => TgweplEntity, (tgweplEntity) => tgweplEntity.tgwest)
  tgwepls: TgweplEntity[];

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tgwests)
  @JoinColumn([{ name: 'CODVOL', referencedColumnName: 'codvol' }])
  codvol2: TgfvolEntity;

  @ManyToOne(() => TgflocEntity, (tgflocEntity) => tgflocEntity.tgwests)
  @JoinColumn([{ name: 'CODLOCAL', referencedColumnName: 'codlocal' }])
  codlocal2: TgflocEntity;

  @ManyToOne(() => TgwendEntity, (tgwendEntity) => tgwendEntity.tgwests)
  @JoinColumn([{ name: 'CODEND', referencedColumnName: 'codend' }])
  codend2: TgwendEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgwests)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;

  @ManyToOne(() => TgwrplEntity, (tgwrplEntity) => tgwrplEntity.tgwests)
  @JoinColumn([{ name: 'IDPALETE', referencedColumnName: 'idpalete' }])
  idpalete: TgwrplEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgwests)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgwests)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;
}
