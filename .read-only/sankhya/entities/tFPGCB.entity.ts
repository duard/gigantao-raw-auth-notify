import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TfpfunEntity } from './tFPFUN.entity';

@Index('PK_TFPGCB', ['codgrupoctbz'], { unique: true })
@Entity('TFPGCB', { schema: 'SANKHYA' })
export class TfpgcbEntity {
  @Column('int', { primary: true, name: 'CODGRUPOCTBZ' })
  codgrupoctbz: number;

  @Column('varchar', { name: 'DESCRGRUPOCTBZ', length: 40 })
  descrgrupoctbz: string;

  @OneToMany(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.codgrupoctbz2)
  tfpfuns: TfpfunEntity[];
}
