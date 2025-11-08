import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPGRUEVE', ['id'], { unique: true })
@Entity('TFPGRUEVE', { schema: 'SANKHYA' })
export class TfpgrueveEntity {
  @Column('int', { primary: true, name: 'ID' })
  id: number;

  @Column('varchar', { name: 'DESCRICAO', length: 400 })
  descricao: string;
}
