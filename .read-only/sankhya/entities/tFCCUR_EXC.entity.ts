import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFCCUR_EXC', ['nucurriculo', 'sequencia', 'dhexclusao'], {
  unique: true,
})
@Entity('TFCCUR_EXC', { schema: 'SANKHYA' })
export class TfccurExcEntity {
  @Column('datetime', { primary: true, name: 'DHEXCLUSAO' })
  dhexclusao: Date;

  @Column('int', { primary: true, name: 'NUCURRICULO' })
  nucurriculo: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'CODTIPCURSO' })
  codtipcurso: number;

  @Column('char', { name: 'TITULO', length: 100 })
  titulo: string;

  @Column('datetime', { name: 'DATINICIO' })
  datinicio: Date;

  @Column('datetime', { name: 'DATFIM', nullable: true })
  datfim: Date | null;

  @Column('int', { name: 'CARGAHORARIA', nullable: true })
  cargahoraria: number | null;

  @Column('char', { name: 'LOCAL', nullable: true, length: 200 })
  local: string | null;
}
