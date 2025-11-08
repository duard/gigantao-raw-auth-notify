import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TprlpaEntity } from './tPRLPA.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TPRTPP', ['idproc', 'codprodpa', 'controlepa', 'codprodtar'], {
  unique: true,
})
@Entity('TPRTPP', { schema: 'SANKHYA' })
export class TprtppEntity {
  @Column('int', { primary: true, name: 'IDPROC' })
  idproc: number;

  @Column('int', { primary: true, name: 'CODPRODPA' })
  codprodpa: number;

  @Column('varchar', {
    primary: true,
    name: 'CONTROLEPA',
    length: 11,
    default: () => "' '",
  })
  controlepa: string;

  @Column('int', { primary: true, name: 'CODPRODTAR' })
  codprodtar: number;

  @Column('float', { name: 'QTD', precision: 53, default: () => '(0)' })
  qtd: number;

  @Column('varchar', { name: 'CODVOL', length: 2 })
  codvol: string;

  @Column('varchar', { name: 'TIPOINDICE', length: 1, default: () => "'F'" })
  tipoindice: string;

  @Column('varchar', { name: 'TIPOEXEC', length: 1, default: () => "'T'" })
  tipoexec: string;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('smallint', { name: 'CODUSUALT', nullable: true })
  codusualt: number | null;

  @Column('smallint', { name: 'CODUSUCAD', nullable: true })
  codusucad: number | null;

  @Column('datetime', { name: 'DHCAD', nullable: true })
  dhcad: Date | null;

  @ManyToOne(() => TprlpaEntity, (tprlpaEntity) => tprlpaEntity.tprtpps)
  @JoinColumn([
    { name: 'IDPROC', referencedColumnName: 'idproc' },
    { name: 'CODPRODPA', referencedColumnName: 'codprodpa' },
    { name: 'CONTROLEPA', referencedColumnName: 'controlepa' },
  ])
  tprlpa: TprlpaEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tprtpps)
  @JoinColumn([{ name: 'CODPRODPA', referencedColumnName: 'codprod' }])
  codprodpa2: TgfproEntity;
}
