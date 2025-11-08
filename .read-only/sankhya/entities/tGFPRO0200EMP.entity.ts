import { Column, Entity, Index } from 'typeorm';

@Index('TGFPRO0200EMP_PK', ['codprod', 'codemp', 'dtref', 'aliqicms'], {
  unique: true,
})
@Entity('TGFPRO0200EMP', { schema: 'SANKHYA' })
export class Tgfpro0200EmpEntity {
  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('int', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('float', { primary: true, name: 'ALIQICMS', precision: 53 })
  aliqicms: number;
}
