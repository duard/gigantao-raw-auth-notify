import { Column, Entity, Index } from 'typeorm';

@Index('PK_TGFACT', ['nunota', 'sequencia', 'dhocor', 'hract'], {
  unique: true,
})
@Entity('TGFACT', { schema: 'SANKHYA' })
export class TgfactEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('datetime', { primary: true, name: 'DHOCOR' })
  dhocor: Date;

  @Column('int', { primary: true, name: 'HRACT' })
  hract: number;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('smallint', { name: 'NOTAQUALIDADE', nullable: true })
  notaqualidade: number | null;

  @Column('smallint', { name: 'NOTAPONTUAL', nullable: true })
  notapontual: number | null;

  @Column('char', {
    name: 'REFERENCIA',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  referencia: string | null;

  @Column('text', { name: 'OCORRENCIAS', nullable: true })
  ocorrencias: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;
}
