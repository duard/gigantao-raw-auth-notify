import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsictaEntity } from './tSICTA.entity';

@Index('PK_TGFCERT', ['seqcert'], { unique: true })
@Entity('TGFCERT', { schema: 'SANKHYA' })
export class TgfcertEntity {
  @Column('int', { primary: true, name: 'SEQCERT' })
  seqcert: number;

  @Column('text', { name: 'DADOSCERTIFICADO' })
  dadoscertificado: string;

  @Column('datetime', { name: 'DTATIVACAO' })
  dtativacao: Date;

  @Column('varchar', { name: 'STATUS', nullable: true, length: 1 })
  status: string | null;

  @Column('smallint', { name: 'QTDTENTATIVAS', nullable: true })
  qtdtentativas: number | null;

  @Column('varchar', { name: 'EMAIL', nullable: true, length: 256 })
  email: string | null;

  @Column('datetime', { name: 'DTVENCIMENTO', nullable: true })
  dtvencimento: Date | null;

  @Column('datetime', { name: 'DTINICIORENOVACAO', nullable: true })
  dtiniciorenovacao: Date | null;

  @Column('nvarchar', { name: 'CERTIFICADO', nullable: true })
  certificado: string | null;

  @Column('varchar', { name: 'FALRENOVA', nullable: true, length: 256 })
  falrenova: string | null;

  @ManyToOne(() => TsictaEntity, (tsictaEntity) => tsictaEntity.tgfcerts)
  @JoinColumn([{ name: 'CODCTABCOINT', referencedColumnName: 'codctabcoint' }])
  codctabcoint: TsictaEntity;
}
