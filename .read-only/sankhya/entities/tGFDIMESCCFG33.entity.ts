import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfdimescEntity } from './tGFDIMESC.entity';

@Index('PK_TGFDIMESCCFG33', ['codemp', 'dtref', 'tpfundorecolher'], {
  unique: true,
})
@Entity('TGFDIMESCCFG33', { schema: 'SANKHYA' })
export class Tgfdimesccfg33Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', { primary: true, name: 'TPFUNDORECOLHER', length: 3 })
  tpfundorecolher: string;

  @Column('smallint', { name: 'CODRECEITA' })
  codreceita: number;

  @Column('smallint', { name: 'DIAVENCIMENTO' })
  diavencimento: number;

  @Column('smallint', { name: 'CODCLASSEVENCIM' })
  codclassevencim: number;

  @Column('varchar', { name: 'NROACORDOTTD', length: 15 })
  nroacordottd: string;

  @Column('varchar', { name: 'ATIVO', length: 1, default: () => "'S'" })
  ativo: string;

  @ManyToOne(
    () => TgfdimescEntity,
    (tgfdimescEntity) => tgfdimescEntity.tgfdimesccfgs2,
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
  ])
  tgfdimesc: TgfdimescEntity;
}
