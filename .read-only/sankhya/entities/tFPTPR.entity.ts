import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TfpaviEntity } from './tFPAVI.entity';
import { TfpfunEntity } from './tFPFUN.entity';
import { TfpreqrescEntity } from './tFPREQRESC.entity';

@Index('PK_TFPTPR', ['codtpr'], { unique: true })
@Entity('TFPTPR', { schema: 'SANKHYA' })
export class TfptprEntity {
  @Column('int', { primary: true, name: 'CODTPR' })
  codtpr: number;

  @Column('varchar', { name: 'DESCRTIPRESC', length: 40 })
  descrtipresc: string;

  @Column('varchar', { name: 'CODAFASTRAIS', length: 3, default: () => "'0'" })
  codafastrais: string;

  @Column('varchar', { name: 'CODAFASTFGTS', length: 3, default: () => "'0'" })
  codafastfgts: string;

  @Column('varchar', { name: 'CODAFASTCAGED', length: 3, default: () => "'0'" })
  codafastcaged: string;

  @Column('int', { name: 'CODSAQUEFGTS' })
  codsaquefgts: number;

  @Column('varchar', { name: 'GERAPREVISAO', length: 1, default: () => "'N'" })
  geraprevisao: string;

  @Column('varchar', { name: 'CODMOTDESLIGESOCIAL', nullable: true, length: 2 })
  codmotdesligesocial: string | null;

  @OneToMany(() => TfpaviEntity, (tfpaviEntity) => tfpaviEntity.codtpr)
  tfpavis: TfpaviEntity[];

  @OneToMany(() => TfpfunEntity, (tfpfunEntity) => tfpfunEntity.codtpr)
  tfpfuns: TfpfunEntity[];

  @OneToMany(
    () => TfpreqrescEntity,
    (tfpreqrescEntity) => tfpreqrescEntity.codtpr,
  )
  tfpreqrescs: TfpreqrescEntity[];
}
