import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfempEntity } from './tGFEMP.entity';
import { TgflocEntity } from './tGFLOC.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TciestEntity } from './tCIEST.entity';

@Index('PK_TGFLOT', ['codprod', 'codemp', 'codlocal', 'controle', 'titulo'], {
  unique: true,
})
@Entity('TGFLOT', { schema: 'SANKHYA' })
export class TgflotEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODLOCAL' })
  codlocal: number;

  @Column('char', { primary: true, name: 'CONTROLE', length: 11 })
  controle: string;

  @Column('char', { primary: true, name: 'TITULO', length: 30 })
  titulo: string;

  @Column('char', {
    name: 'LOGICO',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  logico: string | null;

  @Column('money', { name: 'NUMERO', nullable: true })
  numero: number | null;

  @Column('text', { name: 'TEXTO', nullable: true })
  texto: string | null;

  @Column('int', { name: 'INTEIRO', nullable: true })
  inteiro: number | null;

  @Column('datetime', { name: 'DATA', nullable: true })
  data: Date | null;

  @Column('varchar', { name: 'FORNECEDOR', nullable: true, length: 10 })
  fornecedor: string | null;

  @Column('varchar', { name: 'NBA', nullable: true, length: 30 })
  nba: string | null;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgflots)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;

  @ManyToOne(() => TgflocEntity, (tgflocEntity) => tgflocEntity.tgflots)
  @JoinColumn([{ name: 'CODLOCAL', referencedColumnName: 'codlocal' }])
  codlocal2: TgflocEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgflots)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TciestEntity, (tciestEntity) => tciestEntity.tgflots)
  @JoinColumn([
    { name: 'CODPROD', referencedColumnName: 'codprod' },
    { name: 'TITULO', referencedColumnName: 'titulo' },
  ])
  tciest: TciestEntity;
}
