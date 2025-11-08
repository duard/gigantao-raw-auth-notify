import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPNPSRESP', ['codemp', 'codfunc', 'dtresposta'], { unique: true })
@Entity('TFPNPSRESP', { schema: 'SANKHYA' })
export class TfpnpsrespEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('datetime', { primary: true, name: 'DTRESPOSTA' })
  dtresposta: Date;
}
