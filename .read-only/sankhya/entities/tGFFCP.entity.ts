import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfeprEntity } from './tGFEPR.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgflocEntity } from './tGFLOC.entity';
import { TgfespEntity } from './tGFESP.entity';
import { TgfftlEntity } from './tGFFTL.entity';

@Index('PK_TGFFCP', ['codprod', 'variacao', 'codlocal', 'controle'], {
  unique: true,
})
@Entity('TGFFCP', { schema: 'SANKHYA' })
export class TgffcpEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('smallint', { primary: true, name: 'VARIACAO' })
  variacao: number;

  @Column('int', { primary: true, name: 'CODLOCAL', default: () => '(0)' })
  codlocal: number;

  @Column('char', {
    primary: true,
    name: 'CONTROLE',
    length: 11,
    default: () => "' '",
  })
  controle: string;

  @Column('char', { name: 'FORMPRINCIPAL', length: 1, default: () => "'S'" })
  formprincipal: string;

  @Column('char', {
    name: 'UNIDCICLO',
    nullable: true,
    length: 1,
    default: () => "'H'",
  })
  unidciclo: string | null;

  @Column('float', { name: 'CICLOPRODUCAO', nullable: true, precision: 53 })
  cicloproducao: number | null;

  @Column('int', { name: 'MULTIPLOIDEAL', nullable: true })
  multiploideal: number | null;

  @Column('float', { name: 'MARGLUCRO', nullable: true, precision: 53 })
  marglucro: number | null;

  @Column('float', { name: 'PRODUCAOMIN', nullable: true, precision: 53 })
  producaomin: number | null;

  @Column('float', { name: 'DESVIO', nullable: true, precision: 53 })
  desvio: number | null;

  @Column('float', { name: 'DESVIOINF', nullable: true, precision: 53 })
  desvioinf: number | null;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 250 })
  observacao: string | null;

  @Column('varchar', { name: 'MENORDTVAL', length: 1, default: () => "'N'" })
  menordtval: string;

  @Column('varchar', { name: 'ORIGEM', length: 2, default: () => "'P'" })
  origem: string;

  @Column('varchar', { name: 'MANPREV', length: 1, default: () => "'N'" })
  manprev: string;

  @Column('char', {
    name: 'REGMAPA',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  regmapa: string | null;

  @Column('smallint', { name: 'VARIACAOREL', nullable: true })
  variacaorel: number | null;

  @Column('int', { name: 'CODPRC', nullable: true })
  codprc: number | null;

  @Column('int', { name: 'IDPROC', nullable: true })
  idproc: number | null;

  @OneToMany(() => TgfeprEntity, (tgfeprEntity) => tgfeprEntity.tgffcp)
  tgfeprs: TgfeprEntity[];

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgffcps)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TgflocEntity, (tgflocEntity) => tgflocEntity.tgffcps)
  @JoinColumn([{ name: 'CODLOCAL', referencedColumnName: 'codlocal' }])
  codlocal2: TgflocEntity;

  @ManyToOne(() => TgfespEntity, (tgfespEntity) => tgfespEntity.tgffcps)
  @JoinColumn([{ name: 'CODEST', referencedColumnName: 'codest' }])
  codest: TgfespEntity;

  @OneToMany(() => TgfftlEntity, (tgfftlEntity) => tgfftlEntity.tgffcp)
  tgfftls: TgfftlEntity[];
}
