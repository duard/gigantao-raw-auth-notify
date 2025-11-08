import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TprcreEntity } from './tPRCRE.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TPRRXPA', ['nucpr'], { unique: true })
@Index('TPRCPR_I01', ['codcre', 'codprodpa', 'controlepa', 'codwcp'], {})
@Entity('TPRCPR', { schema: 'SANKHYA' })
export class TprcprEntity {
  @Column('int', { primary: true, name: 'NUCPR' })
  nucpr: number;

  @Column('int', { name: 'CODCRE' })
  codcre: number;

  @Column('int', { name: 'CODCAP' })
  codcap: number;

  @Column('int', { name: 'CODPRODPA' })
  codprodpa: number;

  @Column('varchar', { name: 'CONTROLEPA', length: 11 })
  controlepa: string;

  @Column('int', { name: 'CODWCP' })
  codwcp: number;

  @Column('float', {
    name: 'QTDCAPACIDADEMIN',
    precision: 53,
    default: () => '(0)',
  })
  qtdcapacidademin: number;

  @Column('float', {
    name: 'QTDCAPACIDADEPAD',
    precision: 53,
    default: () => '(0)',
  })
  qtdcapacidadepad: number;

  @Column('float', {
    name: 'QTDCAPACIDADEMAX',
    precision: 53,
    default: () => '(0)',
  })
  qtdcapacidademax: number;

  @Column('char', { name: 'TIPOCAPACIDADE', length: 1, default: () => "'E'" })
  tipocapacidade: string;

  @ManyToOne(() => TprcreEntity, (tprcreEntity) => tprcreEntity.tprcprs)
  @JoinColumn([{ name: 'CODCRE', referencedColumnName: 'codcre' }])
  codcre2: TprcreEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tprcprs)
  @JoinColumn([{ name: 'CODPRODPA', referencedColumnName: 'codprod' }])
  codprodpa2: TgfproEntity;
}
