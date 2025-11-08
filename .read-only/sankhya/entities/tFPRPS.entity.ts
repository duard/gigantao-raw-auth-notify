import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpfunEntity } from './tFPFUN.entity';

@Index('PK_TFPRPS', ['codemp', 'codfunc', 'dtmov'], { unique: true })
@Entity('TFPRPS', { schema: 'SANKHYA' })
export class TfprpsEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODFUNC' })
  codfunc: number;

  @Column('datetime', { primary: true, name: 'DTMOV' })
  dtmov: Date;

  @Column('smallint', { name: 'FALTAS', nullable: true })
  faltas: number | null;

  @Column('smallint', { name: 'ATRASOS', nullable: true })
  atrasos: number | null;

  @Column('smallint', { name: 'EXTRA', nullable: true })
  extra: number | null;

  @Column('smallint', { name: 'EXCEDENTE', nullable: true })
  excedente: number | null;

  @Column('smallint', { name: 'DOMFER', nullable: true })
  domfer: number | null;

  @Column('smallint', { name: 'EXTRANOT', nullable: true })
  extranot: number | null;

  @Column('smallint', { name: 'EXCEDENTENOT', nullable: true })
  excedentenot: number | null;

  @Column('smallint', { name: 'DOMFERNOT', nullable: true })
  domfernot: number | null;

  @Column('smallint', { name: 'COMPENSACAO', nullable: true })
  compensacao: number | null;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfprps)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.tfprps)
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODFUNC', referencedColumnName: 'codfunc' },
  ])
  tfpfun: TfpfunEntity;
}
