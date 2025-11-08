import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TfpfunEntity } from './tFPFUN.entity';

@Index('PK_TFPTRIBURENDBENEFEXT', ['codtribu'], { unique: true })
@Entity('TFPTRIBURENDBENEFEXT', { schema: 'SANKHYA' })
export class TfptriburendbenefextEntity {
  @Column('smallint', { primary: true, name: 'CODTRIBU' })
  codtribu: number;

  @Column('varchar', { name: 'DESCRICAO', length: 100 })
  descricao: string;

  @OneToMany(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.formtribu)
  tfpfuns: TfpfunEntity[];
}
