import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TsicidEntity } from './tSICID.entity';
import { TsipaiEntity } from './tSIPAI.entity';
import { TsiufsEntity } from './tSIUFS.entity';

@Index('PK_TSIFER', ['dtferiado', 'codpais', 'coduf', 'codcid'], {
  unique: true,
})
@Entity('TSIFER', { schema: 'SANKHYA' })
export class TsiferEntity {
  @Column('datetime', { primary: true, name: 'DTFERIADO' })
  dtferiado: Date;

  @Column('char', { name: 'DESCRFERIADO', length: 40 })
  descrferiado: string;

  @Column('char', { name: 'OBRIGATORIO', length: 1, default: () => "'S'" })
  obrigatorio: string;

  @Column('char', { name: 'NACIONAL', length: 1 })
  nacional: string;

  @Column('smallint', { primary: true, name: 'CODPAIS', default: () => '(0)' })
  codpais: number;

  @Column('smallint', { primary: true, name: 'CODUF', default: () => '(0)' })
  coduf: number;

  @Column('int', { primary: true, name: 'CODCID', default: () => '(0)' })
  codcid: number;

  @Column('char', { name: 'RECORRENTE', length: 1, default: () => "'N'" })
  recorrente: string;

  @Column('char', { name: 'USANOPONTO', length: 1, default: () => "'S'" })
  usanoponto: string;

  @ManyToOne(() => TsicidEntity, (tsicidEntity) => tsicidEntity.tsifers)
  @JoinColumn([{ name: 'CODCID', referencedColumnName: 'codcid' }])
  codc: TsicidEntity;

  @ManyToOne(() => TsipaiEntity, (tsipaiEntity) => tsipaiEntity.tsifers)
  @JoinColumn([{ name: 'CODPAIS', referencedColumnName: 'codpais' }])
  codpais2: TsipaiEntity;

  @ManyToOne(() => TsiufsEntity, (tsiufsEntity) => tsiufsEntity.tsifers)
  @JoinColumn([{ name: 'CODUF', referencedColumnName: 'coduf' }])
  coduf2: TsiufsEntity;
}
