import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPDOCSIGN', ['id', 'codemp', 'codfunc'], { unique: true })
@Entity('TFPDOCSIGN', { schema: 'SANKHYA' })
export class TfpdocsignEntity {
  @Column('int', { primary: true, name: 'ID' })
  id: number;

  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('varchar', { name: 'FILETYPE', length: 20 })
  filetype: string;

  @Column('varchar', { name: 'FILENAME', length: 50 })
  filename: string;

  @Column('image', { name: 'ANEXO' })
  anexo: Buffer;

  @Column('datetime', {
    name: 'DHALTER',
    nullable: true,
    default: () => 'getdate()',
  })
  dhalter: Date | null;
}
