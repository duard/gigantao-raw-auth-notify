import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfempEntity } from './tGFEMP.entity';

@Index(
  'PK_TGFDIRFBPFDEC',
  [
    'codemp',
    'dtinicial',
    'dtfinal',
    'reg',
    'regpai',
    'regpai2',
    'codrec',
    'cpf',
  ],
  { unique: true },
)
@Entity('TGFDIRFBPFDEC', { schema: 'SANKHYA' })
export class TgfdirfbpfdecEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTINICIAL' })
  dtinicial: Date;

  @Column('datetime', { primary: true, name: 'DTFINAL' })
  dtfinal: Date;

  @Column('varchar', {
    primary: true,
    name: 'REG',
    length: 6,
    default: () => "'BPFDEC'",
  })
  reg: string;

  @Column('varchar', {
    primary: true,
    name: 'REGPAI',
    length: 5,
    default: () => "'IDREC'",
  })
  regpai: string;

  @Column('varchar', {
    primary: true,
    name: 'REGPAI2',
    length: 5,
    default: () => "'DECPJ'",
  })
  regpai2: string;

  @Column('varchar', { primary: true, name: 'CODREC', length: 4 })
  codrec: string;

  @Column('varchar', { primary: true, name: 'CPF', length: 11 })
  cpf: string;

  @Column('varchar', { name: 'NOME', nullable: true, length: 150 })
  nome: string | null;

  @Column('datetime', { name: 'DTMOLESTIAGRAVE', nullable: true })
  dtmolestiagrave: Date | null;

  @Column('char', { name: 'IDALIMENTANDO', length: 1, default: () => "'N'" })
  idalimentando: string;

  @Column('char', { name: 'IDPREVCOMP', length: 1, default: () => "'N'" })
  idprevcomp: string;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfdirfbpfdecs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;
}
