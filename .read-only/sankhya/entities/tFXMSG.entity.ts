import { Column, Entity, Index } from 'typeorm';

@Index('PK_TFXMSG', ['id'], { unique: true })
@Entity('TFXMSG', { schema: 'SANKHYA' })
export class TfxmsgEntity {
  @Column('int', { primary: true, name: 'ID' })
  id: number;

  @Column('int', { name: 'CODUSU' })
  codusu: number;

  @Column('varchar', { name: 'NOMEUSU', nullable: true, length: 50 })
  nomeusu: string | null;

  @Column('varchar', { name: 'MENSAGEM', nullable: true, length: 1000 })
  mensagem: string | null;

  @Column('varchar', { name: 'SERVICO', nullable: true, length: 400 })
  servico: string | null;

  @Column('int', { name: 'CODPDV' })
  codpdv: number;

  @Column('varchar', {
    name: 'TIPO',
    nullable: true,
    length: 3,
    default: () => "'MSG'",
  })
  tipo: string | null;

  @Column('datetime', { name: 'DATAMENSAGEM', nullable: true })
  datamensagem: Date | null;

  @Column('varchar', { name: 'HORAMENSAGEM', nullable: true, length: 10 })
  horamensagem: string | null;
}
