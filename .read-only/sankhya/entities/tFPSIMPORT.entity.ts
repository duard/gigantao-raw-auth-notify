import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPSIMPORT', ['dhinc', 'codemp', 'chave'], { unique: true })
@Entity('TFPSIMPORT', { schema: 'SANKHYA' })
export class TfpsimportEntity {
  @Column('datetime', {
    primary: true,
    name: 'DHINC',
    default: () => 'getdate()',
  })
  dhinc: Date;

  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('varchar', { primary: true, name: 'CHAVE', length: 11 })
  chave: string;

  @Column('varchar', { name: 'TIPOEVENTO', nullable: true, length: 11 })
  tipoevento: string | null;
}
