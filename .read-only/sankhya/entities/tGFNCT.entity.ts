import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TgfinctEntity } from './tGFINCT.entity';
import { TgfcabEntity } from './tGFCAB.entity';

@Index('PK_TGFNCT', ['nunota', 'sequencia'], { unique: true })
@Index('TGFNCT_INUFIN', ['nufin'], {})
@Entity('TGFNCT', { schema: 'SANKHYA' })
export class TgfnctEntity {
  @Column('int', { primary: true, name: 'NUNOTA' })
  nunota: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'NUMERO', nullable: true, length: 20 })
  numero: string | null;

  @Column('datetime', { name: 'DTEMISSAO' })
  dtemissao: Date;

  @Column('char', { name: 'SERIE', nullable: true, length: 3 })
  serie: string | null;

  @Column('money', { name: 'VLRNOTA', default: () => '(0)' })
  vlrnota: number;

  @Column('int', { name: 'CODMODDOC', default: () => '(1)' })
  codmoddoc: number;

  @Column('int', { name: 'NUFIN', nullable: true })
  nufin: number | null;

  @Column('float', { name: 'BASEICMS', nullable: true, precision: 53 })
  baseicms: number | null;

  @Column('float', { name: 'VLRICMS', nullable: true, precision: 53 })
  vlricms: number | null;

  @Column('float', { name: 'BASEST', nullable: true, precision: 53 })
  basest: number | null;

  @Column('float', { name: 'VLRST', nullable: true, precision: 53 })
  vlrst: number | null;

  @Column('float', { name: 'VLRTOTPROD', nullable: true, precision: 53 })
  vlrtotprod: number | null;

  @Column('smallint', { name: 'CFOP', nullable: true })
  cfop: number | null;

  @Column('varchar', { name: 'CHAVENFE', nullable: true, length: 44 })
  chavenfe: string | null;

  @Column('varchar', { name: 'DESCRDOC', nullable: true, length: 100 })
  descrdoc: string | null;

  @Column('varchar', { name: 'SEGCODBAR', nullable: true, length: 36 })
  segcodbar: string | null;

  @Column('float', { name: 'PESOB', nullable: true, precision: 53 })
  pesob: number | null;

  @Column('float', { name: 'PESOL', nullable: true, precision: 53 })
  pesol: number | null;

  @Column('float', { name: 'PESOLIQ', nullable: true, precision: 53 })
  pesoliq: number | null;

  @Column('float', { name: 'PESO', nullable: true, precision: 53 })
  peso: number | null;

  @Column('int', { name: 'QTDVOL', nullable: true })
  qtdvol: number | null;

  @Column('int', { name: 'CODPARCREM', nullable: true })
  codparcrem: number | null;

  @Column('int', { name: 'CODPARCDEST', nullable: true })
  codparcdest: number | null;

  @OneToMany(() => TgfinctEntity, (tgfinctEntity) => tgfinctEntity.tgfnct)
  tgfincts: TgfinctEntity[];

  @ManyToOne(() => TgfcabEntity, (tgfcabEntity) => tgfcabEntity.tgfncts)
  @JoinColumn([{ name: 'NUNOTA', referencedColumnName: 'nunota' }])
  nunota2: TgfcabEntity;
}
