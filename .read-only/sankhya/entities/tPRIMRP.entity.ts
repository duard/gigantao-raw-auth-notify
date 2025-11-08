import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfproEntity } from './tGFPRO.entity';
import { TprmpsEntity } from './tPRMPS.entity';

@Index('PK_TPRIMRP', ['numps', 'codprodmp', 'controlemp', 'seqimrp'], {
  unique: true,
})
@Entity('TPRIMRP', { schema: 'SANKHYA' })
export class TprimrpEntity {
  @Column('int', { primary: true, name: 'NUMPS' })
  numps: number;

  @Column('int', { primary: true, name: 'CODPRODMP' })
  codprodmp: number;

  @Column('varchar', {
    primary: true,
    name: 'CONTROLEMP',
    length: 11,
    default: () => "' '",
  })
  controlemp: string;

  @Column('float', { name: 'QTDMRP', precision: 53, default: () => '(0)' })
  qtdmrp: number;

  @Column('float', {
    name: 'QTDPEDCOMPRA',
    precision: 53,
    default: () => '(0)',
  })
  qtdpedcompra: number;

  @Column('float', { name: 'QTDESTOQUE', precision: 53, default: () => '(0)' })
  qtdestoque: number;

  @Column('float', { name: 'QTDSALDO', precision: 53, default: () => '(0)' })
  qtdsaldo: number;

  @Column('varchar', { name: 'PRODINTERM', length: 1, default: () => "'N'" })
  prodinterm: string;

  @Column('int', { primary: true, name: 'SEQIMRP' })
  seqimrp: number;

  @Column('float', {
    name: 'QTDSALDOTOTAL',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  qtdsaldototal: number | null;

  @Column('float', {
    name: 'QTDCOT',
    nullable: true,
    precision: 53,
    default: () => '(0)',
  })
  qtdcot: number | null;

  @Column('datetime', { name: 'DATAPDC', nullable: true })
  datapdc: Date | null;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tprimrps)
  @JoinColumn([{ name: 'CODPRODMP', referencedColumnName: 'codprod' }])
  codprodmp2: TgfproEntity;

  @ManyToOne(() => TprmpsEntity, (tprmpsEntity) => tprmpsEntity.tprimrps)
  @JoinColumn([{ name: 'NUMPS', referencedColumnName: 'numps' }])
  numps2: TprmpsEntity;
}
