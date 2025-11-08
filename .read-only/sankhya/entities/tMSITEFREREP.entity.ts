import { Column, Entity, Index } from 'typeorm';

@Index('PK_TMSITEFREREP', ['codigo'], { unique: true })
@Entity('TMSITEFREREP', { schema: 'SANKHYA' })
export class TmsitefrerepEntity {
  @Column('int', { primary: true, name: 'CODIGO' })
  codigo: number;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 100 })
  descricao: string | null;

  @Column('varchar', { name: 'CREDEB', nullable: true, length: 10 })
  credeb: string | null;
}
