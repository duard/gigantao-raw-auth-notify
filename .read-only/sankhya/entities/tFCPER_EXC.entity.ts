import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFCPER_EXC', ['nucurriculo', 'codperfil', 'dhexclusao'], {
  unique: true,
})
@Entity('TFCPER_EXC', { schema: 'SANKHYA' })
export class TfcperExcEntity {
  @Column('datetime', { primary: true, name: 'DHEXCLUSAO' })
  dhexclusao: Date;

  @Column('int', { primary: true, name: 'NUCURRICULO' })
  nucurriculo: number;

  @Column('int', { primary: true, name: 'CODPERFIL' })
  codperfil: number;
}
