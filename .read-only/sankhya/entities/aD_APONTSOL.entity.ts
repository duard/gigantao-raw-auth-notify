import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { AdApontamentoEntity } from './aD_APONTAMENTO.entity';

@Index('PK_AD_APONTSOL', ['codigo', 'seq'], { unique: true })
@Entity('AD_APONTSOL', { schema: 'SANKHYA' })
export class AdApontsolEntity {
  @Column('int', { primary: true, name: 'CODIGO' })
  codigo: number;

  @Column('int', { primary: true, name: 'SEQ' })
  seq: number;

  @Column('text', { name: 'DESCRITIVO', nullable: true })
  descritivo: string | null;

  @Column('varchar', { name: 'GERAOS', nullable: true, length: 10 })
  geraos: string | null;

  @Column('float', { name: 'QTD', nullable: true, precision: 53 })
  qtd: number | null;

  @Column('datetime', { name: 'DTPROGRAMACAO', nullable: true })
  dtprogramacao: Date | null;

  @Column('int', { name: 'NUOS', nullable: true })
  nuos: number | null;

  @Column('int', { name: 'HR', nullable: true })
  hr: number | null;

  @Column('int', { name: 'KM', nullable: true })
  km: number | null;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.adApontsols)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;

  @ManyToOne(
    () => AdApontamentoEntity,
    (adApontamentoEntity) => adApontamentoEntity.adApontsols,
  )
  @JoinColumn([{ name: 'CODIGO', referencedColumnName: 'codigo' }])
  codigo2: AdApontamentoEntity;

  @ManyToOne(
    () => AdApontamentoEntity,
    (adApontamentoEntity) => adApontamentoEntity.adApontsols2,
  )
  @JoinColumn([{ name: 'CODIGO', referencedColumnName: 'codigo' }])
  codigo3: AdApontamentoEntity;
}
