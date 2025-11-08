import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';
import { TimlocEntity } from './tIMLOC.entity';

@Index('PK_TIMLCL', ['lcllocacao', 'lcllocatario'], { unique: true })
@Entity('TIMLCL', { schema: 'SANKHYA' })
export class TimlclEntity {
  @Column('int', { primary: true, name: 'LCLLOCACAO' })
  lcllocacao: number;

  @Column('int', { primary: true, name: 'LCLLOCATARIO' })
  lcllocatario: number;

  @Column('float', { name: 'LCLPERCENTUAL', nullable: true, precision: 53 })
  lclpercentual: number | null;

  @Column('char', { name: 'LCLBOLETO', length: 1, default: () => "'N'" })
  lclboleto: string;

  @Column('char', { name: 'LCLLEGADO', nullable: true, length: 1 })
  lcllegado: string | null;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.timlcls)
  @JoinColumn([{ name: 'LCLLOCATARIO', referencedColumnName: 'codparc' }])
  lcllocatario2: TgfparEntity;

  @ManyToOne(() => TimlocEntity, (timlocEntity) => timlocEntity.timlcls)
  @JoinColumn([{ name: 'LCLLOCACAO', referencedColumnName: 'loccodigo' }])
  lcllocacao2: TimlocEntity;
}
