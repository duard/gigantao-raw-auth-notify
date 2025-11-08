import { Column, Entity, Index, OneToMany } from 'typeorm';
import { AdItequitaEntity } from './aD_ITEQUITA.entity';

@Index('PK_AD_QUITA', ['id'], { unique: true })
@Entity('AD_QUITA', { schema: 'SANKHYA' })
export class AdQuitaEntity {
  @Column('int', { primary: true, name: 'ID' })
  id: number;

  @Column('int', { name: 'CODEMP', nullable: true })
  codemp: number | null;

  @Column('int', { name: 'CODFUNC', nullable: true })
  codfunc: number | null;

  @Column('varchar', { name: 'FECHADO', nullable: true, length: 10 })
  fechado: string | null;

  @Column('datetime', { name: 'DTFECHAMENTO', nullable: true })
  dtfechamento: Date | null;

  @Column('int', { name: 'CODUSUFECHAMENTO', nullable: true })
  codusufechamento: number | null;

  @OneToMany(
    () => AdItequitaEntity,
    (adItequitaEntity) => adItequitaEntity.adQuita,
  )
  adItequitas: AdItequitaEntity[];
}
