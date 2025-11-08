import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { AstreqEntity } from './aSTREQ.entity';

@Index('PK_ASTINC', ['codigo'], { unique: true })
@Entity('ASTAJU', { schema: 'SANKHYA' })
export class AstajuEntity {
  @Column('int', { primary: true, name: 'CODIGO' })
  codigo: number;

  @Column('varchar', { name: 'CAMPO', nullable: true, length: 50 })
  campo: string | null;

  @Column('varchar', { name: 'TIPCAMPO', nullable: true, length: 1 })
  tipcampo: string | null;

  @Column('varchar', { name: 'VLRORIG', nullable: true, length: 100 })
  vlrorig: string | null;

  @Column('varchar', { name: 'VLRCORRIG', nullable: true, length: 100 })
  vlrcorrig: string | null;

  @Column('varchar', { name: 'TIPAJUSTE', nullable: true, length: 1 })
  tipajuste: string | null;

  @Column('date', { name: 'DHALTER' })
  dhalter: Date;

  @ManyToOne(() => AstreqEntity, (astreqEntity) => astreqEntity.astajus, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODREQ', referencedColumnName: 'codigo' }])
  codreq: AstreqEntity;
}
