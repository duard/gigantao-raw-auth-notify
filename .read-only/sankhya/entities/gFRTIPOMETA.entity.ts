import { Column, Entity, Index, PrimaryGeneratedColumn } from 'typeorm';

@Index('GFRTIPOMETA_PK', ['codtipometa'], { unique: true })
@Entity('GFRTIPOMETA', { schema: 'SANKHYA' })
export class GfrtipometaEntity {
  @PrimaryGeneratedColumn({ type: 'int', name: 'CODTIPOMETA' })
  codtipometa: number;

  @Column('varchar', { name: 'NOMEMETA', length: 80 })
  nomemeta: string;

  @Column('float', { name: 'MARGEM', precision: 53 })
  margem: number;

  @Column('datetime', {
    name: 'DATACRIACAO',
    nullable: true,
    default: () => 'getdate()',
  })
  datacriacao: Date | null;

  @Column('float', { name: 'COMISSAO', precision: 53, default: () => '(0)' })
  comissao: number;
}
