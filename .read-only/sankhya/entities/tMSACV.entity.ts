import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TmsacvabtEntity } from './tMSACVABT.entity';
import { TmsacvctfEntity } from './tMSACVCTF.entity';

@Index('PK_TMSACV', ['nuacerto'], { unique: true })
@Entity('TMSACV', { schema: 'SANKHYA' })
export class TmsacvEntity {
  @Column('int', { primary: true, name: 'NUACERTO' })
  nuacerto: number;

  @Column('int', { name: 'CODVEICULO', nullable: true })
  codveiculo: number | null;

  @Column('int', { name: 'CODMOTORISTA', nullable: true })
  codmotorista: number | null;

  @Column('varchar', { name: 'SITUACAO', nullable: true, length: 10 })
  situacao: string | null;

  @Column('datetime', { name: 'DTINICIO', nullable: true })
  dtinicio: Date | null;

  @Column('datetime', { name: 'DTFINAL', nullable: true })
  dtfinal: Date | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('int', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('float', { name: 'VLRCOMISSAO', nullable: true, precision: 53 })
  vlrcomissao: number | null;

  @Column('float', { name: 'PERCCOMISSAO', nullable: true, precision: 53 })
  perccomissao: number | null;

  @Column('float', {
    name: 'VLRBASECALCCOMISSAO',
    nullable: true,
    precision: 53,
  })
  vlrbasecalccomissao: number | null;

  @Column('int', { name: 'KMINICIAL', nullable: true })
  kminicial: number | null;

  @Column('int', { name: 'KMFINAL', nullable: true })
  kmfinal: number | null;

  @Column('int', { name: 'CODROTA', nullable: true })
  codrota: number | null;

  @Column('float', { name: 'VLRCOMISSAOFRETE', nullable: true, precision: 53 })
  vlrcomissaofrete: number | null;

  @Column('float', {
    name: 'VLRCOMISSAOESTADIA',
    nullable: true,
    precision: 53,
  })
  vlrcomissaoestadia: number | null;

  @OneToMany(
    () => TmsacvabtEntity,
    (tmsacvabtEntity) => tmsacvabtEntity.nuacerto2,
  )
  tmsacvabts: TmsacvabtEntity[];

  @OneToMany(
    () => TmsacvctfEntity,
    (tmsacvctfEntity) => tmsacvctfEntity.nuacerto2,
  )
  tmsacvctfs: TmsacvctfEntity[];
}
