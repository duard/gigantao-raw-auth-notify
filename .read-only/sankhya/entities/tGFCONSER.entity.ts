import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { Tgfcoi2Entity } from './tGFCOI2.entity';

@Index('PK_TGFCONSER', ['nuconf', 'seqconf', 'serie'], { unique: true })
@Entity('TGFCONSER', { schema: 'SANKHYA' })
export class TgfconserEntity {
  @Column('int', { primary: true, name: 'NUCONF' })
  nuconf: number;

  @Column('smallint', { primary: true, name: 'SEQCONF' })
  seqconf: number;

  @Column('varchar', { primary: true, name: 'SERIE', length: 100 })
  serie: string;

  @Column('int', { name: 'CODPROD' })
  codprod: number;

  @Column('smallint', { name: 'ATUALESTOQUE', default: () => '(-1)' })
  atualestoque: number;

  @Column('varchar', {
    name: 'TIPCONTEST',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  tipcontest: string | null;

  @Column('varchar', { name: 'INTEGSERCON', nullable: true, length: 1 })
  integsercon: string | null;

  @Column('int', { name: 'NUMCONTRATO', nullable: true })
  numcontrato: number | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('datetime', { name: 'DTALTER', nullable: true })
  dtalter: Date | null;

  @Column('datetime', { name: 'DTVEICULA', nullable: true })
  dtveicula: Date | null;

  @Column('varchar', { name: 'SMARTCARD', nullable: true, length: 60 })
  smartcard: string | null;

  @Column('varchar', { name: 'SERIEFAB', nullable: true, length: 60 })
  seriefab: string | null;

  @Column('char', { name: 'AVARIADO', nullable: true, length: 1 })
  avariado: string | null;

  @ManyToOne(() => Tgfcoi2Entity, (tgfcoi2Entity) => tgfcoi2Entity.tgfconsers, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NUCONF', referencedColumnName: 'nuconf' },
    { name: 'SEQCONF', referencedColumnName: 'seqconf' },
  ])
  tgfcoi: Tgfcoi2Entity;
}
