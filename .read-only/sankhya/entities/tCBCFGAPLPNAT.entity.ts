import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TcbcfgaplpEntity } from './tCBCFGAPLP.entity';
import { TcbitelpEntity } from './tCBITELP.entity';

@Index('PK_TCBCFGAPLPNAT', ['codemp', 'codnatlp', 'codnat'], { unique: true })
@Entity('TCBCFGAPLPNAT', { schema: 'SANKHYA' })
export class TcbcfgaplpnatEntity {
  @Column('smallint', { primary: true, name: 'CODEMP' })
  codemp: number;

  @Column('smallint', { primary: true, name: 'CODNATLP' })
  codnatlp: number;

  @Column('int', { primary: true, name: 'CODNAT' })
  codnat: number;

  @ManyToOne(
    () => TcbcfgaplpEntity,
    (tcbcfgaplpEntity) => tcbcfgaplpEntity.tcbcfgaplpnats,
    {
      onDelete: 'CASCADE',
    },
  )
  @JoinColumn([
    { name: 'CODEMP', referencedColumnName: 'codemp' },
    { name: 'CODNATLP', referencedColumnName: 'codnatlp' },
  ])
  tcbcfgaplp: TcbcfgaplpEntity;

  @ManyToOne(
    () => TcbitelpEntity,
    (tcbitelpEntity) => tcbitelpEntity.tcbcfgaplpnats,
  )
  @JoinColumn([{ name: 'CODNATLP', referencedColumnName: 'codnatlp' }])
  codnatlp2: TcbitelpEntity;
}
