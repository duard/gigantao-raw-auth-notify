import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TfpfunEntity } from './tFPFUN.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPFBH', ['codemp', 'codfunc', 'referencia'], { unique: true })
@Entity('TFPFBH', { schema: 'SANKHYA' })
export class TfpfbhEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('datetime', { primary: true, name: 'REFERENCIA' })
  referencia: Date;

  @Column('smallint', { name: 'BHEXTRA' })
  bhextra: number;

  @Column('smallint', { name: 'BHEXCEDENTE' })
  bhexcedente: number;

  @Column('smallint', { name: 'BHDOMFER' })
  bhdomfer: number;

  @Column('smallint', { name: 'BHEXTRANOT' })
  bhextranot: number;

  @Column('smallint', { name: 'BHEXCEDENTENOT' })
  bhexcedentenot: number;

  @Column('smallint', { name: 'BHDOMFERNOT' })
  bhdomfernot: number;

  @Column('smallint', { name: 'FLEXTRA' })
  flextra: number;

  @Column('smallint', { name: 'FLEXCEDENTE' })
  flexcedente: number;

  @Column('smallint', { name: 'FLDOMFER' })
  fldomfer: number;

  @Column('smallint', { name: 'FLEXTRANOT' })
  flextranot: number;

  @Column('smallint', { name: 'FLEXCEDENTENOT' })
  flexcedentenot: number;

  @Column('smallint', { name: 'FLDOMFERNOT' })
  fldomfernot: number;

  @Column('smallint', { name: 'BHFALTAS' })
  bhfaltas: number;

  @Column('smallint', { name: 'FLFALTAS' })
  flfaltas: number;

  @Column('int', { name: 'BHSALDO', nullable: true })
  bhsaldo: number | null;

  @Column('int', { name: 'FLSALDO', nullable: true })
  flsaldo: number | null;

  @Column('char', { name: 'ATUALIZADO', length: 1, default: () => "'N'" })
  atualizado: string;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('smallint', { name: 'BHATRASOS', nullable: true })
  bhatrasos: number | null;

  @Column('smallint', { name: 'FLATRASOS', nullable: true })
  flatrasos: number | null;

  @Column('smallint', { name: 'HRMOVIMENTO', nullable: true })
  hrmovimento: number | null;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfpfbhs)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpfbhs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
