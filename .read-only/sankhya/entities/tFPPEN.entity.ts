import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgffinEntity } from './tGFFIN.entity';

@Index(
  'PK_TFPPEN',
  ['codemp', 'codfunc', 'referencia', 'tipfolha', 'sequencia'],
  { unique: true },
)
@Entity('TFPPEN', { schema: 'SANKHYA' })
export class TfppenEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('varchar', { primary: true, name: 'TIPFOLHA', length: 1 })
  tipfolha: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'CPF', nullable: true, length: 11 })
  cpf: string | null;

  @Column('datetime', { name: 'DTNASC', nullable: true })
  dtnasc: Date | null;

  @Column('varchar', { name: 'NOMEDEPEND', nullable: true, length: 70 })
  nomedepend: string | null;

  @Column('float', { name: 'VLRPENSAO', nullable: true, precision: 53 })
  vlrpensao: number | null;

  @Column('float', { name: 'PERCREPASSE', nullable: true, precision: 53 })
  percrepasse: number | null;

  @Column('datetime', { name: 'DTPAGAMENTO', nullable: true })
  dtpagamento: Date | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('int', { name: 'CODFUNCPRINC', nullable: true })
  codfuncprinc: number | null;

  @ManyToOne(() => TgffinEntity, (tgffinEntity) => tgffinEntity.tfppens, {
    onDelete: 'SET NULL',
  })
  @JoinColumn([{ name: 'NUFIN', referencedColumnName: 'nufin' }])
  nufin: TgffinEntity;
}
