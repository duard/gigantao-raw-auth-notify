import { Column, Entity, Index, JoinColumn, ManyToOne } from 'typeorm';
import { TgfiteEntity } from './tGFITE.entity';
import { TgasafEntity } from './tGASAF.entity';
import { TsiusuEntity } from './tSIUSU.entity';
import { TcsconEntity } from './tCSCON.entity';
import { TgfparEntity } from './tGFPAR.entity';
import { TgagtEntity } from './tGAGT.entity';

@Index('PK_TGAGTM', ['nutrs'], { unique: true })
@Index('TGAGTM_GRUPO', ['grupotransg', 'codsaf', 'codparc'], {})
@Index('TGAGTM_ICODPARC', ['codparc', 'grupotransg', 'codsaf'], {})
@Index('TGAGTM_INUNOTA', ['nunota', 'sequencia'], {})
@Entity('TGAGTM', { schema: 'SANKHYA' })
export class TgagtmEntity {
  @Column('int', { primary: true, name: 'NUTRS' })
  nutrs: number;

  @Column('int', { name: 'GRUPOTRANSG' })
  grupotransg: number;

  @Column('int', { name: 'CODSAF' })
  codsaf: number;

  @Column('int', { name: 'CODPARC' })
  codparc: number;

  @Column('datetime', { name: 'DTALTER' })
  dtalter: Date;

  @Column('smallint', { name: 'SINAL' })
  sinal: number;

  @Column('char', { name: 'DECLARADO', length: 1, default: () => "'S'" })
  declarado: string;

  @Column('char', { name: 'DIGITADO', length: 1, default: () => "'N'" })
  digitado: string;

  @Column('int', { name: 'NUNOTA', nullable: true })
  nunota: number | null;

  @Column('smallint', { name: 'SEQUENCIA', nullable: true })
  sequencia: number | null;

  @Column('datetime', { name: 'DTNEG' })
  dtneg: Date;

  @Column('int', { name: 'NUMNOTA' })
  numnota: number;

  @Column('float', { name: 'QTDNEG', precision: 53 })
  qtdneg: number;

  @Column('float', { name: 'QTDCALC', precision: 53 })
  qtdcalc: number;

  @Column('float', { name: 'QTDROYALT', precision: 53 })
  qtdroyalt: number;

  @Column('datetime', { name: 'DTVAL', nullable: true })
  dtval: Date | null;

  @ManyToOne(() => TgfiteEntity, (tgfiteEntity) => tgfiteEntity.tgagtms)
  @JoinColumn([
    { name: 'NUNOTA', referencedColumnName: 'nunota' },
    { name: 'SEQUENCIA', referencedColumnName: 'sequencia' },
  ])
  tgfite: TgfiteEntity;

  @ManyToOne(() => TgasafEntity, (tgasafEntity) => tgasafEntity.tgagtms)
  @JoinColumn([{ name: 'CODSAF', referencedColumnName: 'codsaf' }])
  codsaf2: TgasafEntity;

  @ManyToOne(() => TsiusuEntity, (tsiusuEntity) => tsiusuEntity.tgagtms)
  @JoinColumn([{ name: 'CODUSU', referencedColumnName: 'codusu' }])
  codusu: TsiusuEntity;

  @ManyToOne(() => TcsconEntity, (tcsconEntity) => tcsconEntity.tgagtms)
  @JoinColumn([{ name: 'NUMCONTRATO', referencedColumnName: 'numcontrato' }])
  numcontrato: TcsconEntity;

  @ManyToOne(() => TgfparEntity, (tgfparEntity) => tgfparEntity.tgagtms)
  @JoinColumn([{ name: 'CODPARC', referencedColumnName: 'codparc' }])
  codparc2: TgfparEntity;

  @ManyToOne(() => TgagtEntity, (tgagtEntity) => tgagtEntity.tgagtms)
  @JoinColumn([{ name: 'GRUPOTRANSG', referencedColumnName: 'grupotransg' }])
  grupotransg2: TgagtEntity;
}
