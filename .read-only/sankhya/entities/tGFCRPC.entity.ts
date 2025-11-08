import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfdbpcEntity } from './tGFDBPC.entity';

@Index(
  'PK_TGFCRPC',
  ['codemp', 'perApuCred', 'origCred', 'cnpjSuc', 'cnpj', 'codCred', 'tipo'],
  {
    unique: true,
  },
)
@Entity('TGFCRPC', { schema: 'SANKHYA' })
export class TgfcrpcEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'PER_APU_CRED' })
  perApuCred: Date;

  @Column('varchar', {
    primary: true,
    name: 'ORIG_CRED',
    length: 2,
    default: () => "'01'",
  })
  origCred: string;

  @Column('varchar', { primary: true, name: 'CNPJ_SUC', length: 14 })
  cnpjSuc: string;

  @Column('varchar', { primary: true, name: 'CNPJ', length: 14 })
  cnpj: string;

  @Column('smallint', { primary: true, name: 'COD_CRED' })
  codCred: number;

  @Column('char', { primary: true, name: 'TIPO', length: 1 })
  tipo: string;

  @Column('float', { name: 'VL_CRED_APU', nullable: true, precision: 53 })
  vlCredApu: number | null;

  @Column('float', { name: 'VL_CRED_EXT_APU', nullable: true, precision: 53 })
  vlCredExtApu: number | null;

  @Column('float', { name: 'SALDO', nullable: true, precision: 53 })
  saldo: number | null;

  @OneToMany(() => TgfdbpcEntity, (tgfdbpcEntity) => tgfdbpcEntity.tgfcrpc)
  tgfdbpcs: TgfdbpcEntity[];
}
