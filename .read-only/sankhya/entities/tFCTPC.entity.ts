import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TfccurEntity } from './tFCCUR.entity';

@Index('PK_TFCTPC', ['codtipcurso'], { unique: true })
@Entity('TFCTPC', { schema: 'SANKHYA' })
export class TfctpcEntity {
  @Column('int', { primary: true, name: 'CODTIPCURSO' })
  codtipcurso: number;

  @Column('char', { name: 'DESCRTIPCURSO', nullable: true, length: 50 })
  descrtipcurso: string | null;

  @OneToMany(() => TfccurEntity, (tfccurEntity) => tfccurEntity.codtipcurso)
  tfccurs: TfccurEntity[];
}
