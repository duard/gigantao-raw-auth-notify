import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgflocEntity } from './tGFLOC.entity';
import { TgfvolEntity } from './tGFVOL.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfempEntity } from './tGFEMP.entity';

@Index('PK_TGFEMM', ['codemp', 'codlocal', 'codprod', 'controle', 'codvol'], {
  unique: true,
})
@Entity('TGFEMM', { schema: 'SANKHYA' })
export class TgfemmEntity {
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

  @Column('char', { primary: true, name: 'CODVOL', length: 2 })
  codvol: string;

  @Column('decimal', {
    name: 'ESTOQUE',
    precision: 13,
    scale: 4,
    default: () => '(0)',
  })
  estoque: number;

  @Column('decimal', {
    name: 'RESERVADO',
    nullable: true,
    precision: 13,
    scale: 4,
    default: () => '(0)',
  })
  reservado: number | null;

  @Column('float', { name: 'ESTMIN', precision: 53, default: () => '(0)' })
  estmin: number;

  @Column('float', { name: 'ESTMAX', precision: 53, default: () => '(0)' })
  estmax: number;

  @Column('varchar', { name: 'CODBARRA', nullable: true, length: 25 })
  codbarra: string | null;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('datetime', { name: 'DTVAL', nullable: true })
  dtval: Date | null;

  @ManyToOne(() => TgflocEntity, (tgflocEntity) => tgflocEntity.tgfemms)
  @JoinColumn([{ name: 'CODLOCAL', referencedColumnName: 'codlocal' }])
  codlocal2: TgflocEntity;

  @ManyToOne(() => TgfvolEntity, (tgfvolEntity) => tgfvolEntity.tgfemms)
  @JoinColumn([{ name: 'CODVOL', referencedColumnName: 'codvol' }])
  codvol2: TgfvolEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfemms)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfemms)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;
}
