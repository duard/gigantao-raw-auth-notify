import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPPAIS', ['codpais'], { unique: true })
@Entity('TFPPAIS', { schema: 'SANKHYA' })
export class TfppaisEntity {
  @Column('int', { primary: true, name: 'CODPAIS' })
  codpais: number;

  @Column('datetime', { name: 'DTCRIACAO', nullable: true })
  dtcriacao: Date | null;

  @Column('datetime', { name: 'DTEXTINCAO', nullable: true })
  dtextincao: Date | null;
}
