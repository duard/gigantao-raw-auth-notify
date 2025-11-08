import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFCINFCOM', ['codigo'], { unique: true })
@Entity('TGFCINFCOM', { schema: 'SANKHYA' })
export class TgfcinfcomEntity {
  @Column('varchar', { primary: true, name: 'CODIGO', length: 10 })
  codigo: string;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 150 })
  descricao: string | null;

  @Column('varchar', {
    name: 'ATIVO',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  ativo: string | null;
}
