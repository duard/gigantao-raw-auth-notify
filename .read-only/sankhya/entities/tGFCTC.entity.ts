import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsibcoEntity } from './tSIBCO.entity';

@Index('PK_TGFCTC', ['codbco', 'agencia', 'conta'], { unique: true })
@Entity('TGFCTC', { schema: 'SANKHYA' })
export class TgfctcEntity {
  @Column('smallint', { primary: true, name: 'CODBCO' })
  codbco: number;

  @Column('char', { primary: true, name: 'AGENCIA', length: 5 })
  agencia: string;

  @Column('char', { primary: true, name: 'CONTA', length: 14 })
  conta: string;

  @Column('char', { name: 'CGC_CPF', nullable: true, length: 14 })
  cgcCpf: string | null;

  @Column('char', { name: 'NOMEEMITENTE', nullable: true, length: 160 })
  nomeemitente: string | null;

  @ManyToOne(() => TsibcoEntity, (tsibcoEntity) => tsibcoEntity.tgfctcs)
  @JoinColumn([{ name: 'CODBCO', referencedColumnName: 'codbco' }])
  codbco2: TsibcoEntity;
}
