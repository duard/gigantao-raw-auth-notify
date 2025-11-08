import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgasafEntity } from './tGASAF.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TgftitEntity } from './tGFTIT.entity';
import { TgaculEntity } from './tGACUL.entity';
import { TgfproEntity } from './tGFPRO.entity';
import { TgfnatEntity } from './tGFNAT.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TsicusEntity } from './tSICUS.entity';

@Index('PK_TGAREC', ['codparc', 'codsaf', 'seqplanej', 'sequencia'], {
  unique: true,
})
@Index('TGAREC_IPARC', ['codparcterc'], {})
@Entity('TGAREC', { schema: 'SANKHYA' })
export class TgarecEntity {
  @Column('int', { primary: true, name: 'CODPARC' })
  codparc: number;

  @Column('int', { primary: true, name: 'CODSAF' })
  codsaf: number;

  @Column('int', { primary: true, name: 'SEQUENCIA' })
  sequencia: number;

  @Column('int', { name: 'CODPARCTERC', default: () => '(0)' })
  codparcterc: number;

  @Column('datetime', { name: 'DTVENC' })
  dtvenc: Date;

  @Column('float', { name: 'VALOR', precision: 53 })
  valor: number;

  @Column('char', { name: 'ORIGEM', length: 1 })
  origem: string;

  @Column('char', { name: 'GERARFINANC', length: 1, default: () => "'N'" })
  gerarfinanc: string;

  @Column('text', { name: 'OBS', nullable: true })
  obs: string | null;

  @Column('int', { name: 'CODAREA', default: () => '(0)' })
  codarea: number;

  @Column('datetime', { name: 'DTALTER', default: () => 'getdate()' })
  dtalter: Date;

  @Column('smallint', {
    primary: true,
    name: 'SEQPLANEJ',
    default: () => '(0)',
  })
  seqplanej: number;

  @ManyToOne(() => TgasafEntity, (tgasafEntity) => tgasafEntity.tgarecs)
  @JoinColumn([{ name: 'CODSAF', referencedColumnName: 'codsaf' }])
  codsaf2: TgasafEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgarecs)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TgftitEntity, (tgftitEntity) => tgftitEntity.tgarecs)
  @JoinColumn([{ name: 'CODTIPTIT', referencedColumnName: 'codtiptit' }])
  codtiptit: TgftitEntity;

  @ManyToOne(() => TgaculEntity, (tgaculEntity) => tgaculEntity.tgarecs)
  @JoinColumn([
    { name: 'CODPARC', referencedColumnName: 'codparc' },
    { name: 'CODSAF', referencedColumnName: 'codsaf' },
    { name: 'SEQPLANEJ', referencedColumnName: 'seqplanej' },
  ])
  tgacul: TgaculEntity;

  @ManyToOne(() => TgfproEntity, (tgfproEntity) => tgfproEntity.tgarecs)
  @JoinColumn([{ name: 'CODPROD', referencedColumnName: 'codprod' }])
  codprod: TgfproEntity;

  @ManyToOne(() => TgfnatEntity, (tgfnatEntity) => tgfnatEntity.tgarecs)
  @JoinColumn([{ name: 'CODNAT', referencedColumnName: 'codnat' }])
  codnat: TgfnatEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgarecs)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgarecs2)
  @JoinColumn([{ name: 'CODPARCTERC', referencedColumnName: 'codparc' }])
  codparcterc2: TgfparEntity;

  @ManyToOne(() => TsicusEntity, (tsicusEntity) => tsicusEntity.tgarecs)
  @JoinColumn([{ name: 'CODCENCUS', referencedColumnName: 'codcencus' }])
  codcencus: TsicusEntity;
}
