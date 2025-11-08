import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPHFI', ['referencia', 'codregfis'], { unique: true })
@Entity('TFPHFI', { schema: 'SANKHYA' })
export class TfphfiEntity {
  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('smallint', { primary: true, name: 'CODREGFIS' })
  codregfis: number;

  @Column('int', { name: 'CODSAT', nullable: true })
  codsat: number | null;

  @Column('float', { name: 'PERCINSS', nullable: true, precision: 53 })
  percinss: number | null;

  @Column('int', { name: 'CODGRPS', nullable: true })
  codgrps: number | null;

  @Column('float', { name: 'TAXAGRPS', nullable: true, precision: 53 })
  taxagrps: number | null;

  @Column('float', { name: 'TAXASEG', nullable: true, precision: 53 })
  taxaseg: number | null;

  @Column('int', { name: 'ATIVIRF', nullable: true })
  ativirf: number | null;

  @Column('int', { name: 'ATIVIBGE', nullable: true })
  ativibge: number | null;

  @Column('int', { name: 'ATIVINSS', nullable: true })
  ativinss: number | null;

  @Column('float', { name: 'PERPAGTOFGTS', nullable: true, precision: 53 })
  perpagtofgts: number | null;

  @Column('int', { name: 'CODPAGGPS', default: () => '(0)' })
  codpaggps: number;

  @Column('float', {
    name: 'PERCISEFIL',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  percisefil: number | null;

  @Column('smallint', { name: 'OPTSIMPLES', default: () => '(1)' })
  optsimples: number;

  @Column('float', {
    name: 'PERFGTSMENOR',
    precision: 53,
    default: () => '(0)',
  })
  perfgtsmenor: number;

  @Column('float', { name: 'RAT15', nullable: true, precision: 53 })
  rat15: number | null;

  @Column('float', { name: 'RAT20', nullable: true, precision: 53 })
  rat20: number | null;

  @Column('float', { name: 'RAT25', nullable: true, precision: 53 })
  rat25: number | null;

  @Column('float', { name: 'FATORFAP', nullable: true, precision: 53 })
  fatorfap: number | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('float', { name: 'VLRINSSRECBRUTA', nullable: true, precision: 53 })
  vlrinssrecbruta: number | null;

  @Column('float', { name: 'PERCINSSPATRONAL', nullable: true, precision: 53 })
  percinsspatronal: number | null;

  @Column('float', { name: 'VLRINSSRECBRUTA13', nullable: true, precision: 53 })
  vlrinssrecbruta13: number | null;

  @Column('int', { name: 'SALMINVIGE', nullable: true })
  salminvige: number | null;

  @Column('char', { name: 'ORDEMCOMPDARF', nullable: true, length: 5 })
  ordemcompdarf: string | null;

  @Column('varchar', { name: 'EMPCONTPIS', length: 1, default: () => "'N'" })
  empcontpis: string;

  @Column('float', {
    name: 'PERCPISFOLHA',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  percpisfolha: number | null;

  @Column('int', { name: 'CODRECEITA', nullable: true, default: () => '(0)' })
  codreceita: number | null;

  @Column('char', { name: 'ISEMPRESACONTRIBUINTE', nullable: true, length: 1 })
  isempresacontribuinte: string | null;

  @Column('int', { name: 'CODRECEITASOBFOLHA', nullable: true })
  codreceitasobfolha: number | null;

  @Column('datetime', { name: 'DTISENCAOLICMAT', nullable: true })
  dtisencaolicmat: Date | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfphfis)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
