import { Column, Entity, Index } from 'typeorm';

@Index('PK_TMSLOGINTREPOM', ['sequencia'], { unique: true })
@Entity('TMSLOGINTREPOM', { schema: 'SANKHYA' })
export class TmslogintrepomEntity {
  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('datetime', { name: 'DTMOVIMENTO', nullable: true })
  dtmovimento: Date | null;

  @Column('varchar', { name: 'MENSAGEM', nullable: true, length: 3103 })
  mensagem: string | null;
}
