import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TwfiexeEntity } from './tWFIEXE.entity';
import { TwfiprnEntity } from './tWFIPRN.entity';

@Index('PK_TWFITAR', ['idinstprn', 'idinsttar'], { unique: true })
@Index('TWFITAR_IDX_001', ['codusudono', 'dhconclusao'], {})
@Entity('TWFITAR', { schema: 'SANKHYA' })
export class TwfitarEntity {
  @Column('int', { primary: true, name: 'IDINSTPRN' })
  idinstprn: number;

  @Column('int', { primary: true, name: 'IDINSTTAR' })
  idinsttar: number;

  @Column('varchar', { name: 'IDELEMENTO', length: 100 })
  idelemento: string;

  @Column('datetime', { name: 'DHCRIACAO', nullable: true })
  dhcriacao: Date | null;

  @Column('datetime', { name: 'DHACEITE', nullable: true })
  dhaceite: Date | null;

  @Column('datetime', { name: 'DHCONCLUSAO', nullable: true })
  dhconclusao: Date | null;

  @Column('smallint', { name: 'CODUSUDONO', nullable: true })
  codusudono: number | null;

  @Column('int', { name: 'CODUSUSOLICITANTE', nullable: true })
  codususolicitante: number | null;

  @Column('varchar', { name: 'SITUACAOEXEC', nullable: true, length: 1 })
  situacaoexec: string | null;

  @Column('datetime', { name: 'DHVENCIMENTO', nullable: true })
  dhvencimento: Date | null;

  @Column('float', { name: 'PERCDECORRIDO', nullable: true, precision: 53 })
  percdecorrido: number | null;

  @Column('varchar', { name: 'SITUACAO', nullable: true, length: 1 })
  situacao: string | null;

  @Column('float', { name: 'TEMPODECORRIDO', nullable: true, precision: 53 })
  tempodecorrido: number | null;

  @Column('float', { name: 'TEMPOLIMITE', nullable: true, precision: 53 })
  tempolimite: number | null;

  @Column('int', { name: 'CODUSUALTER', nullable: true })
  codusualter: number | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @OneToMany(() => TwfiexeEntity, (twfiexeEntity) => twfiexeEntity.twfitar)
  twfiexes: TwfiexeEntity[];

  @ManyToOne(() => TwfiprnEntity, (twfiprnEntity) => twfiprnEntity.twfitars)
  @JoinColumn([{ name: 'IDINSTPRN', referencedColumnName: 'idinstprn' }])
  idinstprn2: TwfiprnEntity;
}
