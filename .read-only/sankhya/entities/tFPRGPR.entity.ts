import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpempEntity } from './tFPEMP.entity';

@Index('PK_TFPRGPR', ['codregpreliminar'], { unique: true })
@Index('TFPRGPR_I01', ['codemp', 'cpf'], { unique: true })
@Entity('TFPRGPR', { schema: 'SANKHYA' })
export class TfprgprEntity {
  @Column('int', { primary: true, name: 'CODREGPRELIMINAR' })
  codregpreliminar: number;

  @Column('smallint', { name: 'CODEMP' })
  codemp: number;

  @Column('varchar', { name: 'NOMEFUNC', nullable: true, length: 100 })
  nomefunc: string | null;

  @Column('varchar', { name: 'CPF', length: 11 })
  cpf: string;

  @Column('datetime', { name: 'DTNASC' })
  dtnasc: Date;

  @Column('datetime', { name: 'DTADM' })
  dtadm: Date;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('numeric', {
    name: 'MATRICULA',
    nullable: true,
    precision: 12,
    scale: 0,
  })
  matricula: number | null;

  @Column('int', { name: 'CODCATEGESOCIAL', nullable: true })
  codcategesocial: number | null;

  @Column('float', { name: 'SALPROFESSOR', nullable: true, precision: 53 })
  salprofessor: number | null;

  @Column('float', { name: 'SALBASE', nullable: true, precision: 53 })
  salbase: number | null;

  @Column('char', {
    name: 'TIPSAL',
    nullable: true,
    length: 1,
    default: () => "'1'",
  })
  tipsal: string | null;

  @Column('smallint', { name: 'VINCULO', nullable: true })
  vinculo: number | null;

  @Column('datetime', { name: 'DTTERMINO', nullable: true })
  dttermino: Date | null;

  @Column('int', { name: 'CODCAR', nullable: true })
  codcar: number | null;

  @Column('int', { name: 'CODFUNCAO', nullable: true })
  codfuncao: number | null;

  @Column('int', { name: 'CODFCO', nullable: true })
  codfco: number | null;

  @Column('int', { name: 'CODFUNC', nullable: true })
  codfunc: number | null;

  @Column('varchar', { name: 'NATATIVIDADE', nullable: true, length: 1 })
  natatividade: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfprgprs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TfpempEntity, (tfpempEntity) => tfpempEntity.tfprgprs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TfpempEntity;
}
