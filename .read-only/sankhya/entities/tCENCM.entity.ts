import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TCENCM', ['codncm', 'codexncm', 'codemp'], { unique: true })
@Entity('TCENCM', { schema: 'SANKHYA' })
export class TcencmEntity {
  @Column('varchar', { primary: true, name: 'CODNCM', length: 10 })
  codncm: string;

  @Column('varchar', { name: 'DESCRNCM', length: 60 })
  descrncm: string;

  @Column('float', { name: 'ALIQII', nullable: true, precision: 53 })
  aliqii: number | null;

  @Column('float', { name: 'ALIQIPI', nullable: true, precision: 53 })
  aliqipi: number | null;

  @Column('float', { name: 'ALIQPIS', nullable: true, precision: 53 })
  aliqpis: number | null;

  @Column('float', { name: 'ALIQCOFINS', nullable: true, precision: 53 })
  aliqcofins: number | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('smallint', { name: 'CSTIPI', nullable: true })
  cstipi: number | null;

  @Column('smallint', { name: 'CSTPIS', nullable: true })
  cstpis: number | null;

  @Column('smallint', { name: 'CSTCOFINS', nullable: true })
  cstcofins: number | null;

  @Column('char', { name: 'PROEMPREGO', length: 1, default: () => "'N'" })
  proemprego: string;

  @Column('smallint', { primary: true, name: 'CODEXNCM', default: () => '(0)' })
  codexncm: number;

  @Column('float', { name: 'VLRPAUTAIPI', precision: 53, default: () => '(0)' })
  vlrpautaipi: number;

  @Column('char', { name: 'DOCIMP', length: 1, default: () => "'0'" })
  docimp: string;

  @Column('float', { name: 'ALIQCOFINSCRED', nullable: true, precision: 53 })
  aliqcofinscred: number | null;

  @Column('smallint', { primary: true, name: 'CODEMP', default: () => '(0)' })
  codemp: number;

  @Column('smallint', { name: 'CODENQIPIENT', nullable: true })
  codenqipient: number | null;

  @Column('float', { name: 'ALIQPISCRED', nullable: true, precision: 53 })
  aliqpiscred: number | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcencms)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
