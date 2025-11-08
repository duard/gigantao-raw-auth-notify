import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcsmodEntity } from './tCSMOD.entity';

@Index('PK_TCSMSA', ['codmetod', 'nummodelo', 'codprod'], { unique: true })
@Entity('TCSMSA', { schema: 'SANKHYA' })
export class TcsmsaEntity {
  @Column('smallint', { primary: true, name: 'CODMETOD' })
  codmetod: number;

  @Column('int', { primary: true, name: 'NUMMODELO' })
  nummodelo: number;

  @Column('int', { primary: true, name: 'CODPROD' })
  codprod: number;

  @Column('varchar', {
    name: 'COMPLEMENTAR',
    nullable: true,
    length: 1,
    default: () => "'S'",
  })
  complementar: string | null;

  @ManyToOne(() => TcsmodEntity, (tcsmodEntity) => tcsmodEntity.tcsmsas)
  @JoinColumn([
    { name: 'CODMETOD', referencedColumnName: 'codmetod' },
    { name: 'NUMMODELO', referencedColumnName: 'nummodelo' },
  ])
  tcsmod: TcsmodEntity;
}
