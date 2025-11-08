import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPMSGTP', ['chavemsg'], { unique: true })
@Entity('TFPMSGTP', { schema: 'SANKHYA' })
export class TfpmsgtpEntity {
  @Column('varchar', { primary: true, name: 'CHAVEMSG', length: 50 })
  chavemsg: string;

  @Column('datetime', { name: 'DTCORTE', nullable: true })
  dtcorte: Date | null;

  @Column('varchar', { name: 'MENSAGEM', nullable: true, length: 3103 })
  mensagem: string | null;

  @Column('varchar', { name: 'LINK', nullable: true, length: 3103 })
  link: string | null;
}
