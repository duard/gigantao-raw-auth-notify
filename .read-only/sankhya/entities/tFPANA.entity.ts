import { Column, Entity, Index, OneToMany } from 'typeorm';
import { LogfolhaEntity } from './lOGFOLHA.entity';

@Index('PK_TFPANA', ['codana'], { unique: true })
@Entity('TFPANA', { schema: 'SANKHYA' })
export class TfpanaEntity {
  @Column('smallint', { primary: true, name: 'CODANA' })
  codana: number;

  @Column('varchar', { name: 'NOMEANALISE', nullable: true, length: 100 })
  nomeanalise: string | null;

  @Column('smallint', { name: 'SCORE', nullable: true })
  score: number | null;

  @Column('smallint', { name: 'SEQUENCIA', nullable: true })
  sequencia: number | null;

  @Column('text', { name: 'SQLCONSULTA', nullable: true })
  sqlconsulta: string | null;

  @Column('varchar', { name: 'DETALHEANALISE', nullable: true, length: 100 })
  detalheanalise: string | null;

  @Column('char', { name: 'CHARTTYPE', nullable: true, length: 1 })
  charttype: string | null;

  @Column('char', { name: 'AVISO', nullable: true, length: 1 })
  aviso: string | null;

  @OneToMany(() => LogfolhaEntity, (logfolhaEntity) => logfolhaEntity.codana)
  logfolhas: LogfolhaEntity[];
}
