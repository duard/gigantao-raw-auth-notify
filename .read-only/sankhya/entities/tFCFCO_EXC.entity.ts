import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFCFCO_EXC', ['nucurriculo', 'codfuncao', 'dhexclusao'], {
  unique: true,
})
@Entity('TFCFCO_EXC', { schema: 'SANKHYA' })
export class TfcfcoExcEntity {
  @Column('datetime', { primary: true, name: 'DHEXCLUSAO' })
  dhexclusao: Date;

  @Column('int', { primary: true, name: 'CODFUNCAO' })
  codfuncao: number;

  @Column('int', { primary: true, name: 'NUCURRICULO' })
  nucurriculo: number;
}
