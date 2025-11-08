import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TtkprocEntity } from './tTKPROC.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfgruEntity } from './tGFGRU.entity';

@Index('PK_TTKPROTEMP', ['codprod', 'nuproc'], { unique: true })
@Entity('TTKPROTEMP', { schema: 'SANKHYA' })
export class TtkprotempEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('int', { primary: true, name: 'NUPROC' })
  nuproc: number;

  @Column('varchar', { name: 'DESCRPROD', nullable: true, length: 100 })
  descrprod: string | null;

  @Column('char', { name: 'USOPROD', nullable: true, length: 1 })
  usoprod: string | null;

  @Column('char', { name: 'TIPCONTEST', nullable: true, length: 1 })
  tipcontest: string | null;

  @Column('char', { name: 'ATIVO', length: 1 })
  ativo: string;

  @Column('char', { name: 'TITCONTEST', nullable: true, length: 10 })
  titcontest: string | null;

  @Column('varchar', { name: 'USALOTEDTFAB', nullable: true, length: 1 })
  usalotedtfab: string | null;

  @Column('varchar', { name: 'USALOTEDTVAL', nullable: true, length: 1 })
  usalotedtval: string | null;

  @Column('text', { name: 'LISCONTEST', nullable: true })
  liscontest: string | null;

  @Column('varchar', { name: 'ALTERADO', nullable: true, length: 1 })
  alterado: string | null;

  @Column('varchar', { name: 'CODVOL', nullable: true, length: 2 })
  codvol: string | null;

  @Column('varchar', { name: 'VOLUMEALTERNATIVO', nullable: true, length: 2 })
  volumealternativo: string | null;

  @Column('int', { name: 'QUANTIDADE', nullable: true })
  quantidade: number | null;

  @Column('varchar', { name: 'DIVIDEMULTIPLICA', nullable: true, length: 1 })
  dividemultiplica: string | null;

  @Column('varchar', { name: 'UNIDADECOMPRA', nullable: true, length: 1 })
  unidadecompra: string | null;

  @Column('varchar', { name: 'CODVOLCOMPRA', nullable: true, length: 2 })
  codvolcompra: string | null;

  @ManyToOne(
    () => TtkprocEntity,
    (ttkprocEntity) => ttkprocEntity.ttkprotemps,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([{ name: 'NUPROC', referencedColumnName: 'nuproc' }])
  nuproc2: TtkprocEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.ttkprotemps, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod2: TgfproEntity;

  @ManyToOne(() => TgfgruEntity, (tgfgruEntity) => tgfgruEntity.ttkprotemps)
  @JoinColumn([{ name: 'CODGRUPOPROD', referencedColumnName: 'codgrupoprod' }])
  codgrupoprod: TgfgruEntity;
}
