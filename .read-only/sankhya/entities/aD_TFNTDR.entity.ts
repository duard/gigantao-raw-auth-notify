import { Column, Entity, Index } from 'typeorm';

@Index('PK_AD_TFNTDR', ['codigo'], { unique: true })
@Entity('AD_TFNTDR', { schema: 'SANKHYA' })
export class AdTfntdrEntity {
  @Column('int', { primary: true, name: 'CODIGO' })
  codigo: number;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 100 })
  descricao: string | null;
}
