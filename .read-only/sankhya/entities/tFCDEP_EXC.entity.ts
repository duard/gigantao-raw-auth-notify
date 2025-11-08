import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFCDEP_EXC', ['nucurriculo', 'sequencia', 'dhexclusao'], {
  unique: true,
})
@Entity('TFCDEP_EXC', { schema: 'SANKHYA' })
export class TfcdepExcEntity {
  @Column('datetime', { primary: true, name: 'DHEXCLUSAO' })
  dhexclusao: Date;

  @Column('int', { primary: true, name: 'NUCURRICULO' })
  nucurriculo: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('smallint', { name: 'GRAUPARENTESCO' })
  grauparentesco: number;

  @Column('datetime', { name: 'DTNASC' })
  dtnasc: Date;

  @Column('char', { name: 'SEXO', length: 1, default: () => "'M'" })
  sexo: string;
}
