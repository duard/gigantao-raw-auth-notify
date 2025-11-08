import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFPFRH', ['id'], { unique: true })
@Entity('TFPFRH', { schema: 'SANKHYA' })
export class TfpfrhEntity {
  @Column('int', { primary: true, name: 'ID' })
  id: number;

  @Column('varchar', { name: 'MENSAGEM', length: 3103 })
  mensagem: string;

  @Column('varchar', { name: 'RESPOSTA', nullable: true, length: 3103 })
  resposta: string | null;

  @Column('varchar', { name: 'STATUS', length: 1, default: () => "'P'" })
  status: string;

  @Column('datetime', { name: 'DTMSG' })
  dtmsg: Date;

  @Column('datetime', { name: 'DTRESPOSTA', nullable: true })
  dtresposta: Date | null;

  @Column('smallint', { name: 'CODUSURESP', nullable: true })
  codusuresp: number | null;

  @Column('smallint', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('image', { name: 'ANONIMO', nullable: true })
  anonimo: Buffer | null;
}
