import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPAGNOC', ['codagnoc'], { unique: true })
@Entity('TFPAGNOC', { schema: 'SANKHYA' })
export class TfpagnocEntity {
  @Column('varchar', { primary: true, name: 'CODAGNOC', length: 10 })
  codagnoc: string;

  @Column('varchar', { name: 'DSCAGNOC', length: 200 })
  dscagnoc: string;

  @Column('char', {
    name: 'ATIVO',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  ativo: string | null;
}
