import {
  Column,
  Entity,
  Index,
  JoinColumn,
  ManyToOne,
  OneToMany,
} from 'typeorm';
import { TwfihisEntity } from './tWFIHIS.entity';
import { TwfprnEntity } from './tWFPRN.entity';
import { TwfitarEntity } from './tWFITAR.entity';

@Index('PK_TWFIPRN', ['idinstprn'], { unique: true })
@Entity('TWFIPRN', { schema: 'SANKHYA' })
export class TwfiprnEntity {
  @Column('int', { primary: true, name: 'IDINSTPRN' })
  idinstprn: number;

  @Column('datetime', { name: 'DHINCLUSAO', nullable: true })
  dhinclusao: Date | null;

  @Column('datetime', { name: 'DHCONCLUSAO', nullable: true })
  dhconclusao: Date | null;

  @Column('smallint', { name: 'CODUSUINC', nullable: true })
  codusuinc: number | null;

  @Column('varchar', { name: 'SITUACAO', nullable: true, length: 1 })
  situacao: string | null;

  @Column('datetime', { name: 'DHVENCIMENTO', nullable: true })
  dhvencimento: Date | null;

  @Column('float', { name: 'TEMPODECORRIDO', nullable: true, precision: 53 })
  tempodecorrido: number | null;

  @Column('float', { name: 'PERCDECORRIDO', nullable: true, precision: 53 })
  percdecorrido: number | null;

  @Column('float', { name: 'TEMPOLIMITE', nullable: true, precision: 53 })
  tempolimite: number | null;

  @Column('int', { name: 'SLAATUAL', nullable: true })
  slaatual: number | null;

  @Column('int', { name: 'IDPRNMESTRE', nullable: true })
  idprnmestre: number | null;

  @Column('varchar', { name: 'SITUACAOEXEC', nullable: true, length: 1 })
  situacaoexec: string | null;

  @Column('varchar', { name: 'OBSCANCEL', nullable: true, length: 250 })
  obscancel: string | null;

  @Column('int', { name: 'CODUSUCANCEL', nullable: true })
  codusucancel: number | null;

  @OneToMany(() => TwfihisEntity, (twfihisEntity) => twfihisEntity.idinstprn2)
  twfihis: TwfihisEntity[];

  @ManyToOne(() => TwfprnEntity, (twfprnEntity) => twfprnEntity.twfiprns)
  @JoinColumn([
    { name: 'CODPRN', referencedColumnName: 'codprn' },
    { name: 'VERSAO', referencedColumnName: 'versao' },
  ])
  twfprn: TwfprnEntity;

  @OneToMany(() => TwfitarEntity, (twfitarEntity) => twfitarEntity.idinstprn2)
  twfitars: TwfitarEntity[];
}
