import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPFUNANX', ['id'], { unique: true })
@Entity('TFPFUNANX', { schema: 'SANKHYA' })
export class TfpfunanxEntity {
  @Column('smallint', { primary: true, name: 'ID' })
  id: number;

  @Column('int', { name: 'CODFUNC' })
  codfunc: number;

  @Column('smallint', { name: 'CODEMP' })
  codemp: number;

  @Column('smallint', { name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'FILETYPE', nullable: true, length: 20 })
  filetype: string | null;

  @Column('varchar', { name: 'FILENAME', nullable: true, length: 50 })
  filename: string | null;

  @Column('image', { name: 'ANEXO', nullable: true })
  anexo: Buffer | null;
}
