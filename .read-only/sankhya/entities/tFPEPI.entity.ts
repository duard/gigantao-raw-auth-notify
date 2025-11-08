import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpfatrEntity } from './tFPFATR.entity';
import { TfpepEntity } from './tFPEP.entity';

@Index('PK_TFPEPI', ['codamb', 'codfatrisco', 'caepi'], { unique: true })
@Entity('TFPEPI', { schema: 'SANKHYA' })
export class TfpepiEntity {
  @Column('int', { primary: true, name: 'CODAMB' })
  codamb: number;

  @Column('varchar', { primary: true, name: 'CODFATRISCO', length: 10 })
  codfatrisco: string;

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

  @Column('char', {
    name: 'USOININT',
    nullable: true,
    length: 1,
    default: () => "'N'",
  })
  usoinint: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpepis)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TfpfatrEntity, (tfpfatrEntity) => tfpfatrEntity.tfpepis)
  @JoinColumn([
    { name: 'CODAMB', referencedColumnName: 'codamb' },
    { name: 'CODFATRISCO', referencedColumnName: 'codfatrisco' },
  ])
  tfpfatr: TfpfatrEntity;

  @ManyToOne(() => TfpepEntity, (tfpepEntity) => tfpepEntity.tfpepis)
  @JoinColumn([{ name: 'CODEP', referencedColumnName: 'codep' }])
  codep: TfpepEntity;
}
