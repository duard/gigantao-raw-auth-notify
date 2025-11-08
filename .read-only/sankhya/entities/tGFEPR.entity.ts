import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgffcpEntity } from './tGFFCP.entity';
import { TgfetaEntity } from './tGFETA.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgflocEntity } from './tGFLOC.entity';
import { TgficpEntity } from './tGFICP.entity';

@Index(
  'PK_TGFEPR',
  ['codprod', 'variacao', 'codlocal', 'controle', 'codetapa'],
  { unique: true },
)
@Entity('TGFEPR', { schema: 'SANKHYA' })
export class TgfeprEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('smallint', { primary: true, name: 'VARIACAO', default: () => '(0)' })
  variacao: number;

  @Column('int', { primary: true, name: 'CODLOCAL', default: () => '(0)' })
  codlocal: number;

  @Column('char', { primary: true, name: 'CONTROLE', length: 11 })
  controle: string;

  @Column('int', { primary: true, name: 'CODETAPA', default: () => '(0)' })
  codetapa: number;

  @Column('smallint', { name: 'SEQUENCIA', default: () => '(0)' })
  sequencia: number;

  @Column('money', { name: 'CICLOPRODUCAO', default: () => '(0)' })
  cicloproducao: number;

  @Column('char', { name: 'UNIDCICLO', length: 1, default: () => "'H'" })
  unidciclo: string;

  @Column('char', { name: 'OBRIGATORIA', length: 1, default: () => "'S'" })
  obrigatoria: string;

  @Column('char', { name: 'FINAL', length: 1, default: () => "'S'" })
  final: string;

  @Column('text', { name: 'OBSERVACAO', nullable: true })
  observacao: string | null;

  @Column('varchar', { name: 'ONDEEXEC', nullable: true, length: 250 })
  ondeexec: string | null;

  @Column('char', { name: 'ATUALESTINDPA', length: 1, default: () => "'N'" })
  atualestindpa: string;

  @ManyToOne(() => TgffcpEntity, (tgffcpEntity) => tgffcpEntity.tgfeprs)
  @JoinColumn([
    { name: 'CODPROD', referencedColumnName: 'codprod' },
    { name: 'VARIACAO', referencedColumnName: 'variacao' },
    { name: 'CODLOCAL', referencedColumnName: 'codlocal' },
    { name: 'CONTROLE', referencedColumnName: 'controle' },
  ])
  tgffcp: TgffcpEntity;

  @ManyToOne(() => TgfetaEntity, (tgfetaEntity) => tgfetaEntity.tgfeprs)
  @JoinColumn([{ name: 'CODETAPA', referencedColumnName: 'codetapa' }])
  codetapa2: TgfetaEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgfeprs)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TgflocEntity, (tgflocEntity) => tgflocEntity.tgfeprs)
  @JoinColumn([{ name: 'CODLOCAL', referencedColumnName: 'codlocal' }])
  codlocal2: TgflocEntity;

  @OneToMany(() => TgficpEntity, (tgficpEntity) => tgficpEntity.tgfepr)
  tgficps: TgficpEntity[];
}
