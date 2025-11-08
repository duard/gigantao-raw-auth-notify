import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcbempEntity } from './tCBEMP.entity';
import { TsiusuEntity } from './tSIUSU.entity';

@Index('PK_TCBSIG', ['codemp', 'codsig', 'dtinicio'], { unique: true })
@Entity('TCBSIG', { schema: 'SANKHYA' })
export class TcbsigEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('int', { primary: true, name: 'CODSIG' })
  codsig: number;

  @Column('char', { name: 'NOMESIG', length: 60 })
  nomesig: string;

  @Column('varchar', { name: 'CPF', nullable: true, length: 14 })
  cpf: string | null;

  @Column('varchar', { name: 'CRC', nullable: true, length: 40 })
  crc: string | null;

  @Column('char', { name: 'CODQUALIFICACAO', length: 3 })
  codqualificacao: string;

  @Column('char', { name: 'QUALIFICACAO', length: 80 })
  qualificacao: string;

  @Column('datetime', { primary: true, name: 'DTINICIO' })
  dtinicio: Date;

  @Column('datetime', { name: 'DTFIM', nullable: true })
  dtfim: Date | null;

  @Column('char', { name: 'GERARECD', length: 1, default: () => "'N'" })
  gerarecd: string;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('varchar', { name: 'UFCRC', nullable: true, length: 2 })
  ufcrc: string | null;

  @Column('varchar', { name: 'EMAIL', nullable: true, length: 80 })
  email: string | null;

  @Column('varchar', { name: 'TELEFONE', nullable: true, length: 13 })
  telefone: string | null;

  @Column('varchar', { name: 'NUMSEQCRC', nullable: true, length: 30 })
  numseqcrc: string | null;

  @Column('datetime', { name: 'DTVALCRC', nullable: true })
  dtvalcrc: Date | null;

  @Column('char', { name: 'RESPLEGALRF', length: 1, default: () => "'N'" })
  resplegalrf: string;

  @Column('char', {
    name: 'GERARELATCONTABIL',
    length: 1,
    default: () => "'N'",
  })
  gerarelatcontabil: string;

  @ManyToOne(() => TcbempEntity, (tcbempEntity) => tcbempEntity.tcbsigs)
  @JoinColumn([{ name: 'CODEMP', referencedColumnName: 'codemp' }])
  codemp2: TcbempEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tcbsigs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;
}
