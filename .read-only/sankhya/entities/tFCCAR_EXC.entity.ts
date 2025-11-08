import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFCCAR_EXC', ['nucurriculo', 'codcargo', 'dhexclusao'], {
  unique: true,
})
@Entity('TFCCAR_EXC', { schema: 'SANKHYA' })
export class TfccarExcEntity {
  @Column('datetime', { primary: true, name: 'DHEXCLUSAO' })
  dhexclusao: Date;

  @Column('int', { primary: true, name: 'NUCURRICULO' })
  nucurriculo: number;

  @Column('int', { primary: true, name: 'CODCARGO' })
  codcargo: number;
}
