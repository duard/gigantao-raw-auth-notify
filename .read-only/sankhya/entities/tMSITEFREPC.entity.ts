import { Column, Entity, Index } from 'typeorm';

@Index('PK_TMSITEFREPC', ['codigo'], { unique: true })
@Entity('TMSITEFREPC', { schema: 'SANKHYA' })
export class TmsitefrepcEntity {
  @Column('int', { primary: true, name: 'CODIGO' })
  codigo: number;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 100 })
  descricao: string | null;

  @Column('varchar', { name: 'CREDEB', nullable: true, length: 10 })
  credeb: string | null;
}
