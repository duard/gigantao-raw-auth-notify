import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsirotEntity } from './tSIROT.entity';
import { TsiimpEntity } from './tSIIMP.entity';

@Index('PK_TSITAR', ['codtar', 'codrot'], { unique: true })
@Index('TSITAR_I01', ['codrel'], {})
@Entity('TSITAR', { schema: 'SANKHYA' })
export class TsitarEntity {
  @Column('int', { primary: true, name: 'CODTAR' })
  codtar: number;

  @Column('smallint', { primary: true, name: 'CODROT' })
  codrot: number;

  @Column('char', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @Column('text', { name: 'PARAMETRO', nullable: true })
  parametro: string | null;

  @Column('char', { name: 'FREQUENCIA', length: 1 })
  frequencia: string;

  @Column('datetime', { name: 'DTEXEC' })
  dtexec: Date;

  @Column('datetime', { name: 'HREXEC' })
  hrexec: Date;

  @Column('smallint', { name: 'MINUTOS', default: () => '(1)' })
  minutos: number;

  @Column('char', { name: 'STATUS', nullable: true, length: 1 })
  status: string | null;

  @Column('datetime', { name: 'DTULTIMA', nullable: true })
  dtultima: Date | null;

  @Column('datetime', { name: 'HRULTIMA', nullable: true })
  hrultima: Date | null;

  @Column('char', { name: 'PROGRAMACAO', nullable: true, length: 250 })
  programacao: string | null;

  @Column('int', { name: 'CODREL', nullable: true })
  codrel: number | null;

  @Column('text', { name: 'FILTROS', nullable: true })
  filtros: string | null;

  @Column('char', { name: 'DESCRTAR', nullable: true, length: 40 })
  descrtar: string | null;

  @Column('varchar', { name: 'MENSAGEM', nullable: true, length: 250 })
  mensagem: string | null;

  @Column('int', { name: 'ANEXARCOMO', nullable: true })
  anexarcomo: number | null;

  @Column('varchar', { name: 'COMPACTAR', nullable: true, length: 1 })
  compactar: string | null;

  @Column('varchar', { name: 'ENVIAR', nullable: true, length: 1 })
  enviar: string | null;

  @ManyToOne(() => TsirotEntity, (tsirotEntity) => tsirotEntity.tsitars)
  @JoinColumn([{ name: 'CODROT', referencedColumnName: 'codrot' }])
  codrot2: TsirotEntity;

  @ManyToOne(() => TsiimpEntity, (tsiimpEntity) => tsiimpEntity.tsitars)
  @JoinColumn([{ name: 'CODREL', referencedColumnName: 'codrel' }])
  codrel2: TsiimpEntity;
}
