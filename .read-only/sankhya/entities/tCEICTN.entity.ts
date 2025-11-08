import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfparEntity } from './tGFPAR.entity';
import { TgftitEntity } from './tGFTIT.entity';
import { TgfnatEntity } from './tGFNAT.entity';

@Index('PK_TCEICTN', ['siglaict', 'sequencia'], { unique: true })
@Index('TCEICTN_AK', ['siglaict', 'codnat', 'grupo'], { unique: true })
@Entity('TCEICTN', { schema: 'SANKHYA' })
export class TceictnEntity {
  @Column('varchar', { primary: true, name: 'SIGLAICT', length: 3 })
  siglaict: string;

  @Column('smallint', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'CODNAT' })
  codnat: number;

  @Column('varchar', { name: 'OPCIONAL', length: 1, default: () => "'S'" })
  opcional: string;

  @Column('smallint', { name: 'RECDESP', default: () => '(1)' })
  recdesp: number;

  @Column('varchar', { name: 'PROVISAO', length: 1, default: () => "'N'" })
  provisao: string;

  @Column('varchar', { name: 'CAMPOCAB', nullable: true, length: 40 })
  campocab: string | null;

  @Column('varchar', { name: 'GRUPO', nullable: true, length: 40 })
  grupo: string | null;

  @Column('smallint', { name: 'CODTIPOPER', nullable: true })
  codtipoper: number | null;

  @Column('smallint', { name: 'CODUSU', default: () => '(0)' })
  codusu: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('int', { name: 'SINAL', default: () => '(1)' })
  sinal: number;

  @Column('char', { name: 'GERAFIN', length: 1, default: () => "'S'" })
  gerafin: string;

  @Column('int', { name: 'CODCTABCOINT', nullable: true })
  codctabcoint: number | null;

  @Column('char', { name: 'TIPVLRPED', length: 1, default: () => "'P'" })
  tipvlrped: string;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tceictns)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc: TgfparEntity;

  @ManyToOne(() => TgftitEntity, (tgftitEntity) => tgftitEntity.tceictns)
  @JoinColumn([{ name: 'CODTIPTIT', referencedColumnName: 'codtiptit' }])
  codtiptit: TgftitEntity;

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tceictns)
  @JoinColumn([{ name: 'CODNAT', referencedColumnName: 'codnat' }])
  codnat2: TgfnatEntity;
}
