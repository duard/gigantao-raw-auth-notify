import { Column, Entity, Index } from 'typeorm';

@Index('PK__TSILIG__03ECE08E0FA7D17B', ['nomeinstorig', 'nomeinstdest'], {
  unique: true,
})
@Entity('TSILIG', { schema: 'SANKHYA' })
export class TsiligEntity {
  @Column('varchar', { primary: true, name: 'NOMEINSTORIG', length: 100 })
  nomeinstorig: string;

  @Column('varchar', { primary: true, name: 'NOMEINSTDEST', length: 100 })
  nomeinstdest: string;

  @Column('varchar', { name: 'RELATIONNAME', nullable: true, length: 100 })
  relationname: string | null;

  @Column('varchar', { name: 'EXPRESSAO', nullable: true, length: 3103 })
  expressao: string | null;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;
}
