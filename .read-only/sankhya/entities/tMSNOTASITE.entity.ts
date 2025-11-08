import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TmsnotasEntity } from './tMSNOTAS.entity';

@Index('PK_TMSNOTASITE', ['nrounico', 'sequencia'], { unique: true })
@Entity('TMSNOTASITE', { schema: 'SANKHYA' })
export class TmsnotasiteEntity {
  @Column('int', { primary: true, name: 'NROUNICO' })
  nrounico: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'CODPROD', nullable: true })
  codprod: number | null;

  @Column('varchar', { name: 'DESCRPROD', nullable: true, length: 200 })
  descrprod: string | null;

  @Column('float', { name: 'QTDNEG', nullable: true, precision: 53 })
  qtdneg: number | null;

  @Column('varchar', { name: 'CODVOL', nullable: true, length: 100 })
  codvol: string | null;

  @Column('float', { name: 'VLRTOT', nullable: true, precision: 53 })
  vlrtot: number | null;

  @Column('float', { name: 'PESOITE', nullable: true, precision: 53 })
  pesoite: number | null;

  @Column('float', { name: 'VLRUNIT', nullable: true, precision: 53 })
  vlrunit: number | null;

  @ManyToOne(
    () => TmsnotasEntity,
    (tmsnotasEntity) => tmsnotasEntity.tmsnotasites,
  )
  @JoinColumn([{ name: 'NROUNICO', referencedColumnName: 'nrounico' }])
  nrounico2: TmsnotasEntity;
}
