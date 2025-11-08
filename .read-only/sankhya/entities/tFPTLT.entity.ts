import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TfptltclasstribEntity } from './tFPTLTCLASSTRIB.entity';

@Index('PK_TFPTLT', ['codlotacao'], { unique: true })
@Entity('TFPTLT', { schema: 'SANKHYA' })
export class TfptltEntity {
  @Column('int', { primary: true, name: 'CODLOTACAO' })
  codlotacao: number;

  @Column('varchar', { name: 'DESCRRESUMIDA', nullable: true, length: 150 })
  descrresumida: string | null;

  @Column('varchar', { name: 'DESCRLOTACAO', nullable: true, length: 250 })
  descrlotacao: string | null;

  @Column('char', { name: 'USADO', nullable: true, length: 1 })
  usado: string | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @OneToMany(
    () => TfptltclasstribEntity,
    (tfptltclasstribEntity) => tfptltclasstribEntity.codlotacao2,
  )
  tfptltclasstribs: TfptltclasstribEntity[];
}
