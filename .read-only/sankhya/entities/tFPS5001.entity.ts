import { Column, Entity, Index, OneToMany } from 'typeorm';
import { Tfps5001InfocomplcontEntity } from './tFPS5001_INFOCOMPLCONT.entity';
import { Tfps5001InfopispasepIdeestabEntity } from './tFPS5001_INFOPISPASEP_IDEESTAB.entity';

@Index('PK_TFPS5001', ['dtref', 'codempmatriz', 'cpf', 'indapuracao'], {
  unique: true,
})
@Entity('TFPS5001', { schema: 'SANKHYA' })
export class Tfps5001Entity {
  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('smallint', { primary: true, name: 'CODEMPMATRIZ' })
  codempmatriz: number;

  @Column('varchar', { primary: true, name: 'CPF', length: 11 })
  cpf: string;

  @Column('varchar', { name: 'PERAPUR', nullable: true, length: 7 })
  perapur: string | null;

  @Column('smallint', {
    primary: true,
    name: 'INDAPURACAO',
    default: () => '(1)',
  })
  indapuracao: number;

  @Column('varchar', { name: 'TPINSC', nullable: true, length: 2 })
  tpinsc: string | null;

  @Column('varchar', { name: 'NRINSC', nullable: true, length: 14 })
  nrinsc: string | null;

  @Column('varchar', { name: 'NRRECARQBASE', nullable: true, length: 30 })
  nrrecarqbase: string | null;

  @Column('varchar', { name: 'TPINSCVINC', nullable: true, length: 2 })
  tpinscvinc: string | null;

  @Column('varchar', { name: 'NRINSCVINC', nullable: true, length: 14 })
  nrinscvinc: string | null;

  @Column('varchar', { name: 'MATRICANT', nullable: true, length: 30 })
  matricant: string | null;

  @Column('datetime', { name: 'DTADM', nullable: true })
  dtadm: Date | null;

  @Column('varchar', { name: 'DIASINTERM', nullable: true, length: 100 })
  diasinterm: string | null;

  @Column('varchar', { name: 'CLASSTRIB', nullable: true, length: 2 })
  classtrib: string | null;

  @Column('varchar', { name: 'HRSTRAB', nullable: true, length: 200 })
  hrstrab: string | null;

  @OneToMany(
    () => Tfps5001InfocomplcontEntity,
    (tfps5001InfocomplcontEntity) => tfps5001InfocomplcontEntity.tfps5,
  )
  tfps5001Infocomplconts: Tfps5001InfocomplcontEntity[];

  @OneToMany(
    () => Tfps5001InfopispasepIdeestabEntity,
    (tfps5001InfopispasepIdeestabEntity) =>
      tfps5001InfopispasepIdeestabEntity.tfps5,
  )
  tfps5001InfopispasepIdeestabs: Tfps5001InfopispasepIdeestabEntity[];
}
