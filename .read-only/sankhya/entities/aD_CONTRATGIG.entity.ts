import {
  Column,
  Entity,
  Index,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
} from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';
import { TfpfcoEntity } from './tFPFCO.entity';
import { AdTipexameEntity } from './aD_TIPEXAME.entity';

@Index('PK_AD_CONTRATGIG', ['nunico'], { unique: true })
@Entity('AD_CONTRATGIG', { schema: 'SANKHYA' })
export class AdContratgigEntity {
  @Column('int', { primary: true, name: 'NUNICO' })
  nunico: number;

  @Column('varchar', { name: 'SITUACAO', nullable: true, length: 10 })
  situacao: string | null;

  @Column('datetime', { name: 'DHINCLUSAO', nullable: true })
  dhinclusao: Date | null;

  @Column('varchar', { name: 'NOMECOLAB', nullable: true, length: 100 })
  nomecolab: string | null;

  @Column('varchar', { name: 'TAMCAMISA', nullable: true, length: 10 })
  tamcamisa: string | null;

  @Column('varchar', { name: 'TAMCALCA', nullable: true, length: 100 })
  tamcalca: string | null;

  @Column('varchar', { name: 'TAMJALECO', nullable: true, length: 10 })
  tamjaleco: string | null;

  @Column('varchar', { name: 'TAMBOTINA', nullable: true, length: 100 })
  tambotina: string | null;

  @Column('text', { name: 'OBSERVACAO', nullable: true })
  observacao: string | null;

  @Column('varchar', { name: 'CPF', nullable: true, length: 100 })
  cpf: string | null;

  @Column('datetime', { name: 'DTNASCIMENTO', nullable: true })
  dtnascimento: Date | null;

  @Column('int', { name: 'NUCURRICULO', nullable: true })
  nucurriculo: number | null;

  @Column('int', { name: 'CODUSURESPSEG', nullable: true })
  codusurespseg: number | null;

  @Column('text', { name: 'OBSERVACAOSEG', nullable: true })
  observacaoseg: string | null;

  @Column('varchar', { name: 'SITUACAOSEG', nullable: true, length: 10 })
  situacaoseg: string | null;

  @Column('datetime', { name: 'DTAGENDA', nullable: true })
  dtagenda: Date | null;

  @Column('int', { name: 'CODUSUFIN', nullable: true })
  codusufin: number | null;

  @Column('datetime', { name: 'DHFINALIZA', nullable: true })
  dhfinaliza: Date | null;

  @Column('varchar', { name: 'TIPEXAME', nullable: true, length: 10 })
  tipexame: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.adContratgigs)
  @JoinColumn([{ name: 'CODUSUINC', referencedColumnName: 'codusu' }])
  codusuinc: TsiusuEntity;

  @ManyToOne(() => TfpfcoEntity, (tfpfcoEntity) => tfpfcoEntity.adContratgigs)
  @JoinColumn([{ name: 'CODFUNCAO', referencedColumnName: 'codfuncao' }])
  codfuncao: TfpfcoEntity;

  @ManyToMany(
    () => AdTipexameEntity,
    (adTipexameEntity) => adTipexameEntity.adContratgigs,
  )
  @JoinTable({
    name: 'AD_TIPEXAMEASO',
    joinColumns: [{ name: 'NUNICO', referencedColumnName: 'nunico' }],
    inverseJoinColumns: [{ name: 'CODEXAME', referencedColumnName: 'unico' }],
    schema: 'SANKHYA',
  })
  adTipexames: AdTipexameEntity[];
}
