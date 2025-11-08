import { Column, Entity, Index, JoinColumn, OneToOne } from 'typeorm';
import { TgfmopEntity } from './tGFMOP.entity';

@Index('PK_NUMOV', ['numov'], { unique: true })
@Entity('TGFEDZ3', { schema: 'SANKHYA' })
export class Tgfedz3Entity {
  @Column('int', { primary: true, name: 'NUMOV' })
  numov: number;

  @Column('smallint', { name: 'NROBCO', nullable: true })
  nrobco: number | null;

  @Column('smallint', { name: 'NROAGE', nullable: true })
  nroage: number | null;

  @Column('varchar', { name: 'TIPPESSOA', nullable: true, length: 2 })
  tippessoa: string | null;

  @Column('varchar', { name: 'EMITENTE', nullable: true, length: 40 })
  emitente: string | null;

  @Column('smallint', { name: 'TIPODEVOL', nullable: true })
  tipodevol: number | null;

  @Column('int', { name: 'QTDOCOR', nullable: true })
  qtdocor: number | null;

  @Column('datetime', { name: 'DTULTOCOR', nullable: true })
  dtultocor: Date | null;

  @OneToOne(() => TgfmopEntity, (tgfmopEntity) => tgfmopEntity.tgfedz3)
  @JoinColumn([{ name: 'NUMOV', referencedColumnName: 'numov' }])
  numov2: TgfmopEntity;
}
