import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TFPSLOG', ['codusu', 'dhalteracao', 'seqlog'], { unique: true })
@Entity('TFPSLOG', { schema: 'SANKHYA' })
export class TfpslogEntity {
  @Column('smallint', { primary: true, name: 'CODUSU' })
  codusu: number;

  @Column('datetime', { primary: true, name: 'DHALTERACAO' })
  dhalteracao: Date;

  @Column('int', { primary: true, name: 'SEQLOG', default: () => '(0)' })
  seqlog: number;

  @Column('smallint', { name: 'CODEMP' })
  codemp: number;

  @Column('datetime', { name: 'DTREF' })
  dtref: Date;

  @Column('char', { name: 'TPAMB', length: 1, default: () => "'T'" })
  tpamb: string;

  @Column('smallint', { name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'EVENTO', length: 50 })
  evento: string;

  @Column('varchar', { name: 'TABELA', length: 50 })
  tabela: string;

  @Column('varchar', { name: 'CAMPO', length: 50 })
  campo: string;

  @Column('varchar', { name: 'CHAVE', length: 100 })
  chave: string;

  @Column('varchar', { name: 'VALORANTERIOR', nullable: true, length: 100 })
  valoranterior: string | null;

  @Column('varchar', { name: 'VALORATUAL', nullable: true, length: 100 })
  valoratual: string | null;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tfpslogs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu2: TsiusuEntity;
}
