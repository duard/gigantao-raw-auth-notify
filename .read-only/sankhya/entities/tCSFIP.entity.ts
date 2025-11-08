import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcspnpEntity } from './tCSPNP.entity';
import { TgfnatEntity } from './tGFNAT.entity';

@Index('PK_TCSFIP', ['numos', 'seqproposta', 'codnat', 'seqnat'], {
  unique: true,
})
@Entity('TCSFIP', { schema: 'SANKHYA' })
export class TcsfipEntity {
  @Column('int', { primary: true, name: 'NUMOS' })
  numos: number;

  @Column('smallint', { primary: true, name: 'SEQPROPOSTA' })
  seqproposta: number;

  @Column('int', { primary: true, name: 'CODNAT' })
  codnat: number;

  @Column('smallint', { primary: true, name: 'SEQNAT' })
  seqnat: number;

  @Column('float', { name: 'VALOR', precision: 53, default: () => '(0)' })
  valor: number;

  @Column('varchar', { name: 'OBSERVACAO', nullable: true, length: 250 })
  observacao: string | null;

  @Column('smallint', { name: 'NROPARCELAS', nullable: true })
  nroparcelas: number | null;

  @Column('float', { name: 'VLRENTRADA', precision: 53, default: () => '(0)' })
  vlrentrada: number;

  @Column('datetime', { name: 'DTENTRADA', nullable: true })
  dtentrada: Date | null;

  @Column('smallint', { name: 'DIAPGTO', nullable: true })
  diapgto: number | null;

  @Column('varchar', { name: 'NROCARTAO', nullable: true, length: 20 })
  nrocartao: string | null;

  @Column('datetime', { name: 'VALCARTAO', nullable: true })
  valcartao: Date | null;

  @Column('float', { name: 'VLRFINANCIADO', nullable: true, precision: 53 })
  vlrfinanciado: number | null;

  @ManyToOne(() => TcspnpEntity, (tcspnpEntity) => tcspnpEntity.tcsfips)
  @JoinColumn([
    { name: 'NUMOS', referencedColumnName: 'numos' },
    { name: 'SEQPROPOSTA', referencedColumnName: 'seqproposta' },
  ])
  tcspnp: TcspnpEntity;

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tcsfips)
  @JoinColumn([{ name: 'CODNAT', referencedColumnName: 'codnat' }])
  codnat2: TgfnatEntity;
}
