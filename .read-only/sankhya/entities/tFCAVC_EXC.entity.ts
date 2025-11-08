import { Column, Entity, Index } from 'typeorm';

@Index(
  'PK_TFCAVC_EXC',
  [
    'nucurriculo',
    'codavaliacao',
    'dtavaliacao',
    'codusuavaliacao',
    'dhexclusao',
  ],
  { unique: true },
)
@Entity('TFCAVC_EXC', { schema: 'SANKHYA' })
export class TfcavcExcEntity {
  @Column('datetime', { primary: true, name: 'DHEXCLUSAO' })
  dhexclusao: Date;

  @Column('int', { primary: true, name: 'NUCURRICULO' })
  nucurriculo: number;

  @Column('int', { primary: true, name: 'CODAVALIACAO' })
  codavaliacao: number;

  @Column('datetime', { primary: true, name: 'DTAVALIACAO' })
  dtavaliacao: Date;

  @Column('smallint', { primary: true, name: 'CODUSUAVALIACAO' })
  codusuavaliacao: number;
}
