import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { AstreqEntity } from './aSTREQ.entity';

@Index('PK_ASTAJU', ['codigo'], { unique: true })
@Entity('ASTINC', { schema: 'SANKHYA' })
export class AstincEntity {
  @Column('int', { primary: true, name: 'CODIGO' })
  codigo: number;

  @Column('varchar', { name: 'TIPINC', nullable: true, length: 1 })
  tipinc: string | null;

  @Column('varchar', { name: 'CAMPO', nullable: true, length: 50 })
  campo: string | null;

  @Column('varchar', { name: 'TIPCAMPO', nullable: true, length: 1 })
  tipcampo: string | null;

  @Column('varchar', { name: 'VLRORIG', nullable: true, length: 100 })
  vlrorig: string | null;

  @Column('varchar', { name: 'MSGERRO', nullable: true, length: 200 })
  msgerro: string | null;

  @Column('varchar', { name: 'STATUS', nullable: true, length: 1 })
  status: string | null;

  @Column('date', { name: 'DHALTER' })
  dhalter: Date;

  @ManyToOne(() => AstreqEntity, (astreqEntity) => astreqEntity.astincs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'CODREQ', referencedColumnName: 'codigo' }])
  codreq: AstreqEntity;
}
