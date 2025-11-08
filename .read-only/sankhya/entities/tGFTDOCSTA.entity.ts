import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfcutnumEntity } from './tGFCUTNUM.entity';
import { TgfdvcabEntity } from './tGFDVCAB.entity';

@Index('PK_TGFTDOCSTA', ['codemp', 'referencia', 'serienota', 'codmoddoc'], {
  unique: true,
})
@Entity('TGFTDOCSTA', { schema: 'SANKHYA' })
export class TgftdocstaEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('varchar', { primary: true, name: 'SERIENOTA', length: 3 })
  serienota: string;

  @Column('smallint', { primary: true, name: 'CODMODDOC' })
  codmoddoc: number;

  @Column('int', { name: 'QTDAPRO', nullable: true })
  qtdapro: number | null;

  @Column('int', { name: 'QTDCANC', nullable: true })
  qtdcanc: number | null;

  @Column('int', { name: 'QTDDENE', nullable: true })
  qtddene: number | null;

  @Column('int', { name: 'QTDINUT', nullable: true })
  qtdinut: number | null;

  @Column('int', { name: 'QTDTOTNUMUTIL', nullable: true })
  qtdtotnumutil: number | null;

  @OneToMany(
    () => TgfcutnumEntity,
    (tgfcutnumEntity) => tgfcutnumEntity.tgftdocsta,
  )
  tgfcutnums: TgfcutnumEntity[];

  @ManyToOne(
    () => TgfdvcabEntity,
    (tgfdvcabEntity) => tgfdvcabEntity.tgftdocstas,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'REFERENCIA', referencedColumnName: 'referencia' },
  ])
  tgfdvcab: TgfdvcabEntity;
}
