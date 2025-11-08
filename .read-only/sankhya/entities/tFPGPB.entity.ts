import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TfpfbeEntity } from './tFPFBE.entity';

@Index('PK_TFPGPB', ['codgru'], { unique: true })
@Entity('TFPGPB', { schema: 'SANKHYA' })
export class TfpgpbEntity {
  @Column('smallint', { primary: true, name: 'CODGRU' })
  codgru: number;

  @Column('varchar', { name: 'DESCRICAO', length: 100 })
  descricao: string;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @OneToMany(() => TfpfbeEntity, (tfpfbeEntity) => tfpfbeEntity.codgru)
  tfpfbes: TfpfbeEntity[];
}
