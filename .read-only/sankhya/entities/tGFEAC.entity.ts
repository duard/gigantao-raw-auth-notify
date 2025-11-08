import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfetaEntity } from './tGFETA.entity';
import { TgflocEntity } from './tGFLOC.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TGFEAC', ['nuacomp'], { unique: true })
@Index('TGFEAC_I01', ['nunota'], {})
@Index(
  'TGFEAC_I02',
  ['nuprod', 'codetapa', 'codprod', 'codlocal', 'controle'],
  {},
)
@Index('TGFEAC_I03', ['codlocal'], {})
@Entity('TGFEAC', { schema: 'SANKHYA' })
export class TgfeacEntity {
  @Column('int', { primary: true, name: 'NUACOMP' })
  nuacomp: number;

  @Column('datetime', { name: 'DHACOMP' })
  dhacomp: Date;

  @Column('int', { name: 'NUPROD' })
  nuprod: number;

  @Column('int', { name: 'NUNOTA' })
  nunota: number;

  @Column('int', { name: 'CODETAPA' })
  codetapa: number;

  @Column('int', { name: 'CODPROD' })
  codprod: number;

  @Column('int', { name: 'CODLOCAL', default: () => '(0)' })
  codlocal: number;

  @Column('char', { name: 'CONTROLE', length: 11 })
  controle: string;

  @Column('smallint', { name: 'ATUALESTOQUE', default: () => '(-1)' })
  atualestoque: number;

  @Column('float', { name: 'QTD', precision: 53, default: () => '(0)' })
  qtd: number;

  @Column('char', { name: 'FINAL', length: 1, default: () => "'N'" })
  final: string;

  @Column('smallint', { name: 'VARIACAO', nullable: true })
  variacao: number | null;

  @Column('varchar', { name: 'MOTIVO', nullable: true, length: 60 })
  motivo: string | null;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfeacs)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TgfetaEntity, (tgfetaEntity) => tgfetaEntity.tgfeacs)
  @JoinColumn([{ name: 'CODETAPA', referencedColumnName: 'codetapa' }])
  codetapa2: TgfetaEntity;

  @ManyToOne(() => TgflocEntity, (tgflocEntity) => tgflocEntity.tgfeacs)
  @JoinColumn([{ name: 'CODLOCAL', referencedColumnName: 'codlocal' }])
  codlocal2: TgflocEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgfeacs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
