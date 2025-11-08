import { Column, Entity, Index } from 'typeorm';

@Index('PK_TMSPARCONTA', ['codparc', 'sequencia'], { unique: true })
@Entity('TMSPARCONTA', { schema: 'SANKHYA' })
export class TmsparcontaEntity {
  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('varchar', { name: 'ATIVO', nullable: true, length: 10 })
  ativo: string | null;

  @Column('int', { name: 'CODBCO', nullable: true })
  codbco: number | null;

  @Column('varchar', { name: 'AGENCIA', nullable: true, length: 100 })
  agencia: string | null;

  @Column('varchar', { name: 'DIGITOAGENCIA', nullable: true, length: 1 })
  digitoagencia: string | null;

  @Column('varchar', { name: 'CONTA', nullable: true, length: 100 })
  conta: string | null;

  @Column('varchar', { name: 'TIPOCONTA', nullable: true, length: 10 })
  tipoconta: string | null;

  @Column('datetime', { name: 'DHALTER', nullable: true })
  dhalter: Date | null;

  @Column('int', { name: 'CODUSU', nullable: true })
  codusu: number | null;

  @Column('datetime', { name: 'DTINC', nullable: true })
  dtinc: Date | null;

  @Column('varchar', { name: 'FAVORECIDO', nullable: true, length: 100 })
  favorecido: string | null;

  @Column('varchar', { name: 'CGC_CPF', nullable: true, length: 100 })
  cgcCpf: string | null;
}
