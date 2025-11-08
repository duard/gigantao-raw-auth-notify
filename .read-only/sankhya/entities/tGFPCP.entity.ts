import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfipcEntity } from './tGFIPC.entity';

@Index('PK_TGFPCP', ['nupca', 'codprod', 'seqperiodo'], { unique: true })
@Entity('TGFPCP', { schema: 'SANKHYA' })
export class TgfpcpEntity {
  @Column('int', { primary: true, name: 'NUPCA' })
  nupca: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('smallint', { primary: true, name: 'SEQPERIODO' })
  seqperiodo: number;

  @Column('float', { name: 'ESTFISICO', precision: 53, default: () => '(0)' })
  estfisico: number;

  @Column('float', { name: 'PEDVENPEN', precision: 53, default: () => '(0)' })
  pedvenpen: number;

  @Column('float', { name: 'PEDCOMPEN', precision: 53, default: () => '(0)' })
  pedcompen: number;

  @Column('float', { name: 'PEDCOMPLE', precision: 53, default: () => '(0)' })
  pedcomple: number;

  @Column('float', { name: 'ESTDISPON', precision: 53, default: () => '(0)' })
  estdispon: number;

  @Column('float', { name: 'GIROMEDEST', precision: 53, default: () => '(0)' })
  giromedest: number;

  @Column('float', { name: 'SAZOMEDIA', precision: 53, default: () => '(0)' })
  sazomedia: number;

  @Column('float', {
    name: 'SAZONALIDADE',
    precision: 53,
    default: () => '(0)',
  })
  sazonalidade: number;

  @Column('float', { name: 'DEMANDAAJU', precision: 53, default: () => '(0)' })
  demandaaju: number;

  @Column('float', { name: 'ESTFINAL', precision: 53, default: () => '(0)' })
  estfinal: number;

  @Column('float', { name: 'ESTSEG', precision: 53, default: () => '(0)' })
  estseg: number;

  @Column('float', { name: 'ESTSEGFINAL', precision: 53, default: () => '(0)' })
  estsegfinal: number;

  @Column('float', {
    name: 'ESTSEGFINALDIAS',
    precision: 53,
    default: () => '(0)',
  })
  estsegfinaldias: number;

  @Column('float', {
    name: 'ESTSEGFINALSEMA',
    precision: 53,
    default: () => '(0)',
  })
  estsegfinalsema: number;

  @Column('varchar', { name: 'TIPOPERIODO', length: 1 })
  tipoperiodo: string;

  @Column('datetime', { name: 'DTFINAL', nullable: true })
  dtfinal: Date | null;

  @ManyToOne(() => TgfipcEntity, (tgfipcEntity) => tgfipcEntity.tgfpcps)
  @JoinColumn([
    { name: 'NUPCA', referencedColumnName: 'nupca' },
    { name: 'CODPROD', referencedColumnName: 'codprod' },
  ])
  tgfipc: TgfipcEntity;
}
