import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSLSVM', ['id'], { unique: true })
@Entity('TSLSVM', { schema: 'SANKHYA' })
export class TslsvmEntity {
  @Column('varchar', { primary: true, name: 'ID', length: 400 })
  id: string;

  @Column('varchar', { name: 'NOMEINSTANCIA', nullable: true, length: 100 })
  nomeinstancia: string | null;

  @Column('int', { name: 'VERSAO', nullable: true })
  versao: number | null;
}
