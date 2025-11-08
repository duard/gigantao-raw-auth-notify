import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfdctfEntity } from './tGFDCTF.entity';
import { TgfempEntity } from './tGFEMP.entity';
import { Tgfdctfr11Entity } from './tGFDCTFR11.entity';
import { Tgfdctfr12Entity } from './tGFDCTFR12.entity';
import { Tgfdctfr14Entity } from './tGFDCTFR14.entity';

@Index(
  'PK_TGFDCTFR10',
  ['codemp', 'dtref', 'reg', 'cnpjcontrib', 'codreceita'],
  { unique: true },
)
@Entity('TGFDCTFR10', { schema: 'SANKHYA' })
export class Tgfdctfr10Entity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'DTREF' })
  dtref: Date;

  @Column('varchar', {
    primary: true,
    name: 'REG',
    length: 4,
    default: () => "'R10'",
  })
  reg: string;

  @Column('varchar', { primary: true, name: 'CNPJCONTRIB', length: 14 })
  cnpjcontrib: string;

  @Column('varchar', { primary: true, name: 'CODRECEITA', length: 10 })
  codreceita: string;

  @Column('varchar', { name: 'ORDEMESTB', nullable: true, length: 6 })
  ordemestb: string | null;

  @Column('varchar', { name: 'CNPJCEI', nullable: true, length: 14 })
  cnpjcei: string | null;

  @Column('float', { name: 'VALORDEBITO', nullable: true, precision: 53 })
  valordebito: number | null;

  @Column('varchar', { name: 'BALANCORED', nullable: true, length: 1 })
  balancored: string | null;

  @Column('varchar', { name: 'TIPODIVSALDO', nullable: true, length: 1 })
  tipodivsaldo: string | null;

  @Column('varchar', { name: 'DEBITOSCPINC', nullable: true, length: 1 })
  debitoscpinc: string | null;

  @Column('varchar', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @ManyToOne(() => TgfdctfEntity, (tgfdctfEntity) => tgfdctfEntity.tgfdctfrs)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'DTREF', referencedColumnName: 'dtref' },
  ])
  tgfdctf: TgfdctfEntity;

  @ManyToOne(() => TgfempEntity, (tgfempEntity) => tgfempEntity.tgfdctfrs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TgfempEntity;

  @OneToMany(
    () => Tgfdctfr11Entity,
    (tgfdctfr11Entity) => tgfdctfr11Entity.tgfdctfr,
  )
  tgfdctfrs: Tgfdctfr11Entity[];

  @OneToMany(
    () => Tgfdctfr12Entity,
    (tgfdctfr12Entity) => tgfdctfr12Entity.tgfdctfr,
  )
  tgfdctfrs2: Tgfdctfr12Entity[];

  @OneToMany(
    () => Tgfdctfr14Entity,
    (tgfdctfr14Entity) => tgfdctfr14Entity.tgfdctfr,
  )
  tgfdctfrs3: Tgfdctfr14Entity[];
}
