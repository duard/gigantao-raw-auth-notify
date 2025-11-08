import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPDPD2205', ['codemp', 'codfunc', 'sequencia', 'referencia'], {
  unique: true,
})
@Entity('TFPDPD2205', { schema: 'SANKHYA' })
export class Tfpdpd2205Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('datetime', { name: 'DTESOCIAL2205' })
  dtesocial2205: Date;

  @Column('varchar', { name: 'NOMEDEPEND', length: 70 })
  nomedepend: string;

  @Column('smallint', { name: 'GRAUPARENTESCO' })
  grauparentesco: number;

  @Column('varchar', { name: 'CPF', nullable: true, length: 11 })
  cpf: string | null;

  @Column('datetime', { name: 'DTNASC' })
  dtnasc: Date;

  @Column('char', { name: 'DEPENDIRF', length: 1 })
  dependirf: string;

  @Column('char', { name: 'SALFAM', length: 1 })
  salfam: string;

  @Column('char', { name: 'INCTRAB', length: 1 })
  inctrab: string;

  @Column('varchar', { name: 'DESCRDPD', nullable: true, length: 99 })
  descrdpd: string | null;
}
