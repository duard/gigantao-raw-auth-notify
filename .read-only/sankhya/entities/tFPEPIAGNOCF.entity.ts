import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpepEntity } from './tFPEP.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpagnocatrfEntity } from './tFPAGNOCATRF.entity';

@Index('PK_TFPEPIAGNOCF', ['codemp', 'codfunc', 'codagnoc', 'caepi'], {
  unique: true,
})
@Entity('TFPEPIAGNOCF', { schema: 'SANKHYA' })
export class TfpepiagnocfEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

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

  @Column('char', {
    name: 'MANUTENCAO',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  manutencao: string | null;

  @Column('char', { name: 'USOININT', nullable: true, length: 1 })
  usoinint: string | null;

  @ManyToOne(() => TfpepEntity, (tfpepEntity) => tfpepEntity.tfpepiagnocfs)
  @JoinColumn([{ name: 'CODEP', referencedColumnName: 'codep' }])
  codep: TfpepEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpepiagnocfs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(
    () => TfpagnocatrfEntity,
    (tfpagnocatrfEntity) => tfpagnocatrfEntity.tfpepiagnocfs,
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
    { name: 'CODAGNOC', referencedColumnName: 'codagnoc' },
  ])
  tfpagnocatrf: TfpagnocatrfEntity;
}
