import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpagnocatrEntity } from './tFPAGNOCATR.entity';
import { TfpepEntity } from './tFPEP.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPEPIAGNOC', ['codamb', 'codagnoc', 'caepi'], { unique: true })
@Entity('TFPEPIAGNOC', { schema: 'SANKHYA' })
export class TfpepiagnocEntity {
  @Column('varchar', { primary: true, name: 'CODAGNOC', length: 10 })
  codagnoc: string;

  @Column('varchar', { primary: true, name: 'CAEPI', length: 20 })
  caepi: string;

  @Column('char', { name: 'EFICACIAEPI', length: 1, default: () => "'N'" })
  eficaciaepi: string;

  @Column('char', { name: 'MEDPROTECAO', length: 1, default: () => "'N'" })
  medprotecao: string;

  @Column('char', { name: 'CONDFUNCTO', length: 1, default: () => "'N'" })
  condfuncto: string;

  @Column('char', { name: 'PRZVALID', length: 1, default: () => "'N'" })
  przvalid: string;

  @Column('char', { name: 'PERIODICTROCA', length: 1, default: () => "'N'" })
  periodictroca: string;

  @Column('char', { name: 'HIGIENIZACAO', length: 1, default: () => "'N'" })
  higienizacao: string;

  @Column('datetime', { name: 'DHALTER', default: () => 'getdate()' })
  dhalter: Date;

  @Column('int', { primary: true, name: 'CODAMB' })
  codamb: number;

  @Column('char', {
    name: 'MANUTENCAO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  manutencao: string | null;

  @Column('char', { name: 'USOININT', nullable: true, length: 1 })
  usoinint: string | null;

  @ManyToOne(
    () => TfpagnocatrEntity,
    (tfpagnocatrEntity) => tfpagnocatrEntity.tfpepiagnocs,
  )
  @JoinColumn([
    { name: 'CODAMB', referencedColumnName: 'codamb' },
    { name: 'CODAGNOC', referencedColumnName: 'codagnoc' },
  ])
  tfpagnocatr: TfpagnocatrEntity;

  @ManyToOne(() => TfpepEntity, (tfpepEntity) => tfpepEntity.tfpepiagnocs)
  @JoinColumn([{ name: 'CODEP', referencedColumnName: 'codep' }])
  codep: TfpepEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpepiagnocs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
