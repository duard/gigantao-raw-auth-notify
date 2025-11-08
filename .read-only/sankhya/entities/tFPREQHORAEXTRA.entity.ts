import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPREQHORAEXTRA', ['id'], { unique: true })
@Entity('TFPREQHORAEXTRA', { schema: 'SANKHYA' })
export class TfpreqhoraextraEntity {
  @Column('int', { primary: true, name: 'ID' })
  id: number;

  @Column('smallint', { name: 'CODEMP' })
  codemp: number;

  @Column('int', { name: 'CODFUNC' })
  codfunc: number;

  @Column('datetime', { name: 'DTHORAEXTRA' })
  dthoraextra: Date;

  @Column('smallint', { name: 'QTDMINUTOS' })
  qtdminutos: number;

  @Column('varchar', { name: 'MOTIVO', length: 200 })
  motivo: string;

  @Column('varchar', { name: 'STATUS', length: 1, default: () => "'P'" })
  status: string;

  @Column('datetime', {
    name: 'DTALTER',
    nullable: true,
    default: () => 'getdate()',
  })
  dtalter: Date | null;
}
