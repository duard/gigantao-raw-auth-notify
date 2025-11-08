import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfptltEntity } from './tFPTLT.entity';

@Index('PK_TFPLOTCLASSTRIB', ['codlotacao', 'classtrib'], { unique: true })
@Entity('TFPTLTCLASSTRIB', { schema: 'SANKHYA' })
export class TfptltclasstribEntity {
  @Column('int', { primary: true, name: 'CODLOTACAO' })
  codlotacao: number;

  @Column('smallint', { primary: true, name: 'CLASSTRIB' })
  classtrib: number;

  @Column('char', { name: 'COMPATIVEL', length: 1 })
  compativel: string;

  @ManyToOne(
    () => TfptltEntity,
    (tfptltEntity) => tfptltEntity.tfptltclasstribs,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([{ name: 'CODLOTACAO', referencedColumnName: 'codlotacao' }])
  codlotacao2: TfptltEntity;
}
