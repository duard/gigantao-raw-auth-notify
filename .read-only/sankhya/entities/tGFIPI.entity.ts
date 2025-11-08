import { Column, Entity, Index, OneToMany } from 'typeorm';
import { TgfisuEntity } from './tGFISU.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TGFIPI', ['codipi'], { unique: true })
@Entity('TGFIPI', { schema: 'SANKHYA' })
export class TgfipiEntity {
  @Column('smallint', { primary: true, name: 'CODIPI' })
  codipi: number;

  @Column('char', { name: 'CODFISIPI', nullable: true, length: 10 })
  codfisipi: string | null;

  @Column('float', { name: 'PERCENTUAL', nullable: true, precision: 53 })
  percentual: number | null;

  @Column('money', { name: 'VLRPAUTA', nullable: true })
  vlrpauta: number | null;

  @Column('char', { name: 'DESCRICAO', nullable: true, length: 60 })
  descricao: string | null;

  @Column('smallint', { name: 'CODEXNCM', default: () => '(0)' })
  codexncm: number;

  @Column('smallint', { name: 'CODEXII', default: () => '(0)' })
  codexii: number;

  @Column('float', { name: 'ALIQII', nullable: true, precision: 53 })
  aliqii: number | null;

  @Column('float', { name: 'PERCPIS', nullable: true, precision: 53 })
  percpis: number | null;

  @Column('float', { name: 'PERCCOFINS', nullable: true, precision: 53 })
  perccofins: number | null;

  @Column('float', { name: 'PERCCSSL', nullable: true, precision: 53 })
  perccssl: number | null;

  @Column('float', { name: 'ALIQICMS', nullable: true, precision: 53 })
  aliqicms: number | null;

  @Column('smallint', { name: 'CSTIPIENT', nullable: true })
  cstipient: number | null;

  @Column('smallint', { name: 'CSTIPISAI', nullable: true })
  cstipisai: number | null;

  @Column('varchar', { name: 'CODSTII', length: 1, default: () => "'N'" })
  codstii: string;

  @Column('float', { name: 'PERCIMPORTACAO', nullable: true, precision: 53 })
  percimportacao: number | null;

  @Column('smallint', { name: 'CODENQIPIENT', nullable: true })
  codenqipient: number | null;

  @Column('smallint', { name: 'CODENQIPISAI', nullable: true })
  codenqipisai: number | null;

  @Column('float', { name: 'PERCREDVLRIPI', nullable: true, precision: 53 })
  percredvlripi: number | null;

  @OneToMany(() => TgfisuEntity, (tgfisuEntity) => tgfisuEntity.codipi2)
  tgfisus: TgfisuEntity[];

  @OneToMany(() => TgfproEntity, (tgfproEntity) => tgfproEntity.codipi2)
  tgfpros: TgfproEntity[];
}
