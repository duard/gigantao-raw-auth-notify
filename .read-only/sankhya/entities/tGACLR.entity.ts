import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgacllEntity } from './tGACLL.entity';
import { TgacltEntity } from './tGACLT.entity';
import { TgaclcEntity } from './tGACLC.entity';

@Index('PK_TGACLR', ['nucll', 'codclc'], { unique: true })
@Entity('TGACLR', { schema: 'SANKHYA' })
export class TgaclrEntity {
  @Column('int', { primary: true, name: 'NUCLL' })
  nucll: number;

  @Column('int', { primary: true, name: 'CODCLC' })
  codclc: number;

  @Column('float', { name: 'RESULTADO', nullable: true, precision: 53 })
  resultado: number | null;

  @Column('float', { name: 'DESCONTAR', nullable: true, precision: 53 })
  descontar: number | null;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 255 })
  observacao: string | null;

  @Column('char', { name: 'RESULTADOCONF', nullable: true, length: 1 })
  resultadoconf: string | null;

  @ManyToOne(() => TgacllEntity, (tgacllEntity) => tgacllEntity.tgaclrs, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([{ name: 'NUCLL', referencedColumnName: 'nucll' }])
  nucll2: TgacllEntity;

  @ManyToOne(() => TgacltEntity, (tgacltEntity) => tgacltEntity.tgaclrs)
  @JoinColumn([{ name: 'CODCLT', referencedColumnName: 'codclt' }])
  codclt: TgacltEntity;

  @ManyToOne(() => TgaclcEntity, (tgaclcEntity) => tgaclcEntity.tgaclrs)
  @JoinColumn([{ name: 'CODCLC', referencedColumnName: 'codclc' }])
  codclc2: TgaclcEntity;
}
