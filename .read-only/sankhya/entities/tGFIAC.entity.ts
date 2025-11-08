import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgflocEntity } from './tGFLOC.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfacoEntity } from './tGFACO.entity';

@Index('PK_TGFIAC', ['nuacordo', 'codprod', 'codlocal', 'controle'], {
  unique: true,
})
@Entity('TGFIAC', { schema: 'SANKHYA' })
export class TgfiacEntity {
  @Column('int', { primary: true, name: 'NUACORDO' })
  nuacordo: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('int', { primary: true, name: 'CODLOCAL' })
  codlocal: number;

  @Column('char', {
    primary: true,
    name: 'CONTROLE',
    length: 11,
    default: () => "' '",
  })
  controle: string;

  @Column('smallint', { name: 'PRAZOENTREGA' })
  prazoentrega: number;

  @Column('smallint', { name: 'PRAZOFAT', nullable: true })
  prazofat: number | null;

  @Column('smallint', { name: 'PRAZOPAG' })
  prazopag: number;

  @Column('smallint', { name: 'CODTIPVENDA' })
  codtipvenda: number;

  @Column('smallint', { name: 'QTDPER', nullable: true })
  qtdper: number | null;

  @Column('smallint', { name: 'TAMPER', nullable: true })
  tamper: number | null;

  @Column('char', { name: 'TIPPER', length: 1, default: () => "'U'" })
  tipper: string;

  @Column('money', { name: 'PERCDISTORC', nullable: true })
  percdistorc: number | null;

  @Column('money', { name: 'PERCACRESC', nullable: true })
  percacresc: number | null;

  @Column('char', { name: 'TIPCOMPRA', length: 1 })
  tipcompra: string;

  @Column('money', { name: 'PERSEGESTMIN', nullable: true })
  persegestmin: number | null;

  @Column('money', { name: 'PERCPRAZMAX', nullable: true })
  percprazmax: number | null;

  @Column('float', { name: 'QTDMIN', nullable: true, precision: 53 })
  qtdmin: number | null;

  @Column('money', { name: 'AGRUPMIN', nullable: true })
  agrupmin: number | null;

  @Column('money', { name: 'VLRPROD' })
  vlrprod: number;

  @Column('char', { name: 'SITUACAO', length: 1, default: () => "'A'" })
  situacao: string;

  @Column('char', { name: 'GIROZERO', length: 1, default: () => "'S'" })
  girozero: string;

  @Column('smallint', { name: 'DISTORCAOGIRO', default: () => '(0)' })
  distorcaogiro: number;

  @Column('money', { name: 'GIROMEDDISTORCAO', default: () => '(0)' })
  giromeddistorcao: number;

  @Column('money', { name: 'QTDMAXSUGCPA', default: () => '(0)' })
  qtdmaxsugcpa: number;

  @ManyToOne(() => TgflocEntity, (tgflocEntity) => tgflocEntity.tgfiacs)
  @JoinColumn([{ name: 'CODLOCAL', referencedColumnName: 'codlocal' }])
  codlocal2: TgflocEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfiacs)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TgfacoEntity, (tgfacoEntity) => tgfacoEntity.tgfiacs)
  @JoinColumn([{ name: 'NUACORDO', referencedColumnName: 'nuacordo' }])
  nuacordo2: TgfacoEntity;
}
