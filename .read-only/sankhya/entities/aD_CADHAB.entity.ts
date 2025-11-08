import {
  Column,
  Entity,
  Index,
  JoinTable,
  ManyToMany,
  OneToMany,
} from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { TfpcarEntity } from './tFPCAR.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { AdTsiusuhabEntity } from './aD_TSIUSUHAB.entity';
import { TfptreiEntity } from './tFPTREI.entity';

@Index('PK_AD_CADHAB', ['codhab'], { unique: true })
@Entity('AD_CADHAB', { schema: 'SANKHYA' })
export class AdCadhabEntity {
  @Column('int', { primary: true, name: 'CODHAB' })
  codhab: number;

  @Column('varchar', { name: 'DESCRICAO', nullable: true, length: 100 })
  descricao: string | null;

  @Column('varchar', { name: 'TIPO', nullable: true, length: 10 })
  tipo: string | null;

  @Column('int', { name: 'DIASNOTIFICACAO', nullable: true })
  diasnotificacao: number | null;

  @Column('int', { name: 'PRAZOEXPIRA', nullable: true })
  prazoexpira: number | null;

  @Column('varchar', { name: 'PARA', nullable: true, length: 10 })
  para: string | null;

  @Column('text', { name: 'DETALHAMENTO2', nullable: true })
  detalhamento2: string | null;

  @Column('text', { name: 'DETALHAMENTO', nullable: true })
  detalhamento: string | null;

  @ManyToMany(() => TgfproEntity, (tgfproEntity) => tgfproEntity.adCadhabs)
  @JoinTable({
    name: 'AD_CADHABSER',
    joinColumns: [{ name: 'CODHAB', referencedColumnName: 'codhab' }],
    inverseJoinColumns: [{ name: 'CODSERV', referencedColumnName: 'codprod' }],
    schema: 'SANKHYA',
  })
  tgfpros: TgfproEntity[];

  @ManyToMany(() => TfpcarEntity, (tfpcarEntity) => tfpcarEntity.adCadhabs)
  @JoinTable({
    name: 'AD_HABILITCARGO',
    joinColumns: [{ name: 'CODHAB', referencedColumnName: 'codhab' }],
    inverseJoinColumns: [
      { name: 'CODCARGO', referencedColumnName: 'codcargo' },
    ],
    schema: 'SANKHYA',
  })
  tfpcars: TfpcarEntity[];

  @ManyToMany(() => TgfparEntity, (tgfparEntity) => tgfparEntity.adCadhabs)
  tgfpars: TgfparEntity[];

  @OneToMany(
    () => AdTsiusuhabEntity,
    (adTsiusuhabEntity) => adTsiusuhabEntity.codhab,
  )
  adTsiusuhabs: AdTsiusuhabEntity[];

  @OneToMany(() => TfptreiEntity, (tfptreiEntity) => tfptreiEntity.adCodtreicap)
  tfptreis: TfptreiEntity[];

  @OneToMany(
    () => TfptreiEntity,
    (tfptreiEntity) => tfptreiEntity.adCodtreicap2,
  )
  tfptreis2: TfptreiEntity[];

  @OneToMany(() => TgfparEntity, (tgfparEntity) => tgfparEntity.adCodhab)
  tgfpars2: TgfparEntity[];
}
