import { Column, Entity, Index, OneToMany } from 'typeorm';
import { AdCadformacaoEntity } from './aD_CADFORMACAO.entity';
import { AdEntrevistacurricEntity } from './aD_ENTREVISTACURRIC.entity';
import { AdExpprofcurricEntity } from './aD_EXPPROFCURRIC.entity';
import { AdQualicurricEntity } from './aD_QUALICURRIC.entity';
import { AdStatusEntity } from './aD_STATUS.entity';

@Index('PK_AD_CADCURRIC', ['codcurriculo'], { unique: true })
@Entity('AD_CADCURRIC', { schema: 'SANKHYA' })
export class AdCadcurricEntity {
  @Column('int', { primary: true, name: 'CODCURRICULO' })
  codcurriculo: number;

  @Column('int', { name: 'CODFICHAREG', nullable: true })
  codfichareg: number | null;

  @Column('varchar', { name: 'NOMECANDIDATO', nullable: true, length: 100 })
  nomecandidato: string | null;

  @Column('varchar', { name: 'CPFCANDIDATO', nullable: true, length: 100 })
  cpfcandidato: string | null;

  @Column('varchar', { name: 'EMAILCURRIC', nullable: true, length: 100 })
  emailcurric: string | null;

  @Column('datetime', { name: 'DTNASCCURRIC', nullable: true })
  dtnasccurric: Date | null;

  @Column('varchar', { name: 'ESTCIVCURRIC', nullable: true, length: 100 })
  estcivcurric: string | null;

  @Column('varchar', { name: 'CODDEP', nullable: true, length: 10 })
  coddep: string | null;

  @Column('varchar', { name: 'FONECANDIDATO', nullable: true, length: 100 })
  fonecandidato: string | null;

  @Column('datetime', { name: 'DTADMI', nullable: true })
  dtadmi: Date | null;

  @Column('datetime', { name: 'DTDEMISS', nullable: true })
  dtdemiss: Date | null;

  @Column('datetime', { name: 'DATACANDIDATO', nullable: true })
  datacandidato: Date | null;

  @Column('varchar', { name: 'ENDCURRIC', nullable: true, length: 100 })
  endcurric: string | null;

  @Column('int', { name: 'NUMENDCURRIC', nullable: true })
  numendcurric: number | null;

  @Column('varchar', { name: 'BAIENDCURRIC', nullable: true, length: 100 })
  baiendcurric: string | null;

  @Column('varchar', { name: 'CIDENDCURRIC', nullable: true, length: 100 })
  cidendcurric: string | null;

  @Column('varchar', { name: 'ESTENDCURRIC', nullable: true, length: 100 })
  estendcurric: string | null;

  @Column('varchar', { name: 'CEPENDCURRIC', nullable: true, length: 100 })
  cependcurric: string | null;

  @OneToMany(
    () => AdCadformacaoEntity,
    (adCadformacaoEntity) => adCadformacaoEntity.codcurriculo2,
  )
  adCadformacaos: AdCadformacaoEntity[];

  @OneToMany(
    () => AdEntrevistacurricEntity,
    (adEntrevistacurricEntity) => adEntrevistacurricEntity.codcurriculo2,
  )
  adEntrevistacurrics: AdEntrevistacurricEntity[];

  @OneToMany(
    () => AdExpprofcurricEntity,
    (adExpprofcurricEntity) => adExpprofcurricEntity.codcurriculo2,
  )
  adExpprofcurrics: AdExpprofcurricEntity[];

  @OneToMany(
    () => AdQualicurricEntity,
    (adQualicurricEntity) => adQualicurricEntity.codcurriculo2,
  )
  adQualicurrics: AdQualicurricEntity[];

  @OneToMany(
    () => AdStatusEntity,
    (adStatusEntity) => adStatusEntity.codcurriculo2,
  )
  adStatuses: AdStatusEntity[];
}
