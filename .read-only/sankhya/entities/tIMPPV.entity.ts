import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TimimbEntity } from './tIMIMB.entity';
import { TsicidEntity } from './tSICID.entity';
import { TimlteEntity } from './tIMLTE.entity';
import { TimcorEntity } from './tIMCOR.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TIMPPV', ['ppvcodigo'], { unique: true })
@Entity('TIMPPV', { schema: 'SANKHYA' })
export class TimppvEntity {
  @Column('int', { primary: true, name: 'PPVCODIGO' })
  ppvcodigo: number;

  @Column('varchar', { name: 'PPVPROSPECT', length: 50 })
  ppvprospect: string;

  @Column('varchar', { name: 'PPVCPFCNPJ', length: 18 })
  ppvcpfcnpj: string;

  @Column('varchar', { name: 'PPVEMAIL', nullable: true, length: 100 })
  ppvemail: string | null;

  @Column('varchar', { name: 'PPVCELULAR', nullable: true, length: 14 })
  ppvcelular: string | null;

  @Column('varchar', { name: 'PPVTELEFONEWHATS', nullable: true, length: 14 })
  ppvtelefonewhats: string | null;

  @Column('varchar', { name: 'PPVTELEFONE1', nullable: true, length: 14 })
  ppvtelefone1: string | null;

  @Column('varchar', { name: 'PPVTELEFONE2', nullable: true, length: 14 })
  ppvtelefone2: string | null;

  @Column('varchar', { name: 'PPVTELEFONE3', nullable: true, length: 14 })
  ppvtelefone3: string | null;

  @Column('varchar', { name: 'PPVOBSERVACAO', nullable: true, length: 400 })
  ppvobservacao: string | null;

  @Column('datetime', { name: 'PPVDTPROPOSTA', nullable: true })
  ppvdtproposta: Date | null;

  @Column('float', { name: 'PPVVALORPROPOSTA', nullable: true, precision: 53 })
  ppvvalorproposta: number | null;

  @Column('char', { name: 'PPVORIGEM', length: 2 })
  ppvorigem: string;

  @Column('char', { name: 'PPVSEXO', nullable: true, length: 1 })
  ppvsexo: string | null;

  @Column('char', { name: 'PPVESTAGIO', nullable: true, length: 2 })
  ppvestagio: string | null;

  @Column('datetime', { name: 'PPVDHDES', nullable: true })
  ppvdhdes: Date | null;

  @Column('char', { name: 'PPVMOTIVODES', nullable: true, length: 2 })
  ppvmotivodes: string | null;

  @Column('datetime', { name: 'PPVDTEXPIRACAO', nullable: true })
  ppvdtexpiracao: Date | null;

  @Column('datetime', { name: 'PPVDHINCLUSAO', nullable: true })
  ppvdhinclusao: Date | null;

  @Column('datetime', { name: 'PPVDHALTERACAO', nullable: true })
  ppvdhalteracao: Date | null;

  @Column('datetime', { name: 'PPVDHEXPIRACAO', nullable: true })
  ppvdhexpiracao: Date | null;

  @ManyToOne(() => TimimbEntity, (timimbEntity) => timimbEntity.timppvs)
  @JoinColumn([{ name: 'PPVIMOBILIARIA', referencedColumnName: 'imbcodigo' }])
  ppvimobiliaria: TimimbEntity;

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.timppvs)
  @JoinColumn([{ name: 'PPVCIDADE', referencedColumnName: 'codcid' }])
  ppvcidade: TsicidEntity;

  @ManyToOne(() => TimlteEntity, (timlteEntity) => timlteEntity.timppvs)
  @JoinColumn([{ name: 'PPVLOTE', referencedColumnName: 'ltecodigo' }])
  ppvlote: TimlteEntity;

  @ManyToOne(() => TimcorEntity, (timcorEntity) => timcorEntity.timppvs)
  @JoinColumn([{ name: 'PPVCORRETOR', referencedColumnName: 'corcodigo' }])
  ppvcorretor: TimcorEntity;

  @ManyToOne(() => TimcorEntity, (timcorEntity) => timcorEntity.timppvs2)
  @JoinColumn([{ name: 'PPVCORSUPERVISOR', referencedColumnName: 'corcodigo' }])
  ppvcorsupervisor: TimcorEntity;

  @ManyToOne(() => TimcorEntity, (timcorEntity) => timcorEntity.timppvs3)
  @JoinColumn([{ name: 'PPVCORGERENTE', referencedColumnName: 'corcodigo' }])
  ppvcorgerente: TimcorEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.timppvs)
  @JoinColumn([{ name: 'PPVUSUINCLUSAO', referencedColumnName: 'codusu' }])
  ppvusuinclusao: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.timppvs2)
  @JoinColumn([{ name: 'PPVUSUALTERACAO', referencedColumnName: 'codusu' }])
  ppvusualteracao: TsiusuEntity;
}
