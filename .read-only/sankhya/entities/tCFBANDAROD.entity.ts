import { Column, Entity, Index } from 'typeorm';

@Index('PK_TCFBANDAROD', ['codbandarod'], { unique: true })
@Entity('TCFBANDAROD', { schema: 'SANKHYA' })
export class TcfbandarodEntity {
  @Column('int', { primary: true, name: 'CODBANDAROD' })
  codbandarod: number;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 100 })
  descricao: string | null;
}
