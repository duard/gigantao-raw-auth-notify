import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TprwcpEntity } from './tPRWCP.entity';
import { TprcapEntity } from './tPRCAP.entity';
import { TgfproEntity } from './tGFPRO.entity';

@Index('PK_TPRWXP', ['codwcp', 'codprodpa', 'seq'], { unique: true })
@Entity('TPRWXP', { schema: 'SANKHYA' })
export class TprwxpEntity {
  @Column('int', { primary: true, name: 'CODWCP' })
  codwcp: number;

  @Column('int', { primary: true, name: 'CODPRODPA' })
  codprodpa: number;

  @Column('smallint', { primary: true, name: 'SEQ' })
  seq: number;

  @Column('varchar', { name: 'CONTROLEPA', length: 11, default: () => "' '" })
  controlepa: string;

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

  @Column('smallint', { name: 'TEMPOSETUP', default: () => '(0)' })
  temposetup: number;

  @Column('smallint', { name: 'TEMPOCLEANUP', default: () => '(0)' })
  tempocleanup: number;

  @ManyToOne(() => TprwcpEntity, (tprwcpEntity) => tprwcpEntity.tprwxps)
  @JoinColumn([{ name: 'CODWCP', referencedColumnName: 'codwcp' }])
  codwcp2: TprwcpEntity;

  @ManyToOne(() => TprcapEntity, (tprcapEntity) => tprcapEntity.tprwxps)
  @JoinColumn([{ name: 'CODCAP', referencedColumnName: 'codcap' }])
  codcap: TprcapEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tprwxps)
  @JoinColumn([{ name: 'CODPRODPA', referencedColumnName: 'codprod' }])
  codprodpa2: TgfproEntity;
}
