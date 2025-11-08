import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcbcrpEntity } from './tCBCRP.entity';

@Index('PK_TCBARP', ['nuperiodoctb', 'tabela', 'sequencia'], { unique: true })
@Entity('TCBARP', { schema: 'SANKHYA' })
export class TcbarpEntity {
  @Column('int', { primary: true, name: 'NUPERIODOCTB' })
  nuperiodoctb: number;

  @Column('smallint', { primary: true, name: 'TABELA' })
  tabela: number;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('datetime', { name: 'DHALTER' })
  dhalter: Date;

  @Column('varchar', { name: 'ARQPERSONALIZADO', nullable: true, length: 120 })
  arqpersonalizado: string | null;

  @Column('smallint', { name: 'CODUSU' })
  codusu: number;

  @Column('varchar', { name: 'IDPASTA', nullable: true, length: 10 })
  idpasta: string | null;

  @ManyToOne(() => TcbcrpEntity, (tcbcrpEntity) => tcbcrpEntity.tcbarps)
  @JoinColumn([
    { name: 'NUPERIODOCTB', referencedColumnName: 'nuperiodoctb' },
    { name: 'TABELA', referencedColumnName: 'tabela' },
  ])
  tcbcrp: TcbcrpEntity;
}
