import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TimretEntity } from './tIMRET.entity';
import { TimhcbEntity } from './tIMHCB.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TIMLDT', ['ldtparcela', 'ldtcodigo'], { unique: true })
@Entity('TIMLDT', { schema: 'SANKHYA' })
export class TimldtEntity {
  @Column('int', { primary: true, name: 'LDTCODIGO' })
  ldtcodigo: number;

  @Column('int', { primary: true, name: 'LDTPARCELA' })
  ldtparcela: number;

  @Column('char', { name: 'LDTJUROSMULTA', length: 1, default: () => "'N'" })
  ldtjurosmulta: string;

  @Column('char', { name: 'LDTRECEBEDE', length: 1, default: () => "'N'" })
  ldtrecebede: string;

  @Column('char', { name: 'LDTREPASSAPARA', length: 1, default: () => "'N'" })
  ldtrepassapara: string;

  @Column('datetime', { name: 'LDTDTFIM', nullable: true })
  ldtdtfim: Date | null;

  @Column('datetime', { name: 'LDTDTINIC', nullable: true })
  ldtdtinic: Date | null;

  @Column('float', { name: 'LDTVALOR', precision: 53 })
  ldtvalor: number;

  @Column('varchar', { name: 'LDTCOMPLEMENTO', nullable: true, length: 250 })
  ldtcomplemento: string | null;

  @Column('datetime', {
    name: 'LDTDATAMOV',
    nullable: true,
    default: () => 'getdate()',
  })
  ldtdatamov: Date | null;

  @Column('datetime', {
    name: 'LDTDATAINCLUSAO',
    nullable: true,
    default: () => 'getdate()',
  })
  ldtdatainclusao: Date | null;

  @Column('datetime', {
    name: 'LDTDATAALTERACAO',
    nullable: true,
    default: () => 'getdate()',
  })
  ldtdataalteracao: Date | null;

  @Column('char', { name: 'LDTLEGADO', nullable: true, length: 1 })
  ldtlegado: string | null;

  @ManyToOne(() => TimretEntity, (timretEntity) => timretEntity.timldts)
  @JoinColumn([{ name: 'LDTREAJUSTE', referencedColumnName: 'retcodigo' }])
  ldtreajuste: TimretEntity;

  @ManyToOne(() => TimhcbEntity, (timhcbEntity) => timhcbEntity.timldts)
  @JoinColumn([{ name: 'LDTHISTORICO', referencedColumnName: 'hcbcodigo' }])
  ldthistorico: TimhcbEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.timldts)
  @JoinColumn([{ name: 'LDTUSUARIOALT', referencedColumnName: 'codusu' }])
  ldtusuarioalt: TsiusuEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.timldts2)
  @JoinColumn([{ name: 'LDTUSUARIO', referencedColumnName: 'codusu' }])
  ldtusuario: TsiusuEntity;
}
