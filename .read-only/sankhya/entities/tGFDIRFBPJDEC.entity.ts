import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfempEntity } from './tGFEMP.entity';

@Index(
  'PK_TGFDIRFBPJDEC',
  [
    'codemp',
    'dtinicial',
    'dtfinal',
    'reg',
    'regpai',
    'regpai2',
    'codrec',
    'cnpj',
  ],
  { unique: true },
)
@Entity('TGFDIRFBPJDEC', { schema: 'SANKHYA' })
export class TgfdirfbpjdecEntity {
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
    default: () => "'BPJDEC'",
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

  @Column('varchar', { primary: true, name: 'CNPJ', length: 14 })
  cnpj: string;

  @Column('varchar', { name: 'NOME', nullable: true, length: 150 })
  nome: string | null;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfdirfbpjdecs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;
}
