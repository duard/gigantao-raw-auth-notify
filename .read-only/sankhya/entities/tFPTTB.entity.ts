import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPTTB', ['tipotab'], { unique: true })
@Entity('TFPTTB', { schema: 'SANKHYA' })
export class TfpttbEntity {
  @Column('varchar', { primary: true, name: 'TIPOTAB', length: 2 })
  tipotab: string;

  @Column('char', { name: 'DESCRTAB', length: 36 })
  descrtab: string;

  @Column('char', { name: 'CATEGTAB', length: 1, default: () => "'P'" })
  categtab: string;

  @Column('smallint', { name: 'CODEVEINSS', nullable: true })
  codeveinss: number | null;

  @Column('float', { name: 'PERCINSS', nullable: true, precision: 53 })
  percinss: number | null;

  @Column('smallint', { name: 'REGFISCAL', nullable: true })
  regfiscal: number | null;

  @Column('smallint', { name: 'CODEVEDEBADIAN', nullable: true })
  codevedebadian: number | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;
}
