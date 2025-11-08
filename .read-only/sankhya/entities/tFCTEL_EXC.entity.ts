import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFCTEL_EXC', ['nucurriculo', 'telefone', 'dhexclusao'], {
  unique: true,
})
@Entity('TFCTEL_EXC', { schema: 'SANKHYA' })
export class TfctelExcEntity {
  @Column('datetime', { primary: true, name: 'DHEXCLUSAO' })
  dhexclusao: Date;

  @Column('int', { primary: true, name: 'NUCURRICULO' })
  nucurriculo: number;

  @Column('varchar', { primary: true, name: 'TELEFONE', length: 13 })
  telefone: string;

  @Column('char', { name: 'OBS', nullable: true, length: 200 })
  obs: string | null;
}
