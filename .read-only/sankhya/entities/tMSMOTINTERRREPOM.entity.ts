import { Column, Entity, Index } from 'typeorm';

@Index('PK_TMSMOTINTERRREPOM', ['codmotivo'], { unique: true })
@Entity('TMSMOTINTERRREPOM', { schema: 'SANKHYA' })
export class TmsmotinterrrepomEntity {
  @Column('int', { primary: true, name: 'CODMOTIVO' })
  codmotivo: number;

  @Column('varchar', { name: 'DESCMOTIVO', nullable: true, length: 100 })
  descmotivo: string | null;
}
