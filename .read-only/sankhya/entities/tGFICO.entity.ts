import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm';
import { TgfiteEntity } from './tGFITE.entity';

@Index('PK_TGFICO', ['nunotaco', 'sequenciaco'], { unique: true })
@Entity('TGFICO', { schema: 'SANKHYA' })
export class TgficoEntity {
  @Column('int', { primary: true, name: 'NUNOTACO' })
  nunotaco: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIACO' })
  sequenciaco: number;

  @Column('int', { name: 'NUNOTAPO' })
  nunotapo: number;

  @Column('smallint', { name: 'SEQUENCIAPO' })
  sequenciapo: number;

  @Column('varchar', { name: 'SUFIXOPO', length: 2 })
  sufixopo: string;

  @Column('datetime', { name: 'DTESTDESP' })
  dtestdesp: Date;

  @Column('varchar', { name: 'AMENDCODE', length: 2 })
  amendcode: string;

  @Column('char', { name: 'SHIPMODE', length: 1, default: () => "'S'" })
  shipmode: string;

  @Column('float', { name: 'SUPPLANQTY', precision: 53, default: () => '(0)' })
  supplanqty: number;

  @Column('float', { name: 'BKORDERQTY', precision: 53, default: () => '(0)' })
  bkorderqty: number;

  @Column('float', { name: 'PROCQTY', precision: 53, default: () => '(0)' })
  procqty: number;

  @Column('float', { name: 'PACKQTY', precision: 53, default: () => '(0)' })
  packqty: number;

  @Column('float', { name: 'SHIPQTY', precision: 53, default: () => '(0)' })
  shipqty: number;

  @Column('datetime', { name: 'LASTSHIP' })
  lastship: Date;

  @Column('varchar', { name: 'LASTINVOICE', length: 10 })
  lastinvoice: string;

  @Column('char', { name: 'FLAGCODE', length: 1 })
  flagcode: string;

  @Column('datetime', { name: 'DTSTATUS' })
  dtstatus: Date;

  @Column('float', {
    name: 'QTDNEGORIGINAL',
    precision: 53,
    default: () => '(0)',
  })
  qtdnegoriginal: number;

  @Column('varchar', { name: 'AMENDCODECO', nullable: true, length: 2 })
  amendcodeco: string | null;

  @Column('varchar', { name: 'AMENDCODESR', nullable: true, length: 2 })
  amendcodesr: string | null;

  @Column('varchar', { name: 'AMENDCODEIV', nullable: true, length: 2 })
  amendcodeiv: string | null;

  @OneToOne(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.tgfico, {
    onDelete: 'CASCADE',
  })
  @JoinColumn([
    { name: 'NUNOTACO', referencedColumnName: 'nunota' },
    { name: 'SEQUENCIACO', referencedColumnName: 'sequencia' },
  ])
  tgfite: TgfiteEntity;
}
