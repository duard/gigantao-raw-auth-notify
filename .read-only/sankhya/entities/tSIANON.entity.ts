import { Column, Entity, Index } from 'typeorm';

@Index('PK_TSIANON', ['codanon'], { unique: true })
@Entity('TSIANON', { schema: 'SANKHYA' })
export class TsianonEntity {
  @Column('smallint', { primary: true, name: 'CODANON' })
  codanon: number;

  @Column('varchar', { name: 'DESCANON', length: 100 })
  descanon: string;

  @Column('datetime', { name: 'DTCRIAC' })
  dtcriac: Date;

  @Column('datetime', { name: 'DTALTER', nullable: true })
  dtalter: Date | null;

  @Column('smallint', { name: 'CODUSUCRIAC' })
  codusucriac: number;

  @Column('smallint', { name: 'CODUSUALTER', nullable: true })
  codusualter: number | null;
}
