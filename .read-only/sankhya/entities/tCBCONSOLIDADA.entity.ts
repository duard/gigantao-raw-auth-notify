import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TcblanConsolidadaEntity } from './tCBLAN_CONSOLIDADA.entity';
import { TcblotConsolidadaEntity } from './tCBLOT_CONSOLIDADA.entity';

@Index('PK_TCBCONSOLIDADA', ['idconsolid'], { unique: true })
@Entity('TCBCONSOLIDADA', { schema: 'SANKHYA' })
export class TcbconsolidadaEntity {
  @Column('smallint', { primary: true, name: 'IDCONSOLID' })
  idconsolid: number;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('datetime', { name: 'DHEXEC', nullable: true })
  dhexec: Date | null;

  @Column('datetime', { name: 'DHINICONSOL', nullable: true })
  dhiniconsol: Date | null;

  @Column('datetime', { name: 'DHFIMCONSOL', nullable: true })
  dhfimconsol: Date | null;

  @Column('datetime', { name: 'DTREF', nullable: true })
  dtref: Date | null;

  @Column('char', { name: 'OPCAOCONSOLID', nullable: true, length: 1 })
  opcaoconsolid: string | null;

  @Column('smallint', { name: 'CODEMPDEST', nullable: true })
  codempdest: number | null;

  @Column('varchar', { name: 'CODEMPORIG', nullable: true, length: 255 })
  codemporig: string | null;

  @OneToMany(
    () => TcblanConsolidadaEntity,
    (tcblanConsolidadaEntity) => tcblanConsolidadaEntity.idconsol,
  )
  tcblanConsolidadas: TcblanConsolidadaEntity[];

  @OneToMany(
    () => TcblotConsolidadaEntity,
    (tcblotConsolidadaEntity) => tcblotConsolidadaEntity.idconsol,
  )
  tcblotConsolidadas: TcblotConsolidadaEntity[];
}
