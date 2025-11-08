import { Column, Entity, Index } from 'typeorm';

@Index('PK_TDDPIN', ['nuinstancia', 'nome'], { unique: true })
@Entity('TDDPIN', { schema: 'SANKHYA' })
export class TddpinEntity {
  @Column('int', { primary: true, name: 'NUINSTANCIA' })
  nuinstancia: number;

  @Column('varchar', { primary: true, name: 'NOME', length: 50 })
  nome: string;

  @Column('varchar', { name: 'VALOR', nullable: true, length: 3103 })
  valor: string | null;

  @Column('varchar', {
    name: 'FROMUSER',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  fromuser: string | null;
}
