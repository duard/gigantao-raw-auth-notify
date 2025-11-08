import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TcbcradEntity } from './tCBCRAD.entity';

@Index('PK_TCBCRA', ['codrazaux'], { unique: true })
@Entity('TCBCRA', { schema: 'SANKHYA' })
export class TcbcraEntity {
  @Column('smallint', { primary: true, name: 'CODRAZAUX' })
  codrazaux: number;

  @Column('smallint', { name: 'TAMFONTE' })
  tamfonte: number;

  @Column('varchar', { name: 'NATLIV', length: 80 })
  natliv: string;

  @Column('varchar', { name: 'CMDSQL', nullable: true, length: 3103 })
  cmdsql: string | null;

  @Column('varchar', {
    name: 'LISTCAMPOSORDENACAO',
    nullable: true,
    length: 60,
  })
  listcamposordenacao: string | null;

  @Column('int', { name: 'NROORDEM', nullable: true })
  nroordem: number | null;

  @OneToMany(() => TcbcradEntity, (tcbcradEntity) => tcbcradEntity.codrazaux2)
  tcbcrads: TcbcradEntity[];
}
